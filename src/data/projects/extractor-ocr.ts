import { resolveProjectImage } from "../../utils/projectAssets.ts";
import type { Project } from "./types.ts";

export const extractorOcr: Project = {
    slug: "extractor-ocr",
    title: {
        es: "Extractor OCR - Green & Pink",
        en: "Extractor OCR - Green & Pink",
    },
    tagline: {
        es: "Herramienta de visión artificial para extraer texto resaltado por color en documentos.",
        en: "Computer vision tool to extract color-highlighted text from documents.",
    },
    description: {
        es: "Herramienta de escritorio con visión artificial para extraer texto resaltado de documentos utilizando OpenCV y Tesseract.",
        en: "Desktop tool with computer vision to extract highlighted text from documents using OpenCV and Tesseract.",
    },
    fullDescription: {
        es: "Extractor OCR permite a estudiantes e investigadores acelerar la creación de resúmenes extrayendo únicamente las secciones de texto que fueron marcadas con resaltador (amarillo, verde, rosa y violeta) en libros o apuntes escaneados.",
        en: "Extractor OCR helps students and researchers quickly create study summaries by extracting only text regions marked with highlighters (yellow, green, pink, and purple) in scanned books or notes.",
    },
    tags: ["Python", "Git", "GitHub"],
    repo: "https://github.com/martin-ratti/Extractor-OCR-Python",
    featured: false,
    coverImage: resolveProjectImage("extractor-ocr", "cover"),
    gallery: [
        {
            url: resolveProjectImage("extractor-ocr", "cover"),
            alt: {
                es: "Extractor OCR Green & Pink - Procesamiento de Apuntes Resaltados",
                en: "Extractor OCR Green & Pink - Highlighted Study Notes Processing",
            },
            caption: {
                es: "Interfaz de escritorio en CustomTkinter con procesamiento por lotes, vista previa del documento resaltado, texto extraído con limpieza inteligente y exportación a .txt.",
                en: "CustomTkinter desktop interface featuring batch processing, highlighted document preview, cleaned extracted text, and .txt export.",
            },
        },
    ],
    features: [
        {
            title: { es: "Segmentación de Color HSV", en: "HSV Color Segmentation" },
            desc: {
                es: "Aislamiento preciso de trazos de resaltador ignorando sombras y suciedad del papel escaneado.",
                en: "Accurate highlighter stroke isolation ignoring background paper shadows and noise.",
            },
        },
        {
            title: { es: "OCR Óptico con Tesseract", en: "Optical OCR with Tesseract" },
            desc: {
                es: "Reconocimiento óptico de caracteres optimizado con preprocesamiento de binarización morfológica.",
                en: "Optical character recognition enhanced with morphological binarization preprocessing.",
            },
        },
    ],
    architecture: {
        es: "Aplicación de escritorio en Python con interfaz gráfica Tkinter, procesamiento de imágenes con OpenCV y motor OCR Tesseract.",
        en: "Python desktop application with Tkinter GUI, OpenCV image processing, and Tesseract OCR engine.",
    },
    challenges: {
        es: "Calibrar rangos en el espacio de color HSV para aislar con precisión distintos colores de resaltador (amarillo, verde, rosa y violeta) bajo iluminación desigual o sombras de escaneo, combinándolo con dilatación y binarización morfológica para maximizar la tasa de reconocimiento de Tesseract.",
        en: "Calibrating HSV color-space thresholds to accurately isolate different highlighter inks (yellow, green, pink, and violet) under uneven lighting or scan shadows, paired with morphological dilation and thresholding to maximize Tesseract OCR recognition accuracy.",
    },
    role: {
        es: "Desarrollador de Algoritmos & Python",
        en: "Algorithm & Python Developer",
    },
    period: "2023",
};
