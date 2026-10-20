import fs from "node:fs";
import path from "node:path";

const SUPPORTED_EXTENSIONS = [".webp", ".png", ".jpg", ".jpeg", ".svg"] as const;

/**
 * Resuelve la ruta pública de una imagen de proyecto buscando en orden de preferencia:
 * 1. .webp (máximo rendimiento)
 * 2. .png / .jpg / .jpeg (capturas estándar)
 * 3. .svg (mockups vectoriales de fallback)
 * 
 * Si Martín coloca `cover.webp` en `public/projects/zenith-pos/`,
 * se detecta automáticamente sin necesidad de editar código.
 */
export function resolveProjectImage(slug: string, baseName: string, fallbackUrl?: string): string {
    const publicDir = path.join(process.cwd(), "public");

    for (const ext of SUPPORTED_EXTENSIONS) {
        const fileName = `${baseName}${ext}`;
        const diskPath = path.join(publicDir, "projects", slug, fileName);
        if (fs.existsSync(diskPath)) {
            return `/projects/${slug}/${fileName}`;
        }
    }

    return fallbackUrl || `/projects/${slug}/${baseName}.webp`;
}

/**
 * Escanea el directorio de un proyecto y devuelve la lista de imágenes disponibles
 * ordenadas (la portada 'cover' primero, y luego las capturas numeradas/nombradas).
 */
export function getProjectGalleryUrls(slug: string): string[] {
    const projectDir = path.join(process.cwd(), "public", "projects", slug);
    if (!fs.existsSync(projectDir)) return [];

    const files = fs.readdirSync(projectDir);
    const baseNames = new Set<string>();

    files.forEach((file) => {
        const ext = path.extname(file).toLowerCase();
        if (SUPPORTED_EXTENSIONS.includes(ext as any)) {
            baseNames.add(path.basename(file, ext));
        }
    });

    const result: string[] = [];

    // Priorizar 'cover' primero
    if (baseNames.has("cover")) {
        result.push(resolveProjectImage(slug, "cover"));
        baseNames.delete("cover");
    }

    // Ordenar las demás capturas (screenshot-1, screenshot-2, etc.)
    const sorted = Array.from(baseNames).sort();
    sorted.forEach((name) => {
        result.push(resolveProjectImage(slug, name));
    });

    return result;
}
