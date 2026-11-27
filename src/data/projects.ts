import { resolveProjectImage } from "../utils/projectAssets.ts";

export interface ProjectImage {
    url: string;
    alt: string;
    caption: {
        es: string;
        en: string;
    };
}

export interface ProjectFeature {
    title: {
        es: string;
        en: string;
    };
    desc: {
        es: string;
        en: string;
    };
}

export interface Project {
    slug: string;
    title: string;
    tagline?: {
        es: string;
        en: string;
    };
    description: {
        es: string;
        en: string;
    };
    fullDescription?: {
        es: string;
        en: string;
    };
    tags: string[];
    link?: string;
    repo: string;
    featured?: boolean;
    coverImage: string;
    gallery: ProjectImage[];
    features?: ProjectFeature[];
    architecture?: {
        es: string;
        en: string;
    };
    challenges?: {
        es: string;
        en: string;
    };
    role?: {
        es: string;
        en: string;
    };
    period?: string;
}

export const projects: Project[] = [
    {
        slug: "zenith-pos",
        title: "Zenith POS - Ecosistema de Punto de Venta & Landing",
        tagline: {
            es: "Punto de Venta White-label de alto rendimiento, 100% offline, modular y blindado por Hardware ID.",
            en: "High-performance White-label Point of Sale, 100% offline, modular, and secured by Hardware ID."
        },
        description: {
            es: "Ecosistema comercial integral desarrollado de principio a fin como proyecto individual bajo Clean Architecture (Onion). Combina una aplicación nativa Windows ultrarrápida (.NET / WinForms MVP), base de datos local SQLite con Dapper, inyección dinámica de temas White-label, licenciamiento criptográfico atado a hardware (Machine Binding) y landing page moderna en Astro.",
            en: "Comprehensive commercial ecosystem engineered from end to end as an individual project using Clean Architecture (Onion). Combines an ultra-fast native Windows app (.NET / WinForms MVP), local SQLite database with Dapper, dynamic White-label theme injection, cryptographic hardware-tied licensing (Machine Binding), and a modern Astro landing page."
        },
        fullDescription: {
            es: "Zenith POS nace como respuesta a la rigidez y las altas cuotas mensuales del software de gestión tradicional. El reto técnico principal fue construir una plataforma que combinara rendimiento nativo de ultra-baja latencia en Windows con una personalización absoluta de marca (White-label), sin necesidad de recompilar el código fuente por cada cliente. La lógica de negocio está totalmente desacoplada de la interfaz mediante Clean Architecture (Onion Pattern) y MVP, permitiendo operar 100% offline ante cortes de conexión y garantizando compatibilidad desde Windows XP hasta Windows 11.",
            en: "Zenith POS was born to address the rigidity and recurring subscription fees of traditional retail software. The primary technical challenge was creating a platform that combined ultra-low latency native Windows performance with complete White-label brand customization—without recompiling source code per customer. The business logic is strictly decoupled from the UI using Clean Architecture (Onion Pattern) and MVP, enabling 100% offline operations during internet blackouts and ensuring compatibility from Windows XP up to Windows 11."
        },
        tags: ["C#", ".NET WebAPI", "WinForms", "SQLite", "Dapper", "Astro", "Tailwind CSS", "TypeScript", "JavaScript", "Git", "GitHub"],
        link: "https://martin-ratti.github.io/Landing-Zenith/",
        repo: "https://github.com/martin-ratti/Landing-Zenith",
        featured: true,
        coverImage: resolveProjectImage("zenith-pos", "cover"),
        gallery: [
            {
                url: resolveProjectImage("zenith-pos", "cover"),
                alt: "Terminal de Venta Rápida y Cobro Zenith POS",
                caption: {
                    es: "Terminal de cobro con soporte para lector de código de barras, cálculo instantáneo de ticket, múltiples medios de pago (efectivo, transferencia, tarjeta, CC) e impresión térmica ESC/POS.",
                    en: "Checkout terminal with barcode scanner support, instant ticket calculation, multi-payment options (cash, transfer, card, credit account), and ESC/POS thermal printing."
                }
            },
            {
                url: resolveProjectImage("zenith-pos", "dashboard"),
                alt: "Panel de Control Gerencial y Analíticas Zenith POS",
                caption: {
                    es: "Dashboard ejecutivo con métricas de ventas en tiempo real, alertas de stock mínimo, facturación histórica y gráficos interactivos por período y categorías.",
                    en: "Executive dashboard with real-time sales KPIs, low stock alerts, historical revenue, and interactive breakdown charts by date range and category."
                }
            },
            {
                url: resolveProjectImage("zenith-pos", "inventario"),
                alt: "Control de Inventario y Stock en Tiempo Real",
                caption: {
                    es: "Módulo de inventario con búsqueda ágil, filtrado por marcas y rubros, alertas visuales de bajo stock y administración de precios.",
                    en: "Inventory module featuring instant search, brand/category filtering, visual low-stock badges, and dynamic price management."
                }
            },
            {
                url: resolveProjectImage("zenith-pos", "caja-reportes"),
                alt: "Gestión de Caja, Turnos y Movimientos Diarios",
                caption: {
                    es: "Control de flujo de caja y arqueo de turnos, registro de ingresos/egresos, balance en vivo y cronología auditable con anulación de movimientos.",
                    en: "Cash flow and shift balancing control, income/expense logging, live balance calculations, and auditable transaction log with voiding capabilities."
                }
            },
            {
                url: resolveProjectImage("zenith-pos", "cuentas-corrientes"),
                alt: "Gestión de Cuentas Corrientes y Clientes",
                caption: {
                    es: "Módulo de créditos comerciales para registrar deudas de clientes, historial de pagos y emisión de comprobantes individuales.",
                    en: "Commercial credit accounts module to track customer debt, payment installments, and individual payment vouchers."
                }
            },
            {
                url: resolveProjectImage("zenith-pos", "administracion"),
                alt: "Centro de Control y Personalización White-label",
                caption: {
                    es: "Administración de usuarios y permisos basados en roles (Admin / Empleado) con inyección dinámica de identidad visual White-label vía config.json.",
                    en: "User access management with role-based permissions (Admin / Employee) and dynamic White-label visual branding injection via config.json."
                }
            }
        ],
        features: [
            {
                title: { es: "100% Offline & Persistencia ACID con SQLite + Dapper", en: "100% Offline & ACID Persistence via SQLite + Dapper" },
                desc: {
                    es: "Garantiza operatividad continua incluso ante caídas de red o cortes de servicio, persistiendo transacciones atómicas localmente con Dapper y SQLite.",
                    en: "Ensures uninterrupted operation during network outages, persisting atomic transactions locally with Dapper and SQLite."
                }
            },
            {
                title: { es: "Seguridad y Licenciamiento por Hardware ID (Machine Binding)", en: "Hardware ID Security & Machine Binding Licensing" },
                desc: {
                    es: "Genera firmas criptográficas únicas vinculadas a la placa madre y procesador del equipo, blindando la distribución de licencias contra piratería sin requerir servidor central.",
                    en: "Generates unique cryptographic signatures tied to the client's motherboard and CPU, securing license distribution against piracy without a central server."
                }
            },
            {
                title: { es: "Motor White-Label & ThemeManager Dinámico", en: "White-Label Engine & Dynamic ThemeManager" },
                desc: {
                    es: "Inyecta dinámicamente colores, logotipos y comprobantes según la marca del distribuidor mediante un config.json desacoplado, sin recompilar el código fuente.",
                    en: "Dynamically injects colors, logos, and custom receipt layouts via decoupled config.json, without recompiling source code."
                }
            },
            {
                title: { es: "Soporte de Impresión Térmica ESC/POS & Hardware Comercial", en: "ESC/POS Thermal Printing & Retail Hardware Support" },
                desc: {
                    es: "Integración nativa con impresoras térmicas de 58mm y 80mm, comandos directos de corte de papel, apertura automática de cajón monedero y lectores de código de barras.",
                    en: "Native integration with 58mm/80mm thermal receipt printers, direct paper-cut commands, automated cash drawer triggers, and barcode scanners."
                }
            },
            {
                title: { es: "Patrón Model-View-Presenter (MVP) en WinForms", en: "Model-View-Presenter (MVP) Pattern in WinForms" },
                desc: {
                    es: "Separación rigurosa entre vistas e interfaces para desacoplar eventos visuales de la lógica de presentación, garantizando una UI reactiva y ágil.",
                    en: "Rigorous separation between views and interfaces to decouple UI events from presentation logic, ensuring a snappy and maintainable interface."
                }
            },
            {
                title: { es: "Despliegue Automatizado con Inno Setup 6", en: "Automated Deployment with Inno Setup 6" },
                desc: {
                    es: "Instalador empaquetado para distribución comercial profesional que asegura compatibilidad retroactiva desde Windows XP hasta Windows 11.",
                    en: "Packaged installer for professional retail distribution, ensuring backwards compatibility from Windows XP to Windows 11."
                }
            }
        ],
        architecture: {
            es: "Arquitectura Onion (Clean Architecture) multicapa: Núcleo de Dominio agnóstico a tecnología, Casos de Uso para flujos de venta y control de stock, Infraestructura con SQLite + Dapper y hardware ESC/POS, y Presentación en WinForms bajo el patrón MVP. En paralelo, la landing comercial está desarrollada con Astro 5 y Tailwind CSS v4.",
            en: "Multi-layered Onion Architecture (Clean Architecture): technology-agnostic Domain Core, Use Cases for checkout and stock flows, Infrastructure with SQLite + Dapper and ESC/POS hardware drivers, and decoupled WinForms Presentation using MVP. Accompanied by a commercial landing page built with Astro 5 and Tailwind CSS v4."
        },
        challenges: {
            es: "El mayor reto fue garantizar rendimiento nativo en hardware de bajos recursos sin sacrificar la personalización visual en tiempo real de la marca, además de diseñar un algoritmo criptográfico de Machine Binding offline autónomo y resistente a clonaciones.",
            en: "The greatest challenge was delivering native low-latency performance on budget retail hardware without compromising real-time visual branding, alongside engineering an offline cryptographic Machine Binding algorithm resilient against machine cloning."
        },
        role: {
            es: "Creador, Diseñador de Software & Desarrollador Full Stack",
            en: "Creator, Software Designer & Full Stack Developer"
        },
        period: "2025 - 2026"
    },
    {
        slug: "pcfix",
        title: "PCFIX - E-Commerce Monorepo",
        tagline: {
            es: "E-commerce de alto rendimiento con arquitectura monorepo, Astro Islands y Docker.",
            en: "High-performance e-commerce with monorepo architecture, Astro Islands, and Docker."
        },
        description: {
            es: "Plataforma de comercio electrónico de alto rendimiento con arquitectura monorepo. Incluye tienda online, sistema de usuarios, panel administrativo y business intelligence.",
            en: "High-performance e-commerce platform with monorepo architecture. Includes online store, user system, admin panel, and business intelligence."
        },
        fullDescription: {
            es: "PCFIX es una plataforma integral de comercio electrónico de componentes tecnológicos diseñada para escalar. Implementa una arquitectura monorepo con NPM Workspaces, combinando un frontend híbrido en Astro 5 (SSR y Server Islands con React y Tailwind CSS v4) y una API REST robusta en Node.js, Express 5, Prisma ORM y PostgreSQL, con pagos vía MercadoPago y verificación HMAC.",
            en: "PCFIX is a scalable tech e-commerce platform. It features an NPM Workspaces monorepo architecture, combining a hybrid Astro 5 frontend (SSR and Server Islands with React and Tailwind CSS v4) with a robust REST API in Node.js, Express 5, Prisma ORM, and PostgreSQL, including MercadoPago payments with HMAC webhook verification."
        },
        tags: ["Astro", "React", "TypeScript", "JavaScript", "Node.js", "PostgreSQL", "Docker", "Tailwind CSS", "Vercel", "Railway", "Jest", "Vitest", "Playwright", "Prisma", "Express", "GitHub", "Scrum", "Kanban"],
        link: "https://www.pcfixbaru.com.ar",
        repo: "https://github.com/martin-ratti/PCFIX-Baru",
        featured: true,
        coverImage: resolveProjectImage("pcfix", "cover"),
        gallery: [
            {
                url: resolveProjectImage("pcfix", "cover"),
                alt: "Tienda Online PCFIX — Portada y Ofertas Destacadas",
                caption: {
                    es: "Portada principal del e-commerce con carrusel de banners promocionales, búsqueda global y navegación por categorías.",
                    en: "Main storefront with promotional banner carousel, global product search, and category navigation."
                }
            },
            {
                url: resolveProjectImage("pcfix", "catalogo-productos"),
                alt: "Catálogo de Hardware PCFIX con Descuentos y Carrito",
                caption: {
                    es: "Catálogo responsive con tarjetas de hardware, cálculo automático de descuentos, favoritos y carga al carrito.",
                    en: "Responsive hardware catalog with product cards, automatic discount badges, favorites, and cart actions."
                }
            },
            {
                url: resolveProjectImage("pcfix", "admin"),
                alt: "Dashboard de Inteligencia de Ventas PCFIX",
                caption: {
                    es: "Centro de comando administrativo con KPIs en tiempo real, tendencia de ventas a 30 días y Top 5 de productos.",
                    en: "Administrative command center with real-time KPIs, 30-day sales trend, and Top 5 best-selling products."
                }
            },
            {
                url: resolveProjectImage("pcfix", "admin-balance"),
                alt: "Balance Mensual de Ingresos y Stock Inmovilizado",
                caption: {
                    es: "Desglose comparativo mensual entre ventas de hardware y servicios técnicos junto a alertas de stock inmovilizado.",
                    en: "Monthly revenue breakdown comparing hardware sales vs. repair services alongside dead-stock alerts."
                }
            },
            {
                url: resolveProjectImage("pcfix", "admin-inventario"),
                alt: "Gestión de Inventario CRUD en PCFIX",
                caption: {
                    es: "Panel de inventario con filtros por categoría, marca y bajo stock, edición rápida de precios promocionales y destacados.",
                    en: "Inventory management panel with category/brand/low-stock filters, flash discount toggles, and quick stock updates."
                }
            }
        ],
        features: [
            {
                title: { es: "Arquitectura Monorepo", en: "Monorepo Architecture" },
                desc: {
                    es: "Gestión unificada del frontend web, API backend y suites de testing mediante NPM Workspaces.",
                    en: "Unified management of the web frontend, backend API, and test suites using NPM Workspaces."
                }
            },
            {
                title: { es: "Astro SSR & Server Islands", en: "Astro SSR & Server Islands" },
                desc: {
                    es: "Renderizado híbrido con middleware SSR (control de mantenimiento y sesión) e islas dinámicas de React estilizadas con Tailwind CSS v4.",
                    en: "Hybrid rendering with SSR middleware (maintenance mode and session checks) and dynamic React islands styled with Tailwind CSS v4."
                }
            },
            {
                title: { es: "Pagos MercadoPago, Auth & Observabilidad", en: "MercadoPago Checkout, Auth & Observability" },
                desc: {
                    es: "Webhooks de MercadoPago validados con firma HMAC, login con Google OAuth, gestión multimedia en Cloudinary y monitoreo de errores con Sentry.",
                    en: "MercadoPago webhooks verified via HMAC signatures, Google OAuth login, media handling on Cloudinary, and error tracking with Sentry."
                }
            },
            {
                title: { es: "Infraestructura Contenerizada & CI/CD", en: "Containerized Infrastructure & CI/CD" },
                desc: {
                    es: "Ambiente estandarizado con Docker y pipelines paralelos en GitHub Actions ejecutando astro check, Vitest y pruebas E2E con Playwright.",
                    en: "Standardized Docker environment and parallel GitHub Actions pipelines running astro check, Vitest, and Playwright E2E tests."
                }
            }
        ],
        architecture: {
            es: "Frontend Astro 5 + React 18 desplegado en Vercel comunicándose con una API Node.js/Express 5 en Railway, utilizando Prisma ORM sobre PostgreSQL, MercadoPago, Cloudinary, Sentry y Docker.",
            en: "Astro 5 + React 18 frontend deployed on Vercel communicating with a Node.js/Express 5 API on Railway, using Prisma ORM on PostgreSQL, MercadoPago, Cloudinary, Sentry, and Docker."
        },
        challenges: {
            es: "Optimizar el tiempo de carga del catálogo inicial manteniendo la reactividad del carrito, garantizar stock atómico ante órdenes concurrentes y validar webhooks de pago con firmas HMAC y protecciones anti-IDOR.",
            en: "Optimizing initial catalog load speeds while preserving cart reactivity, guaranteeing atomic inventory under concurrent orders, and securing payment webhooks with HMAC verification and anti-IDOR checks."
        },
        role: {
            es: "Full Stack Lead & Arquitecto Monorepo",
            en: "Full Stack Lead & Monorepo Architect"
        },
        period: "2024 - 2026"
    },
    {
        slug: "tracker-utn",
        title: "Tracker UTN Sistemas",
        tagline: {
            es: "Plataforma web con grafo interactivo, metas de examen y analítico oficial para Ingeniería en Sistemas (UTN FRRo).",
            en: "Interactive web platform with dependency graph, exam milestones, and official analytical PDF for Systems Engineering (UTN FRRo)."
        },
        description: {
            es: "Plataforma web full-stack para el seguimiento de la carrera de Ingeniería en Sistemas de Información (UTN FRRo - Plan 2023). Integra grafo interactivo de correlatividades, planificación de exámenes con recordatorios por correo, calendario académico oficial y compilación de analítico en PDF.",
            en: "Full-stack web platform for tracking the Systems Engineering curriculum (UTN FRRo - Plan 2023). Features an interactive prerequisite graph, exam scheduling with email reminders, official academic calendar, and PDF transcript compilation."
        },
        fullDescription: {
            es: "Tracker UTN Sistemas nació de una necesidad compartida por los estudiantes universitarios: organizar la carrera con claridad y responder al instante preguntas críticas como '¿qué me traba más adelante si no rindo esto ahora?' o '¿puedo cursar el año que viene con lo que ya tengo?'. Tomando como base una idea de Lucas Alonso, decidí rediseñar y rearmar la plataforma por completo desde cero como desafío personal con un stack tecnológico moderno. Ahora, además de organizar el plan de estudio personal, permite compartir un enlace personalizado para que familiares y amigos sigan el progreso, las próximas mesas y las fechas de exámenes en tiempo real.",
            en: "Tracker UTN Sistemas was born from a need shared by university students: tracking academic progress clearly and instantly answering critical questions like 'what does skipping this exam block further down the road?' or 'can I take all next year's subjects with what I have?'. Inspired by an initial concept by Lucas Alonso, I took on the challenge of rewriting the entire platform from scratch with a modern tech stack. Beyond personal academic organization, it allows sharing a personalized link so family and friends can track real-time progress, upcoming exam sittings, and dates in real time."
        },
        tags: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "Firebase", "pnpm", "Vitest", "Playwright", "Vite", "Git", "GitHub"],
        link: "https://utn-sistemas-frro.web.app",
        repo: "https://github.com/martin-ratti/tracker-ing-sist",
        featured: false,
        coverImage: resolveProjectImage("tracker-utn", "cover"),
        gallery: [
            {
                url: resolveProjectImage("tracker-utn", "cover"),
                alt: "Malla Curricular Plan 2023 - Tracker UTN Sistemas",
                caption: {
                    es: "Malla curricular organizada por niveles con estados reactivos (Aprobada, Regular, Cursable, Bloqueada), buscador predictivo y filtros rápidos.",
                    en: "Curriculum grid organized by academic years with reactive states (Passed, Regular, Available, Locked), predictive search, and fast filters."
                }
            },
            {
                url: resolveProjectImage("tracker-utn", "grafo-interactivo"),
                alt: "Grafo Interactivo de Correlativas y Red Jerárquica",
                caption: {
                    es: "Visualizador jerárquico vis-network con modo camino crítico, inspección de dependencias y cálculo dinámico de correlatividades.",
                    en: "Hierarchical vis-network viewer featuring critical path mode, dependency inspection, and dynamic prerequisite calculations."
                }
            },
            {
                url: resolveProjectImage("tracker-utn", "ficha-analitica"),
                alt: "Ficha Curricular y Analítico Oficial en PDF",
                caption: {
                    es: "Generador vectorial en cliente con jsPDF para compilar y descargar el analítico oficial formal con membrete de UTN FRRo.",
                    en: "Client-side vector generator using jsPDF to compile and download formal official transcripts with UTN FRRo institutional letterhead."
                }
            },
            {
                url: resolveProjectImage("tracker-utn", "calendario-metas"),
                alt: "Calendario Académico Oficial y Agenda de Metas",
                caption: {
                    es: "Integración de turnos y llamados oficiales de examen con selector de metas y recordatorios automáticos por correo 7 días antes.",
                    en: "Integration of official exam sessions and calls with milestone scheduling and automated email reminders 7 days prior."
                }
            },
            {
                url: resolveProjectImage("tracker-utn", "dashboard-estadisticas"),
                alt: "Dashboard de Estadísticas Académicas",
                caption: {
                    es: "Panel analítico con distribución porcentual de asignaturas, cálculo de promedio académico y avance por nivel.",
                    en: "Analytical dashboard featuring percentage subject distribution, GPA calculation, and year-by-year academic progress."
                }
            },
            {
                url: resolveProjectImage("tracker-utn", "detalle-materia"),
                alt: "Detalle de Asignatura y Correlativas para Cursar y Rendir",
                caption: {
                    es: "Modal contextual con árbol de requisitos previos, asignaturas que desbloquea y acceso directo al Google Drive comunitario de la cátedra.",
                    en: "Contextual modal with prerequisite tree, unlocked dependent subjects, and direct links to community Google Drive study folders."
                }
            },
            {
                url: resolveProjectImage("tracker-utn", "materias-electivas"),
                alt: "Panel de Asignaturas Electivas y Cómputo de Horas",
                caption: {
                    es: "Control de electivas optativas y seguimiento de horas acreditadas para titulación intermedia ADUSI e Ingeniería.",
                    en: "Elective subject tracking and accredited hours monitoring for ADUSI intermediate degree and full Engineering."
                }
            }
        ],
        features: [
            {
                title: { es: "Grafo Interactivo & Camino Crítico", en: "Interactive Graph & Critical Path" },
                desc: {
                    es: "Visualización en red jerárquica con vis-network que calcula en tiempo real qué materias se desbloquean y resalta la cadena de correlativas previa.",
                    en: "Hierarchical network visualization using vis-network that computes unlocked subjects in real time and highlights prerequisite dependency chains."
                }
            },
            {
                title: { es: "Notificaciones Automáticas por Email", en: "Automated Email Reminders" },
                desc: {
                    es: "Servicio de fondo con Node.js y Resend que envía recordatorios por correo 7 días antes de las mesas de finales agendadas.",
                    en: "Background service with Node.js and Resend sending automated email reminders 7 days prior to scheduled exam sessions."
                }
            },
            {
                title: { es: "Calendario Académico y Planificación de Metas", en: "Academic Calendar & Goal Planning" },
                desc: {
                    es: "Integración oficial de turnos de examen de UTN FRRo para agendar objetivos con cuenta regresiva y exportación a calendarios .ics.",
                    en: "Official UTN FRRo exam session integration to schedule milestones with live countdowns and .ics calendar exports."
                }
            },
            {
                title: { es: "Ficha Curricular y Analítico en PDF", en: "Official Transcript PDF Generator" },
                desc: {
                    es: "Generación vectorial nativa con jsPDF y membrete formal de UTN FRRo con promedios, notas, folios y horas de electivas/PPS.",
                    en: "Native vector generation with jsPDF and formal UTN FRRo letterhead, detailing GPA, grades, folios, and elective/PPS hours."
                }
            },
            {
                title: { es: "Sincronización Híbrida & Offline-First", en: "Hybrid Sync & Offline-First" },
                desc: {
                    es: "Firebase Authentication y Firestore para sincronización multi-dispositivo con fallback 100% offline en localStorage y fusión inteligente de datos.",
                    en: "Firebase Auth and Firestore for multi-device sync with 100% offline localStorage fallback and smart data merging."
                }
            },
            {
                title: { es: "Seguimiento de Doble Titulación", en: "Dual Degree Progress Tracking" },
                desc: {
                    es: "Control independiente de avance hacia el título intermedio ADUSI (con validación de Seminario Integrador) y el título de grado en Ingeniería.",
                    en: "Independent progress monitoring toward the ADUSI intermediate degree (with Capstone validation) and the full Engineering diploma."
                }
            }
        ],
        architecture: {
            es: "Monorepo pnpm con paquete compartido @tracker/types. Frontend PWA en React 19, TypeScript y Tailwind CSS v4 con Service Worker offline y cabeceras CSP; backend en Node.js y Express para tareas programadas y despacho de correos vía Resend; persistencia en Firebase (Auth y Firestore), oxlint, Vitest, Playwright y CI/CD en GitHub Actions.",
            en: "pnpm monorepo with shared @tracker/types package. PWA frontend in React 19, TypeScript, and Tailwind CSS v4 with offline Service Worker precaching and CSP headers; Node.js and Express backend handling scheduled tasks and Resend email dispatches; Firebase (Auth and Firestore) persistence, oxlint, Vitest, Playwright, and GitHub Actions CI/CD."
        },
        challenges: {
            es: "Modelar el grafo acíclico dirigido (DAG) de correlatividades académicas con validaciones estrictas y reseteo en cascada para prevenir estados inconsistentes, además de optimizar el canvas interactivo para garantizar 60 FPS en dispositivos móviles.",
            en: "Modeling the academic prerequisite directed acyclic graph (DAG) with strict cascade validations to prevent inconsistent states, along with optimizing interactive canvas rendering to maintain 60 FPS on mobile devices."
        },
        role: {
            es: "Creador & Desarrollador Full Stack",
            en: "Creator & Full Stack Developer"
        },
        period: "2026"
    },
    {
        slug: "ticketapp",
        title: "TicketApp - Marketplace de Entradas & Eventos",
        tagline: {
            es: "Marketplace de eventos con selección de butacas en tiempo real, pagos en Stripe y asistencia con IA.",
            en: "Event marketplace with real-time seat selection, Stripe payments, and AI-powered assistance."
        },
        description: {
            es: "Plataforma full-stack de gestión y venta de entradas concebida como Marketplace integral para la UTN FRRo. Incorpora selección dinámica de butacas en estadios y teatros, pasarela segura Stripe Checkout con webhooks asíncronos, asistente virtual con IA (DeepSeek/Gemma vía OpenRouter), generación de tickets en PDF (jsPDF), emails transaccionales y mecanismos de seguridad con BOOT_ID y reCAPTCHA v2.",
            en: "Comprehensive full-stack event management and ticketing Marketplace developed for UTN FRRo. Features real-time seat selection across stadiums and theatres, secure Stripe Checkout with async webhooks, AI assistant (DeepSeek/Gemma via OpenRouter), automatic PDF tickets (jsPDF), transactional emails, and hardened security with BOOT_ID and reCAPTCHA v2."
        },
        fullDescription: {
            es: "TicketApp es una solución de ingeniería de software desarrollada en equipo junto a Valentín Peppino y Gianlucas Zabaleta para la cátedra de Desarrollo de Software en la UTN FRRo. La plataforma cubre el ciclo de vida completo de una transacción digital, conectando a empresas productoras con el público asistente. Resuelve el desafío crítico de la consistencia transaccional durante picos de venta masiva mediante reservas atómicas de butacas que previenen sobreventas o doble asignación de asientos. Su arquitectura desacoplada combina un frontend SPA reactivo en React 19 y TypeScript con una API modular en Node.js, Express y Prisma ORM sobre MySQL, validada exhaustivamente mediante pruebas unitarias (Vitest y Jest), pruebas de integración (Supertest) y flujos end-to-end con Playwright.",
            en: "TicketApp is an end-to-end software engineering solution developed as a team project alongside Valentín Peppino and Gianlucas Zabaleta for UTN FRRo. The platform manages the entire lifecycle of digital ticketing transactions, bridging event organizers and attendees. It tackles the critical challenge of transactional concurrency during flash sales through atomic seat reservations that prevent double-booking or capacity overselling. Its decoupled architecture pairs a reactive React 19 and TypeScript SPA with a layered Node.js, Express, and Prisma ORM API on MySQL, rigorously verified with unit tests (Vitest & Jest), integration tests (Supertest), and end-to-end flows using Playwright."
        },
        tags: ["React", "TypeScript", "Node.js", "Express", "Prisma", "MySQL", "Stripe", "Vitest", "Jest", "Playwright", "Zod", "Git", "GitHub"],
        repo: "https://github.com/valenpeppi/BackEnd-Venta-de-Entradas",
        featured: false,
        coverImage: resolveProjectImage("ticketapp", "cover"),
        gallery: [
            {
                url: resolveProjectImage("ticketapp", "cover"),
                alt: "Ficha de Evento y Presentación - TicketApp",
                caption: {
                    es: "Página de presentación del evento (Bizarrap en Bioceres Arena) con fechas, horarios, sinopsis y botón de compra directa.",
                    en: "Event presentation page (Bizarrap at Bioceres Arena) displaying dates, schedule, synopsis, and direct ticket purchasing."
                }
            },
            {
                url: resolveProjectImage("ticketapp", "catalogo-eventos"),
                alt: "Buscador y Catálogo de Espectáculos",
                caption: {
                    es: "Buscador predictivo por artista o recinto con filtros por categoría temática (Conciertos, Teatro, Festivales) y precios de referencia.",
                    en: "Predictive search by artist or venue with category filtering (Concerts, Theatre, Festivals) and baseline pricing."
                }
            },
            {
                url: resolveProjectImage("ticketapp", "resumen-compra"),
                alt: "Carrito y Asignación de Butacas Numeradas",
                caption: {
                    es: "Resumen del carrito con reserva atómica de butacas seleccionadas (VIP numeradas y Campo general) previo a la pasarela Stripe.",
                    en: "Cart summary with atomic reservation of selected seats (numbered VIP and general admission) before Stripe checkout."
                }
            },
            {
                url: resolveProjectImage("ticketapp", "mis-entradas"),
                alt: "Billetera Digital 'Mis Entradas'",
                caption: {
                    es: "Historial de compras del usuario con pases digitales listos para descargar en formato PDF oficial generado con jsPDF.",
                    en: "User purchase history with digital passes ready to download as official PDFs generated via jsPDF."
                }
            },
            {
                url: resolveProjectImage("ticketapp", "dashboard-metricas"),
                alt: "Panel de Control Gerencial y Métricas de Recaudación",
                caption: {
                    es: "Dashboard con analítica de ingresos en tiempo real, eventos pendientes de aprobación y métricas de ventas para organizadores.",
                    en: "Executive dashboard featuring real-time revenue analytics, pending approval pipelines, and organizer sales metrics."
                }
            },
            {
                url: resolveProjectImage("ticketapp", "soporte-ia"),
                alt: "Bandeja de Mensajes con Respuestas Asistidas por IA",
                caption: {
                    es: "Centro de atención al cliente con integración de OpenRouter (DeepSeek/Gemma) para sugerir respuestas inteligentes a consultas complejas.",
                    en: "Customer support inbox leveraging OpenRouter (DeepSeek/Gemma) to draft intelligent automated replies to complex inquiries."
                }
            },
            {
                url: resolveProjectImage("ticketapp", "ticketbot-chat"),
                alt: "TicketBot - Asistente Virtual Interactivo",
                caption: {
                    es: "Chatbot inteligente integrado para guiar a los usuarios en el proceso de compra, políticas de reembolso y selección de butacas.",
                    en: "Embedded smart chatbot assisting users through ticket checkout, refund policies, and seat selection queries."
                }
            },
            {
                url: resolveProjectImage("ticketapp", "gestion-eventos"),
                alt: "Módulo de Gestión y Auditoría de Eventos",
                caption: {
                    es: "Listado administrativo de espectáculos con estados de moderación (Aprobado / Pendiente), control de aforo y cupos vendidos.",
                    en: "Administrative event listing with moderation states (Approved / Pending), capacity monitoring, and sold inventory quotas."
                }
            }
        ],
        features: [
            {
                title: { es: "Selección Dinámica de Asientos & Estadios", en: "Dynamic Seat & Stadium Sector Selection" },
                desc: {
                    es: "Mapeo interactivo de sectores y butacas con soporte para estadios híbridos (asientos numerados y campo general), gestionando disponibilidad atómica en tiempo real para evitar doble venta.",
                    en: "Interactive seat and sector mapping supporting hybrid venues (numbered seating and general standing), managing atomic real-time availability to prevent double-booking."
                }
            },
            {
                title: { es: "Pasarela Stripe Checkout & Webhooks Asíncronos", en: "Stripe Checkout Gateway & Async Webhooks" },
                desc: {
                    es: "Integración segura con Stripe API para cobro de tarjetas, coordinada con webhooks que confirman ventas de forma asíncrona o liberan asientos reservados si el pago expira.",
                    en: "Secure Stripe API integration for card processing, orchestrated with webhooks that asynchronously finalize sales or release held seats on payment expiry."
                }
            },
            {
                title: { es: "Asistente IA con OpenRouter (DeepSeek/Gemma)", en: "AI Assistant with OpenRouter (DeepSeek/Gemma)" },
                desc: {
                    es: "TicketBot interactivo en el frontend para orientación al comprador y generador automático de borradores de respuesta para que los administradores atiendan tickets de soporte.",
                    en: "Interactive TicketBot chatbot assisting buyers with FAQs and smart automated reply generator empowering admins to resolve complex support inquiries."
                }
            },
            {
                title: { es: "Tickets PDF con jsPDF & Emails con Nodemailer", en: "PDF Ticket Generation & Transactional Emails" },
                desc: {
                    es: "Generación automática en cliente de entradas en formato PDF con códigos identificatorios y despacho de comprobantes de confirmación por correo electrónico.",
                    en: "Automated client-side PDF ticket generation with unique identifier codes and transactional email confirmation dispatch via Nodemailer."
                }
            },
            {
                title: { es: "Seguridad Reforzada con BOOT_ID & reCAPTCHA v2", en: "Hardened Security with BOOT_ID & reCAPTCHA v2" },
                desc: {
                    es: "Mecanismo innovador con UUID de arranque que invalida automáticamente sesiones JWT al reiniciar el servidor, complementado con Google reCAPTCHA v2, Helmet y Bcrypt.",
                    en: "Innovative startup UUID mechanism that invalidates active JWT sessions upon server restarts, paired with Google reCAPTCHA v2, Helmet, and Bcrypt."
                }
            },
            {
                title: { es: "Pirámide Completa de Testing (Unit, Integration & E2E)", en: "Full Testing Pyramid (Unit, Integration & E2E)" },
                desc: {
                    es: "Batería exhaustiva de pruebas con Vitest para componentes React, Jest y Supertest para controladores y endpoints de API, y Playwright para flujos críticos de compra de punta a punta.",
                    en: "Comprehensive testing suite with Vitest for React components, Jest and Supertest for API controllers/endpoints, and Playwright for critical end-to-end checkout flows."
                }
            }
        ],
        architecture: {
            es: "Arquitectura en capas (Routers, Middlewares, Controllers, Services y Prisma Client) sobre Node.js, Express y TypeScript, conectada a una base de datos relacional MySQL. Frontend SPA en React 19 y TypeScript empaquetado con Vite, consumiendo la API mediante Axios con interceptores de autenticación JWT y estado centralizado con Context API.",
            en: "Layered architecture (Routers, Middlewares, Controllers, Services, and Prisma Client) on Node.js, Express, and TypeScript, connected to a relational MySQL database. SPA Frontend built with React 19 and TypeScript bundled with Vite, consuming the API via Axios with JWT auth interceptors and Context API state management."
        },
        challenges: {
            es: "Garantizar la integridad transaccional en la grilla de asientos durante eventos de alta demanda (asegurando que dos usuarios simultáneos no puedan reservar la misma butaca), orquestar la reconciliación de pagos mediante webhooks de Stripe con fallback de polling, e invalidar sesiones con el mecanismo BOOT_ID sin almacenar estado en memoria volátil.",
            en: "Guaranteeing transactional integrity across the seat grid during high-demand ticketing events (preventing race conditions where multiple users attempt to reserve the same seat), orchestrating payment reconciliation via Stripe webhooks with polling fallback, and invalidating sessions with the BOOT_ID mechanism without ephemeral state leaks."
        },
        role: {
            es: "Co-Desarrollador Full Stack (Arquitectura Backend, Integración Stripe & Pruebas E2E)",
            en: "Full Stack Co-Developer (Backend Architecture, Stripe Integration & E2E Testing)"
        },
        period: "2024 - 2025"
    },
    {
        slug: "buyjugador",
        title: "BuyJugador - Gestión de Inventario & Gaming",
        tagline: {
            es: "Plataforma multicapa en .NET para compra y venta gamer con clientes Web (Blazor WASM) y Desktop (WinForms).",
            en: "Multi-layer .NET solution for gaming retail with synchronized Web (Blazor WASM) and Desktop (WinForms) clients."
        },
        description: {
            es: "Solución empresarial multicapa para la gestión de inventario, compras y ventas en comercios gamer. Desarrollada en equipo con arquitectura en capas (8 proyectos) orquestando Blazor WebAssembly, WinForms, ASP.NET Core Web API, Entity Framework Core, SQL Server y reportes vectoriales con ScottPlot y PDFsharp.",
            en: "Multi-layer enterprise solution for inventory management, procurement, and gaming retail sales. Built in a team following layered architecture (8 projects) orchestrating Blazor WebAssembly, WinForms, ASP.NET Core Web API, Entity Framework Core, SQL Server, and vector reporting with ScottPlot and PDFsharp."
        },
        fullDescription: {
            es: "BuyJugador fue desarrollado en equipo junto a Tomas Levrand y Agustín Santinelli como proyecto integral de ingeniería de software para la UTN. El objetivo principal fue concebir una arquitectura robusta, modular y fuertemente tipada que permitiera gestionar todo el ciclo comercial de productos de gaming y hardware (compras a proveedores, pedidos, stock crítico, ventas y reportes analíticos). Implementamos una solución multicapa desacoplada donde un cliente web administrativo en Blazor WebAssembly y una aplicación de escritorio de alta velocidad en WinForms consumen una única Web API en ASP.NET Core a través de una librería compartida ApiClient, garantizando máxima reutilización de código y contratos DTO consistentes.",
            en: "BuyJugador was developed collaboratively with Tomas Levrand and Agustín Santinelli as an extensive software engineering university project for UTN. The goal was to engineer a robust, modular, and strongly-typed architecture to manage the full commercial lifecycle of gaming hardware (supplier procurement, pending orders, critical stock alerts, sales, and analytics). We implemented a decoupled multi-layer solution where a modern Blazor WebAssembly administrative web client and a high-speed WinForms desktop app consume a shared ASP.NET Core Web API via an ApiClient library, ensuring maximum code reuse and consistent DTO contracts."
        },
        tags: [".NET WebAPI", "Blazor", "WinForms", "C#", "SQL Server", "SQL"],
        repo: "https://github.com/agussantinelli/ProyectoIDE-BuyJugador",
        featured: false,
        coverImage: resolveProjectImage("buyjugador", "cover"),
        gallery: [
            {
                url: resolveProjectImage("buyjugador", "cover"),
                alt: "Panel Principal y Dashboard de Inventario en Blazor WebAssembly",
                caption: {
                    es: "Dashboard administrativo web en Blazor WebAssembly con métricas clave de ventas, pedidos pendientes, alertas de stock crítico y accesos rápidos.",
                    en: "Administrative web dashboard in Blazor WebAssembly featuring key sales metrics, pending orders, critical stock alerts, and quick actions."
                }
            },
            {
                url: resolveProjectImage("buyjugador", "productos-blazor"),
                alt: "Gestión de Productos y Catálogo en Blazor WebAssembly",
                caption: {
                    es: "Catálogo web interactivo en Blazor con búsqueda en vivo, pestañas Activos/Inactivos, precios de venta, stock y accesos directos a historial y proveedores.",
                    en: "Interactive Blazor web catalog featuring live search, Active/Inactive tabs, selling prices, stock levels, and shortcuts to price history and suppliers."
                }
            },
            {
                url: resolveProjectImage("buyjugador", "pedidos-blazor"),
                alt: "Módulo de Abastecimiento y Nuevo Pedido en Blazor",
                caption: {
                    es: "Interfaz web reactiva para seleccionar proveedores, cargar ítems de hardware gamer y calcular subtotales de compra en tiempo real.",
                    en: "Reactive web interface for supplier selection, gaming hardware item logging, and real-time purchase subtotal calculation."
                }
            },
            {
                url: resolveProjectImage("buyjugador", "reporte-ventas-blazor"),
                alt: "Reporte de Ventas por Vendedor y Exportación PDF en Blazor",
                caption: {
                    es: "Vista analítica en Blazor WebAssembly filtrada por vendedor (últimos 7 días) con totalización y descarga directa de informe en PDF.",
                    en: "Analytical view in Blazor WebAssembly filtered by salesperson (last 7 days) with totals and direct PDF report download."
                }
            },
            {
                url: resolveProjectImage("buyjugador", "panel-desktop"),
                alt: "Panel de Administrador MDI en Cliente Desktop WinForms",
                caption: {
                    es: "Menú principal del cliente de escritorio WinForms con arquitectura MDI, autenticación JWT por rol y acceso a todos los módulos operativos y reportes.",
                    en: "Main MDI menu in the WinForms desktop client with role-based JWT authentication and direct access to operational modules and reports."
                }
            },
            {
                url: resolveProjectImage("buyjugador", "productos-desktop"),
                alt: "Gestión de Productos en Cliente Desktop WinForms",
                caption: {
                    es: "Grilla de escritorio en WinForms con búsqueda instantánea, filtros por categoría, control de stock y gestión de historial de precios.",
                    en: "Desktop product grid in WinForms featuring instant search, category filters, stock control, and price history management."
                }
            },
            {
                url: resolveProjectImage("buyjugador", "ventas-desktop"),
                alt: "Grilla de Gestión de Ventas en WinForms",
                caption: {
                    es: "Módulo de escritorio en WinForms para búsqueda ágil de ventas por cliente, estados de transacción y detalle por vendedor.",
                    en: "Desktop module in WinForms for fast customer sales search, transaction status monitoring, and salesperson breakdown."
                }
            },
            {
                url: resolveProjectImage("buyjugador", "pedidos-desktop"),
                alt: "Recepción de Pedidos y Compras en Cliente Desktop",
                caption: {
                    es: "Formulario WinForms para creación de órdenes de compra a proveedores oficiales y marcación de stock recibido.",
                    en: "WinForms form for purchase order creation with official suppliers and received stock verification."
                }
            },
            {
                url: resolveProjectImage("buyjugador", "reporte-precios"),
                alt: "Reporte de Evolución de Precios con ScottPlot y PDFsharp",
                caption: {
                    es: "Visualizador analítico con ScottPlot para trazar la evolución histórica de precios de venta y exportación a documentos PDF mediante PDFsharp.",
                    en: "Analytical visualization using ScottPlot to chart historical sales price evolution with PDF exports via PDFsharp."
                }
            },
            {
                url: resolveProjectImage("buyjugador", "arquitectura"),
                alt: "Arquitectura Multicapa de 8 Proyectos en Visual Studio",
                caption: {
                    es: "Estructura de la solución dividida en 8 capas desacopladas: ApiClient, BlazorApp, Data, DominioModelo, DominioServicios, DTOs, WebAPI y WinForms.",
                    en: "Solution structure split into 8 decoupled layers: ApiClient, BlazorApp, Data, DominioModelo, DominioServicios, DTOs, WebAPI, and WinForms."
                }
            }
        ],
        features: [
            {
                title: { es: "Arquitectura Multicapa en 8 Proyectos", en: "8-Project Multi-Layer Architecture" },
                desc: {
                    es: "Desacoplamiento limpio separando contratos (DTOs), dominio, servicios de negocio, infraestructura de datos, API REST y dos clientes independientes.",
                    en: "Clean decoupling separating contracts (DTOs), domain, business services, data infrastructure, REST API, and two distinct clients."
                }
            },
            {
                title: { es: "Clientes Sincronizados (Web & Desktop)", en: "Synchronized Dual Clients (Web & Desktop)" },
                desc: {
                    es: "Librería compartida ApiClient consumida tanto por Blazor WebAssembly en el navegador como por WinForms en el escritorio, evitando duplicación de código.",
                    en: "Shared ApiClient library consumed by both in-browser Blazor WebAssembly and desktop WinForms, eliminating code duplication."
                }
            },
            {
                title: { es: "Reportes Visuales con ScottPlot y PDFsharp", en: "Visual Reporting with ScottPlot & PDFsharp" },
                desc: {
                    es: "Generación de gráficos de fluctuación de precios incrustados directamente en reportes exportables en formato PDF vectorial.",
                    en: "Interactive price fluctuation chart generation embedded directly into vector PDF exportable reports."
                }
            },
            {
                title: { es: "Consultas de Alto Rendimiento con ADO.NET & EF Core", en: "High-Performance Queries with ADO.NET & EF Core" },
                desc: {
                    es: "Uso híbrido de Entity Framework Core para operaciones de negocio estándar junto a consultas optimizadas en ADO.NET para reportes pesados de ventas por vendedor.",
                    en: "Hybrid use of Entity Framework Core for domain workflows and tuned ADO.NET queries for heavy sales-by-vendor analytics."
                }
            },
            {
                title: { es: "Seguridad JWT y Políticas CORS en ASP.NET Core", en: "JWT Security & CORS Policies in ASP.NET Core" },
                desc: {
                    es: "Autenticación basada en tokens JWT con inyección de dependencias (DI) y configuración de CORS para el cliente WebAssembly.",
                    en: "JWT token-based authentication with Dependency Injection (DI) and CORS policies configured for the WebAssembly client."
                }
            },
            {
                title: { es: "Control de Ciclo Comercial & Stock Gamer", en: "Commercial Lifecycle & Gaming Stock Control" },
                desc: {
                    es: "Gestión completa de pedidos a proveedores, recepción de mercadería, alertas de stock mínimo y registro de ventas con trazabilidad de vendedor.",
                    en: "Full management of supplier orders, goods receipt, low-stock warnings, and sales logging with salesperson traceability."
                }
            }
        ],
        architecture: {
            es: "Arquitectura multicapa en C# y .NET estructurada en 8 proyectos: DominioModelo (entidades puras), DominioServicios (reglas de negocio), DTOs (contratos de transferencia), Data (persistencia con EF Core y ADO.NET sobre SQL Server), WebAPI (controladores REST con JWT y DI), ApiClient (cliente HTTP tipado reutilizable), BlazorApp (interfaz web moderna en WebAssembly con Bootstrap) y WinForms (interfaz de escritorio ágil).",
            en: "Multi-layer C# and .NET architecture structured across 8 projects: DominioModelo (pure entities), DominioServicios (business rules), DTOs (transfer contracts), Data (persistence via EF Core and ADO.NET on SQL Server), WebAPI (REST controllers with JWT and DI), ApiClient (reusable typed HTTP client), BlazorApp (modern web UI in WebAssembly with Bootstrap), and WinForms (responsive desktop UI)."
        },
        challenges: {
            es: "Diseñar una biblioteca de cliente HTTP (ApiClient) completamente reutilizable y agnóstica a la plataforma que fuera consumible tanto por el runtime de WebAssembly en el navegador como por el entorno nativo de WinForms, además de combinar EF Core con consultas directas en ADO.NET para optimizar reportes analíticos complejos sin romper la abstracción de capas.",
            en: "Designing a platform-agnostic, fully reusable HTTP client library (ApiClient) consumable by both the browser's WebAssembly runtime and the native WinForms environment, while marrying EF Core with direct ADO.NET queries to optimize complex analytics without breaking layer abstractions."
        },
        role: {
            es: "Co-Desarrollador Full Stack .NET (Backend WebAPI, Clientes WinForms/Blazor y Reportes)",
            en: "Full Stack .NET Co-Developer (WebAPI Backend, WinForms/Blazor Clients & Reporting)"
        },
        period: "2024 - 2025"
    },
    {
        slug: "impulsame",
        title: "ImpulsaMe - Crowdfunding Java",
        tagline: {
            es: "Plataforma web de financiamiento colectivo con arquitectura MVC en 3 capas, Java EE y pasarela Stripe.",
            en: "Crowdfunding web platform built with a 3-tier MVC architecture in Java EE, Apache Tomcat, and Stripe payments."
        },
        description: {
            es: "Plataforma de crowdfunding desarrollada en Java (Jakarta EE / Servlets + JSP) sobre Apache Tomcat y MySQL. Incorpora un modelo de moderación estricto por roles (visitantes, inversores, creadores y administradores), pasarela de donaciones con Stripe en ARS y persistencia desacoplada con patrón DAO.",
            en: "Crowdfunding platform developed in Java (Jakarta EE / Servlets + JSP) running on Apache Tomcat and MySQL. Features role-based access control and moderation (visitors, backers, creators, and admins), Stripe donations in ARS, and decoupled persistence with the DAO pattern."
        },
        fullDescription: {
            es: "ImpulsaMe es una plataforma integral de financiamiento colectivo desarrollada en equipo para la UTN FRRo junto a Joaquín Peralta y Agustín Santinelli. Permite a creadores publicar proyectos innovadores, recibir donaciones y compartir avances con su comunidad. La aplicación implementa una arquitectura en tres capas (presentación, control y acceso a datos) sin recurrir a frameworks pesados, aplicando servlets como controladores, vistas JSP con JSTL, un filtro central AuthFilter para control de acceso basado en roles (RBAC), hashing de contraseñas con BCrypt, pasarela de donaciones en ARS vía Stripe Checkout con identificador de intento UUID anti-duplicados y almacenamiento seguro de imágenes con nombres UUID.",
            en: "ImpulsaMe is a full-featured crowdfunding platform developed as a team project at UTN FRRo alongside Joaquín Peralta and Agustín Santinelli. It empowers creators to launch innovative campaigns, receive community donations, and post project milestones. Built with a 3-tier architecture (presentation, control, and data access) without heavy frameworks, the platform leverages Servlets as controllers, SSR JSP views with JSTL, a centralized AuthFilter for role-based access control (RBAC), BCrypt password hashing, ARS donation processing via Stripe Checkout with UUID idempotency keys to prevent duplicate charges, and secure image uploads with UUID filenames."
        },
        tags: ["Java", "Java Servlets", "JSP", "MySQL", "Maven", "Tomcat", "Stripe", "Git", "GitHub"],
        repo: "https://github.com/agussantinelli/ImpulsaMe-Java.git",
        featured: false,
        coverImage: resolveProjectImage("impulsame", "cover"),
        gallery: [
            {
                url: resolveProjectImage("impulsame", "cover"),
                alt: "Pantalla de Inicio y Explorador de Campañas - ImpulsaMe",
                caption: {
                    es: "Página principal con hero interactivo, catálogo de iniciativas activas y accesos rápidos para exploradores y nuevos creadores.",
                    en: "Landing page featuring hero section, active project catalog, and quick-start actions for backers and creators."
                }
            },
            {
                url: resolveProjectImage("impulsame", "detalle-proyecto"),
                alt: "Detalle de Proyecto y Barra de Recaudación",
                caption: {
                    es: "Ficha del proyecto con cálculo automático de meta financiera, monto recaudado en tiempo real, mayor donación y acceso a donar.",
                    en: "Project detail page displaying financial goal, real-time funding progress, top donation, and direct contribution trigger."
                }
            },
            {
                url: resolveProjectImage("impulsame", "checkout-donacion"),
                alt: "Pasarela de Donaciones con Stripe en ARS",
                caption: {
                    es: "Flujo de donación con validación de rangos ($1.000 a $999.999 ARS), comentarios de apoyo y pasarela segura Stripe Checkout con tokenización de intentos.",
                    en: "Donation workflow with range validations ($1,000 to $999,999 ARS), backer comments, and secure Stripe Checkout sessions with attempt tokenization."
                }
            },
            {
                url: resolveProjectImage("impulsame", "panel-admin"),
                alt: "Panel de Moderación y Administración",
                caption: {
                    es: "Módulo administrativo para revisión y aprobación de proyectos pendientes antes de su publicación, control de mensajes de soporte y moderación.",
                    en: "Administrative dashboard for reviewing and approving pending campaign submissions prior to publishing, support ticket inbox, and content moderation."
                }
            },
            {
                url: resolveProjectImage("impulsame", "crear-proyecto"),
                alt: "Formulario de Alta de Proyecto",
                caption: {
                    es: "Formulario con validación en servidor para título, descripción, meta económica, categorización temática y carga multipart de imagen con nombre UUID.",
                    en: "Server-validated campaign creation form with title, description, funding goal, thematic categories, and multipart UUID image upload."
                }
            },
            {
                url: resolveProjectImage("impulsame", "avances-proyecto"),
                alt: "Historial de Avances y Actualizaciones",
                caption: {
                    es: "Línea de tiempo de actualizaciones publicadas por el creador con fecha y descripción para mantener informada a la comunidad de inversores.",
                    en: "Creator milestone timeline with date-stamped progress reports and updates to keep backer communities engaged."
                }
            },
            {
                url: resolveProjectImage("impulsame", "mis-proyectos"),
                alt: "Panel de Gestión de Proyectos del Creador",
                caption: {
                    es: "Gestor personal para monitorear el estado de las iniciativas propias (Pendiente, Activo, Cancelado) y publicar nuevos avances.",
                    en: "Creator dashboard to monitor campaign statuses (Pending, Active, Cancelled) and publish milestone updates."
                }
            }
        ],
        features: [
            {
                title: { es: "Arquitectura en Tres Capas (MVC Puro)", en: "Three-Tier Architecture (Pure MVC)" },
                desc: {
                    es: "Separación estricta de responsabilidades entre la capa de presentación (JSP + JSTL), la capa de control (Servlets y AuthFilter) y la capa de acceso a datos (DAOs con JDBC nativo sobre MySQL sin frameworks pesados).",
                    en: "Strict separation of concerns across presentation (JSP + JSTL), control (Servlets & AuthFilter), and data access (JDBC-based DAOs on MySQL without heavy frameworks)."
                }
            },
            {
                title: { es: "Control de Acceso Basado en Roles (RBAC)", en: "Role-Based Access Control (RBAC)" },
                desc: {
                    es: "AuthFilter centralizado que intercepta cada petición HTTP, validando sesiones activas y restringiendo rutas para visitantes, usuarios autenticados y administradores.",
                    en: "Centralized AuthFilter intercepting all HTTP requests, enforcing session validation and route boundaries across visitors, authenticated backers, and administrators."
                }
            },
            {
                title: { es: "Flujo de Donaciones con Stripe Checkout & ARS", en: "Stripe Checkout & ARS Donation Workflow" },
                desc: {
                    es: "Integración con la API de Stripe para pagos en pesos argentinos, con tracking por paymentAttemptId (UUID) para garantizar idempotencia y prevenir transacciones duplicadas.",
                    en: "Stripe API integration for payments in Argentine Pesos, utilizing UUID paymentAttemptIds for idempotency and duplicate transaction prevention."
                }
            },
            {
                title: { es: "Ciclo de Vida y Moderación de Proyectos", en: "Campaign Lifecycle & Moderation Workflow" },
                desc: {
                    es: "Flujo de estados (Pendiente → Activo → Cancelado/Borrado) donde los proyectos nacen en revisión y solo los administradores pueden autorizar su visibilidad pública.",
                    en: "State machine lifecycle (Pending → Active → Cancelled/Deleted) ensuring campaigns start under review and require admin approval for public fundraising."
                }
            },
            {
                title: { es: "Comentarios Protegidos & Soft Delete", en: "Protected Backer Comments & Soft Delete" },
                desc: {
                    es: "Regla de negocio que restringe los comentarios únicamente a usuarios que hayan respaldado económicamente el proyecto, con moderación administrativa por borrado lógico.",
                    en: "Business rule restricting comments exclusively to users who backed the project financially, with admin soft-delete moderation."
                }
            },
            {
                title: { es: "Gestión Segura de Archivos con UUID", en: "Secure Multipart File Upload with UUID" },
                desc: {
                    es: "Carga de fotos de proyectos mediante multipart-config en servlets, saneando nombres de archivo con UUID criptográfico para evitar colisiones y path traversal.",
                    en: "Multipart file handling in servlets, sanitizing filenames with cryptographic UUIDs to prevent naming collisions and path traversal attacks."
                }
            }
        ],
        architecture: {
            es: "Arquitectura Java EE clásica estructurada con Maven y desplegada sobre Apache Tomcat. Capa web basada en Jakarta Servlets como controladores y JSP/JSTL para server-side rendering (SSR); seguridad perimetral mediante AuthFilter y hashing BCrypt; capa de persistencia implementada con el patrón Data Access Object (DAO) mediante JDBC puro y consultas SQL parametrizadas sobre MySQL; pagos procesados vía Stripe Checkout Sessions con control de idempotencia.",
            en: "Classic Java EE architecture structured with Maven and running on Apache Tomcat. Web layer driven by Jakarta Servlets as controllers and JSP/JSTL for server-side rendering (SSR); perimeter security with AuthFilter and BCrypt password hashing; persistence layer built with the Data Access Object (DAO) pattern using raw JDBC and parameterized SQL on MySQL; payments powered by Stripe Checkout Sessions with idempotency tracking."
        },
        challenges: {
            es: "Implementar un sistema web completo y seguro (autenticación, autorización RBAC, pagos con pasarela internacional y gestión de archivos) utilizando únicamente tecnologías estándar de Java EE (Servlets, JSP, JDBC y filtros) sin depender de frameworks de alto nivel como Spring Boot, manteniendo una separación limpia de capas y previniendo inyecciones SQL y ataques CSRF/path traversal.",
            en: "Building a secure and comprehensive web platform (auth, RBAC authorization, international payment gateway, and file uploads) using exclusively standard Java EE primitives (Servlets, JSP, JDBC, and filters) without relying on high-level frameworks like Spring Boot, while keeping strict layer decoupling and preventing SQL injection and CSRF/path traversal vulnerabilities."
        },
        role: {
            es: "Co-Desarrollador Java Backend (Arquitectura MVC, Capa DAO, Servlets y Seguridad)",
            en: "Java Backend Co-Developer (MVC Architecture, DAO Layer, Servlets & Security)"
        },
        period: "2024 - 2025"
    },
    {
        slug: "ocr-web",
        title: "Sirviendo Apuntes · OCR Web & IA",
        tagline: {
            es: "Plataforma web monorepo con IA multimodal y OCR local (WebGPU/WASM) para digitalizar apuntes y extraer texto resaltado.",
            en: "Monorepo web platform with multimodal AI and local WebGPU/WASM OCR to digitize study notes and extract highlighted text."
        },
        description: {
            es: "Evolución web fullstack del extractor OCR de escritorio, desarrollada en monorepo pnpm con React, Node.js y tres motores intercambiables: cascada Gemini Flash-Lite para extracción estricta de texto resaltado, Groq Qwen 3.8 para transcripción forense ultrarrápida, y PP-OCRv6 local (WebGPU / WASM) en Web Worker dedicado.",
            en: "Fullstack web evolution of the desktop OCR extractor, built as a pnpm monorepo with React, Node.js, and three swappable OCR engines: Gemini Flash-Lite cascade for strict highlighter extraction, Groq Qwen 3.8 for ultra-fast full-page transcription, and local PP-OCRv6 (WebGPU / WASM) inside a dedicated Web Worker."
        },
        fullDescription: {
            es: "OCR Web ('Sirviendo Apuntes') nació como un proyecto dedicado para mi novia, con el propósito de facilitarle el estudio universitario permitiéndole subir fotos de apuntes, libros o fotocopias (en lotes o individuales) y generar resúmenes automáticos únicamente a partir de las frases marcadas con resaltador. Arquitectónicamente adopta Clean Architecture modular, aislando router, controller, service y adaptadores en el backend (Node.js/Express 5), mientras el frontend (React, Tailwind CSS, Shadcn/ui y Zustand) opera con tipado estricto E2E mediante Zod y contratos compartidos en el monorepo. Integra post-procesamiento inteligente para unir palabras partidas por guiones de fin de línea, limpieza de soft hyphens y exportación directa a Microsoft Word (.docx) o ZIP.",
            en: "OCR Web ('Sirviendo Apuntes') was created as a personalized tool for my girlfriend to streamline her university studies, allowing her to upload single or batch photos of lecture notes and textbooks to generate instant summaries strictly from highlighted text. Architecturally structured under modular Clean Architecture, it separates routers, controllers, services, and AI adapters on the backend (Node.js/Express 5), while the frontend (React, Tailwind CSS, Shadcn/ui, and Zustand) ensures end-to-end type safety via Zod shared contracts. Features intelligent post-processing to reassemble hyphenated line-broken words, strip invisible soft hyphens, and export directly to Microsoft Word (.docx) or ZIP."
        },
        tags: ["React", "TypeScript", "Node.js", "Express", "Tailwind CSS", "Vite", "Zod", "Vitest", "pnpm", "Vercel", "Gemini AI", "Git", "GitHub"],
        link: "https://ocr-web-frontend.vercel.app/",
        repo: "https://github.com/martin-ratti/OCR-Web.git",
        featured: false,
        coverImage: resolveProjectImage("ocr-web", "cover"),
        gallery: [
            {
                url: resolveProjectImage("ocr-web", "cover"),
                alt: "Sirviendo Apuntes - Pantalla Principal, Selector de Motores y Dropzone",
                caption: {
                    es: "Pantalla principal con selector rápido de modo (Solo resaltador / Página entera) y motores (Gemini IA, Groq IA, Local WebGPU), dropzone animado y carga de carpetas completas.",
                    en: "Landing interface with quick mode toggle (Highlighter only / Full page) and engine selector (Gemini AI, Groq AI, Local WebGPU), animated dropzone, and folder upload."
                }
            },
            {
                url: resolveProjectImage("ocr-web", "motores-ia"),
                alt: "Espacio de Trabajo y Selector Multi-Motor de OCR e IA",
                caption: {
                    es: "Workspace con apunte real cargado, menú de motores actualizados (Gemini Flash-Lite Cascada, Groq Qwen 3.8 y Local PP-OCRv6 WebGPU) y exportación directa a Word (.docx) o ZIP.",
                    en: "Workspace showing a real handwritten note, updated engine dropdown (Gemini Flash-Lite Cascade, Groq Qwen 3.8, and Local PP-OCRv6 WebGPU), and direct Word (.docx) or ZIP export."
                }
            },
            {
                url: resolveProjectImage("ocr-web", "modo-oscuro"),
                alt: "Modo Oscuro de Alto Contraste y Visor de Apuntes",
                caption: {
                    es: "Modo oscuro unificado en todo el workspace con controles de zoom, rotación de hojas, ajuste tipográfico (16px) y editor en vivo para jornadas de estudio nocturno.",
                    en: "Unified high-contrast dark mode across the workspace featuring zoom controls, page rotation, typography sizing (16px), and live note editor for late-night study sessions."
                }
            }
        ],
        features: [
            {
                title: { es: "Tres Motores de OCR Seleccionables", en: "Three Swappable OCR Engines" },
                desc: {
                    es: "Cascada Gemini Flash-Lite (con pre-filtro cromático Zero-Quota Waste y acción de resaltado forzado), Groq Qwen 3.8 (inferencia LPU ultrarrápida) y motor local PP-OCRv6 sobre WebGPU / WASM con pesos cacheados en CacheStorage para uso 100% offline.",
                    en: "Gemini Flash-Lite cascade (with Zero-Quota Waste color pre-filter and force-highlight action), Groq Qwen 3.8 (ultra-fast LPU inference), and local PP-OCRv6 on WebGPU / WASM with CacheStorage model caching for 100% offline processing."
                }
            },
            {
                title: { es: "Monorepo pnpm & Clean Architecture", en: "pnpm Monorepo & Clean Architecture" },
                desc: {
                    es: "Estructura modular desacoplada con pnpm Workspaces, separando la API Express 5 en backend, la SPA React + Web Workers en frontend y un paquete compartido (@ocr-web/shared) con esquemas de validación Zod.",
                    en: "Decoupled modular architecture with pnpm workspaces, isolating the Express 5 API backend, the React + Web Workers SPA frontend, and a shared Zod contract package (@ocr-web/shared)."
                }
            },
            {
                title: { es: "Post-Procesamiento Tipográfico Inteligente", en: "Intelligent Typographic Post-Processing" },
                desc: {
                    es: "Algoritmo de reconstrucción para palabras partidas por saltos de línea con guión (ej. 'cons-\\ntitución' a 'constitución'), supresión de soft hyphens invisibles y preservación de sangrías y listas.",
                    en: "Reconstruction algorithm for line-broken hyphenated words ('cons-\\ntitución' into 'constitución'), invisible soft-hyphen stripping, and list indentation protection."
                }
            },
            {
                title: { es: "Procesamiento en Lotes & Caché Segregada", en: "Batch Processing & Partitioned Cache" },
                desc: {
                    es: "Store reactivo con Zustand que soporta carga múltiple con seguimiento de progreso y descarga en ZIP, segregando la caché por motor, archivo y peso binario para evitar llamadas redundantes.",
                    en: "Reactive Zustand store supporting multi-image batch processing with progress tracking and ZIP export, partitioning cache by engine, filename, and file size to avoid redundant API calls."
                }
            },
            {
                title: { es: "Exportación Directa a Word (.docx) & Portapapeles", en: "Direct Word (.docx) & Clipboard Export" },
                desc: {
                    es: "Generación en tiempo real de documentos Word con formato estructurado listos para imprimir o editar, junto a copiado en un solo clic.",
                    en: "Real-time generation of formatted Word (.docx) documents ready for printing or editing, alongside one-click clipboard copying."
                }
            },
            {
                title: { es: "Validación Binaria Estricta (Magic Bytes)", en: "Strict Binary Validation (Magic Bytes)" },
                desc: {
                    es: "Inspección binaria en la capa de subida con Multer para validar los encabezados reales de archivo (JPEG, PNG, WebP, GIF, HEIC) previniendo ataques de inyección y archivos corruptos.",
                    en: "Binary inspection at the Multer upload layer verifying file header signatures (JPEG, PNG, WebP, GIF, HEIC) preventing injection attacks and corrupted uploads."
                }
            }
        ],
        architecture: {
            es: "Monorepo orquestado con pnpm Workspaces. Backend en Node.js y Express 5 estructurado en capas (Routers, Controllers, Services y AI Adapters) consumiendo Google GenAI y Groq Cloud API. Frontend en React 19, TypeScript y Tailwind CSS con Shadcn/ui, Radix UI y Web Workers dedicados ejecutando PP-OCRv6 (WebGPU / ONNX Runtime Web). Validación compartida de contratos con Zod y despliegue continuo en Vercel.",
            en: "Monorepo orchestrated with pnpm workspaces. Node.js and Express 5 layered backend (Routers, Controllers, Services, and AI Adapters) consuming Google GenAI and Groq Cloud APIs. Frontend built with React 19, TypeScript, and Tailwind CSS with Shadcn/ui, Radix UI, and dedicated Web Workers running PP-OCRv6 (WebGPU / ONNX Runtime Web). Shared Zod contract validation and continuous Vercel deployment."
        },
        challenges: {
            es: "Diseñar prompts multimodales con failover automático entre modelos capaz de aislar exclusivamente texto resaltado, junto con un motor local PP-OCRv6 en WebGPU/WASM ejecutado en Web Worker con balance de blancos adaptativo para apuntes con luz cálida sin enviar datos a servidores externos.",
            en: "Designing multimodal prompts with automatic model failover to isolate highlighted text exclusively, alongside a local PP-OCRv6 engine on WebGPU/WASM running inside a Web Worker with adaptive white-balance for warm-lit notes and zero external data transfers."
        },
        role: {
            es: "Creador & Desarrollador Full Stack (Monorepo, Integración IA & UI/UX)",
            en: "Creator & Full Stack Developer (Monorepo, AI Integration & UI/UX)"
        },
        period: "2026"
    },
    {
        slug: "timelens",
        title: "TimeLens - Bienestar Digital Android",
        tagline: {
            es: "App nativa Android en Kotlin y Jetpack Compose para métricas reales de uso, límites por app y bienestar digital 100% offline.",
            en: "Native Android app in Kotlin & Jetpack Compose for real usage analytics, per-app limits, and 100% offline digital wellbeing."
        },
        description: {
            es: "Aplicación nativa de Android desarrollada en Kotlin con Jetpack Compose y Material 3 bajo Clean Architecture + MVVM. Analiza eventos reales del sistema (UsageEvents) sin datos simulados, ofrece límites diarios por aplicación con alertas en WorkManager, widgets nativos con Jetpack Glance, diagnóstico de hábitos y suite de 95 tests unitarios.",
            en: "Native Android application built with Kotlin, Jetpack Compose, and Material 3 under Clean Architecture + MVVM. Analyzes real OS events (UsageEvents) with zero simulated data, provides per-app daily limits via WorkManager alerts, native Jetpack Glance widgets, habit diagnostics, and a 95-test unit suite."
        },
        fullDescription: {
            es: "TimeLens es una aplicación nativa de Android orientada al bienestar digital y la privacidad absoluta: procesa y almacena toda la telemetría localmente en el dispositivo sin servidores externos ni rastreadores. A diferencia de herramientas que estiman métricas, consulta directamente los eventos reales del kernel mediante UsageStatsManager y UsageEvents, reconstruyendo sesiones continuas con manejo de cruces de medianoche y eventos de apagado. Su interfaz de estética Cyberpunk Neón (junto a modos Claro y Sistema) corre a 60/120 Hz con renderizado nativo de íconos en ImageBitmap y gráficos en Compose Canvas.",
            en: "TimeLens is a native Android application focused on digital wellbeing and strict privacy: all telemetry is processed and stored locally on-device with zero external servers or trackers. Rather than estimating metrics, it queries real OS events via UsageStatsManager and UsageEvents, reconstructing continuous sessions across midnight boundaries and shutdown events. Its Cyberpunk Neon interface (alongside Light and System themes) runs smoothly at 60/120 Hz using native ImageBitmap icon rendering and Compose Canvas charts."
        },
        tags: ["Kotlin", "Jetpack Compose", "Android", "Git", "GitHub"],
        repo: "https://github.com/martin-ratti/Healty_Hour",
        featured: false,
        coverImage: resolveProjectImage("timelens", "cover"),
        gallery: [
            {
                url: resolveProjectImage("timelens", "cover"),
                alt: "TimeLens - Panel Principal, Top Apps y Tendencias en Android",
                caption: {
                    es: "Vista general con anillo de meta diaria en Compose Canvas, ranking de aplicaciones reales y evolución semanal.",
                    en: "Overview featuring the daily goal ring in Compose Canvas, real app rankings, and weekly trends."
                }
            },
            {
                url: resolveProjectImage("timelens", "bienestar-apps"),
                alt: "TimeLens - Filtro por Categorías y Diagnóstico de Hábitos",
                caption: {
                    es: "Desglose por categorías con carga nativa de íconos y panel de diagnóstico de hábitos con score diario y regla 20-20-20.",
                    en: "Category breakdown with native app icon loading and habit diagnostic sheet scoring daily wellbeing."
                }
            },
            {
                url: resolveProjectImage("timelens", "tendencias-detalle"),
                alt: "TimeLens - Gráficos de Tendencias Semanales y Actividad por Hora",
                caption: {
                    es: "Tendencia comparativa de 7/14/30 días desde Room junto al histograma horario de 24h por aplicación.",
                    en: "7/14/30-day comparative trends backed by Room alongside per-app 24-hour usage histograms."
                }
            },
            {
                url: resolveProjectImage("timelens", "detalle-ajustes"),
                alt: "TimeLens - Detalle de App, Límites Diarios y Configuración",
                caption: {
                    es: "Métricas detalladas por aplicación, topes diarios configurables, selector de tema Neón/Claro/Sistema y exportación CSV.",
                    en: "Per-app session analytics, configurable daily caps, Neon/Light/System theme switcher, and CSV export."
                }
            }
        ],
        features: [
            {
                title: { es: "Integridad 100% Real con UsageEvents", en: "100% Real Data Integrity via UsageEvents" },
                desc: {
                    es: "Reconstrucción exacta de sesiones continuas, desbloqueos y horarios pico desde UsageStatsManager, descartando datos artificiales con purga atómica en Room.",
                    en: "Exact reconstruction of continuous sessions, unlocks, and peak hours from UsageStatsManager, enforcing zero simulated metrics with atomic Room cleanup."
                }
            },
            {
                title: { es: "Límites Diarios por App & Alertas WorkManager", en: "Per-App Daily Limits & WorkManager Alerts" },
                desc: {
                    es: "Definición de topes diarios personalizados por aplicación con barras de progreso reactivas y notificaciones preventivas automáticas al alcanzar el 80% y 100%.",
                    en: "Custom daily time caps per application with reactive progress bars and proactive background notifications at 80% and 100% thresholds."
                }
            },
            {
                title: { es: "Detalle Enriquecido con 6 KPIs & Horario Pico", en: "Rich App Detail with 6 KPIs & Hourly Chart" },
                desc: {
                    es: "Vista dedicada por aplicación con tiempo diario, frecuencia de aperturas, sesión récord, promedio, tendencia semanal, gráfico por hora (00-23 hs) y accesos directos del sistema.",
                    en: "Dedicated per-app screen showing daily usage, opening frequency, longest continuous session, average duration, weekly trend, 24h bar chart, and OS shortcuts."
                }
            },
            {
                title: { es: "Diagnóstico de Hábitos & Cierre del Día", en: "Habit Diagnostics & Nightly Debrief" },
                desc: {
                    es: "Motor dinámico de recomendaciones sin hardcoding con score de bienestar (0-100), franja diurna más productiva y modo de revisión nocturna automática a las 22:00 hs.",
                    en: "Dynamic rule-based recommendation engine with wellbeing score (0-100), most productive daytime window, and scheduled 22:00 nightly debrief mode."
                }
            },
            {
                title: { es: "Widgets Nativos con Jetpack Glance & Compose Canvas", en: "Native Jetpack Glance Widgets & Compose Canvas" },
                desc: {
                    es: "Widgets de pantalla de inicio actualizados en segundo plano y gráficos semanales/horarios dibujados directamente en Canvas con soporte de temas Oscuro Neón, Claro y Sistema.",
                    en: "Home screen widgets updated in the background alongside weekly and hourly charts drawn directly on Compose Canvas with Neon Dark, Light, and System themes."
                }
            },
            {
                title: { es: "Suite de 95 Tests Unitarios en JVM", en: "95-Test JVM Unit Testing Suite" },
                desc: {
                    es: "Cobertura integral sobre cálculo de sesiones, casos de uso, mapeadores Room, preferencias reactivas, ViewModels y Workers usando MockK y Kotlinx Coroutines Test.",
                    en: "Comprehensive test coverage across session calculations, use cases, Room mappers, reactive preferences, ViewModels, and Workers using MockK and Coroutines Test."
                }
            }
        ],
        architecture: {
            es: "Clean Architecture + MVVM con flujo unidireccional de datos (UDF) en 100% Kotlin. Capa presentation en Jetpack Compose, Material 3, Navigation Compose y Jetpack Glance; capa domain pura con SessionCalculator y UseCases; capa data con Room, SharedPreferences reactivo vía StateFlow y UsageDataSource; inyección de dependencias con Hilt y tareas periódicas con WorkManager.",
            en: "Clean Architecture + MVVM with Unidirectional Data Flow (UDF) in 100% Kotlin. Presentation layer built with Jetpack Compose, Material 3, Navigation Compose, and Jetpack Glance; pure domain layer with SessionCalculator and UseCases; data layer using Room, StateFlow-backed preferences, and UsageDataSource; dependency injection with Hilt and background scheduling via WorkManager."
        },
        challenges: {
            es: "Calcular sesiones continuas reales a partir de eventos crudos del sistema manejando cruces de medianoche y apagados del dispositivo, manteniendo un scroll fluido a 60/120 Hz mediante renderizado nativo de íconos en ImageBitmap y shaders memorizados en Canvas.",
            en: "Computing accurate continuous sessions from raw OS events across midnight boundaries and shutdown events, while sustaining 60/120 Hz scroll fluidity via native ImageBitmap icon caching and memoized Canvas shaders."
        },
        role: {
            es: "Creador & Desarrollador Android (Kotlin / Jetpack Compose)",
            en: "Creator & Android Developer (Kotlin / Jetpack Compose)"
        },
        period: "2026"
    },
    {
        slug: "extractor-ocr",
        title: "Extractor OCR - Green & Pink",
        tagline: {
            es: "Herramienta de visión artificial para extraer texto resaltado por color en documentos.",
            en: "Computer vision tool to extract color-highlighted text from documents."
        },
        description: {
            es: "Herramienta de escritorio con visión artificial para extraer texto resaltado de documentos utilizando OpenCV y Tesseract.",
            en: "Desktop tool with computer vision to extract highlighted text from documents using OpenCV and Tesseract."
        },
        fullDescription: {
            es: "Extractor OCR permite a estudiantes e investigadores acelerar la creación de resúmenes extrayendo únicamente las secciones de texto que fueron marcadas con resaltador (amarillo, verde, rosa y violeta) en libros o apuntes escaneados.",
            en: "Extractor OCR helps students and researchers quickly create study summaries by extracting only text regions marked with highlighters (yellow, green, pink, and purple) in scanned books or notes."
        },
        tags: ["Python", "Git", "GitHub"],
        repo: "https://github.com/martin-ratti/Extractor-OCR-Python",
        featured: false,
        coverImage: resolveProjectImage("extractor-ocr", "cover"),
        gallery: [
            {
                url: resolveProjectImage("extractor-ocr", "cover"),
                alt: "Extractor OCR Green & Pink - Procesamiento de Apuntes Resaltados",
                caption: {
                    es: "Interfaz de escritorio en CustomTkinter con procesamiento por lotes, vista previa del documento resaltado, texto extraído con limpieza inteligente y exportación a .txt.",
                    en: "CustomTkinter desktop interface featuring batch processing, highlighted document preview, cleaned extracted text, and .txt export."
                }
            }
        ],
        features: [
            {
                title: { es: "Segmentación de Color HSV", en: "HSV Color Segmentation" },
                desc: {
                    es: "Aislamiento preciso de trazos de resaltador ignorando sombras y suciedad del papel escaneado.",
                    en: "Accurate highlighter stroke isolation ignoring background paper shadows and noise."
                }
            },
            {
                title: { es: "OCR Óptico con Tesseract", en: "Optical OCR with Tesseract" },
                desc: {
                    es: "Reconocimiento óptico de caracteres optimizado con preprocesamiento de binarización morfológica.",
                    en: "Optical character recognition enhanced with morphological binarization preprocessing."
                }
            }
        ],
        architecture: {
            es: "Aplicación de escritorio en Python con interfaz gráfica Tkinter, procesamiento de imágenes con OpenCV y motor OCR Tesseract.",
            en: "Python desktop application with Tkinter GUI, OpenCV image processing, and Tesseract OCR engine."
        },
        role: {
            es: "Desarrollador de Algoritmos & Python",
            en: "Algorithm & Python Developer"
        },
        period: "2023"
    }
];
