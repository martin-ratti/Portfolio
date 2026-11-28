import { resolveProjectImage } from "../../utils/projectAssets.ts";
import type { Project } from "./types.ts";

export const timelens: Project = {
    slug: "timelens",
    title: {
        es: "TimeLens - Bienestar Digital Android",
        en: "TimeLens - Android Digital Wellbeing",
    },
    tagline: {
        es: "App nativa Android en Kotlin y Jetpack Compose para métricas reales de uso, límites por app y bienestar digital 100% offline.",
        en: "Native Android app in Kotlin & Jetpack Compose for real usage analytics, per-app limits, and 100% offline digital wellbeing.",
    },
    description: {
        es: "Aplicación nativa de Android desarrollada en Kotlin con Jetpack Compose y Material 3 bajo Clean Architecture + MVVM. Analiza eventos reales del sistema (UsageEvents) sin datos simulados, ofrece límites diarios por aplicación con alertas en WorkManager, widgets nativos con Jetpack Glance, diagnóstico de hábitos y suite de 95 tests unitarios.",
        en: "Native Android application built with Kotlin, Jetpack Compose, and Material 3 under Clean Architecture + MVVM. Analyzes real OS events (UsageEvents) with zero simulated data, provides per-app daily limits via WorkManager alerts, native Jetpack Glance widgets, habit diagnostics, and a 95-test unit suite.",
    },
    fullDescription: {
        es: "TimeLens es una aplicación nativa de Android orientada al bienestar digital y la privacidad absoluta: procesa y almacena toda la telemetría localmente en el dispositivo sin servidores externos ni rastreadores. A diferencia de herramientas que estiman métricas, consulta directamente los eventos reales del kernel mediante UsageStatsManager y UsageEvents, reconstruyendo sesiones continuas con manejo de cruces de medianoche y eventos de apagado. Su interfaz de estética Cyberpunk Neón (junto a modos Claro y Sistema) corre a 60/120 Hz con renderizado nativo de íconos en ImageBitmap y gráficos en Compose Canvas.",
        en: "TimeLens is a native Android application focused on digital wellbeing and strict privacy: all telemetry is processed and stored locally on-device with zero external servers or trackers. Rather than estimating metrics, it queries real OS events via UsageStatsManager and UsageEvents, reconstructing continuous sessions across midnight boundaries and shutdown events. Its Cyberpunk Neon interface (alongside Light and System themes) runs smoothly at 60/120 Hz using native ImageBitmap icon rendering and Compose Canvas charts.",
    },
    tags: ["Kotlin", "Jetpack Compose", "Android", "Git", "GitHub"],
    repo: "https://github.com/martin-ratti/Healty_Hour",
    featured: false,
    coverImage: resolveProjectImage("timelens", "cover"),
    gallery: [
        {
            url: resolveProjectImage("timelens", "cover"),
            alt: {
                es: "TimeLens - Panel Principal, Top Apps y Tendencias en Android",
                en: "TimeLens - Main Dashboard, Top Apps, and Android Trends",
            },
            caption: {
                es: "Vista general con anillo de meta diaria en Compose Canvas, ranking de aplicaciones reales y evolución semanal.",
                en: "Overview featuring the daily goal ring in Compose Canvas, real app rankings, and weekly trends.",
            },
        },
        {
            url: resolveProjectImage("timelens", "bienestar-apps"),
            alt: {
                es: "TimeLens - Filtro por Categorías y Diagnóstico de Hábitos",
                en: "TimeLens - Category Filters and Habit Diagnostics",
            },
            caption: {
                es: "Desglose por categorías con carga nativa de íconos y panel de diagnóstico de hábitos con score diario y regla 20-20-20.",
                en: "Category breakdown with native app icon loading and habit diagnostic sheet scoring daily wellbeing.",
            },
        },
        {
            url: resolveProjectImage("timelens", "tendencias-detalle"),
            alt: {
                es: "TimeLens - Gráficos de Tendencias Semanales y Actividad por Hora",
                en: "TimeLens - Weekly Trend Charts and Hourly Activity",
            },
            caption: {
                es: "Tendencia comparativa de 7/14/30 días desde Room junto al histograma horario de 24h por aplicación.",
                en: "7/14/30-day comparative trends backed by Room alongside per-app 24-hour usage histograms.",
            },
        },
        {
            url: resolveProjectImage("timelens", "detalle-ajustes"),
            alt: {
                es: "TimeLens - Detalle de App, Límites Diarios y Configuración",
                en: "TimeLens - App Detail, Daily Limits, and Settings",
            },
            caption: {
                es: "Métricas detalladas por aplicación, topes diarios configurables, selector de tema Neón/Claro/Sistema y exportación CSV.",
                en: "Per-app session analytics, configurable daily caps, Neon/Light/System theme switcher, and CSV export.",
            },
        },
    ],
    features: [
        {
            title: { es: "Integridad 100% Real con UsageEvents", en: "100% Real Data Integrity via UsageEvents" },
            desc: {
                es: "Reconstrucción exacta de sesiones continuas, desbloqueos y horarios pico desde UsageStatsManager, descartando datos artificiales con purga atómica en Room.",
                en: "Exact reconstruction of continuous sessions, unlocks, and peak hours from UsageStatsManager, enforcing zero simulated metrics with atomic Room cleanup.",
            },
        },
        {
            title: { es: "Límites Diarios por App & Alertas WorkManager", en: "Per-App Daily Limits & WorkManager Alerts" },
            desc: {
                es: "Definición de topes diarios personalizados por aplicación con barras de progreso reactivas y notificaciones preventivas automáticas al alcanzar el 80% y 100%.",
                en: "Custom daily time caps per application with reactive progress bars and proactive background notifications at 80% and 100% thresholds.",
            },
        },
        {
            title: { es: "Detalle Enriquecido con 6 KPIs & Horario Pico", en: "Rich App Detail with 6 KPIs & Hourly Chart" },
            desc: {
                es: "Vista dedicada por aplicación con tiempo diario, frecuencia de aperturas, sesión récord, promedio, tendencia semanal, gráfico por hora (00-23 hs) y accesos directos del sistema.",
                en: "Dedicated per-app screen showing daily usage, opening frequency, longest continuous session, average duration, weekly trend, 24h bar chart, and OS shortcuts.",
            },
        },
        {
            title: { es: "Diagnóstico de Hábitos & Cierre del Día", en: "Habit Diagnostics & Nightly Debrief" },
            desc: {
                es: "Motor dinámico de recomendaciones sin hardcoding con score de bienestar (0-100), franja diurna más productiva y modo de revisión nocturna automática a las 22:00 hs.",
                en: "Dynamic rule-based recommendation engine with wellbeing score (0-100), most productive daytime window, and scheduled 22:00 nightly debrief mode.",
            },
        },
        {
            title: { es: "Widgets Nativos con Jetpack Glance & Compose Canvas", en: "Native Jetpack Glance Widgets & Compose Canvas" },
            desc: {
                es: "Widgets de pantalla de inicio actualizados en segundo plano y gráficos semanales/horarios dibujados directamente en Canvas con soporte de temas Oscuro Neón, Claro y Sistema.",
                en: "Home screen widgets updated in the background alongside weekly and hourly charts drawn directly on Compose Canvas with Neon Dark, Light, and System themes.",
            },
        },
        {
            title: { es: "Suite de 95 Tests Unitarios en JVM", en: "95-Test JVM Unit Testing Suite" },
            desc: {
                es: "Cobertura integral sobre cálculo de sesiones, casos de uso, mapeadores Room, preferencias reactivas, ViewModels y Workers usando MockK y Kotlinx Coroutines Test.",
                en: "Comprehensive test coverage across session calculations, use cases, Room mappers, reactive preferences, ViewModels, and Workers using MockK and Coroutines Test.",
            },
        },
    ],
    architecture: {
        es: "Clean Architecture + MVVM con flujo unidireccional de datos (UDF) en 100% Kotlin. Capa presentation en Jetpack Compose, Material 3, Navigation Compose y Jetpack Glance; capa domain pura con SessionCalculator y UseCases; capa data con Room, SharedPreferences reactivo vía StateFlow y UsageDataSource; inyección de dependencias con Hilt y tareas periódicas con WorkManager.",
        en: "Clean Architecture + MVVM with Unidirectional Data Flow (UDF) in 100% Kotlin. Presentation layer built with Jetpack Compose, Material 3, Navigation Compose, and Jetpack Glance; pure domain layer with SessionCalculator and UseCases; data layer using Room, StateFlow-backed preferences, and UsageDataSource; dependency injection with Hilt and background scheduling via WorkManager.",
    },
    challenges: {
        es: "Calcular sesiones continuas reales a partir de eventos crudos del sistema manejando cruces de medianoche y apagados del dispositivo, manteniendo un scroll fluido a 60/120 Hz mediante renderizado nativo de íconos en ImageBitmap y shaders memorizados en Canvas.",
        en: "Computing accurate continuous sessions from raw OS events across midnight boundaries and shutdown events, while sustaining 60/120 Hz scroll fluidity via native ImageBitmap icon caching and memoized Canvas shaders.",
    },
    role: {
        es: "Creador & Desarrollador Android (Kotlin / Jetpack Compose)",
        en: "Creator & Android Developer (Kotlin / Jetpack Compose)",
    },
    period: "2026",
};
