# 📸 Estructura Organizada de Imágenes de Proyectos

Esta carpeta contiene todas las imágenes, capturas y mockups de los proyectos mostrados en el portfolio.

---

## 📁 Estructura de Directorios

Cada proyecto cuenta con su propia subcarpeta nombrada con su `slug` correspondiente:

```text
public/projects/
├── zenith-pos/
│   ├── cover.jpg           # 🌟 Portada principal (Terminal de venta)
│   ├── dashboard.jpg       # 📊 Panel de control gerencial
│   ├── inventario.jpg      # 📦 Control de inventario
│   ├── caja-reportes.jpg   # 💵 Arqueo y gestión de caja
│   ├── cuentas-corrientes.jpg # 👥 Cuentas corrientes
│   ├── administracion.jpg  # ⚙️ Centro de control White-label
│   └── landing.svg         # 🌐 Landing page comercial   # 🖼️ Captura adicional 2
├── pcfix/
│   ├── cover.webp
│   ├── cover.svg
│   └── admin.webp
├── tracker-utn/
│   ├── cover.png           # 🌟 Portada principal (Malla curricular)
│   ├── grafo-interactivo.png
│   ├── ficha-analitica.png
│   ├── calendario-metas.png
│   ├── dashboard-estadisticas.png
│   ├── detalle-materia.png
│   └── materias-electivas.png
├── ticketapp/
│   ├── cover.webp
│   └── cover.svg
├── buyjugador/
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
