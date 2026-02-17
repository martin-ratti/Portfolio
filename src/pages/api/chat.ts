export const prerender = false;

import type { APIRoute } from 'astro';
import fs from 'node:fs/promises';
import path from 'node:path';

const OPENROUTER_API_KEY = import.meta.env.OPENROUTER_API_KEY;
const SITE_URL = import.meta.env.SITE || 'https://martinratti.com.ar';
const SITE_NAME = 'Martin Ratti Portfolio';

export const POST: APIRoute = async ({ request }) => {
    if (!OPENROUTER_API_KEY) {
        return new Response(JSON.stringify({
            error: 'OpenRouter API Key not configured',
            message: 'Please add OPENROUTER_API_KEY to your .env file'
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    try {
        const body = await request.json();
        const { messages } = body;

        // Read llms.txt content
        const llmsTxtPath = path.resolve(process.cwd(), 'llms.txt');
        let context = '';
        try {
            context = await fs.readFile(llmsTxtPath, 'utf-8');
        } catch (e) {
            console.error('Error reading llms.txt:', e);
            context = 'Context unavailable due to internal error.';
        }

        const systemPrompt = `You are Martín AI, a virtual assistant for Martín Ratti's portfolio.
Your goal is to chat about Martín's skills and projects in a professional yet approachable way.

- **LANGUAGE - CRITICAL:** 
    - **ALWAYS reply in the SAME language as the user.** (If the user speaks Spanish, you MUST speak Spanish. If English, speak English).
    - **Default to Spanish** if the language is unclear or mixed, as Martín is from Argentina.

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
        const models = [
            "meta-llama/llama-3.2-3b-instruct:free",
            "google/gemma-3-4b-it:free",
            "stepfun/step-3.5-flash:free",
            "liquid/lfm-2.5-1.2b-instruct:free"
        ];

        let lastError = null;
        let successDat = null;

        const conversation = [...messages];
        if (conversation.length > 0) {
            if (!conversation[0].content.startsWith("You are Martín AI")) {
                conversation[0].content = `${systemPrompt} \n\nUser Question: ${conversation[0].content} `;
            }
        } else {
            conversation.push({ role: 'user', content: systemPrompt });
        }

        for (const model of models) {
            try {
                console.log(`Trying model: ${model} `);
                const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${OPENROUTER_API_KEY} `,
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
                    successDat = data;
                    break;
                } else {
                    console.error(`Error with model ${model}: `, JSON.stringify(data.error || data));
                    lastError = data.error || { message: "Unknown error" };
                }
            } catch (err) {
                console.error(`Network error with model ${model}: `, err);
                lastError = { message: "Network error" };
            }
        }

        if (successDat) {
            return new Response(JSON.stringify(successDat), {
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
        console.error('Error in chat API:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
