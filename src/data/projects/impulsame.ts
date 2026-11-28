import { resolveProjectImage } from "../../utils/projectAssets.ts";
import type { Project } from "./types.ts";

export const impulsame: Project = {
    slug: "impulsame",
    title: {
        es: "ImpulsaMe - Crowdfunding Java",
        en: "ImpulsaMe - Java Crowdfunding",
    },
    tagline: {
        es: "Plataforma web de financiamiento colectivo con arquitectura MVC en 3 capas, Java EE y pasarela Stripe.",
        en: "Crowdfunding web platform built with a 3-tier MVC architecture in Java EE, Apache Tomcat, and Stripe payments.",
    },
    description: {
        es: "Plataforma de crowdfunding desarrollada en Java (Jakarta EE / Servlets + JSP) sobre Apache Tomcat y MySQL. Incorpora un modelo de moderación estricto por roles (visitantes, inversores, creadores y administradores), pasarela de donaciones con Stripe en ARS y persistencia desacoplada con patrón DAO.",
        en: "Crowdfunding platform developed in Java (Jakarta EE / Servlets + JSP) running on Apache Tomcat and MySQL. Features role-based access control and moderation (visitors, backers, creators, and admins), Stripe donations in ARS, and decoupled persistence with the DAO pattern.",
    },
    fullDescription: {
        es: "ImpulsaMe es una plataforma integral de financiamiento colectivo desarrollada en equipo para la UTN FRRo junto a Joaquín Peralta y Agustín Santinelli. Permite a creadores publicar proyectos innovadores, recibir donaciones y compartir avances con su comunidad. La aplicación implementa una arquitectura en tres capas (presentación, control y acceso a datos) sin recurrir a frameworks pesados, aplicando servlets como controladores, vistas JSP con JSTL, un filtro central AuthFilter para control de acceso basado en roles (RBAC), hashing de contraseñas con BCrypt, pasarela de donaciones en ARS vía Stripe Checkout con identificador de intento UUID anti-duplicados y almacenamiento seguro de imágenes con nombres UUID.",
        en: "ImpulsaMe is a full-featured crowdfunding platform developed as a team project at UTN FRRo alongside Joaquín Peralta and Agustín Santinelli. It empowers creators to launch innovative campaigns, receive community donations, and post project milestones. Built with a 3-tier architecture (presentation, control, and data access) without heavy frameworks, the platform leverages Servlets as controllers, SSR JSP views with JSTL, a centralized AuthFilter for role-based access control (RBAC), BCrypt password hashing, ARS donation processing via Stripe Checkout with UUID idempotency keys to prevent duplicate charges, and secure image uploads with UUID filenames.",
    },
    tags: ["Java", "Java Servlets", "JSP", "MySQL", "Maven", "Tomcat", "Stripe", "Git", "GitHub"],
    repo: "https://github.com/agussantinelli/ImpulsaMe-Java",
    featured: false,
    coverImage: resolveProjectImage("impulsame", "cover"),
    gallery: [
        {
            url: resolveProjectImage("impulsame", "cover"),
            alt: {
                es: "Pantalla de Inicio y Explorador de Campañas - ImpulsaMe",
                en: "Home Screen and Campaign Explorer - ImpulsaMe",
            },
            caption: {
                es: "Página principal con hero interactivo, catálogo de iniciativas activas y accesos rápidos para exploradores y nuevos creadores.",
                en: "Landing page featuring hero section, active project catalog, and quick-start actions for backers and creators.",
            },
        },
        {
            url: resolveProjectImage("impulsame", "detalle-proyecto"),
            alt: {
                es: "Detalle de Proyecto y Barra de Recaudación",
                en: "Project Detail and Fundraising Progress Bar",
            },
            caption: {
                es: "Ficha del proyecto con cálculo automático de meta financiera, monto recaudado en tiempo real, mayor donación y acceso a donar.",
                en: "Project detail page displaying financial goal, real-time funding progress, top donation, and direct contribution trigger.",
            },
        },
        {
            url: resolveProjectImage("impulsame", "checkout-donacion"),
            alt: {
                es: "Pasarela de Donaciones con Stripe en ARS",
                en: "Stripe Donation Checkout in ARS",
            },
            caption: {
                es: "Flujo de donación con validación de rangos ($1.000 a $999.999 ARS), comentarios de apoyo y pasarela segura Stripe Checkout con tokenización de intentos.",
                en: "Donation workflow with range validations ($1,000 to $999,999 ARS), backer comments, and secure Stripe Checkout sessions with attempt tokenization.",
            },
        },
        {
            url: resolveProjectImage("impulsame", "panel-admin"),
            alt: {
                es: "Panel de Moderación y Administración",
                en: "Moderation and Administration Panel",
            },
            caption: {
                es: "Módulo administrativo para revisión y aprobación de proyectos pendientes antes de su publicación, control de mensajes de soporte y moderación.",
                en: "Administrative dashboard for reviewing and approving pending campaign submissions prior to publishing, support ticket inbox, and content moderation.",
            },
        },
        {
            url: resolveProjectImage("impulsame", "crear-proyecto"),
            alt: {
                es: "Formulario de Alta de Proyecto",
                en: "Campaign Creation Form",
            },
            caption: {
                es: "Formulario con validación en servidor para título, descripción, meta económica, categorización temática y carga multipart de imagen con nombre UUID.",
                en: "Server-validated campaign creation form with title, description, funding goal, thematic categories, and multipart UUID image upload.",
            },
        },
        {
            url: resolveProjectImage("impulsame", "avances-proyecto"),
            alt: {
                es: "Historial de Avances y Actualizaciones",
                en: "Project Milestones and Updates Timeline",
            },
            caption: {
                es: "Línea de tiempo de actualizaciones publicadas por el creador con fecha y descripción para mantener informada a la comunidad de inversores.",
                en: "Creator milestone timeline with date-stamped progress reports and updates to keep backer communities engaged.",
            },
        },
        {
            url: resolveProjectImage("impulsame", "mis-proyectos"),
            alt: {
                es: "Panel de Gestión de Proyectos del Creador",
                en: "Creator Campaign Management Panel",
            },
            caption: {
                es: "Gestor personal para monitorear el estado de las iniciativas propias (Pendiente, Activo, Cancelado) y publicar nuevos avances.",
                en: "Creator dashboard to monitor campaign statuses (Pending, Active, Cancelled) and publish milestone updates.",
            },
        },
    ],
    features: [
        {
            title: { es: "Arquitectura en Tres Capas (MVC Puro)", en: "Three-Tier Architecture (Pure MVC)" },
            desc: {
                es: "Separación estricta de responsabilidades entre la capa de presentación (JSP + JSTL), la capa de control (Servlets y AuthFilter) y la capa de acceso a datos (DAOs con JDBC nativo sobre MySQL sin frameworks pesados).",
                en: "Strict separation of concerns across presentation (JSP + JSTL), control (Servlets & AuthFilter), and data access (JDBC-based DAOs on MySQL without heavy frameworks).",
            },
        },
        {
            title: { es: "Control de Acceso Basado en Roles (RBAC)", en: "Role-Based Access Control (RBAC)" },
            desc: {
                es: "AuthFilter centralizado que intercepta cada petición HTTP, validando sesiones activas y restringiendo rutas para visitantes, usuarios autenticados y administradores.",
                en: "Centralized AuthFilter intercepting all HTTP requests, enforcing session validation and route boundaries across visitors, authenticated backers, and administrators.",
            },
        },
        {
            title: { es: "Flujo de Donaciones con Stripe Checkout & ARS", en: "Stripe Checkout & ARS Donation Workflow" },
            desc: {
                es: "Integración con la API de Stripe para pagos en pesos argentinos, con tracking por paymentAttemptId (UUID) para garantizar idempotencia y prevenir transacciones duplicadas.",
                en: "Stripe API integration for payments in Argentine Pesos, utilizing UUID paymentAttemptIds for idempotency and duplicate transaction prevention.",
            },
        },
        {
            title: { es: "Ciclo de Vida y Moderación de Proyectos", en: "Campaign Lifecycle & Moderation Workflow" },
            desc: {
                es: "Flujo de estados (Pendiente → Activo → Cancelado/Borrado) donde los proyectos nacen en revisión y solo los administradores pueden autorizar su visibilidad pública.",
                en: "State machine lifecycle (Pending → Active → Cancelled/Deleted) ensuring campaigns start under review and require admin approval for public fundraising.",
            },
        },
        {
            title: { es: "Comentarios Protegidos & Soft Delete", en: "Protected Backer Comments & Soft Delete" },
            desc: {
                es: "Regla de negocio que restringe los comentarios únicamente a usuarios que hayan respaldado económicamente el proyecto, con moderación administrativa por borrado lógico.",
                en: "Business rule restricting comments exclusively to users who backed the project financially, with admin soft-delete moderation.",
            },
        },
        {
            title: { es: "Gestión Segura de Archivos con UUID", en: "Secure Multipart File Upload with UUID" },
            desc: {
                es: "Carga de fotos de proyectos mediante multipart-config en servlets, saneando nombres de archivo con UUID criptográfico para evitar colisiones y path traversal.",
                en: "Multipart file handling in servlets, sanitizing filenames with cryptographic UUIDs to prevent naming collisions and path traversal attacks.",
            },
        },
    ],
    architecture: {
        es: "Arquitectura Java EE clásica estructurada con Maven y desplegada sobre Apache Tomcat. Capa web basada en Jakarta Servlets como controladores y JSP/JSTL para server-side rendering (SSR); seguridad perimetral mediante AuthFilter y hashing BCrypt; capa de persistencia implementada con el patrón Data Access Object (DAO) mediante JDBC puro y consultas SQL parametrizadas sobre MySQL; pagos procesados vía Stripe Checkout Sessions con control de idempotencia.",
        en: "Classic Java EE architecture structured with Maven and running on Apache Tomcat. Web layer driven by Jakarta Servlets as controllers and JSP/JSTL for server-side rendering (SSR); perimeter security with AuthFilter and BCrypt password hashing; persistence layer built with the Data Access Object (DAO) pattern using raw JDBC and parameterized SQL on MySQL; payments powered by Stripe Checkout Sessions with idempotency tracking.",
    },
    challenges: {
        es: "Implementar un sistema web completo y seguro (autenticación, autorización RBAC, pagos con pasarela internacional y gestión de archivos) utilizando únicamente tecnologías estándar de Java EE (Servlets, JSP, JDBC y filtros) sin depender de frameworks de alto nivel como Spring Boot, manteniendo una separación limpia de capas y previniendo inyecciones SQL y ataques CSRF/path traversal.",
        en: "Building a secure and comprehensive web platform (auth, RBAC authorization, international payment gateway, and file uploads) using exclusively standard Java EE primitives (Servlets, JSP, JDBC, and filters) without relying on high-level frameworks like Spring Boot, while keeping strict layer decoupling and preventing SQL injection and CSRF/path traversal vulnerabilities.",
    },
    role: {
        es: "Co-Desarrollador Java Backend (Arquitectura MVC, Capa DAO, Servlets y Seguridad)",
        en: "Java Backend Co-Developer (MVC Architecture, DAO Layer, Servlets & Security)",
    },
    period: "2024 - 2025",
};
