import type { APIRoute } from "astro";
import { buildLlmsFullContext } from "../utils/llms";

export const prerender = true;

export const GET: APIRoute = () => {
    return new Response(buildLlmsFullContext(), {
        status: 200,
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
        },
    });
};
