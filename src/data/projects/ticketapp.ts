import { resolveProjectImage } from "../../utils/projectAssets.ts";
import type { Project } from "./types.ts";

export const ticketapp: Project = {
    slug: "ticketapp",
    title: {
        es: "TicketApp - Marketplace de Entradas & Eventos",
        en: "TicketApp - Event & Ticketing Marketplace",
    },
    tagline: {
        es: "Marketplace de eventos con selección de butacas en tiempo real, pagos en Stripe y asistencia con IA.",
        en: "Event marketplace with real-time seat selection, Stripe payments, and AI-powered assistance.",
    },
    description: {
        es: "Plataforma full-stack de gestión y venta de entradas concebida como Marketplace integral para la UTN FRRo. Incorpora selección dinámica de butacas en estadios y teatros, pasarela segura Stripe Checkout con webhooks asíncronos, asistente virtual con IA (DeepSeek/Gemma vía OpenRouter), generación de tickets en PDF (jsPDF), emails transaccionales y mecanismos de seguridad con BOOT_ID y reCAPTCHA v2.",
        en: "Comprehensive full-stack event management and ticketing Marketplace developed for UTN FRRo. Features real-time seat selection across stadiums and theatres, secure Stripe Checkout with async webhooks, AI assistant (DeepSeek/Gemma via OpenRouter), automatic PDF tickets (jsPDF), transactional emails, and hardened security with BOOT_ID and reCAPTCHA v2.",
    },
    fullDescription: {
        es: "TicketApp es una solución de ingeniería de software desarrollada en equipo junto a Valentín Peppino y Gianlucas Zabaleta para la cátedra de Desarrollo de Software en la UTN FRRo. La plataforma cubre el ciclo de vida completo de una transacción digital, conectando a empresas productoras con el público asistente. Resuelve el desafío crítico de la consistencia transaccional durante picos de venta masiva mediante reservas atómicas de butacas que previenen sobreventas o doble asignación de asientos. Su arquitectura desacoplada combina un frontend SPA reactivo en React 19 y TypeScript con una API modular en Node.js, Express y Prisma ORM sobre MySQL, validada exhaustivamente mediante pruebas unitarias (Vitest y Jest), pruebas de integración (Supertest) y flujos end-to-end con Playwright.",
        en: "TicketApp is an end-to-end software engineering solution developed as a team project alongside Valentín Peppino and Gianlucas Zabaleta for UTN FRRo. The platform manages the entire lifecycle of digital ticketing transactions, bridging event organizers and attendees. It tackles the critical challenge of transactional concurrency during flash sales through atomic seat reservations that prevent double-booking or capacity overselling. Its decoupled architecture pairs a reactive React 19 and TypeScript SPA with a layered Node.js, Express, and Prisma ORM API on MySQL, rigorously verified with unit tests (Vitest & Jest), integration tests (Supertest), and end-to-end flows using Playwright.",
    },
    tags: ["React", "TypeScript", "Node.js", "Express", "Prisma", "MySQL", "Stripe", "Vitest", "Jest", "Playwright", "Zod", "Git", "GitHub"],
    repo: "https://github.com/valenpeppi/BackEnd-Venta-de-Entradas",
    featured: false,
    coverImage: resolveProjectImage("ticketapp", "cover"),
    gallery: [
        {
            url: resolveProjectImage("ticketapp", "cover"),
            alt: {
                es: "Ficha de Evento y Presentación - TicketApp",
                en: "Event Overview and Presentation Page - TicketApp",
            },
            caption: {
                es: "Página de presentación del evento (Bizarrap en Bioceres Arena) con fechas, horarios, sinopsis y botón de compra directa.",
                en: "Event presentation page (Bizarrap at Bioceres Arena) displaying dates, schedule, synopsis, and direct ticket purchasing.",
            },
        },
        {
            url: resolveProjectImage("ticketapp", "catalogo-eventos"),
            alt: {
                es: "Buscador y Catálogo de Espectáculos",
                en: "Show Search Engine and Event Catalog",
            },
            caption: {
                es: "Buscador predictivo por artista o recinto con filtros por categoría temática (Conciertos, Teatro, Festivales) y precios de referencia.",
                en: "Predictive search by artist or venue with category filtering (Concerts, Theatre, Festivals) and baseline pricing.",
            },
        },
        {
            url: resolveProjectImage("ticketapp", "resumen-compra"),
            alt: {
                es: "Carrito y Asignación de Butacas Numeradas",
                en: "Cart and Numbered Seat Reservation",
            },
            caption: {
                es: "Resumen del carrito con reserva atómica de butacas seleccionadas (VIP numeradas y Campo general) previo a la pasarela Stripe.",
                en: "Cart summary with atomic reservation of selected seats (numbered VIP and general admission) before Stripe checkout.",
            },
        },
        {
            url: resolveProjectImage("ticketapp", "mis-entradas"),
            alt: {
                es: "Billetera Digital 'Mis Entradas'",
                en: "Digital Wallet 'My Tickets'",
            },
            caption: {
                es: "Historial de compras del usuario con pases digitales listos para descargar en formato PDF oficial generado con jsPDF.",
                en: "User purchase history with digital passes ready to download as official PDFs generated via jsPDF.",
            },
        },
        {
            url: resolveProjectImage("ticketapp", "dashboard-metricas"),
            alt: {
                es: "Panel de Control Gerencial y Métricas de Recaudación",
                en: "Executive Control Panel and Revenue Metrics",
            },
            caption: {
                es: "Dashboard con analítica de ingresos en tiempo real, eventos pendientes de aprobación y métricas de ventas para organizadores.",
                en: "Executive dashboard featuring real-time revenue analytics, pending approval pipelines, and organizer sales metrics.",
            },
        },
        {
            url: resolveProjectImage("ticketapp", "soporte-ia"),
            alt: {
                es: "Bandeja de Mensajes con Respuestas Asistidas por IA",
                en: "Support Inbox with AI-Assisted Replies",
            },
            caption: {
                es: "Centro de atención al cliente con integración de OpenRouter (DeepSeek/Gemma) para sugerir respuestas inteligentes a consultas complejas.",
                en: "Customer support inbox leveraging OpenRouter (DeepSeek/Gemma) to draft intelligent automated replies to complex inquiries.",
            },
        },
        {
            url: resolveProjectImage("ticketapp", "ticketbot-chat"),
            alt: {
                es: "TicketBot - Asistente Virtual Interactivo",
                en: "TicketBot - Interactive Virtual Assistant",
            },
            caption: {
                es: "Chatbot inteligente integrado para guiar a los usuarios en el proceso de compra, políticas de reembolso y selección de butacas.",
                en: "Embedded smart chatbot assisting users through ticket checkout, refund policies, and seat selection queries.",
            },
        },
        {
            url: resolveProjectImage("ticketapp", "gestion-eventos"),
            alt: {
                es: "Módulo de Gestión y Auditoría de Eventos",
                en: "Event Management and Moderation Module",
            },
            caption: {
                es: "Listado administrativo de espectáculos con estados de moderación (Aprobado / Pendiente), control de aforo y cupos vendidos.",
                en: "Administrative event listing with moderation states (Approved / Pending), capacity monitoring, and sold inventory quotas.",
            },
        },
    ],
    features: [
        {
            title: { es: "Selección Dinámica de Asientos & Estadios", en: "Dynamic Seat & Stadium Sector Selection" },
            desc: {
                es: "Mapeo interactivo de sectores y butacas con soporte para estadios híbridos (asientos numerados y campo general), gestionando disponibilidad atómica en tiempo real para evitar doble venta.",
                en: "Interactive seat and sector mapping supporting hybrid venues (numbered seating and general standing), managing atomic real-time availability to prevent double-booking.",
            },
        },
        {
            title: { es: "Pasarela Stripe Checkout & Webhooks Asíncronos", en: "Stripe Checkout Gateway & Async Webhooks" },
            desc: {
                es: "Integración segura con Stripe API para cobro de tarjetas, coordinada con webhooks que confirman ventas de forma asíncrona o liberan asientos reservados si el pago expira.",
                en: "Secure Stripe API integration for card processing, orchestrated with webhooks that asynchronously finalize sales or release held seats on payment expiry.",
            },
        },
        {
            title: { es: "Asistente IA con OpenRouter (DeepSeek/Gemma)", en: "AI Assistant with OpenRouter (DeepSeek/Gemma)" },
            desc: {
                es: "TicketBot interactivo en el frontend para orientación al comprador y generador automático de borradores de respuesta para que los administradores atiendan tickets de soporte.",
                en: "Interactive TicketBot chatbot assisting buyers with FAQs and smart automated reply generator empowering admins to resolve complex support inquiries.",
            },
        },
        {
            title: { es: "Tickets PDF con jsPDF & Emails con Nodemailer", en: "PDF Ticket Generation & Transactional Emails" },
            desc: {
                es: "Generación automática en cliente de entradas en formato PDF con códigos identificatorios y despacho de comprobantes de confirmación por correo electrónico.",
                en: "Automated client-side PDF ticket generation with unique identifier codes and transactional email confirmation dispatch via Nodemailer.",
            },
        },
        {
            title: { es: "Seguridad Reforzada con BOOT_ID & reCAPTCHA v2", en: "Hardened Security with BOOT_ID & reCAPTCHA v2" },
            desc: {
                es: "Mecanismo innovador con UUID de arranque que invalida automáticamente sesiones JWT al reiniciar el servidor, complementado con Google reCAPTCHA v2, Helmet y Bcrypt.",
                en: "Innovative startup UUID mechanism that invalidates active JWT sessions upon server restarts, paired with Google reCAPTCHA v2, Helmet, and Bcrypt.",
            },
        },
        {
            title: { es: "Pirámide Completa de Testing (Unit, Integration & E2E)", en: "Full Testing Pyramid (Unit, Integration & E2E)" },
            desc: {
                es: "Batería exhaustiva de pruebas con Vitest para componentes React, Jest y Supertest para controladores y endpoints de API, y Playwright para flujos críticos de compra de punta a punta.",
                en: "Comprehensive testing suite with Vitest for React components, Jest and Supertest for API controllers/endpoints, and Playwright for critical end-to-end checkout flows.",
            },
        },
    ],
    architecture: {
        es: "Arquitectura en capas (Routers, Middlewares, Controllers, Services y Prisma Client) sobre Node.js, Express y TypeScript, conectada a una base de datos relacional MySQL. Frontend SPA en React 19 y TypeScript empaquetado con Vite, consumiendo la API mediante Axios con interceptores de autenticación JWT y estado centralizado con Context API.",
        en: "Layered architecture (Routers, Middlewares, Controllers, Services, and Prisma Client) on Node.js, Express, and TypeScript, connected to a relational MySQL database. SPA Frontend built with React 19 and TypeScript bundled with Vite, consuming the API via Axios with JWT auth interceptors and Context API state management.",
    },
    challenges: {
        es: "Garantizar la integridad transaccional en la grilla de asientos durante eventos de alta demanda (asegurando que dos usuarios simultáneos no puedan reservar la misma butaca), orquestar la reconciliación de pagos mediante webhooks de Stripe con fallback de polling, e invalidar sesiones con el mecanismo BOOT_ID sin almacenar estado en memoria volátil.",
        en: "Guaranteeing transactional integrity across the seat grid during high-demand ticketing events (preventing race conditions where multiple users attempt to reserve the same seat), orchestrating payment reconciliation via Stripe webhooks with polling fallback, and invalidating sessions with the BOOT_ID mechanism without ephemeral state leaks.",
    },
    role: {
        es: "Co-Desarrollador Full Stack (Arquitectura Backend, Integración Stripe & Pruebas E2E)",
        en: "Full Stack Co-Developer (Backend Architecture, Stripe Integration & E2E Testing)",
    },
    period: "2024 - 2025",
};
