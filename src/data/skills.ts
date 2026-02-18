export interface Skills {
    languages: string[];
    frontend: string[];
    backend: string[];
    tools: string[];
}

export const skills: Skills = {
    languages: ["JavaScript", "TypeScript", "Java", "Python", "C#", "SQL"],
    frontend: ["Astro", "React", "React Native", "Tailwind CSS", "JSP", "Blazor", "WinForms"],
    backend: ["Node.js", "Express", "Java Servlets", ".NET WebAPI", "Prisma", "Maven"],
    tools: ["Git", "GitHub", "Docker", "Turborepo", "Vercel", "Railway", "MySQL", "PostgreSQL", "SQL Server"]
};
