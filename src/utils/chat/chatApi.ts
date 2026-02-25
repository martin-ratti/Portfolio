export interface ChatMessage {
    role: "user" | "assistant";
    content: string;
}

export interface ChatResponse {
    error?: string;
    reply?: string;
}

export async function sendChatMessage(messages: ChatMessage[], currentLang: string): Promise<ChatResponse> {
    try {
        const response = await fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ messages, currentLang }),
        });

        const data = await response.json();

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
        } else if (data.choices && data.choices[0]) {
            return { reply: data.choices[0].message.content };
        } else {
            return { error: "Formato de respuesta inválido del servidor." };
        }
    } catch (err) {
        return { error: "Network error" };
    }
}
