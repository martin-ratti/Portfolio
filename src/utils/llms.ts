import { projects, type Project } from "../data/projects.ts";
import { skills } from "../data/skills.ts";

export const SITE_URL = "https://martinratti.com.ar";

export const ADDITIONAL_REPOS = [
    {
        name: "MetinForge",
        url: "https://github.com/martin-ratti/MetinForge",
        description:
            "Desktop utility for Metin2 players (alchemy tracking, fishing analytics, floating timer, .xlsx/.csv import).",
    },
    {
        name: "GitIgnore-Genius",
        url: "https://github.com/martin-ratti/GitIgnore-Genius",
        description:
            "Desktop app that detects project tech stacks and generates tailored .gitignore files.",
    },
] as const;

function formatIndexProjectLine(project: Project): string {
    const caseStudyUrl = `${SITE_URL}/proyectos/${project.slug}`;
    const summary = project.tagline?.en || project.description.en;
    const livePart = project.link ? ` | [Live Demo](${project.link})` : "";
    return `- [${project.title.en}](${caseStudyUrl}): ${summary}${livePart}`;
}

function formatFullProjectBlock(project: Project): string {
    const lines = [
        `### ${project.title.en}`,
        `- **Case Study:** ${SITE_URL}/proyectos/${project.slug}`,
    ];

    if (project.link) {
        lines.push(`- **Live Demo:** ${project.link}`);
    }

    lines.push(`- **Repository:** ${project.repo}`);

    if (project.role?.en || project.period) {
        const rolePart = project.role?.en || "Developer";
        const periodPart = project.period ? ` (${project.period})` : "";
        lines.push(`- **Role & Period:** ${rolePart}${periodPart}`);
    }

    lines.push(`- **Tech Stack:** ${project.tags.join(", ")}`);
    lines.push(`- **Overview:** ${project.description.en}`);

    if (project.architecture?.en) {
        lines.push(`- **Architecture:** ${project.architecture.en}`);
    }

    if (project.challenges?.en) {
        lines.push(`- **Challenges:** ${project.challenges.en}`);
    }

    if (project.features && project.features.length > 0) {
        const featureNames = project.features.map((f) => f.title.en).join("; ");
        lines.push(`- **Key Features:** ${featureNames}`);
    }

    return lines.join("\n");
}

function buildTechStackLines(): string[] {
    return [
        `- **Languages:** ${skills.languages.map((s) => s.name).join(", ")}`,
        `- **Frontend & UI:** ${skills.frontend.map((s) => s.name).join(", ")}`,
        `- **Backend:** ${skills.backend.map((s) => s.name).join(", ")}`,
        `- **Databases:** ${skills.databases.map((s) => s.name).join(", ")}`,
        `- **Tools, Testing & Cloud:** ${skills.tools.map((s) => s.name).join(", ")}`,
    ];
}

function buildResourceLines(): string[] {
    return [
        `- [Portfolio (Español)](${SITE_URL}/): Spanish landing page and full project showcase`,
        `- [Portfolio (English)](${SITE_URL}/en): English landing page and full project showcase`,
        `- [CV (Español)](${SITE_URL}/CV_Martin_Ratti.pdf): Currículum Vítae en Español (PDF)`,
        `- [Resume (English)](${SITE_URL}/CV_Martin_Ratti_EN.pdf): Professional Resume in English (PDF)`,
        `- [LinkedIn Profile](https://www.linkedin.com/in/martin-ratti-dev/): Professional profile`,
        `- [GitHub Profile](https://github.com/martin-ratti): Source code repositories`,
        `- [Contact Form](${SITE_URL}/#contacto): Direct contact form on portfolio`,
    ];
}

/**
 * Generates the compact public navigation index for `/llms.txt` (llmstxt.org format).
 */
export function buildLlmsIndex(): string {
    const featured = projects.filter((p) => p.featured);
    const others = projects.filter((p) => !p.featured);

    return [
        "# Martín Ratti — Full Stack Developer Portfolio",
        "",
        "> Personal portfolio of Martín Ratti, Full Stack Developer & senior Systems Engineering student at UTN FRRo (Rosario, Argentina), focused on end-to-end architecture, performance, and production-ready software across Web, Android, and Desktop.",
        "",
        "## Full Context",
        "",
        `- [Full Technical Context (llms-full.txt)](${SITE_URL}/llms-full.txt): Complete architecture, stack, challenges, and project details for LLMs and AI assistants.`,
        "",
        `## Featured Projects (${featured.length})`,
        "",
        ...featured.map(formatIndexProjectLine),
        "",
        `## Other Projects (${others.length})`,
        "",
        ...others.map(formatIndexProjectLine),
        "",
        "## Tech Stack Summary",
        "",
        ...buildTechStackLines(),
        "",
        "## Additional GitHub Repositories",
        "",
        ...ADDITIONAL_REPOS.map((repo) => `- [${repo.name}](${repo.url}): ${repo.description}`),
        "",
        "## Links & Resources",
        "",
        ...buildResourceLines(),
        "",
    ].join("\n");
}

/**
 * Generates the complete technical context for `/llms-full.txt` and `Martín AI`.
 */
export function buildLlmsFullContext(): string {
    const featured = projects.filter((p) => p.featured);
    const others = projects.filter((p) => !p.featured);

    return [
        "# Martín Ratti — Full Technical Context",
        "",
        "> Complete technical reference of Martín Ratti's portfolio, generated from canonical project and skill data for `/llms-full.txt` and the Martín AI assistant.",
        "",
        "## Profile & Availability",
        "",
        "- **Name:** Martín Ratti",
        "- **Role:** Full Stack Developer",
        "- **Education:** Information Systems Engineering (UTN Facultad Regional Rosario — UTN FRRo, Plan 2023, senior student)",
        "- **Location:** Rosario, Argentina",
        "- **Availability:** Actively open to new job opportunities and full-stack roles",
        `- **Contact:** Portfolio contact form (\`${SITE_URL}/#contacto\`), LinkedIn (\`https://www.linkedin.com/in/martin-ratti-dev/\`), and GitHub (\`https://github.com/martin-ratti\`). Direct email is intentionally obfuscated on the site UI to prevent spam scraping.`,
        "",
        "## Engineering Approach",
        "",
        "- **Clean Architecture:** Decoupled layers (Clean Architecture, Onion, MVVM) and end-to-end typed monorepos.",
        "- **Idea to Production:** Real checkouts (MercadoPago, Stripe + HMAC webhooks), OAuth/JWT/RBAC security, and offline-first persistence.",
        "- **Cross-Platform Delivery:** Modern Web (Astro/React), Native Android (Kotlin/Jetpack Compose), Windows Desktop (.NET WinForms/Blazor), and Python + AI automation.",
        "- **Verifiable Quality:** Automated unit, integration, and E2E testing (Playwright, Vitest, Jest, MockK), schema validation (Zod), CI/CD (GitHub Actions), and Agile delivery (Scrum, Kanban).",
        "",
        "## Tech Stack",
        "",
        ...buildTechStackLines(),
        "",
        `## Featured Portfolio Projects (${featured.length})`,
        "",
        ...featured.flatMap((p) => [formatFullProjectBlock(p), ""]),
        `## Other Portfolio Projects (${others.length})`,
        "",
        ...others.flatMap((p) => [formatFullProjectBlock(p), ""]),
        "## Additional GitHub Repositories (Not in main portfolio grid)",
        "",
        ...ADDITIONAL_REPOS.map((repo) => `- **${repo.name}** (\`${repo.url}\`): ${repo.description}`),
        "",
        "## Links & Resources",
        "",
        ...buildResourceLines(),
        "",
    ].join("\n");
}
