import { marked } from "marked";

const BLOCKED_TAGS = ["script", "iframe", "object", "embed", "form", "style", "svg", "math", "base", "meta", "link"];

export function sanitizeAssistantHtml(rawHtml: string): string {
    let cleaned = rawHtml;

    // 1. Remove dangerous tags and their content (or self-closing variants)
    for (const tag of BLOCKED_TAGS) {
        const pairRegex = new RegExp(`<${tag}\\b[^>]*>[\\s\\S]*?<\\/${tag}>`, "gi");
        const singleRegex = new RegExp(`<${tag}\\b[^>]*\\/?>`, "gi");
        cleaned = cleaned.replace(pairRegex, "").replace(singleRegex, "");
    }

    // 2. Strip inline event handlers (on*)
    cleaned = cleaned.replace(/\s+on[a-z]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "");

    // 3. Neutralize javascript:, vbscript:, and data: protocols on href/src/xlink:href/action/formaction
    cleaned = cleaned.replace(
        /\s+(href|src|xlink:href|action|formaction)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/gi,
        (match, attr, dVal, sVal, uVal) => {
            const val = (dVal ?? sVal ?? uVal ?? "").trim();
            const normalized = val.replace(/[\s\x00-\x1f]+/g, "").toLowerCase();
            if (
                normalized.startsWith("javascript:") ||
                normalized.startsWith("vbscript:") ||
                normalized.startsWith("data:")
            ) {
                return ` ${attr}="#"`;
            }
            return match;
        }
    );

    // 4. Ensure all <a> tags have target="_blank" and rel="noopener noreferrer"
    cleaned = cleaned.replace(/<a\b([^>]*)>/gi, (_match, attrs: string) => {
        let updatedAttrs = attrs
            .replace(/\s+target\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "")
            .replace(/\s+rel\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "");
        return `<a${updatedAttrs} target="_blank" rel="noopener noreferrer">`;
    });

    // If running in browser, also pass through DOMParser for strict attribute & link verification
    if (typeof DOMParser !== "undefined") {
        const parser = new DOMParser();
        const doc = parser.parseFromString(cleaned, "text/html");

        doc.querySelectorAll(BLOCKED_TAGS.join(",")).forEach((el) => el.remove());

        doc.body.querySelectorAll("*").forEach((el) => {
            for (const attr of Array.from(el.attributes)) {
                const name = attr.name.toLowerCase();
                const value = attr.value.replace(/[\s\x00-\x1f]+/g, "").toLowerCase();
                if (name.startsWith("on")) {
                    el.removeAttribute(attr.name);
                } else if (
                    (name === "href" || name === "src" || name === "xlink:href" || name === "action" || name === "formaction") &&
                    (value.startsWith("javascript:") || value.startsWith("vbscript:") || value.startsWith("data:"))
                ) {
                    el.setAttribute(attr.name, "#");
                }
            }
            if (el.tagName.toLowerCase() === "a") {
                el.setAttribute("target", "_blank");
                el.setAttribute("rel", "noopener noreferrer");
            }
        });

        return doc.body.innerHTML;
    }

    return cleaned;
}

export function renderAssistantMarkdown(text: string): string {
    const parsed = marked.parse(text, { async: false }) as string;
    return sanitizeAssistantHtml(parsed);
}

let focusTrapElement: HTMLElement | null = null;
let firstFocusableElement: HTMLElement | null = null;
let lastFocusableElement: HTMLElement | null = null;
let toggleButtonElement: HTMLElement | null = null;

export function setupFocusTrap(container: HTMLElement, toggleBtn: HTMLElement) {
    focusTrapElement = container;
    toggleButtonElement = toggleBtn;

    const focusableElements = container.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (focusableElements.length > 0) {
        firstFocusableElement = focusableElements[0] as HTMLElement;
        lastFocusableElement = focusableElements[focusableElements.length - 1] as HTMLElement;
    }

    container.removeEventListener('keydown', handleFocusTrap);
    container.addEventListener('keydown', handleFocusTrap);
}

export function releaseFocusTrap(restoreFocus = true) {
    if (focusTrapElement) {
        focusTrapElement.removeEventListener('keydown', handleFocusTrap);
    }
    if (restoreFocus && toggleButtonElement) {
        toggleButtonElement.focus();
    }
}

function handleFocusTrap(e: KeyboardEvent) {
    if (e.key === 'Tab') {
        if (focusTrapElement) {
            const focusableElements = focusTrapElement.querySelectorAll(
                'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
            );
            if (focusableElements.length > 0) {
                firstFocusableElement = focusableElements[0] as HTMLElement;
                lastFocusableElement = focusableElements[focusableElements.length - 1] as HTMLElement;
            }
        }

        if (e.shiftKey) { // Shift + Tab
            if (document.activeElement === firstFocusableElement) {
                lastFocusableElement?.focus();
                e.preventDefault();
            }
        } else { // Tab
            if (document.activeElement === lastFocusableElement) {
                firstFocusableElement?.focus();
                e.preventDefault();
            }
        }
    }
}

const ERROR_ICON_SVG = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block mr-1.5 text-red-500 align-text-bottom shrink-0" aria-hidden="true"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>';

export function addMessageToDOM(
    container: HTMLElement | null,
    role: "user" | "assistant",
    text: string,
    isError = false
) {
    if (!container) return;

    const div = document.createElement("div");
    div.className = `flex gap-3 ${role === "user" ? "justify-end" : ""}`;

    const avatar = role === "assistant"
        ? `<div class="w-8 h-8 rounded-full bg-linear-to-tr from-violet-500 to-fuchsia-500 shrink-0 flex items-center justify-center text-white text-xs font-bold" aria-hidden="true">AI</div>`
        : "";

    const rawContent = role === "assistant"
        ? renderAssistantMarkdown(text)
        : text.replace(/[&<>"']/g, (m) => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        }[m] || m));

    const content = role === "assistant" && isError
        ? `<div class="flex items-start gap-1.5">${ERROR_ICON_SVG}<div class="min-w-0">${rawContent}</div></div>`
        : rawContent;

    const bubbleColorClass = role === "user"
        ? "bg-violet-600 text-white"
        : isError
            ? "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-red-500/30 dark:border-red-400/30"
            : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-black/5 dark:border-white/10";

    const bubble = `
        <div class="${bubbleColorClass} p-3 rounded-2xl ${role === "user" ? "rounded-tr-none" : "rounded-tl-none"} shadow-sm max-w-[85%] text-sm prose cursor-text select-text">
        ${content}
        </div>
    `;

    div.innerHTML = role === "assistant" ? avatar + bubble : bubble;
    container.appendChild(div);
    scrollToBottom(container);
}

export function showTypingIndicator(container: HTMLElement | null) {
    if (!container) return;
    const div = document.createElement("div");
    div.id = "typing-indicator";
    div.className = "flex gap-3";
    div.innerHTML = `
        <div class="w-8 h-8 rounded-full bg-linear-to-tr from-violet-500 to-fuchsia-500 shrink-0 flex items-center justify-center text-white text-xs font-bold" aria-hidden="true">AI</div>
        <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl rounded-tl-none border border-black/5 dark:border-white/10 shadow-sm flex gap-1 items-center h-[46px]">
        <span class="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
        <span class="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 100ms;"></span>
        <span class="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 200ms;"></span>
        </div>
    `;
    container.appendChild(div);
    scrollToBottom(container);
}

export function hideTypingIndicator() {
    const indicator = document.getElementById("typing-indicator");
    indicator?.remove();
}

export function scrollToBottom(container: HTMLElement) {
    const reduceMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    container.scrollTo({
        top: container.scrollHeight,
        behavior: reduceMotion ? "auto" : "smooth"
    });
}
