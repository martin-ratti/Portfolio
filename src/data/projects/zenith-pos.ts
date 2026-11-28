import { resolveProjectImage } from "../../utils/projectAssets.ts";
import type { Project } from "./types.ts";

export const zenithPos: Project = {
    slug: "zenith-pos",
    title: {
        es: "Zenith POS - Ecosistema de Punto de Venta & Landing",
        en: "Zenith POS - Point of Sale Ecosystem & Landing",
    },
    tagline: {
        es: "Punto de Venta White-label de alto rendimiento, 100% offline, modular y blindado por Hardware ID.",
        en: "High-performance White-label Point of Sale, 100% offline, modular, and secured by Hardware ID.",
    },
    description: {
        es: "Ecosistema comercial integral desarrollado de principio a fin como proyecto individual bajo Clean Architecture (Onion). Combina una aplicación nativa Windows ultrarrápida (.NET / WinForms MVP), base de datos local SQLite con Dapper, inyección dinámica de temas White-label, licenciamiento criptográfico atado a hardware (Machine Binding) y landing page moderna en Astro.",
        en: "Comprehensive commercial ecosystem engineered from end to end as an individual project using Clean Architecture (Onion). Combines an ultra-fast native Windows app (.NET / WinForms MVP), local SQLite database with Dapper, dynamic White-label theme injection, cryptographic hardware-tied licensing (Machine Binding), and a modern Astro landing page.",
    },
    fullDescription: {
        es: "Zenith POS nace como respuesta a la rigidez y las altas cuotas mensuales del software de gestión tradicional. El reto técnico principal fue construir una plataforma que combinara rendimiento nativo de ultra-baja latencia en Windows con una personalización absoluta de marca (White-label), sin necesidad de recompilar el código fuente por cada cliente. La lógica de negocio está totalmente desacoplada de la interfaz mediante Clean Architecture (Onion Pattern) y MVP, permitiendo operar 100% offline ante cortes de conexión y garantizando compatibilidad desde Windows XP hasta Windows 11.",
        en: "Zenith POS was born to address the rigidity and recurring subscription fees of traditional retail software. The primary technical challenge was creating a platform that combined ultra-low latency native Windows performance with complete White-label brand customization—without recompiling source code per customer. The business logic is strictly decoupled from the UI using Clean Architecture (Onion Pattern) and MVP, enabling 100% offline operations during internet blackouts and ensuring compatibility from Windows XP up to Windows 11.",
    },
    tags: ["C#", ".NET WebAPI", "WinForms", "SQLite", "Dapper", "Astro", "Tailwind CSS", "TypeScript", "JavaScript", "Git", "GitHub"],
    link: "https://martin-ratti.github.io/Landing-Zenith/",
    repo: "https://github.com/martin-ratti/Landing-Zenith",
    featured: true,
    coverImage: resolveProjectImage("zenith-pos", "cover"),
    gallery: [
        {
            url: resolveProjectImage("zenith-pos", "cover"),
            alt: {
                es: "Terminal de Venta Rápida y Cobro Zenith POS",
                en: "Zenith POS Fast Checkout and Payment Terminal",
            },
            caption: {
                es: "Terminal de cobro con soporte para lector de código de barras, cálculo instantáneo de ticket, múltiples medios de pago (efectivo, transferencia, tarjeta, CC) e impresión térmica ESC/POS.",
                en: "Checkout terminal with barcode scanner support, instant ticket calculation, multi-payment options (cash, transfer, card, credit account), and ESC/POS thermal printing.",
            },
        },
        {
            url: resolveProjectImage("zenith-pos", "dashboard"),
            alt: {
                es: "Panel de Control Gerencial y Analíticas Zenith POS",
                en: "Zenith POS Executive Control Panel and Analytics",
            },
            caption: {
                es: "Dashboard ejecutivo con métricas de ventas en tiempo real, alertas de stock mínimo, facturación histórica y gráficos interactivos por período y categorías.",
                en: "Executive dashboard with real-time sales KPIs, low stock alerts, historical revenue, and interactive breakdown charts by date range and category.",
            },
        },
        {
            url: resolveProjectImage("zenith-pos", "inventario"),
            alt: {
                es: "Control de Inventario y Stock en Tiempo Real",
                en: "Real-Time Inventory and Stock Control",
            },
            caption: {
                es: "Módulo de inventario con búsqueda ágil, filtrado por marcas y rubros, alertas visuales de bajo stock y administración de precios.",
                en: "Inventory module featuring instant search, brand/category filtering, visual low-stock badges, and dynamic price management.",
            },
        },
        {
            url: resolveProjectImage("zenith-pos", "caja-reportes"),
            alt: {
                es: "Gestión de Caja, Turnos y Movimientos Diarios",
                en: "Cash Register, Shifts, and Daily Transactions Management",
            },
            caption: {
                es: "Control de flujo de caja y arqueo de turnos, registro de ingresos/egresos, balance en vivo y cronología auditable con anulación de movimientos.",
                en: "Cash flow and shift balancing control, income/expense logging, live balance calculations, and auditable transaction log with voiding capabilities.",
            },
        },
        {
            url: resolveProjectImage("zenith-pos", "cuentas-corrientes"),
            alt: {
                es: "Gestión de Cuentas Corrientes y Clientes",
                en: "Customer Credit Accounts Management",
            },
            caption: {
                es: "Módulo de créditos comerciales para registrar deudas de clientes, historial de pagos y emisión de comprobantes individuales.",
                en: "Commercial credit accounts module to track customer debt, payment installments, and individual payment vouchers.",
            },
        },
        {
            url: resolveProjectImage("zenith-pos", "administracion"),
            alt: {
                es: "Centro de Control y Personalización White-label",
                en: "White-Label Control Center and Customization",
            },
            caption: {
                es: "Administración de usuarios y permisos basados en roles (Admin / Empleado) con inyección dinámica de identidad visual White-label vía config.json.",
                en: "User access management with role-based permissions (Admin / Employee) and dynamic White-label visual branding injection via config.json.",
            },
        },
    ],
    features: [
        {
            title: { es: "100% Offline & Persistencia ACID con SQLite + Dapper", en: "100% Offline & ACID Persistence via SQLite + Dapper" },
            desc: {
                es: "Garantiza operatividad continua incluso ante caídas de red o cortes de servicio, persistiendo transacciones atómicas localmente con Dapper y SQLite.",
                en: "Ensures uninterrupted operation during network outages, persisting atomic transactions locally with Dapper and SQLite.",
            },
        },
        {
            title: { es: "Seguridad y Licenciamiento por Hardware ID (Machine Binding)", en: "Hardware ID Security & Machine Binding Licensing" },
            desc: {
                es: "Genera firmas criptográficas únicas vinculadas a la placa madre y procesador del equipo, blindando la distribución de licencias contra piratería sin requerir servidor central.",
                en: "Generates unique cryptographic signatures tied to the client's motherboard and CPU, securing license distribution against piracy without a central server.",
            },
        },
        {
            title: { es: "Motor White-Label & ThemeManager Dinámico", en: "White-Label Engine & Dynamic ThemeManager" },
            desc: {
                es: "Inyecta dinámicamente colores, logotipos y comprobantes según la marca del distribuidor mediante un config.json desacoplado, sin recompilar el código fuente.",
                en: "Dynamically injects colors, logos, and custom receipt layouts via decoupled config.json, without recompiling source code.",
            },
        },
        {
            title: { es: "Soporte de Impresión Térmica ESC/POS & Hardware Comercial", en: "ESC/POS Thermal Printing & Retail Hardware Support" },
            desc: {
                es: "Integración nativa con impresoras térmicas de 58mm y 80mm, comandos directos de corte de papel, apertura automática de cajón monedero y lectores de código de barras.",
                en: "Native integration with 58mm/80mm thermal receipt printers, direct paper-cut commands, automated cash drawer triggers, and barcode scanners.",
            },
        },
        {
            title: { es: "Patrón Model-View-Presenter (MVP) en WinForms", en: "Model-View-Presenter (MVP) Pattern in WinForms" },
            desc: {
                es: "Separación rigurosa entre vistas e interfaces para desacoplar eventos visuales de la lógica de presentación, garantizando una UI reactiva y ágil.",
                en: "Rigorous separation between views and interfaces to decouple UI events from presentation logic, ensuring a snappy and maintainable interface.",
            },
        },
        {
            title: { es: "Despliegue Automatizado con Inno Setup 6", en: "Automated Deployment with Inno Setup 6" },
            desc: {
                es: "Instalador empaquetado para distribución comercial profesional que asegura compatibilidad retroactiva desde Windows XP hasta Windows 11.",
                en: "Packaged installer for professional retail distribution, ensuring backwards compatibility from Windows XP to Windows 11.",
            },
        },
    ],
    architecture: {
        es: "Arquitectura Onion (Clean Architecture) multicapa: Núcleo de Dominio agnóstico a tecnología, Casos de Uso para flujos de venta y control de stock, Infraestructura con SQLite + Dapper y hardware ESC/POS, y Presentación en WinForms bajo el patrón MVP. En paralelo, la landing comercial está desarrollada con Astro 5 y Tailwind CSS v4.",
        en: "Multi-layered Onion Architecture (Clean Architecture): technology-agnostic Domain Core, Use Cases for checkout and stock flows, Infrastructure with SQLite + Dapper and ESC/POS hardware drivers, and decoupled WinForms Presentation using MVP. Accompanied by a commercial landing page built with Astro 5 and Tailwind CSS v4.",
    },
    challenges: {
        es: "El mayor reto fue garantizar rendimiento nativo en hardware de bajos recursos sin sacrificar la personalización visual en tiempo real de la marca, además de diseñar un algoritmo criptográfico de Machine Binding offline autónomo y resistente a clonaciones.",
        en: "The greatest challenge was delivering native low-latency performance on budget retail hardware without compromising real-time visual branding, alongside engineering an offline cryptographic Machine Binding algorithm resilient against machine cloning.",
    },
    role: {
        es: "Creador, Diseñador de Software & Desarrollador Full Stack",
        en: "Creator, Software Designer & Full Stack Developer",
    },
    period: "2025 - 2026",
};
