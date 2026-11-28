import { resolveProjectImage } from "../../utils/projectAssets.ts";
import type { Project } from "./types.ts";

export const ocrWeb: Project = {
    slug: "ocr-web",
    title: {
        es: "Sirviendo Apuntes · OCR Web & IA",
        en: "Sirviendo Apuntes · Web OCR & AI",
    },
    tagline: {
        es: "Plataforma web monorepo con IA multimodal y OCR local (WebGPU/WASM) para digitalizar apuntes y extraer texto resaltado.",
        en: "Monorepo web platform with multimodal AI and local WebGPU/WASM OCR to digitize study notes and extract highlighted text.",
    },
    description: {
        es: "Evolución web fullstack del extractor OCR de escritorio, desarrollada en monorepo pnpm con React, Node.js y tres motores intercambiables: cascada Gemini Flash-Lite para extracción estricta de texto resaltado, Groq Qwen 3.8 para transcripción forense ultrarrápida, y PP-OCRv6 local (WebGPU / WASM) en Web Worker dedicado.",
        en: "Fullstack web evolution of the desktop OCR extractor, built as a pnpm monorepo with React, Node.js, and three swappable OCR engines: Gemini Flash-Lite cascade for strict highlighter extraction, Groq Qwen 3.8 for ultra-fast full-page transcription, and local PP-OCRv6 (WebGPU / WASM) inside a dedicated Web Worker.",
    },
    fullDescription: {
        es: "OCR Web ('Sirviendo Apuntes') nació como un proyecto dedicado para mi novia, con el propósito de facilitarle el estudio universitario permitiéndole subir fotos de apuntes, libros o fotocopias (en lotes o individuales) y generar resúmenes automáticos únicamente a partir de las frases marcadas con resaltador. Arquitectónicamente adopta Clean Architecture modular, aislando router, controller, service y adaptadores en el backend (Node.js/Express 5), mientras el frontend (React, Tailwind CSS, Shadcn/ui y Zustand) opera con tipado estricto E2E mediante Zod y contratos compartidos en el monorepo. Integra post-procesamiento inteligente para unir palabras partidas por guiones de fin de línea, limpieza de soft hyphens y exportación directa a Microsoft Word (.docx) o ZIP.",
        en: "OCR Web ('Sirviendo Apuntes') was created as a personalized tool for my girlfriend to streamline her university studies, allowing her to upload single or batch photos of lecture notes and textbooks to generate instant summaries strictly from highlighted text. Architecturally structured under modular Clean Architecture, it separates routers, controllers, services, and AI adapters on the backend (Node.js/Express 5), while the frontend (React, Tailwind CSS, Shadcn/ui, and Zustand) ensures end-to-end type safety via Zod shared contracts. Features intelligent post-processing to reassemble hyphenated line-broken words, strip invisible soft hyphens, and export directly to Microsoft Word (.docx) or ZIP.",
    },
    tags: ["React", "TypeScript", "Node.js", "Express", "Tailwind CSS", "Vite", "Zod", "Vitest", "pnpm", "Vercel", "Gemini AI", "Git", "GitHub"],
    link: "https://ocr-web-frontend.vercel.app/",
    repo: "https://github.com/martin-ratti/OCR-Web",
    featured: false,
    coverImage: resolveProjectImage("ocr-web", "cover"),
    gallery: [
        {
            url: resolveProjectImage("ocr-web", "cover"),
            alt: {
                es: "Sirviendo Apuntes - Pantalla Principal, Selector de Motores y Dropzone",
                en: "Sirviendo Apuntes - Main Screen, Engine Selector, and Dropzone",
            },
            caption: {
                es: "Pantalla principal con selector rápido de modo (Solo resaltador / Página entera) y motores (Gemini IA, Groq IA, Local WebGPU), dropzone animado y carga de carpetas completas.",
                en: "Landing interface with quick mode toggle (Highlighter only / Full page) and engine selector (Gemini AI, Groq AI, Local WebGPU), animated dropzone, and folder upload.",
            },
        },
        {
            url: resolveProjectImage("ocr-web", "motores-ia"),
            alt: {
                es: "Espacio de Trabajo y Selector Multi-Motor de OCR e IA",
                en: "Workspace and Multi-Engine OCR & AI Selector",
            },
            caption: {
                es: "Workspace con apunte real cargado, menú de motores actualizados (Gemini Flash-Lite Cascada, Groq Qwen 3.8 y Local PP-OCRv6 WebGPU) y exportación directa a Word (.docx) o ZIP.",
                en: "Workspace showing a real handwritten note, updated engine dropdown (Gemini Flash-Lite Cascade, Groq Qwen 3.8, and Local PP-OCRv6 WebGPU), and direct Word (.docx) or ZIP export.",
            },
        },
        {
            url: resolveProjectImage("ocr-web", "modo-oscuro"),
            alt: {
                es: "Modo Oscuro de Alto Contraste y Visor de Apuntes",
                en: "High-Contrast Dark Mode and Note Viewer",
            },
            caption: {
                es: "Modo oscuro unificado en todo el workspace con controles de zoom, rotación de hojas, ajuste tipográfico (16px) y editor en vivo para jornadas de estudio nocturno.",
                en: "Unified high-contrast dark mode across the workspace featuring zoom controls, page rotation, typography sizing (16px), and live note editor for late-night study sessions.",
            },
        },
    ],
    features: [
        {
            title: { es: "Tres Motores de OCR Seleccionables", en: "Three Swappable OCR Engines" },
            desc: {
                es: "Cascada Gemini Flash-Lite (con pre-filtro cromático Zero-Quota Waste y acción de resaltado forzado), Groq Qwen 3.8 (inferencia LPU ultrarrápida) y motor local PP-OCRv6 sobre WebGPU / WASM con pesos cacheados en CacheStorage para uso 100% offline.",
                en: "Gemini Flash-Lite cascade (with Zero-Quota Waste color pre-filter and force-highlight action), Groq Qwen 3.8 (ultra-fast LPU inference), and local PP-OCRv6 on WebGPU / WASM with CacheStorage model caching for 100% offline processing.",
            },
        },
        {
            title: { es: "Monorepo pnpm & Clean Architecture", en: "pnpm Monorepo & Clean Architecture" },
            desc: {
                es: "Estructura modular desacoplada con pnpm Workspaces, separando la API Express 5 en backend, la SPA React + Web Workers en frontend y un paquete compartido (@ocr-web/shared) con esquemas de validación Zod.",
                en: "Decoupled modular architecture with pnpm workspaces, isolating the Express 5 API backend, the React + Web Workers SPA frontend, and a shared Zod contract package (@ocr-web/shared).",
            },
        },
        {
            title: { es: "Post-Procesamiento Tipográfico Inteligente", en: "Intelligent Typographic Post-Processing" },
            desc: {
                es: "Algoritmo de reconstrucción para palabras partidas por saltos de línea con guión (ej. 'cons-\\ntitución' a 'constitución'), supresión de soft hyphens invisibles y preservación de sangrías y listas.",
                en: "Reconstruction algorithm for line-broken hyphenated words ('cons-\\ntitución' into 'constitución'), invisible soft-hyphen stripping, and list indentation protection.",
            },
        },
        {
            title: { es: "Procesamiento en Lotes & Caché Segregada", en: "Batch Processing & Partitioned Cache" },
            desc: {
                es: "Store reactivo con Zustand que soporta carga múltiple con seguimiento de progreso y descarga en ZIP, segregando la caché por motor, archivo y peso binario para evitar llamadas redundantes.",
                en: "Reactive Zustand store supporting multi-image batch processing with progress tracking and ZIP export, partitioning cache by engine, filename, and file size to avoid redundant API calls.",
            },
        },
        {
            title: { es: "Exportación Directa a Word (.docx) & Portapapeles", en: "Direct Word (.docx) & Clipboard Export" },
            desc: {
                es: "Generación en tiempo real de documentos Word con formato estructurado listos para imprimir o editar, junto a copiado en un solo clic.",
                en: "Real-time generation of formatted Word (.docx) documents ready for printing or editing, alongside one-click clipboard copying.",
            },
        },
        {
            title: { es: "Validación Binaria Estricta (Magic Bytes)", en: "Strict Binary Validation (Magic Bytes)" },
            desc: {
                es: "Inspección binaria en la capa de subida con Multer para validar los encabezados reales de archivo (JPEG, PNG, WebP, GIF, HEIC) previniendo ataques de inyección y archivos corruptos.",
                en: "Binary inspection at the Multer upload layer verifying file header signatures (JPEG, PNG, WebP, GIF, HEIC) preventing injection attacks and corrupted uploads.",
            },
        },
    ],
    architecture: {
        es: "Monorepo orquestado con pnpm Workspaces. Backend en Node.js y Express 5 estructurado en capas (Routers, Controllers, Services y AI Adapters) consumiendo Google GenAI y Groq Cloud API. Frontend en React 19, TypeScript y Tailwind CSS con Shadcn/ui, Radix UI y Web Workers dedicados ejecutando PP-OCRv6 (WebGPU / ONNX Runtime Web). Validación compartida de contratos con Zod y despliegue continuo en Vercel.",
        en: "Monorepo orchestrated with pnpm workspaces. Node.js and Express 5 layered backend (Routers, Controllers, Services, and AI Adapters) consuming Google GenAI and Groq Cloud APIs. Frontend built with React 19, TypeScript, and Tailwind CSS with Shadcn/ui, Radix UI, and dedicated Web Workers running PP-OCRv6 (WebGPU / ONNX Runtime Web). Shared Zod contract validation and continuous Vercel deployment.",
    },
    challenges: {
        es: "Diseñar prompts multimodales con failover automático entre modelos capaz de aislar exclusivamente texto resaltado, junto con un motor local PP-OCRv6 en WebGPU/WASM ejecutado en Web Worker con balance de blancos adaptativo para apuntes con luz cálida sin enviar datos a servidores externos.",
        en: "Designing multimodal prompts with automatic model failover to isolate highlighted text exclusively, alongside a local PP-OCRv6 engine on WebGPU/WASM running inside a Web Worker with adaptive white-balance for warm-lit notes and zero external data transfers.",
    },
    role: {
        es: "Creador & Desarrollador Full Stack (Monorepo, Integración IA & UI/UX)",
        en: "Creator & Full Stack Developer (Monorepo, AI Integration & UI/UX)",
    },
    period: "2026",
};
