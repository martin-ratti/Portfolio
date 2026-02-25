import { marked } from "marked";

// Manejo del Foco
let focusTrapElement: HTMLElement | null = null;
let firstFocusableElement: HTMLElement | null = null;
let lastFocusableElement: HTMLElement | null = null;
let toggleButtonElement: HTMLElement | null = null;

export function setupFocusTrap(container: HTMLElement, toggleBtn: HTMLElement) {
    focusTrapElement = container;
    toggleButtonElement = toggleBtn;

    // Buscar elementos focusables (botón cerrar, botones en mensajes, input, botón enviar)
    const focusableElements = container.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (focusableElements.length > 0) {
        firstFocusableElement = focusableElements[0] as HTMLElement;
        lastFocusableElement = focusableElements[focusableElements.length - 1] as HTMLElement;
    }

    container.addEventListener('keydown', handleFocusTrap);
}

export function releaseFocusTrap() {
    if (focusTrapElement) {
        focusTrapElement.removeEventListener('keydown', handleFocusTrap);
    }
    // Devolver el foco al botón que abrió el chat
    if (toggleButtonElement) {
        toggleButtonElement.focus();
    }
}

function handleFocusTrap(e: KeyboardEvent) {
    if (e.key === 'Tab') {
        // Actualizar última busqueda por si se agregan mensajes focusables
        if (focusTrapElement) {
            const focusableElements = focusTrapElement.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
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

// Interfaz DOM
export function addMessageToDOM(
    container: HTMLElement | null,
    role: "user" | "assistant",
    text: string
) {
    if (!container) return;

    const div = document.createElement("div");
    div.className = `flex gap-3 ${role === "user" ? "justify-end" : ""}`;

    const avatar = role === "assistant"
        ? `<div class="w-8 h-8 rounded-full bg-linear-to-tr from-violet-500 to-fuchsia-500 shrink-0 flex items-center justify-center text-white text-xs font-bold">AI</div>`
        : "";

    const content = role === "assistant" ? marked.parse(text) : text;

    const bubble = `
        <div class="${role === "user"
            ? "bg-violet-600 text-white"
            : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-black/5 dark:border-white/10"
        } p-3 rounded-2xl ${role === "user" ? "rounded-tr-none" : "rounded-tl-none"} shadow-sm max-w-[85%] text-sm prose cursor-text select-text">
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
        <div class="w-8 h-8 rounded-full bg-linear-to-tr from-violet-500 to-fuchsia-500 shrink-0 flex items-center justify-center text-white text-xs font-bold">AI</div>
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
    container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth'
    });
}
