import { resolveProjectImage } from "../utils/projectAssets";

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
        tags: ["C#", ".NET", "WinForms", "SQLite", "Dapper", "Clean Architecture", "Astro", "Tailwind CSS", "TypeScript", "Inno Setup"],
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
            },
            {
                url: resolveProjectImage("zenith-pos", "landing"),
                alt: "Landing Page Oficial Zenith POS",
                caption: {
                    es: "Landing page comercial moderna desarrollada con Astro 5 y Tailwind CSS v4, optimizada para conversión y SEO con puntuación 99+ en PageSpeed.",
                    en: "Modern commercial landing page developed with Astro 5 and Tailwind CSS v4, conversion and SEO-optimized with 99+ PageSpeed score."
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
            es: "PCFIX es una plataforma integral de comercio electrónico de componentes tecnológicos diseñada para escalar. Implementa una arquitectura monorepo con Turborepo, combinando un frontend híbrido ultrarrápido con Server Islands y una API REST robusta con Node.js y PostgreSQL.",
            en: "PCFIX is a scalable tech e-commerce platform. It features a Turborepo monorepo architecture, combining an ultra-fast hybrid frontend using Server Islands with a robust Node.js and PostgreSQL REST API."
        },
        tags: ["Astro", "React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "Tailwind CSS", "Vercel", "Railway", "Jest", "Vitest", "Playwright", "Prisma", "Express", "GitHub", "Scrum", "Kanban"],
        link: "https://www.pcfixbaru.com.ar",
        repo: "https://github.com/martin-ratti/PCFIX-Baru",
        featured: true,
        coverImage: resolveProjectImage("pcfix", "cover"),
        gallery: [
            {
                url: resolveProjectImage("pcfix", "cover"),
                alt: "Tienda Online PCFIX y Pipeline Monorepo",
                caption: {
                    es: "Catálogo de productos con filtrado instantáneo y flujo de integración continua CI/CD.",
                    en: "Product catalog with instant filtering and CI/CD continuous integration pipeline."
                }
            },
            {
                url: resolveProjectImage("pcfix", "admin"),
                alt: "Panel Administrativo y Business Intelligence",
                caption: {
                    es: "Dashboard administrativo para control de stock, pedidos en tránsito y facturación mensual.",
                    en: "Administrative dashboard for inventory control, active orders, and monthly revenue."
                }
            }
        ],
        features: [
            {
                title: { es: "Arquitectura Monorepo", en: "Monorepo Architecture" },
                desc: {
                    es: "Gestión unificada de Frontend, Backend y paquetes compartidos mediante Turborepo y NPM Workspaces.",
                    en: "Unified management of Frontend, Backend, and shared packages using Turborepo and NPM Workspaces."
                }
            },
            {
                title: { es: "Astro Server Islands", en: "Astro Server Islands" },
                desc: {
                    es: "Renderizado estático para la estructura principal con islas dinámicas de React para el carrito y autenticación.",
                    en: "Static rendering for primary layout combined with dynamic React islands for cart and auth."
                }
            },
            {
                title: { es: "Testing Automatizado End-to-End", en: "Automated E2E Testing" },
                desc: {
                    es: "Batería de pruebas automatizadas con Playwright y Vitest ejecutadas en cada Pull Request con GitHub Actions.",
                    en: "Automated test suite with Playwright and Vitest executed on every Pull Request with GitHub Actions."
                }
            },
            {
                title: { es: "Infraestructura Contenerizada", en: "Containerized Infrastructure" },
                desc: {
                    es: "Ambiente local y de producción estandarizado con Docker para PostgreSQL y servicios auxiliares.",
                    en: "Standardized local and production environments using Docker for PostgreSQL and auxiliary services."
                }
            }
        ],
        architecture: {
            es: "Frontend desplegado en Vercel comunicándose con una API Node.js/Express en Railway, utilizando Prisma ORM sobre PostgreSQL y Docker.",
            en: "Frontend deployed on Vercel communicating with a Node.js/Express API on Railway, using Prisma ORM on PostgreSQL and Docker."
        },
        challenges: {
            es: "Optimizar el tiempo de carga del catálogo inicial manteniendo la reactividad del carrito y asegurar una sincronización sin latencia de órdenes concurrentes.",
            en: "Optimizing initial catalog load speeds while preserving cart reactivity and ensuring zero-latency concurrency in orders."
        },
        role: {
            es: "Full Stack Lead & Arquitecto Monorepo",
            en: "Full Stack Lead & Monorepo Architect"
        },
        period: "2024 - 2025"
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
        tags: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "Firebase", "Firestore", "Vitest", "Playwright", "GitHub Actions", "Vite"],
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
            es: "Frontend reactivo construido en React 19, TypeScript y Tailwind CSS v4 empaquetado con Vite; backend en Node.js y Express para tareas programadas y despacho de correos vía Resend; persistencia multi-dispositivo en Firebase (Auth y Firestore) con suite de testing en Vitest, Playwright y CI/CD en GitHub Actions.",
            en: "Reactive frontend built on React 19, TypeScript, and Tailwind CSS v4 bundled with Vite; Node.js and Express backend handling scheduled tasks and Resend email dispatches; multi-device persistence in Firebase (Auth and Firestore), backed by Vitest, Playwright, and GitHub Actions CI/CD."
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
        title: "TicketApp - Venta de Entradas",
        tagline: {
            es: "Marketplace de eventos con pasarela Stripe y generación de tickets PDF con QR.",
            en: "Event marketplace with Stripe gateway and QR-coded PDF ticket generation."
        },
        description: {
            es: "Marketplace de eventos completo con gestión de carritos, pagos mediante Stripe, generación de tickets PDF y panel administrativo.",
            en: "Complete event marketplace with cart management, Stripe payments, PDF ticket generation, and admin panel."
        },
        fullDescription: {
            es: "TicketApp conecta a organizadores de eventos con asistentes mediante una experiencia de compra fluida y segura. Integra pasarela de pagos internacional, validación de accesos y un asistente virtual para responder dudas sobre los espectáculos.",
            en: "TicketApp connects event organizers with attendees through a frictionless and secure booking experience. Features international payment gateway integration, gate access validation, and an AI chat assistant for queries."
        },
        tags: ["React", "TypeScript", "Node.js", "MySQL", "Prisma", "Express", "Jest", "Vitest", "Playwright", "Scrum", "Kanban"],
        repo: "https://github.com/valenpeppi/FrontEnd-Venta-de-Entradas",
        featured: false,
        coverImage: resolveProjectImage("ticketapp", "cover"),
        gallery: [
            {
                url: resolveProjectImage("ticketapp", "cover"),
                alt: "Cartelera de Eventos y Ticket PDF TicketApp",
                caption: {
                    es: "Catálogo de espectáculos y ticket oficial generado en PDF con código de barras y hash criptográfico.",
                    en: "Show catalog and official PDF ticket generated with barcode and cryptographic security hash."
                }
            }
        ],
        features: [
            {
                title: { es: "Checkout con Stripe", en: "Stripe Checkout" },
                desc: {
                    es: "Procesamiento seguro de tarjetas de crédito y débito con webhooks para confirmación inmediata.",
                    en: "Secure credit/debit card processing with automated webhooks for instant verification."
                }
            },
            {
                title: { es: "Generador de Tickets PDF", en: "PDF Ticket Generator" },
                desc: {
                    es: "Generación en servidor de comprobantes listos para imprimir o descargar con identificadores únicos.",
                    en: "Server-side generation of printable and downloadable passes with unique identifiers."
                }
            },
            {
                title: { es: "Control de Acceso y Roles", en: "RBAC & Gate Control" },
                desc: {
                    es: "Módulos específicos para Comprador, Productor y Validador de puertas en el recinto.",
                    en: "Distinct role modules for Buyers, Event Producers, and Gate Ticket Scanners."
                }
            }
        ],
        architecture: {
            es: "Frontend en React con TypeScript y Context API. Backend en Express y Prisma ORM sobre MySQL con endpoints autenticados por JWT.",
            en: "Frontend in React with TypeScript and Context API. Backend in Express and Prisma ORM on MySQL with JWT authenticated endpoints."
        },
        challenges: {
            es: "Asegurar la consistencia transaccional durante los picos de venta masiva para evitar la sobreventa de cupos.",
            en: "Ensuring transactional consistency during sudden flash sales to prevent capacity overselling."
        },
        role: {
            es: "Desarrollador Full Stack",
            en: "Full Stack Developer"
        },
        period: "2024"
    },
    {
        slug: "buyjugador",
        title: "BuyJugador - Gestión Integral",
        tagline: {
            es: "Sistema multicapa en .NET 8 con clientes sincronizados Web (Blazor) y Desktop.",
            en: "Multi-tier .NET 8 system with synchronized Web (Blazor) and Desktop clients."
        },
        description: {
            es: "Sistema multicapa para gestión de inventario y ventas. Clientes Web (Blazor) y Desktop (WinForms) consumiendo una misma API REST en .NET.",
            en: "Multi-layer system for inventory and sales management. Web (Blazor) and Desktop (WinForms) clients consuming a single .NET REST API."
        },
        fullDescription: {
            es: "BuyJugador proporciona a empresas de tecnología y videojuegos una solución unificada de stock y ventas. Los operadores de mostrador utilizan una aplicación WinForms optimizada para velocidad, mientras que la administración supervisa métricas y reportes desde una aplicación web moderna en Blazor WebAssembly.",
            en: "BuyJugador delivers a unified inventory and sales solution for gaming and tech retailers. Store operators utilize a speed-optimized WinForms desktop app, while managers monitor analytics from a modern Blazor WebAssembly portal."
        },
        tags: [".NET WebAPI", "Blazor", "WinForms", "SQL Server", "SQL", "C#"],
        repo: "https://github.com/agussantinelli/ProyectoIDE-BuyJugador",
        featured: false,
        coverImage: resolveProjectImage("buyjugador", "cover"),
        gallery: [
            {
                url: resolveProjectImage("buyjugador", "cover"),
                alt: "Panel Blazor Web y Cliente Desktop BuyJugador",
                caption: {
                    es: "Reportes analíticos con ScottPlot en Blazor Web y grilla de stock en WinForms.",
                    en: "Analytics reports with ScottPlot in Blazor Web and inventory grid in WinForms."
                }
            }
        ],
        features: [
            {
                title: { es: "Clientes Múltiples Sincronizados", en: "Synchronized Multi-Client" },
                desc: {
                    es: "Lógica de negocio compartida mediante cliente API común consumido por Blazor WebAssembly y WinForms.",
                    en: "Shared business logic via common ApiClient consumed by both Blazor WebAssembly and WinForms."
                }
            },
            {
                title: { es: "Reportes con ScottPlot", en: "ScottPlot Data Reports" },
                desc: {
                    es: "Generación de gráficos de evolución de ventas y tendencias exportables a PDF e imagen.",
                    en: "Sales evolution and trend visualization exportable to PDF and high-res image."
                }
            },
            {
                title: { es: "Seguridad JWT en .NET 8", en: ".NET 8 JWT Security" },
                desc: {
                    es: "Autenticación centralizada y control granular de permisos en la capa WebAPI.",
                    en: "Centralized authentication and granular permission claims in the WebAPI layer."
                }
            }
        ],
        architecture: {
            es: "Arquitectura en capas: Core de entidades, WebAPI REST en ASP.NET Core 8 con SQL Server, y clientes desacoplados WinForms y Blazor.",
            en: "Layered architecture: Entity Core, ASP.NET Core 8 WebAPI with SQL Server, and decoupled WinForms and Blazor clients."
        },
        challenges: {
            es: "Compartir modelos y contratos entre la aplicación web en WebAssembly y la aplicación de escritorio nativa sin duplicar código.",
            en: "Sharing data contracts and models between the WebAssembly web app and desktop client without code duplication."
        },
        role: {
            es: "Desarrollador Backend & Desktop .NET",
            en: ".NET Backend & Desktop Developer"
        },
        period: "2024"
    },
    {
        slug: "impulsame",
        title: "ImpulsaMe - Crowdfunding Java",
        tagline: {
            es: "Plataforma de financiamiento colectivo desarrollada con arquitectura MVC pura en Java.",
            en: "Crowdfunding platform built with pure MVC architecture in Java."
        },
        description: {
            es: "Plataforma de financiamiento colectivo con moderación y pagos. Arquitectura MVC pura con Java Servlets, JSP y MySQL.",
            en: "Crowdfunding platform with moderation and payments. Pure MVC architecture with Java Servlets, JSP, and MySQL."
        },
        fullDescription: {
            es: "ImpulsaMe es una plataforma web donde creadores de proyectos innovadores pueden recaudar fondos mediante aportes comunitarios. Incluye ciclo de vida de campañas (pendiente, activa, financiada), aportes seguros con Stripe y filtros de seguridad por roles.",
            en: "ImpulsaMe is a crowdfunding web platform where creators can fund innovative projects through community backing. Features full campaign lifecycles (pending, active, funded), Stripe contributions, and role security filters."
        },
        tags: ["Java", "JSP", "MySQL", "Maven", "Java Servlets"],
        repo: "https://github.com/martin-ratti/ProyectoJava-Crowdfunding",
        featured: false,
        coverImage: resolveProjectImage("impulsame", "cover"),
        gallery: [
            {
                url: resolveProjectImage("impulsame", "cover"),
                alt: "Campaña en ImpulsaMe y progreso de recaudación",
                caption: {
                    es: "Página de proyecto con cálculo de metas porcentuales y recepción de fondos.",
                    en: "Project campaign page with dynamic funding percentage and donation gateway."
                }
            }
        ],
        features: [
            {
                title: { es: "Patrón DAO & MVC Puro", en: "Pure DAO & MVC Pattern" },
                desc: {
                    es: "Estructura limpia sin frameworks pesados, aplicando principios sólidos de ingeniería en Java.",
                    en: "Clean decoupled architecture without heavy frameworks, demonstrating foundational Java engineering."
                }
            },
            {
                title: { es: "Seguridad con Filtros Servlet", en: "Servlet Filter Security" },
                desc: {
                    es: "Protección perimetral de rutas y autorización de usuarios mediante AuthFilter.",
                    en: "Perimeter route protection and user role authorization with AuthFilter."
                }
            }
        ],
        architecture: {
            es: "Java Servlets actuando como controladores, vistas renderizadas con JSP y JSTL, y capa de acceso a datos MySQL mediante Data Access Objects (DAO).",
            en: "Java Servlets acting as controllers, JSP & JSTL view layer, and MySQL data access via Data Access Objects (DAO)."
        },
        role: {
            es: "Desarrollador Java Backend",
            en: "Java Backend Developer"
        },
        period: "2023 - 2024"
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
                alt: "Extracción selectiva de texto resaltado con OpenCV",
                caption: {
                    es: "Segmentación en espacio HSV y filtrado inteligente de texto por color de resaltado.",
                    en: "HSV color-space segmentation and intelligent text filtering by highlight color."
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
    },
    {
        slug: "animall-forrajeria",
        title: "Animall Forrajería - Legacy",
        tagline: {
            es: "Sistema comercial de facturación y control de caja diaria para retail veterinario.",
            en: "Commercial invoicing and retail register system for pet & agricultural stores."
        },
        description: {
            es: "Sistema de punto de venta (POS) y gestión de caja desarrollado en C#. Software robusto para operaciones diarias de comercio.",
            en: "Point of Sale (POS) and cash management system developed in C#. Robust software for daily retail operations."
        },
        fullDescription: {
            es: "Software comercial desarrollado para automatizar el mostrador de ventas, inventario de alimentos balanceados y cuentas corrientes de clientes en una forrajería y veterinaria comercial.",
            en: "Commercial software engineered to streamline retail sales, animal feed inventory, and customer credit lines for a veterinary and agricultural business."
        },
        tags: ["C#", ".NET WebAPI", "SQL Server", "WinForms", "Git", "GitHub"],
        repo: "https://github.com/martin-ratti/AnimallForrajeria-version-vieja-",
        featured: false,
        coverImage: resolveProjectImage("animall-forrajeria", "cover"),
        gallery: [
            {
                url: resolveProjectImage("animall-forrajeria", "cover"),
                alt: "Sistema de Mostrador y Caja Diaria Animall",
                caption: {
                    es: "Módulo de gestión de ventas por rubro, arqueo de caja y emisión de comprobantes.",
                    en: "Category sales management, register balance audit, and receipt printing."
                }
            }
        ],
        features: [
            {
                title: { es: "Gestión de Cuentas Corrientes", en: "Customer Credit Accounts" },
                desc: {
                    es: "Seguimiento riguroso de deudas de clientes con historial de pagos y límites de crédito.",
                    en: "Accurate tracking of customer balances with transaction history and credit ceilings."
                }
            },
            {
                title: { es: "Arqueo de Fondos", en: "Cash Register Audits" },
                desc: {
                    es: "Conciliación automática de efectivo, tarjetas y transferencias al cierre de cada turno.",
                    en: "Automatic reconciliation of cash, card payments, and wire transfers at shift close."
                }
            }
        ],
        architecture: {
            es: "Arquitectura cliente-servidor con Windows Forms en C# y base de datos relacional SQL Server.",
            en: "Client-server architecture with C# Windows Forms and SQL Server relational database."
        },
        role: {
            es: "Desarrollador C# & SQL Server",
            en: "C# & SQL Server Developer"
        },
        period: "2022 - 2023"
    }
];
