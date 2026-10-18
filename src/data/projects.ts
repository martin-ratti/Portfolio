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
        title: "Zenith POS - Landing & Desktop App",
        tagline: {
            es: "Punto de Venta comercial modular, seguro por hardware y 100% offline.",
            en: "Modular commercial Point of Sale, hardware-secured, and 100% offline."
        },
        description: {
            es: "Sistema de Punto de Venta integral con arquitectura modular (Clean Architecture). Incluye una aplicación nativa para Windows (C#) y una landing page moderna (Astro). Soporta personalización White-label, seguridad por Hardware ID y funcionamiento 100% offline.",
            en: "Comprehensive Point of Sale system with modular architecture (Clean Architecture). Includes a native Windows app (C#) and a modern landing page (Astro). Supports White-label customization, Hardware ID security, and 100% offline operation."
        },
        fullDescription: {
            es: "Zenith POS es una solución integral orientada a comercios y minoristas que requieren máxima confiabilidad sin depender de una conexión constante a internet. Combina una aplicación de escritorio nativa para Windows con alto rendimiento transaccional y una landing page comercial construida con las últimas tecnologías web.",
            en: "Zenith POS is a comprehensive solution aimed at retail businesses requiring maximum reliability without depending on constant internet connectivity. It combines a high-performance native Windows desktop application with a modern commercial landing page built using cutting-edge web technologies."
        },
        tags: ["C#", ".NET", "SQLite", "Astro", "Tailwind CSS", "WinForms", "Clean Architecture", "Dapper", "GitHub", "Git", "Windows"],
        link: "https://martin-ratti.github.io/Landing-Zenith/",
        repo: "https://github.com/martin-ratti/Landing-Zenith",
        featured: true,
        coverImage: resolveProjectImage("zenith-pos", "cover"),
        gallery: [
            {
                url: resolveProjectImage("zenith-pos", "cover"),
                alt: "Terminal de Venta Rápida Zenith POS",
                caption: {
                    es: "Terminal de venta con escaneo de código de barras, cálculo de ticket e impresión ESC/POS.",
                    en: "Point of sale terminal with barcode scanner, ticket calculation, and ESC/POS thermal printing."
                }
            },
            {
                url: resolveProjectImage("zenith-pos", "landing"),
                alt: "Landing Page Oficial de Zenith POS",
                caption: {
                    es: "Landing page oficial construida con Astro 5 y Tailwind CSS v4, logrando 99+ en PageSpeed.",
                    en: "Official landing page built with Astro 5 and Tailwind CSS v4, reaching 99+ in PageSpeed."
                }
            }
        ],
        features: [
            {
                title: { es: "100% Offline & SQLite", en: "100% Offline & SQLite" },
                desc: {
                    es: "Garantiza operatividad continua incluso ante caídas de red, persistiendo datos localmente con Dapper y SQLite.",
                    en: "Ensures uninterrupted operation during network outages, persisting data locally with Dapper and SQLite."
                }
            },
            {
                title: { es: "Seguridad por Hardware ID", en: "Hardware ID Security" },
                desc: {
                    es: "Licenciamiento atado a la máquina física del cliente mediante Machine Binding criptográfico.",
                    en: "Licensing tied to the client's physical machine using cryptographic Machine Binding."
                }
            },
            {
                title: { es: "White-Label Modular", en: "Modular White-Label" },
                desc: {
                    es: "Capacidad de adaptar logotipo, colores de interfaz y formatos de comprobante según la marca del distribuidor.",
                    en: "Allows rebranding with distributor logos, theme palettes, and custom receipt formats."
                }
            },
            {
                title: { es: "Soporte de Impresión ESC/POS", en: "ESC/POS Printing Support" },
                desc: {
                    es: "Comunicación directa con impresoras térmicas de 58mm y 80mm y apertura automática de cajón de dinero.",
                    en: "Direct communication with 58mm and 80mm thermal printers and automated cash drawer triggers."
                }
            }
        ],
        architecture: {
            es: "Desarrollado bajo Clean Architecture (Onion) separando Core de dominio, Casos de Uso, Infraestructura de datos con Dapper y Capa de Presentación WinForms desacoplada.",
            en: "Built following Clean Architecture (Onion Pattern), separating Domain Core, Use Cases, Data Infrastructure with Dapper, and a decoupled WinForms Presentation Layer."
        },
        challenges: {
            es: "El mayor reto fue garantizar la sincronización atómica de transacciones y diseñar un sistema de activación seguro sin necesidad de un servidor de validación en tiempo real.",
            en: "The greatest challenge was ensuring atomic transaction consistency and engineering a tamper-proof licensing system without requiring a real-time validation server."
        },
        role: {
            es: "Desarrollador Principal & Diseñador de Software",
            en: "Lead Developer & Software Designer"
        },
        period: "2024 - 2025"
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
        slug: "estacionar",
        title: "EstacionAR - Smart Parking (Work in Progress)",
        tagline: {
            es: "Plataforma mobile-first con geolocalización para reserva de estacionamientos.",
            en: "Mobile-first platform with geolocation for parking spot reservations."
        },
        description: {
            es: "Plataforma mobile-first para gestión y reserva de estacionamientos. Arquitectura escalable monorepo con geolocalización y pagos integrados.",
            en: "Mobile-first platform for parking management and reliable reservations. Scalable monorepo architecture with geolocation and integrated payments."
        },
        fullDescription: {
            es: "EstacionAR soluciona el problema de encontrar y gestionar espacios de estacionamiento en zonas urbanas concurridas. A través de una app móvil intuitiva, los conductores localizan cocheras libres en tiempo real y aseguran su lugar antes de llegar.",
            en: "EstacionAR addresses the challenge of finding and managing parking spaces in dense urban areas. Through an intuitive mobile app, drivers locate available spots in real time and reserve their space in advance."
        },
        tags: ["React Native", "TypeScript", "Node.js", "PostgreSQL", "Docker", "Turborepo", "Prisma", "Express", "Jest", "Vitest", "Postman", "Kanban"],
        repo: "https://github.com/agussantinelli/EstacionAR",
        featured: false,
        coverImage: resolveProjectImage("estacionar", "cover"),
        gallery: [
            {
                url: resolveProjectImage("estacionar", "cover"),
                alt: "App móvil EstacionAR y Pase Digital con QR",
                caption: {
                    es: "Mapa de geolocalización de cocheras y generación de credencial QR para acceso automático.",
                    en: "Parking geolocation map and automated QR access badge generation."
                }
            }
        ],
        features: [
            {
                title: { es: "Geolocalización en Tiempo Real", en: "Real-Time Geolocation" },
                desc: {
                    es: "Cálculo de rutas y visualización de cocheras cercanas con tarifas y disponibilidad al instante.",
                    en: "Route calculation and display of nearby spots with live rates and immediate availability."
                }
            },
            {
                title: { es: "Credenciales de Acceso QR", en: "QR Access Credentials" },
                desc: {
                    es: "Generación de pases digitales dinámicos que se escanean en la entrada del estacionamiento.",
                    en: "Dynamic digital passes scanned at the parking entrance gate."
                }
            },
            {
                title: { es: "Gestión de Múltiples Vehículos", en: "Multi-Vehicle Management" },
                desc: {
                    es: "Perfiles de autos con patente y dimensiones para recomendar cocheras adecuadas.",
                    en: "Vehicle profiles with license plates and dimensions to recommend compatible parking slots."
                }
            }
        ],
        architecture: {
            es: "App cliente construida con React Native y Expo, respaldada por un backend en Node.js, Express y Prisma conectado a una base PostgreSQL en Docker.",
            en: "Client app built with React Native and Expo, supported by a Node.js, Express, and Prisma backend connected to a Dockerized PostgreSQL database."
        },
        challenges: {
            es: "Manejo preciso de zonas horarias y prevención de reservas duplicadas o solapadas para una misma cochera física.",
            en: "Precision timezone handling and prevention of overlapping or double bookings for the same parking slot."
        },
        role: {
            es: "Desarrollador Backend & Mobile",
            en: "Backend & Mobile Developer"
        },
        period: "2024 - Presente"
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
