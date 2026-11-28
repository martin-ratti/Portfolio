import type { APIRoute } from "astro";
import { buildLlmsIndex } from "../utils/llms";

export const prerender = true;

export const GET: APIRoute = () => {
    return new Response(buildLlmsIndex(), {
        status: 200,
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
        },
    });
};
