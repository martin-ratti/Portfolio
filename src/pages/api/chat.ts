export const prerender = false;

import type { APIRoute } from 'astro';
import fs from 'node:fs/promises';
import path from 'node:path';

const OPENROUTER_API_KEY = import.meta.env.OPENROUTER_API_KEY;
const SITE_URL = import.meta.env.SITE || 'https://martinratti.com.ar';
const SITE_NAME = 'Martin Ratti Portfolio';

const ALLOWED_ORIGINS = new Set([
    'https://martinratti.com.ar',
    'https://www.martinratti.com.ar',
    'https://martin-ratti-portfolio.vercel.app',
    'http://localhost:4321',
    'http://localhost:3000',
]);

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 10;
const ipHits = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
    const now = Date.now();
    const entry = ipHits.get(ip);
    if (!entry || entry.resetAt < now) {
        ipHits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
        return true;
    }
    if (entry.count >= RATE_LIMIT_MAX) return false;
    entry.count++;
    return true;
}

let cachedContext: string | null = null;
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
    if (origin && !ALLOWED_ORIGINS.has(origin)) {
        return new Response(JSON.stringify({ error: 'Forbidden origin' }), {
            status: 403,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    const ip = clientAddress
        || request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
        || 'unknown';
    if (!checkRateLimit(ip)) {
        return new Response(JSON.stringify({ error: 'Rate limit exceeded. Try again in a minute.' }), {
            status: 429,
            headers: { 'Content-Type': 'application/json', 'Retry-After': '60' }
        });
    }

    try {
        const body = await request.json();
        const { messages, currentLang } = body;

        if (!Array.isArray(messages) || messages.length === 0) {
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

- **STRICT SCOPE:** You are ONLY allowed to discuss Martín Ratti, his specific projects (PCFIX, TicketApp, EstacionAR, etc.), and his documented tech stack (Astro, React, .NET, Java, Python).
    - If the user asks about ANYTHING else (world events, cooking, philosophy, hypothetical scenarios, or other technologies like Go/Rust), **politely refuse to answer**.
    - **Refusal Guidance:** Simply state that you can only answer questions about Martín Ratti and his professional portfolio. Do not invent answers.
    - Do NOT entertain metaphors (e.g., "OCR cake").
- **Accuracy - CRITICAL:**
    - **FORBIDDEN:** Martín has NEVER used **Rust**, **Go (Golang)**, **Ruby**, or **PHP**. If asked, say he does not use them.
    - NEVER invent technologies.
    - **Project Integrity:** Do NOT mix technologies between projects. (e.g., Do NOT say "Extractor-OCR" uses Blazor). Check the context strictly.
    - **Scope:** You are a portfolio assistant. You only know about Martín's work.
- **Stack Coverage:** When asked about skills, mention the full range: **Web** (Astro/React/Node), **Desktop** (.NET/Python), and **Backend/Data** (Java/.NET/SQL).
- **GitHub:** If asked, share his profile: https://github.com/martin-ratti

Context about Martín:
${context}
`;

        let lastError: unknown = null;
        let successData: unknown = null;

        const conversation = [...messages];
        if (conversation.length > 0) {
            if (!conversation[0].content.startsWith("You are Martín AI")) {
                conversation[0].content = `${systemPrompt}\n\nUser Question: ${conversation[0].content}`;
            }
        } else {
            conversation.push({ role: 'user', content: systemPrompt });
        }

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
                    })
                });

                const data = await response.json();

                if (response.ok && !data.error) {
                    successData = data;
                    break;
                } else {
                    lastError = data.error || { message: "Unknown error" };
                }
            } catch (err) {
                lastError = { message: "Network error" };
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
}
