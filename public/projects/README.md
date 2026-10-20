# 📸 Estructura Organizada de Imágenes de Proyectos

Esta carpeta contiene todas las imágenes, capturas y mockups de los proyectos mostrados en el portfolio.

---

## 📁 Estructura de Directorios

Cada proyecto cuenta con su propia subcarpeta nombrada con su `slug` correspondiente:

```text
public/projects/
├── zenith-pos/
│   ├── cover.webp              # 🌟 Portada principal (Terminal de venta)
│   ├── dashboard.webp          # 📊 Panel de control gerencial
│   ├── inventario.webp         # 📦 Control de inventario
│   ├── caja-reportes.webp      # 💵 Arqueo y gestión de caja
│   ├── cuentas-corrientes.webp # 👥 Cuentas corrientes
│   └── administracion.webp     # ⚙️ Centro de control White-label
├── tracker-utn/
│   ├── cover.webp              # 🌟 Portada principal (Malla curricular)
│   ├── grafo-interactivo.webp  # 🕸️ Grafo de correlativas y camino crítico
│   ├── ficha-analitica.webp    # 📄 Analítico oficial descargable en PDF
│   ├── calendario-metas.webp   # 📅 Calendario de mesas y metas con email
│   ├── dashboard-estadisticas.webp # 📈 Estadísticas académicas
│   ├── detalle-materia.webp    # 🔍 Detalle y correlativas por asignatura
│   └── materias-electivas.webp # 🎓 Panel de materias electivas
├── buyjugador/
│   ├── cover.webp              # 🌟 Portada principal (Dashboard Blazor WASM)
│   ├── arquitectura.webp       # 📐 Solución de 8 proyectos en Visual Studio
│   ├── reporte-precios.webp    # 📈 Reporte analítico ScottPlot + PDFsharp
│   ├── pedidos-blazor.webp     # 🌐 Módulo de pedidos Web
│   ├── ventas-desktop.webp     # 🖥️ Gestión de ventas WinForms
│   └── pedidos-desktop.webp    # 📦 Abastecimiento y pedidos Desktop
├── pcfix/
│   ├── cover.webp
│   ├── cover.svg
│   └── admin.webp
├── ticketapp/
│   ├── cover.webp
│   └── cover.svg
├── impulsame/
│   ├── cover.webp
│   └── cover.svg
├── extractor-ocr/
│   ├── cover.webp
│   └── cover.svg
└── animall-forrajeria/
    ├── cover.webp
    └── cover.svg
```

---

## ⚡ Detección Automática de Formatos

El sistema implementa **resolución inteligente de archivos**. Al compilar el sitio con `npm run build` o ejecutar `npm run dev`:

1. Si existe `cover.webp`, se utilizará automáticamente en la tarjeta y en la cabecera del proyecto.
2. Si no hay `.webp`, buscará `.png`, `.jpg` o `.jpeg`.
3. Si no hay ninguna imagen real cargada, utilizará el mockup `cover.svg` como fallback visual sin romper nada.

> **💡 Consejo:** ¡No necesitas modificar código! Con solo soltar tu captura nombrada `cover.webp` (o `cover.png`) en la carpeta del proyecto, el portfolio la tomará de inmediato.

---

## 📐 Especificaciones Recomendadas para Capturas Reales

| Parámetro | Recomendación | Motivo |
| :--- | :--- | :--- |
| **Proporción** | `16:9` (Aspect-Video) | Se adapta perfectamente a las tarjetas y al visor de galería sin cortes. |
| **Resolución** | `1920 × 1080` px o `1280 × 720` px | Máxima nitidez en pantallas Retina y 4K. |
| **Formato** | `.webp` (calidad 80% - 85%) | Carga ultrarrápida y peso inferior a 120 KB por imagen. |
| **Estilo Visual** | Ventana limpia sin barra de tareas del SO | Da una estética moderna y profesional. |

---

## 🛠️ Herramientas Gratuitas Recomendadas para Crear Capturas

- **[Ray.so](https://ray.so/)**: Ideal para capturas de código o interfaces con marcos elegantes.
- **[Screely](https://www.screely.com/)**: Convierte cualquier captura plana en un mockup de ventana con bordes redondeados y sombras suaves.
- **Herramientas de Recorte de Windows / ShareX**: Usa `Alt + Impr Pant` para capturar exclusivamente la ventana activa del software.
- **DevTools de Chrome/Firefox (Device Mode)**: Para capturas web o mobile con dimensiones exactas (`Ctrl + Shift + M`).
