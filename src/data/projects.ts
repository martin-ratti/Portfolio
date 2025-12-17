export interface Project {
    title: string;
    description: string;
    tags: string[];
    link?: string;
    repo: string;
    image?: string;
    featured?: boolean;
}

export const projects: Project[] = [
    {
        title: "PCFIX - E-Commerce Monorepo",
        description: "Plataforma de comercio electrónico moderna y de alto rendimiento. Arquitectura monorepo con Astro (SSR), React, y Express. Gestión completa de usuarios, productos, carrito y pagos en tiempo real.",
        tags: ["Astro", "React", "Node.js", "Express", "Prisma", "TypeScript"],
        repo: "https://github.com/martin-ratti/PCFIX-Baru",
        link: "https://www.pcfixbaru.com.ar",
        featured: true
    },
    {
        title: "TicketApp - Venta de Entradas",
        description: "Marketplace de eventos completo. Frontend en React + TypeScript y Backend en Node.js. Incluye gestión de carrito, pagos con Stripe, generación de tickets PDF y panel administrativo.",
        tags: ["React", "Node.js", "MySQL", "Stripe", "Express"],
        repo: "https://github.com/valenpeppi/FrontEnd-Venta-de-Entradas",
        featured: true
    },
    {
        title: "BuyJugador - Sistema de Gestión",
        description: "Sistema integral de inventario y ventas para local de gaming. Arquitectura multicapa con clientes Web (Blazor) y Desktop (WinForms) consumiendo una misma API REST en .NET.",
        tags: [".NET", "C#", "Blazor", "WinForms", "SQL Server"],
        repo: "https://github.com/agussantinelli/ProyectoIDE-BuyJugador",
        featured: false
    },
    {
        title: "Extractor OCR - Green & Pink",
        description: "Herramienta de escritorio con visión artificial para extraer texto resaltado de documentos. Utiliza OpenCV para detección de color y Tesseract para OCR. Interfaz moderna con CustomTkinter.",
        tags: ["Python", "OpenCV", "Tesseract", "Tkinter"],
        repo: "https://github.com/martin-ratti/Extractor-OCR-Python",
        featured: false
    },
    {
        title: "Animall Forrajería - Legacy",
        description: "Sistema de punto de venta (POS) y gestión de caja desarrollado en C#. Versión legacy que sirvió como base para la modernización del negocio.",
        tags: ["C#", ".NET Framework", "Windows Forms"],
        repo: "https://github.com/martin-ratti/AnimallForrajeria-version-vieja-",
        featured: false
    }
];
