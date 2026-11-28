export const prerender = false;

import type { APIRoute } from 'astro';
import fs from 'node:fs/promises';
import path from 'node:path';
import rawLlmsTxt from '../../../llms.txt?raw';

const OPENROUTER_API_KEY = import.meta.env.OPENROUTER_API_KEY;
const SITE_URL = import.meta.env.SITE || 'https://martinratti.com.ar';
const SITE_NAME = 'Martin Ratti Portfolio';

const ALLOWED_ORIGINS = new Set([
    'https://martinratti.com.ar',
    'https://www.martinratti.com.ar',
    'https://martin-ratti-portfolio.vercel.app',
    'http://localhost:4321',
    'http://localhost:3000',
    'http://127.0.0.1:4321',
    'http://127.0.0.1:3000',
]);

function isOriginAllowed(origin: string, requestUrl: string): boolean {
    if (!origin) {
        if (import.meta.env.DEV) {
            try {
                const { hostname } = new URL(requestUrl);
                return hostname === 'localhost' || hostname === '127.0.0.1';
            } catch {
                return false;
            }
        }
        return false;
    }
    if (ALLOWED_ORIGINS.has(origin)) return true;
    try {
        const { hostname, protocol } = new URL(origin);
        if ((protocol === 'http:' || protocol === 'https:') && (hostname === 'localhost' || hostname === '127.0.0.1')) {
            return true;
        }
        if (protocol === 'https:' && /^martin-ratti-portfolio(?:-[a-z0-9-]+)?\.vercel\.app$/i.test(hostname)) {
            return true;
        }
    } catch {
        return false;
    }
    return false;
}

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 10;
const PRUNE_INTERVAL_MS = 60_000;
const ipHits = new Map<string, { count: number; resetAt: number }>();
let lastPrunedAt = Date.now();

function pruneExpiredIpHits(now: number): void {
    if (now - lastPrunedAt < PRUNE_INTERVAL_MS && ipHits.size < 500) return;
    lastPrunedAt = now;
    for (const [key, entry] of ipHits.entries()) {
        if (entry.resetAt <= now) {
            ipHits.delete(key);
        }
    }
}

function checkRateLimit(ip: string): boolean {
    const now = Date.now();
    pruneExpiredIpHits(now);
    const entry = ipHits.get(ip);
    if (!entry || entry.resetAt < now) {
        ipHits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
        return true;
    }
    if (entry.count >= RATE_LIMIT_MAX) return false;
    entry.count++;
    return true;
}

let cachedContext: string | null = typeof rawLlmsTxt === 'string' && rawLlmsTxt.trim().length > 0
    ? rawLlmsTxt
    : null;

async function getContext(): Promise<string> {
    if (cachedContext !== null) return cachedContext;
    try {
        const llmsTxtPath = path.resolve(process.cwd(), 'llms.txt');
        cachedContext = await fs.readFile(llmsTxtPath, 'utf-8');
    } catch {
        cachedContext = 'Context unavailable due to internal error.';
    }
    return cachedContext;
}

const MAX_MESSAGES = 20;
const MAX_MESSAGE_LENGTH = 1500;
const MODEL_TIMEOUT_MS = 7_500;

interface ValidatedMessage {
    role: 'user' | 'assistant';
    content: string;
}

function validateMessages(rawMessages: unknown): ValidatedMessage[] | null {
    if (!Array.isArray(rawMessages) || rawMessages.length === 0 || rawMessages.length > MAX_MESSAGES) {
        return null;
    }
    const sanitized: ValidatedMessage[] = [];
    for (const item of rawMessages) {
        if (!item || typeof item !== 'object') return null;
        const { role, content } = item as { role?: unknown; content?: unknown };
        // Explicitly reject client-supplied 'system' or any role other than 'user' | 'assistant'
        if (role !== 'user' && role !== 'assistant') return null;
        if (typeof content !== 'string') return null;
        const trimmed = content.trim();
        if (trimmed.length === 0 || trimmed.length > MAX_MESSAGE_LENGTH) return null;
        sanitized.push({ role, content: trimmed });
    }
    return sanitized;
}

const models = [
    "meta-llama/llama-3.2-3b-instruct:free",
    "google/gemma-3-4b-it:free",
    "stepfun/step-3.5-flash:free",
    "liquid/lfm-2.5-1.2b-instruct:free"
];

export const POST: APIRoute = async ({ request, clientAddress }) => {
    if (!OPENROUTER_API_KEY) {
        return new Response(JSON.stringify({
            error: 'OpenRouter API Key not configured',
            message: 'Please add OPENROUTER_API_KEY to your .env file'
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    const origin = request.headers.get('origin') || '';
    if (!isOriginAllowed(origin, request.url)) {
        return new Response(JSON.stringify({ error: 'Forbidden origin' }), {
            status: 403,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    const ip = clientAddress
        || request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
        || 'unknown';
    if (!checkRateLimit(ip)) {
        return new Response(JSON.stringify({ error: 'Rate limit exceeded. Try again in a minute.', code: 'RATE_LIMIT' }), {
            status: 429,
            headers: { 'Content-Type': 'application/json', 'Retry-After': '60' }
        });
    }

    try {
        const body = await request.json();
        const { messages: rawMessages, currentLang } = body ?? {};

        const validatedMessages = validateMessages(rawMessages);
        if (!validatedMessages) {
            return new Response(JSON.stringify({ error: 'Invalid messages payload' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const langInstrucion = currentLang === 'en'
            ? 'The user is navigating the site in English. YOU MUST answer exclusively in English.'
            : 'El usuario está navegando el sitio en Español. DEBES responder exclusivamente en Español.';

        const context = await getContext();

        const systemPrompt = `You are Martín AI, a virtual assistant for Martín Ratti's portfolio.
Your goal is to chat about Martín's skills and projects in a professional yet approachable way.

- **LANGUAGE - STRICTLY FORCED:**
    - **${langInstrucion}**
    - You must completely ignore any previous rule about defaulting to Spanish if the user language is different from the explicitly stated here.

- **STRICT SCOPE:** You are ONLY allowed to discuss Martín Ratti, his specific projects (PCFIX, TicketApp, Tracker UTN Sistemas, TimeLens, etc.), and his documented tech stack (Astro, React, .NET, Java, Python, Kotlin/Android).
    - If the user asks about ANYTHING else (world events, cooking, philosophy, hypothetical scenarios, or other technologies like Go/Rust), **politely refuse to answer**.
    - **Refusal Guidance:** Simply state that you can only answer questions about Martín Ratti and his professional portfolio. Do not invent answers.
    - Do NOT entertain metaphors (e.g., "OCR cake").
- **Accuracy - CRITICAL:**
    - **FORBIDDEN:** Martín has NEVER used **Rust**, **Go (Golang)**, **Ruby**, or **PHP**. If asked, say he does not use them.
    - NEVER invent technologies.
    - **Project Integrity:** Do NOT mix technologies between projects. (e.g., Do NOT say "Extractor-OCR" uses Blazor). Check the context strictly.
    - **Scope:** You are a portfolio assistant. You only know about Martín's work.
- **Stack Coverage:** When asked about skills, mention the full range: **Web** (Astro/React/Node), **Mobile** (Kotlin/Android/Jetpack Compose), **Desktop** (.NET/Python), and **Backend/Data** (Java/.NET/SQL).
- **GitHub:** If asked, share his profile: https://github.com/martin-ratti

Context about Martín:
${context}
`;

        let lastError: unknown = null;
        let successData: unknown = null;

        // Unconditionally prepend the server system instructions to the first message
        const conversation = validatedMessages.map((msg, idx) =>
            idx === 0
                ? { role: msg.role, content: `${systemPrompt}\n\nUser Question: ${msg.content}` }
                : { role: msg.role, content: msg.content }
        );

        for (const model of models) {
            try {
                const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
                        "HTTP-Referer": SITE_URL,
                        "X-Title": SITE_NAME,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "model": model,
                        "messages": conversation
                    }),
                    signal: AbortSignal.timeout(MODEL_TIMEOUT_MS),
                });

                const data = await response.json();

                if (response.ok && !data.error) {
                    successData = data;
                    break;
                } else {
                    lastError = data.error || { message: "Unknown error" };
                }
            } catch (err) {
                const isTimeout = err instanceof DOMException && err.name === "TimeoutError";
                lastError = { message: isTimeout ? "Model timeout" : "Network error" };
            }
        }

        if (successData) {
            return new Response(JSON.stringify(successData), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        return new Response(JSON.stringify({
            error: lastError || 'All models failed',
            details: 'Tried: ' + models.join(', ')
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};
