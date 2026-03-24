export interface SkillItem {
    name: string;
    icon: string;
}

export interface Skills {
    languages: SkillItem[];
    frontend: SkillItem[];
    backend: SkillItem[];
    tools: SkillItem[];
}

export const skills: Skills = {
    languages: [
        { name: "JavaScript", icon: "simple-icons:javascript" },
        { name: "TypeScript", icon: "simple-icons:typescript" },
        { name: "Java", icon: "fa6-brands:java" },
        { name: "Python", icon: "simple-icons:python" },
        { name: "C#", icon: "simple-icons:csharp" },
        { name: "SQL", icon: "mdi:database-search" }
    ],
    frontend: [
        { name: "Astro", icon: "simple-icons:astro" },
        { name: "React", icon: "simple-icons:react" },
        { name: "React Native", icon: "simple-icons:react" },
        { name: "Tailwind CSS", icon: "simple-icons:tailwindcss" },
        { name: "JSP", icon: "fa6-brands:java" },
        { name: "Blazor", icon: "simple-icons:blazor" },
        { name: "WinForms", icon: "simple-icons:dotnet" }
    ],
    backend: [
        { name: "Node.js", icon: "simple-icons:nodedotjs" },
        { name: "Express", icon: "simple-icons:express" },
        { name: "Java Servlets", icon: "fa6-brands:java" },
        { name: ".NET WebAPI", icon: "simple-icons:dotnet" },
        { name: "Prisma", icon: "simple-icons:prisma" },
        { name: "Maven", icon: "simple-icons:apachemaven" }
    ],
    tools: [
        { name: "Git", icon: "simple-icons:git" },
        { name: "GitHub", icon: "simple-icons:github" },
        { name: "Docker", icon: "simple-icons:docker" },
        { name: "Turborepo", icon: "simple-icons:turborepo" },
        { name: "Vercel", icon: "simple-icons:vercel" },
        { name: "Railway", icon: "simple-icons:railway" },
        { name: "MySQL", icon: "simple-icons:mysql" },
        { name: "PostgreSQL", icon: "simple-icons:postgresql" },
        { name: "SQL Server", icon: "simple-icons:microsoftsqlserver" },
        { name: "Jest", icon: "simple-icons:jest" },
        { name: "Vitest", icon: "simple-icons:vitest" },
        { name: "Playwright", icon: "simple-icons:playwright" },
        { name: "Postman", icon: "simple-icons:postman" }
    ]
};
