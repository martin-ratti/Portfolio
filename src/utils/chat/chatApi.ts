export interface ChatMessage {
    role: "user" | "assistant";
    content: string;
}

export interface ChatResponse {
    error?: string;
    errorCode?: "RATE_LIMIT" | "TIMEOUT" | "NETWORK" | "INVALID";
    aborted?: boolean;
    reply?: string;
}

const CLIENT_TIMEOUT_MS = 25_000;

export async function sendChatMessage(
    messages: ChatMessage[],
    currentLang: string,
    invalidResponseError = currentLang === "en"
        ? "Invalid response format from server."
        : "Formato de respuesta inválido del servidor.",
    callerSignal?: AbortSignal
): Promise<ChatResponse> {
    if (callerSignal?.aborted) {
        return { aborted: true };
    }

    const requestController = new AbortController();
    let timedOut = false;

    const onCallerAbort = () => requestController.abort();
    callerSignal?.addEventListener("abort", onCallerAbort, { once: true });

    const timeoutId = setTimeout(() => {
        timedOut = true;
        requestController.abort();
    }, CLIENT_TIMEOUT_MS);

    try {
        const response = await fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ messages, currentLang }),
            signal: requestController.signal,
        });

        if (response.status === 429) {
            return { error: "Rate limit", errorCode: "RATE_LIMIT" };
        }

        let data: {
            error?: string | { message?: string };
            code?: string;
            choices?: Array<{ message?: { content?: string } }>;
        } | null = null;

        try {
            data = await response.json();
        } catch {
            return { error: "Network error", errorCode: "NETWORK" };
        }

        if (!data) {
            return { error: invalidResponseError, errorCode: "INVALID" };
        }

        if (data.code === "RATE_LIMIT") {
            return { error: "Rate limit", errorCode: "RATE_LIMIT" };
        }

        if (data.error) {
            let errorMessage = "Unknown error";
            if (typeof data.error === "string") {
                errorMessage = data.error;
            } else if (data.error.message) {
                errorMessage = data.error.message;
            } else {
                errorMessage = JSON.stringify(data.error);
            }
            return { error: errorMessage };
        }

        const reply = data.choices?.[0]?.message?.content;
        if (typeof reply === "string" && reply.trim().length > 0) {
            return { reply };
        }

        return { error: invalidResponseError, errorCode: "INVALID" };
    } catch {
        if (callerSignal?.aborted) {
            return { aborted: true };
        }
        if (timedOut) {
            return { error: "Timeout", errorCode: "TIMEOUT" };
        }
        return { error: "Network error", errorCode: "NETWORK" };
    } finally {
        clearTimeout(timeoutId);
        callerSignal?.removeEventListener("abort", onCallerAbort);
    }
}
