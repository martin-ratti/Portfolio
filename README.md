<div align="center">

# 👨‍💻 Martín Ratti | Portfolio Profesional

<p align="center">
  <strong>Ingeniería en Sistemas & Desarrollo Full Stack</strong><br />
  <i>"Software funcional, escalable y con una experiencia de usuario excepcional."</i>
</p>

<p align="center">
  <a href="#-sobre-el-proyecto">Sobre mí</a> •
  <a href="#-stack-tecnológico">Stack</a> •
  <a href="#-proyectos-destacados">Proyectos</a> •
  <a href="#-casos-de-estudio-y-galerías">Casos de Estudio</a> •
  <a href="#-instalación">Instalación</a> •
  <a href="#-contacto">Contacto</a>
</p>

<br />

![Astro](https://img.shields.io/badge/astro-%232C2052.svg?style=for-the-badge&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![C#](https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Status](https://img.shields.io/badge/Status-Open_to_Work-green?style=for-the-badge)

</div>

<br />

## 📖 Sobre el Proyecto

Este repositorio aloja el portfolio profesional de **Martín Ratti**, estudiante avanzado de **Ingeniería en Sistemas (UTN Rosario)**. Más que una simple presentación estática, este sitio es una demostración técnica de ingeniería de software, arquitectura moderna, rendimiento extremo y diseño UI premium.

### 🌟 Características Principales
* **Performance First:** Construido sobre **Astro 5** con renderizado híbrido y tiempos de carga instantáneos (PageSpeed 99+).
* **UI Glassmorphism:** Micro-interacciones visuales fluidas, spotlight interactivo en tarjetas y **Dark / Light Mode** con persistencia.
* **Casos de Estudio Dedicados:** Páginas individuales por proyecto (`/proyectos/[slug]` y `/en/proyectos/[slug]`) con transiciones fluidas de Astro (`ClientRouter`).
* **Galería Interactiva con Lightbox:** Visor principal con miniaturas y zoom a pantalla completa accesible por teclado (`Esc`, `←`, `→`).
* **Gestión Inteligente de Recursos:** Detección y priorización automática de formatos de imagen (`.webp` ➔ `.png` ➔ `.jpg` ➔ `.svg`).
* **Internacionalización (i18n):** Soporte bidireccional completo en Español 🇪🇸 e Inglés 🇺🇸 preservando el contexto de navegación.
* **Asistente IA con Contexto Real:** Chatbot integrado que responde consultas técnicas leyendo la base documental [`llms.txt`](./llms.txt).
* **SEO Semántico & Accesibilidad:** Datos estructurados JSON-LD, etiquetas Open Graph dinámicas, accesibilidad WCAG 2.2 y semántica HTML5.

---

## 🛠 Stack Tecnológico

El portfolio demuestra dominio sobre un ecosistema diverso, moderno y escalable:

| Área | Tecnologías |
| :--- | :--- |
| **Core & SSG** | ![Astro](https://img.shields.io/badge/Astro-5.0-orange?style=flat-square) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square) |
| **Frontend UI** | ![React](https://img.shields.io/badge/React-18-blue?style=flat-square) ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-v4-cyan?style=flat-square) |
| **Backend & APIs** | ![Node](https://img.shields.io/badge/Node.js-Runtime-green?style=flat-square) ![C#](https://img.shields.io/badge/.NET_8-WebAPI-purple?style=flat-square) ![Java](https://img.shields.io/badge/Java-Servlets_JSP-red?style=flat-square) ![Express](https://img.shields.io/badge/Express-Framework-lightgrey?style=flat-square) |
| **Bases de Datos** | ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-DB-blue?style=flat-square) ![MySQL](https://img.shields.io/badge/MySQL-DB-blue?style=flat-square) ![SQL Server](https://img.shields.io/badge/SQL_Server-DB-red?style=flat-square) ![SQLite](https://img.shields.io/badge/SQLite-Offline-lightblue?style=flat-square) ![Prisma](https://img.shields.io/badge/Prisma-ORM-darkblue?style=flat-square) |
| **Desktop & Mobile** | ![C# WinForms](https://img.shields.io/badge/C%23-WinForms-purple?style=flat-square) ![React Native](https://img.shields.io/badge/React_Native-Expo-black?style=flat-square) ![Python](https://img.shields.io/badge/Python-OpenCV_OCR-yellow?style=flat-square) |
| **DevOps & QA** | ![Docker](https://img.shields.io/badge/Docker-Containers-blue?style=flat-square) ![Git](https://img.shields.io/badge/Git-VCS-orange?style=flat-square) ![Vercel](https://img.shields.io/badge/Vercel-Production-black?style=flat-square) ![Playwright](https://img.shields.io/badge/Playwright-E2E-green?style=flat-square) |

---

## 💻 Proyectos Destacados

Algunos de los proyectos destacados desarrollados con casos de estudio completos:

### ⚡ [Zenith POS - Landing & Desktop App](/proyectos/zenith-pos)
Punto de Venta integral modular bajo **Clean Architecture**.
- **Desktop:** Aplicación nativa Windows en C# (.NET), persistencia local en SQLite con Dapper, impresión térmica ESC/POS y seguridad por Hardware ID (Machine Binding). 100% offline.
- **Landing:** Web comercial rápida desarrollada con Astro 5 y Tailwind CSS v4.

### 🛍️ [PCFIX - E-Commerce Monorepo](/proyectos/pcfix)
Plataforma de comercio electrónico de alto rendimiento con arquitectura monorepo.
- **Frontend:** Astro Server Islands + React para máxima reactividad con mínimo JS en el cliente.
- **Backend & DevOps:** Node.js, Express, PostgreSQL, Prisma ORM, contenedores Docker y testing automatizado E2E con Playwright.

### 🚗 [EstacionAR - Smart Parking](/proyectos/estacionar)
Plataforma mobile-first para gestión y reserva de cocheras en tiempo real.
- **Stack:** React Native, Expo, Node.js, PostgreSQL y Turborepo.
- **Features:** Geolocalización, credenciales dinámicas de acceso por código QR y pagos integrados.

### 🎟️ [TicketApp - Marketplace de Eventos](/proyectos/ticketapp)
Marketplace para compra de entradas con checkout seguro en Stripe y generación de tickets PDF con hash criptográfico.

---

## 🖼️ Casos de Estudio y Galerías

El sitio incluye páginas dedicadas para cada proyecto que documentan a fondo:
1. **Problema y Solución:** Visión general y contexto de negocio.
2. **Características Clave:** Desglose con iconos y especificaciones técnicas.
3. **Decisiones de Arquitectura:** Por qué y cómo se implementó cada stack.
4. **Desafíos Técnicos y Soluciones:** Retos superados durante el desarrollo.
5. **Galería con Lightbox:** Visor interactivo con selector de capturas y vista a pantalla completa (`Esc` para cerrar, `←` / `→` para navegar).

Para conocer cómo agregar o actualizar capturas reales de proyectos, consulta la [Guía de Gestión de Imágenes](public/projects/README.md).

---

## 🚀 Instalación y Desarrollo Local

```bash
# 1. Clonar el repositorio
git clone https://github.com/martin-ratti/Portfolio.git
cd Portfolio

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
# Disponible en http://localhost:4321

# 4. Compilar para producción
npm run build
```

---

## 📬 Contacto

Disponible para nuevas oportunidades laborales, proyectos y colaboraciones.

<div align="center">
<br />

<a href="mailto:martinratti10@gmail.com">
<img src="https://img.shields.io/badge/Email-martinratti10%40gmail.com-red?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
</a>

<a href="https://www.linkedin.com/in/martin-ratti-dev/">
<img src="https://img.shields.io/badge/LinkedIn-Martín_Ratti-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
</a>

<a href="https://github.com/martin-ratti">
<img src="https://img.shields.io/badge/GitHub-martin--ratti-black?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
</a>

</div>

<br />

---

<p align="center">
  © 2025 Martín Ratti. Desarrollado con excelencia técnica y pasión.
</p>
