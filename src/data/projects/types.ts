export interface LocalizedText {
    es: string;
    en: string;
}

export interface ProjectImage {
    url: string;
    alt: LocalizedText;
    caption: LocalizedText;
}

export interface ProjectFeature {
    title: LocalizedText;
    desc: LocalizedText;
}

export interface Project {
    slug: string;
    title: LocalizedText;
    tagline?: LocalizedText;
    description: LocalizedText;
    fullDescription?: LocalizedText;
    tags: string[];
    link?: string;
    repo: string;
    featured?: boolean;
    coverImage: string;
    gallery: ProjectImage[];
    features?: ProjectFeature[];
    architecture?: LocalizedText;
    challenges?: LocalizedText;
    role?: LocalizedText;
    period?: string;
}
