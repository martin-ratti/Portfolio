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
