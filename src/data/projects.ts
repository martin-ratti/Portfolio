export interface Project {
    title: string;
    description: {
        es: string;
        en: string;
    };
    tags: string[];
    link?: string;
    repo: string;
    featured?: boolean;
}

export const projects: Project[] = [
    {
        title: "Zenith POS - Landing & Desktop App",
        description: {
            es: "Sistema de Punto de Venta integral con arquitectura modular (Clean Architecture). Incluye una aplicación nativa para Windows (C#) y una landing page moderna (Astro). Soporta personalización White-label, seguridad por Hardware ID y funcionamiento 100% offline.",
            en: "Comprehensive Point of Sale system with modular architecture (Clean Architecture). Includes a native Windows app (C#) and a modern landing page (Astro). Supports White-label customization, Hardware ID security, and 100% offline operation."
        },
        tags: ["C#", ".NET", "SQLite", "Astro", "Tailwind CSS", "WinForms", "Clean Architecture"],
        link: "https://martin-ratti.github.io/Landing-Zenith/",
        repo: "https://github.com/martin-ratti/Landing-Zenith",
        featured: true
    },
    {
        title: "PCFIX - E-Commerce Monorepo",
        description: {
            es: "Plataforma de comercio electrónico de alto rendimiento con arquitectura monorepo. Incluye tienda online, sistema de usuarios, panel administrativo y business intelligence.",
            en: "High-performance e-commerce platform with monorepo architecture. Includes online store, user system, admin panel, and business intelligence."
        },
        tags: ["Astro", "React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "Tailwind CSS", "Vercel", "Railway", "Jest", "Vitest", "Playwright", "Prisma", "Express", "GitHub"],
        link: "https://www.pcfixbaru.com.ar",
        repo: "https://github.com/martin-ratti/PCFIX-Baru",
        featured: true
    },
    {
        title: "EstacionAR - Smart Parking (Work in Progress)",
        description: {
            es: "Plataforma mobile-first para gestión y reserva de estacionamientos. Arquitectura escalable monorepo con geolocalización y pagos integrados.",
            en: "Mobile-first platform for parking management and reliable reservations. Scalable monorepo architecture with geolocation and integrated payments."
        },
        tags: ["React Native", "TypeScript", "Node.js", "PostgreSQL", "Docker", "Turborepo", "Prisma", "Express", "Jest", "Vitest", "Postman"],
        repo: "https://github.com/agussantinelli/EstacionAR",
        featured: false
    },
    {
        title: "ImpulsaMe - Crowdfunding Java",
        description: {
            es: "Plataforma de financiamiento colectivo con moderación y pagos. Arquitectura MVC pura con Java Servlets, JSP y MySQL.",
            en: "Crowdfunding platform with moderation and payments. Pure MVC architecture with Java Servlets, JSP, and MySQL."
        },
        tags: ["Java", "JSP", "MySQL", "Maven", "Java Servlets"],
        repo: "https://github.com/martin-ratti/ProyectoJava-Crowdfunding",
        featured: false
    },
    {
        title: "TicketApp - Venta de Entradas",
        description: {
            es: "Marketplace de eventos completo con gestión de carritos, pagos mediante Stripe, generación de tickets PDF y panel administrativo.",
            en: "Complete event marketplace with cart management, Stripe payments, PDF ticket generation, and admin panel."
        },
        tags: ["React", "TypeScript", "Node.js", "MySQL", "Prisma", "Express", "Jest", "Vitest", "Playwright"],
        repo: "https://github.com/valenpeppi/FrontEnd-Venta-de-Entradas",
        featured: false
    },
    {
        title: "BuyJugador - Gestión Integral",
        description: {
            es: "Sistema multicapa para gestión de inventario y ventas. Clientes Web (Blazor) y Desktop (WinForms) consumiendo una misma API REST en .NET.",
            en: "Multi-layer system for inventory and sales management. Web (Blazor) and Desktop (WinForms) clients consuming a single .NET REST API."
        },
        tags: [".NET WebAPI", "Blazor", "WinForms", "SQL Server", "SQL", "C#"],
        repo: "https://github.com/agussantinelli/ProyectoIDE-BuyJugador"
    },
    {
        title: "Extractor OCR - Green & Pink",
        description: {
            es: "Herramienta de escritorio con visión artificial para extraer texto resaltado de documentos utilizando OpenCV y Tesseract.",
            en: "Desktop tool with computer vision to extract highlighted text from documents using OpenCV and Tesseract."
        },
        tags: ["Python", "Git", "GitHub"],
        repo: "https://github.com/martin-ratti/Extractor-OCR-Python"
    },
    {
        title: "Animall Forrajería - Legacy",
        description: {
            es: "Sistema de punto de venta (POS) y gestión de caja desarrollado en C#. Software robusto para operaciones diarias de comercio.",
            en: "Point of Sale (POS) and cash management system developed in C#. Robust software for daily retail operations."
        },
        tags: ["C#", ".NET WebAPI", "SQL Server", "WinForms", "Git", "GitHub"],
        repo: "https://github.com/martin-ratti/AnimallForrajeria-version-vieja-"
    }
];
