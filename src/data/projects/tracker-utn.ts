import { resolveProjectImage } from "../../utils/projectAssets.ts";
import type { Project } from "./types.ts";

export const trackerUtn: Project = {
    slug: "tracker-utn",
    title: {
        es: "Tracker UTN Sistemas",
        en: "UTN Systems Tracker",
    },
    tagline: {
        es: "Plataforma web con grafo interactivo, metas de examen y analítico oficial para Ingeniería en Sistemas (UTN FRRo).",
        en: "Interactive web platform with dependency graph, exam milestones, and official analytical PDF for Systems Engineering (UTN FRRo).",
    },
    description: {
        es: "Plataforma web full-stack para el seguimiento de la carrera de Ingeniería en Sistemas de Información (UTN FRRo - Plan 2023). Integra grafo interactivo de correlatividades, planificación de exámenes con recordatorios por correo, calendario académico oficial y compilación de analítico en PDF.",
        en: "Full-stack web platform for tracking the Systems Engineering curriculum (UTN FRRo - Plan 2023). Features an interactive prerequisite graph, exam scheduling with email reminders, official academic calendar, and PDF transcript compilation.",
    },
    fullDescription: {
        es: "Tracker UTN Sistemas nació de una necesidad compartida por los estudiantes universitarios: organizar la carrera con claridad y responder al instante preguntas críticas como '¿qué me traba más adelante si no rindo esto ahora?' o '¿puedo cursar el año que viene con lo que ya tengo?'. Tomando como base una idea de Lucas Alonso, decidí rediseñar y rearmar la plataforma por completo desde cero como desafío personal con un stack tecnológico moderno. Ahora, además de organizar el plan de estudio personal, permite compartir un enlace personalizado para que familiares y amigos sigan el progreso, las próximas mesas y las fechas de exámenes en tiempo real.",
        en: "Tracker UTN Sistemas was born from a need shared by university students: tracking academic progress clearly and instantly answering critical questions like 'what does skipping this exam block further down the road?' or 'can I take all next year's subjects with what I have?'. Inspired by an initial concept by Lucas Alonso, I took on the challenge of rewriting the entire platform from scratch with a modern tech stack. Beyond personal academic organization, it allows sharing a personalized link so family and friends can track real-time progress, upcoming exam sittings, and dates in real time.",
    },
    tags: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "Firebase", "pnpm", "Vitest", "Playwright", "Vite", "Git", "GitHub"],
    link: "https://utn-sistemas-frro.web.app",
    repo: "https://github.com/martin-ratti/tracker-ing-sist",
    featured: false,
    coverImage: resolveProjectImage("tracker-utn", "cover"),
    gallery: [
        {
            url: resolveProjectImage("tracker-utn", "cover"),
            alt: {
                es: "Malla Curricular Plan 2023 - Tracker UTN Sistemas",
                en: "Plan 2023 Curriculum Grid - UTN Systems Tracker",
            },
            caption: {
                es: "Malla curricular organizada por niveles con estados reactivos (Aprobada, Regular, Cursable, Bloqueada), buscador predictivo y filtros rápidos.",
                en: "Curriculum grid organized by academic years with reactive states (Passed, Regular, Available, Locked), predictive search, and fast filters.",
            },
        },
        {
            url: resolveProjectImage("tracker-utn", "grafo-interactivo"),
            alt: {
                es: "Grafo Interactivo de Correlativas y Red Jerárquica",
                en: "Interactive Prerequisite Graph and Hierarchical Network",
            },
            caption: {
                es: "Visualizador jerárquico vis-network con modo camino crítico, inspección de dependencias y cálculo dinámico de correlatividades.",
                en: "Hierarchical vis-network viewer featuring critical path mode, dependency inspection, and dynamic prerequisite calculations.",
            },
        },
        {
            url: resolveProjectImage("tracker-utn", "ficha-analitica"),
            alt: {
                es: "Ficha Curricular y Analítico Oficial en PDF",
                en: "Curriculum Record and Official PDF Transcript",
            },
            caption: {
                es: "Generador vectorial en cliente con jsPDF para compilar y descargar el analítico oficial formal con membrete de UTN FRRo.",
                en: "Client-side vector generator using jsPDF to compile and download formal official transcripts with UTN FRRo institutional letterhead.",
            },
        },
        {
            url: resolveProjectImage("tracker-utn", "calendario-metas"),
            alt: {
                es: "Calendario Académico Oficial y Agenda de Metas",
                en: "Official Academic Calendar and Exam Goal Planner",
            },
            caption: {
                es: "Integración de turnos y llamados oficiales de examen con selector de metas y recordatorios automáticos por correo 7 días antes.",
                en: "Integration of official exam sessions and calls with milestone scheduling and automated email reminders 7 days prior.",
            },
        },
        {
            url: resolveProjectImage("tracker-utn", "dashboard-estadisticas"),
            alt: {
                es: "Dashboard de Estadísticas Académicas",
                en: "Academic Statistics Dashboard",
            },
            caption: {
                es: "Panel analítico con distribución porcentual de asignaturas, cálculo de promedio académico y avance por nivel.",
                en: "Analytical dashboard featuring percentage subject distribution, GPA calculation, and year-by-year academic progress.",
            },
        },
        {
            url: resolveProjectImage("tracker-utn", "detalle-materia"),
            alt: {
                es: "Detalle de Asignatura y Correlativas para Cursar y Rendir",
                en: "Subject Detail and Enrollment/Exam Prerequisites",
            },
            caption: {
                es: "Modal contextual con árbol de requisitos previos, asignaturas que desbloquea y acceso directo al Google Drive comunitario de la cátedra.",
                en: "Contextual modal with prerequisite tree, unlocked dependent subjects, and direct links to community Google Drive study folders.",
            },
        },
        {
            url: resolveProjectImage("tracker-utn", "materias-electivas"),
            alt: {
                es: "Panel de Asignaturas Electivas y Cómputo de Horas",
                en: "Elective Subjects Panel and Credit Hours Counter",
            },
            caption: {
                es: "Control de electivas optativas y seguimiento de horas acreditadas para titulación intermedia ADUSI e Ingeniería.",
                en: "Elective subject tracking and accredited hours monitoring for ADUSI intermediate degree and full Engineering.",
            },
        },
    ],
    features: [
        {
            title: { es: "Grafo Interactivo & Camino Crítico", en: "Interactive Graph & Critical Path" },
            desc: {
                es: "Visualización en red jerárquica con vis-network que calcula en tiempo real qué materias se desbloquean y resalta la cadena de correlativas previa.",
                en: "Hierarchical network visualization using vis-network that computes unlocked subjects in real time and highlights prerequisite dependency chains.",
            },
        },
        {
            title: { es: "Notificaciones Automáticas por Email", en: "Automated Email Reminders" },
            desc: {
                es: "Servicio de fondo con Node.js y Resend que envía recordatorios por correo 7 días antes de las mesas de finales agendadas.",
                en: "Background service with Node.js and Resend sending automated email reminders 7 days prior to scheduled exam sessions.",
            },
        },
        {
            title: { es: "Calendario Académico y Planificación de Metas", en: "Academic Calendar & Goal Planning" },
            desc: {
                es: "Integración oficial de turnos de examen de UTN FRRo para agendar objetivos con cuenta regresiva y exportación a calendarios .ics.",
                en: "Official UTN FRRo exam session integration to schedule milestones with live countdowns and .ics calendar exports.",
            },
        },
        {
            title: { es: "Ficha Curricular y Analítico en PDF", en: "Official Transcript PDF Generator" },
            desc: {
                es: "Generación vectorial nativa con jsPDF y membrete formal de UTN FRRo con promedios, notas, folios y horas de electivas/PPS.",
                en: "Native vector generation with jsPDF and formal UTN FRRo letterhead, detailing GPA, grades, folios, and elective/PPS hours.",
            },
        },
        {
            title: { es: "Sincronización Híbrida & Offline-First", en: "Hybrid Sync & Offline-First" },
            desc: {
                es: "Firebase Authentication y Firestore para sincronización multi-dispositivo con fallback 100% offline en localStorage y fusión inteligente de datos.",
                en: "Firebase Auth and Firestore for multi-device sync with 100% offline localStorage fallback and smart data merging.",
            },
        },
        {
            title: { es: "Seguimiento de Doble Titulación", en: "Dual Degree Progress Tracking" },
            desc: {
                es: "Control independiente de avance hacia el título intermedio ADUSI (con validación de Seminario Integrador) y el título de grado en Ingeniería.",
                en: "Independent progress monitoring toward the ADUSI intermediate degree (with Capstone validation) and the full Engineering diploma.",
            },
        },
    ],
    architecture: {
        es: "Monorepo pnpm con paquete compartido @tracker/types. Frontend PWA en React 19, TypeScript y Tailwind CSS v4 con Service Worker offline y cabeceras CSP; backend en Node.js y Express para tareas programadas y despacho de correos vía Resend; persistencia en Firebase (Auth y Firestore), oxlint, Vitest, Playwright y CI/CD en GitHub Actions.",
        en: "pnpm monorepo with shared @tracker/types package. PWA frontend in React 19, TypeScript, and Tailwind CSS v4 with offline Service Worker precaching and CSP headers; Node.js and Express backend handling scheduled tasks and Resend email dispatches; Firebase (Auth and Firestore) persistence, oxlint, Vitest, Playwright, and GitHub Actions CI/CD.",
    },
    challenges: {
        es: "Modelar el grafo acíclico dirigido (DAG) de correlatividades académicas con validaciones estrictas y reseteo en cascada para prevenir estados inconsistentes, además de optimizar el canvas interactivo para garantizar 60 FPS en dispositivos móviles.",
        en: "Modeling the academic prerequisite directed acyclic graph (DAG) with strict cascade validations to prevent inconsistent states, along with optimizing interactive canvas rendering to maintain 60 FPS on mobile devices.",
    },
    role: {
        es: "Creador & Desarrollador Full Stack",
        en: "Creator & Full Stack Developer",
    },
    period: "2026",
};
