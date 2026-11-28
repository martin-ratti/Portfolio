import { resolveProjectImage } from "../../utils/projectAssets.ts";
import type { Project } from "./types.ts";

export const pcfix: Project = {
    slug: "pcfix",
    title: {
        es: "PCFIX - E-Commerce Monorepo",
        en: "PCFIX - E-Commerce Monorepo",
    },
    tagline: {
        es: "E-commerce de alto rendimiento con arquitectura monorepo, Astro Islands y Docker.",
        en: "High-performance e-commerce with monorepo architecture, Astro Islands, and Docker.",
    },
    description: {
        es: "Plataforma de comercio electrónico de alto rendimiento con arquitectura monorepo. Incluye tienda online, sistema de usuarios, panel administrativo y business intelligence.",
        en: "High-performance e-commerce platform with monorepo architecture. Includes online store, user system, admin panel, and business intelligence.",
    },
    fullDescription: {
        es: "PCFIX es una plataforma integral de comercio electrónico de componentes tecnológicos diseñada para escalar. Implementa una arquitectura monorepo con NPM Workspaces, combinando un frontend híbrido en Astro 5 (SSR y Server Islands con React y Tailwind CSS v4) y una API REST robusta en Node.js, Express 5, Prisma ORM y PostgreSQL, con pagos vía MercadoPago y verificación HMAC.",
        en: "PCFIX is a scalable tech e-commerce platform. It features an NPM Workspaces monorepo architecture, combining a hybrid Astro 5 frontend (SSR and Server Islands with React and Tailwind CSS v4) with a robust REST API in Node.js, Express 5, Prisma ORM, and PostgreSQL, including MercadoPago payments with HMAC webhook verification.",
    },
    tags: ["Astro", "React", "TypeScript", "JavaScript", "Node.js", "PostgreSQL", "Docker", "Tailwind CSS", "Vercel", "Railway", "Jest", "Vitest", "Playwright", "Prisma", "Express", "GitHub", "Scrum", "Kanban"],
    link: "https://www.pcfixbaru.com.ar",
    repo: "https://github.com/martin-ratti/PCFIX-Baru",
    featured: true,
    coverImage: resolveProjectImage("pcfix", "cover"),
    gallery: [
        {
            url: resolveProjectImage("pcfix", "cover"),
            alt: {
                es: "Tienda Online PCFIX — Portada y Ofertas Destacadas",
                en: "PCFIX Online Store — Home and Featured Deals",
            },
            caption: {
                es: "Portada principal del e-commerce con carrusel de banners promocionales, búsqueda global y navegación por categorías.",
                en: "Main storefront with promotional banner carousel, global product search, and category navigation.",
            },
        },
        {
            url: resolveProjectImage("pcfix", "catalogo-productos"),
            alt: {
                es: "Catálogo de Hardware PCFIX con Descuentos y Carrito",
                en: "PCFIX Hardware Catalog with Discounts and Cart",
            },
            caption: {
                es: "Catálogo responsive con tarjetas de hardware, cálculo automático de descuentos, favoritos y carga al carrito.",
                en: "Responsive hardware catalog with product cards, automatic discount badges, favorites, and cart actions.",
            },
        },
        {
            url: resolveProjectImage("pcfix", "admin"),
            alt: {
                es: "Dashboard de Inteligencia de Ventas PCFIX",
                en: "PCFIX Sales Intelligence Dashboard",
            },
            caption: {
                es: "Centro de comando administrativo con KPIs en tiempo real, tendencia de ventas a 30 días y Top 5 de productos.",
                en: "Administrative command center with real-time KPIs, 30-day sales trend, and Top 5 best-selling products.",
            },
        },
        {
            url: resolveProjectImage("pcfix", "admin-balance"),
            alt: {
                es: "Balance Mensual de Ingresos y Stock Inmovilizado",
                en: "Monthly Revenue Balance and Dead Stock Alerts",
            },
            caption: {
                es: "Desglose comparativo mensual entre ventas de hardware y servicios técnicos junto a alertas de stock inmovilizado.",
                en: "Monthly revenue breakdown comparing hardware sales vs. repair services alongside dead-stock alerts.",
            },
        },
        {
            url: resolveProjectImage("pcfix", "admin-inventario"),
            alt: {
                es: "Gestión de Inventario CRUD en PCFIX",
                en: "CRUD Inventory Management in PCFIX",
            },
            caption: {
                es: "Panel de inventario con filtros por categoría, marca y bajo stock, edición rápida de precios promocionales y destacados.",
                en: "Inventory management panel with category/brand/low-stock filters, flash discount toggles, and quick stock updates.",
            },
        },
    ],
    features: [
        {
            title: { es: "Arquitectura Monorepo", en: "Monorepo Architecture" },
            desc: {
                es: "Gestión unificada del frontend web, API backend y suites de testing mediante NPM Workspaces.",
                en: "Unified management of the web frontend, backend API, and test suites using NPM Workspaces.",
            },
        },
        {
            title: { es: "Astro SSR & Server Islands", en: "Astro SSR & Server Islands" },
            desc: {
                es: "Renderizado híbrido con middleware SSR (control de mantenimiento y sesión) e islas dinámicas de React estilizadas con Tailwind CSS v4.",
                en: "Hybrid rendering with SSR middleware (maintenance mode and session checks) and dynamic React islands styled with Tailwind CSS v4.",
            },
        },
        {
            title: { es: "Pagos MercadoPago, Auth & Observabilidad", en: "MercadoPago Checkout, Auth & Observability" },
            desc: {
                es: "Webhooks de MercadoPago validados con firma HMAC, login con Google OAuth, gestión multimedia en Cloudinary y monitoreo de errores con Sentry.",
                en: "MercadoPago webhooks verified via HMAC signatures, Google OAuth login, media handling on Cloudinary, and error tracking with Sentry.",
            },
        },
        {
            title: { es: "Infraestructura Contenerizada & CI/CD", en: "Containerized Infrastructure & CI/CD" },
            desc: {
                es: "Ambiente estandarizado con Docker y pipelines paralelos en GitHub Actions ejecutando astro check, Vitest y pruebas E2E con Playwright.",
                en: "Standardized Docker environment and parallel GitHub Actions pipelines running astro check, Vitest, and Playwright E2E tests.",
            },
        },
    ],
    architecture: {
        es: "Frontend Astro 5 + React 18 desplegado en Vercel comunicándose con una API Node.js/Express 5 en Railway, utilizando Prisma ORM sobre PostgreSQL, MercadoPago, Cloudinary, Sentry y Docker.",
        en: "Astro 5 + React 18 frontend deployed on Vercel communicating with a Node.js/Express 5 API on Railway, using Prisma ORM on PostgreSQL, MercadoPago, Cloudinary, Sentry, and Docker.",
    },
    challenges: {
        es: "Optimizar el tiempo de carga del catálogo inicial manteniendo la reactividad del carrito, garantizar stock atómico ante órdenes concurrentes y validar webhooks de pago con firmas HMAC y protecciones anti-IDOR.",
        en: "Optimizing initial catalog load speeds while preserving cart reactivity, guaranteeing atomic inventory under concurrent orders, and securing payment webhooks with HMAC verification and anti-IDOR checks.",
    },
    role: {
        es: "Full Stack Lead & Arquitecto Monorepo",
        en: "Full Stack Lead & Monorepo Architect",
    },
    period: "2024 - 2026",
};
