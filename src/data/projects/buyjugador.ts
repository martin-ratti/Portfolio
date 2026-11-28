import { resolveProjectImage } from "../../utils/projectAssets.ts";
import type { Project } from "./types.ts";

export const buyjugador: Project = {
    slug: "buyjugador",
    title: {
        es: "BuyJugador - Gestión de Inventario & Gaming",
        en: "BuyJugador - Inventory & Gaming Management",
    },
    tagline: {
        es: "Plataforma multicapa en .NET para compra y venta gamer con clientes Web (Blazor WASM) y Desktop (WinForms).",
        en: "Multi-layer .NET solution for gaming retail with synchronized Web (Blazor WASM) and Desktop (WinForms) clients.",
    },
    description: {
        es: "Solución empresarial multicapa para la gestión de inventario, compras y ventas en comercios gamer. Desarrollada en equipo con arquitectura en capas (8 proyectos) orquestando Blazor WebAssembly, WinForms, ASP.NET Core Web API, Entity Framework Core, SQL Server y reportes vectoriales con ScottPlot y PDFsharp.",
        en: "Multi-layer enterprise solution for inventory management, procurement, and gaming retail sales. Built in a team following layered architecture (8 projects) orchestrating Blazor WebAssembly, WinForms, ASP.NET Core Web API, Entity Framework Core, SQL Server, and vector reporting with ScottPlot and PDFsharp.",
    },
    fullDescription: {
        es: "BuyJugador fue desarrollado en equipo junto a Tomas Levrand y Agustín Santinelli como proyecto integral de ingeniería de software para la UTN. El objetivo principal fue concebir una arquitectura robusta, modular y fuertemente tipada que permitiera gestionar todo el ciclo comercial de productos de gaming y hardware (compras a proveedores, pedidos, stock crítico, ventas y reportes analíticos). Implementamos una solución multicapa desacoplada donde un cliente web administrativo en Blazor WebAssembly y una aplicación de escritorio de alta velocidad en WinForms consumen una única Web API en ASP.NET Core a través de una librería compartida ApiClient, garantizando máxima reutilización de código y contratos DTO consistentes.",
        en: "BuyJugador was developed collaboratively with Tomas Levrand and Agustín Santinelli as an extensive software engineering university project for UTN. The goal was to engineer a robust, modular, and strongly-typed architecture to manage the full commercial lifecycle of gaming hardware (supplier procurement, pending orders, critical stock alerts, sales, and analytics). We implemented a decoupled multi-layer solution where a modern Blazor WebAssembly administrative web client and a high-speed WinForms desktop app consume a shared ASP.NET Core Web API via an ApiClient library, ensuring maximum code reuse and consistent DTO contracts.",
    },
    tags: [".NET WebAPI", "Blazor", "WinForms", "C#", "SQL Server", "SQL"],
    repo: "https://github.com/agussantinelli/ProyectoIDE-BuyJugador",
    featured: false,
    coverImage: resolveProjectImage("buyjugador", "cover"),
    gallery: [
        {
            url: resolveProjectImage("buyjugador", "cover"),
            alt: {
                es: "Panel Principal y Dashboard de Inventario en Blazor WebAssembly",
                en: "Main Panel and Inventory Dashboard in Blazor WebAssembly",
            },
            caption: {
                es: "Dashboard administrativo web en Blazor WebAssembly con métricas clave de ventas, pedidos pendientes, alertas de stock crítico y accesos rápidos.",
                en: "Administrative web dashboard in Blazor WebAssembly featuring key sales metrics, pending orders, critical stock alerts, and quick actions.",
            },
        },
        {
            url: resolveProjectImage("buyjugador", "productos-blazor"),
            alt: {
                es: "Gestión de Productos y Catálogo en Blazor WebAssembly",
                en: "Product Management and Catalog in Blazor WebAssembly",
            },
            caption: {
                es: "Catálogo web interactivo en Blazor con búsqueda en vivo, pestañas Activos/Inactivos, precios de venta, stock y accesos directos a historial y proveedores.",
                en: "Interactive Blazor web catalog featuring live search, Active/Inactive tabs, selling prices, stock levels, and shortcuts to price history and suppliers.",
            },
        },
        {
            url: resolveProjectImage("buyjugador", "pedidos-blazor"),
            alt: {
                es: "Módulo de Abastecimiento y Nuevo Pedido en Blazor",
                en: "Procurement and New Order Module in Blazor",
            },
            caption: {
                es: "Interfaz web reactiva para seleccionar proveedores, cargar ítems de hardware gamer y calcular subtotales de compra en tiempo real.",
                en: "Reactive web interface for supplier selection, gaming hardware item logging, and real-time purchase subtotal calculation.",
            },
        },
        {
            url: resolveProjectImage("buyjugador", "reporte-ventas-blazor"),
            alt: {
                es: "Reporte de Ventas por Vendedor y Exportación PDF en Blazor",
                en: "Sales Report by Salesperson and PDF Export in Blazor",
            },
            caption: {
                es: "Vista analítica en Blazor WebAssembly filtrada por vendedor (últimos 7 días) con totalización y descarga directa de informe en PDF.",
                en: "Analytical view in Blazor WebAssembly filtered by salesperson (last 7 days) with totals and direct PDF report download.",
            },
        },
        {
            url: resolveProjectImage("buyjugador", "panel-desktop"),
            alt: {
                es: "Panel de Administrador MDI en Cliente Desktop WinForms",
                en: "MDI Admin Panel in WinForms Desktop Client",
            },
            caption: {
                es: "Menú principal del cliente de escritorio WinForms con arquitectura MDI, autenticación JWT por rol y acceso a todos los módulos operativos y reportes.",
                en: "Main MDI menu in the WinForms desktop client with role-based JWT authentication and direct access to operational modules and reports.",
            },
        },
        {
            url: resolveProjectImage("buyjugador", "productos-desktop"),
            alt: {
                es: "Gestión de Productos en Cliente Desktop WinForms",
                en: "Product Management in WinForms Desktop Client",
            },
            caption: {
                es: "Grilla de escritorio en WinForms con búsqueda instantánea, filtros por categoría, control de stock y gestión de historial de precios.",
                en: "Desktop product grid in WinForms featuring instant search, category filters, stock control, and price history management.",
            },
        },
        {
            url: resolveProjectImage("buyjugador", "ventas-desktop"),
            alt: {
                es: "Grilla de Gestión de Ventas en WinForms",
                en: "Sales Management Grid in WinForms",
            },
            caption: {
                es: "Módulo de escritorio en WinForms para búsqueda ágil de ventas por cliente, estados de transacción y detalle por vendedor.",
                en: "Desktop module in WinForms for fast customer sales search, transaction status monitoring, and salesperson breakdown.",
            },
        },
        {
            url: resolveProjectImage("buyjugador", "pedidos-desktop"),
            alt: {
                es: "Recepción de Pedidos y Compras en Cliente Desktop",
                en: "Purchase Orders and Goods Receipt in Desktop Client",
            },
            caption: {
                es: "Formulario WinForms para creación de órdenes de compra a proveedores oficiales y marcación de stock recibido.",
                en: "WinForms form for purchase order creation with official suppliers and received stock verification.",
            },
        },
        {
            url: resolveProjectImage("buyjugador", "reporte-precios"),
            alt: {
                es: "Reporte de Evolución de Precios con ScottPlot y PDFsharp",
                en: "Price Evolution Report with ScottPlot and PDFsharp",
            },
            caption: {
                es: "Visualizador analítico con ScottPlot para trazar la evolución histórica de precios de venta y exportación a documentos PDF mediante PDFsharp.",
                en: "Analytical visualization using ScottPlot to chart historical sales price evolution with PDF exports via PDFsharp.",
            },
        },
        {
            url: resolveProjectImage("buyjugador", "arquitectura"),
            alt: {
                es: "Arquitectura Multicapa de 8 Proyectos en Visual Studio",
                en: "8-Project Multi-Layer Architecture in Visual Studio",
            },
            caption: {
                es: "Estructura de la solución dividida en 8 capas desacopladas: ApiClient, BlazorApp, Data, DominioModelo, DominioServicios, DTOs, WebAPI y WinForms.",
                en: "Solution structure split into 8 decoupled layers: ApiClient, BlazorApp, Data, DominioModelo, DominioServicios, DTOs, WebAPI, and WinForms.",
            },
        },
    ],
    features: [
        {
            title: { es: "Arquitectura Multicapa en 8 Proyectos", en: "8-Project Multi-Layer Architecture" },
            desc: {
                es: "Desacoplamiento limpio separando contratos (DTOs), dominio, servicios de negocio, infraestructura de datos, API REST y dos clientes independientes.",
                en: "Clean decoupling separating contracts (DTOs), domain, business services, data infrastructure, REST API, and two distinct clients.",
            },
        },
        {
            title: { es: "Clientes Sincronizados (Web & Desktop)", en: "Synchronized Dual Clients (Web & Desktop)" },
            desc: {
                es: "Librería compartida ApiClient consumida tanto por Blazor WebAssembly en el navegador como por WinForms en el escritorio, evitando duplicación de código.",
                en: "Shared ApiClient library consumed by both in-browser Blazor WebAssembly and desktop WinForms, eliminating code duplication.",
            },
        },
        {
            title: { es: "Reportes Visuales con ScottPlot y PDFsharp", en: "Visual Reporting with ScottPlot & PDFsharp" },
            desc: {
                es: "Generación de gráficos de fluctuación de precios incrustados directamente en reportes exportables en formato PDF vectorial.",
                en: "Interactive price fluctuation chart generation embedded directly into vector PDF exportable reports.",
            },
        },
        {
            title: { es: "Consultas de Alto Rendimiento con ADO.NET & EF Core", en: "High-Performance Queries with ADO.NET & EF Core" },
            desc: {
                es: "Uso híbrido de Entity Framework Core para operaciones de negocio estándar junto a consultas optimizadas en ADO.NET para reportes pesados de ventas por vendedor.",
                en: "Hybrid use of Entity Framework Core for domain workflows and tuned ADO.NET queries for heavy sales-by-vendor analytics.",
            },
        },
        {
            title: { es: "Seguridad JWT y Políticas CORS en ASP.NET Core", en: "JWT Security & CORS Policies in ASP.NET Core" },
            desc: {
                es: "Autenticación basada en tokens JWT con inyección de dependencias (DI) y configuración de CORS para el cliente WebAssembly.",
                en: "JWT token-based authentication with Dependency Injection (DI) and CORS policies configured for the WebAssembly client.",
            },
        },
        {
            title: { es: "Control de Ciclo Comercial & Stock Gamer", en: "Commercial Lifecycle & Gaming Stock Control" },
            desc: {
                es: "Gestión completa de pedidos a proveedores, recepción de mercadería, alertas de stock mínimo y registro de ventas con trazabilidad de vendedor.",
                en: "Full management of supplier orders, goods receipt, low-stock warnings, and sales logging with salesperson traceability.",
            },
        },
    ],
    architecture: {
        es: "Arquitectura multicapa en C# y .NET estructurada en 8 proyectos: DominioModelo (entidades puras), DominioServicios (reglas de negocio), DTOs (contratos de transferencia), Data (persistencia con EF Core y ADO.NET sobre SQL Server), WebAPI (controladores REST con JWT y DI), ApiClient (cliente HTTP tipado reutilizable), BlazorApp (interfaz web moderna en WebAssembly con Bootstrap) y WinForms (interfaz de escritorio ágil).",
        en: "Multi-layer C# and .NET architecture structured across 8 projects: DominioModelo (pure entities), DominioServicios (business rules), DTOs (transfer contracts), Data (persistence via EF Core and ADO.NET on SQL Server), WebAPI (REST controllers with JWT and DI), ApiClient (reusable typed HTTP client), BlazorApp (modern web UI in WebAssembly with Bootstrap), and WinForms (responsive desktop UI).",
    },
    challenges: {
        es: "Diseñar una biblioteca de cliente HTTP (ApiClient) completamente reutilizable y agnóstica a la plataforma que fuera consumible tanto por el runtime de WebAssembly en el navegador como por el entorno nativo de WinForms, además de combinar EF Core con consultas directas en ADO.NET para optimizar reportes analíticos complejos sin romper la abstracción de capas.",
        en: "Designing a platform-agnostic, fully reusable HTTP client library (ApiClient) consumable by both the browser's WebAssembly runtime and the native WinForms environment, while marrying EF Core with direct ADO.NET queries to optimize complex analytics without breaking layer abstractions.",
    },
    role: {
        es: "Co-Desarrollador Full Stack .NET (Backend WebAPI, Clientes WinForms/Blazor y Reportes)",
        en: "Full Stack .NET Co-Developer (WebAPI Backend, WinForms/Blazor Clients & Reporting)",
    },
    period: "2024 - 2025",
};
