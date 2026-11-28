import type { APIRoute } from "astro";
import rawLlmsTxt from "../../llms.txt?raw";

export const prerender = true;

export const GET: APIRoute = () => {
    return new Response(rawLlmsTxt, {
        status: 200,
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
        },
    });
};
