import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { sanitizeAssistantHtml, renderAssistantMarkdown } from "../src/utils/chat/chatUi.ts";
import { ui } from "../src/i18n/ui.ts";
import { skills } from "../src/data/skills.ts";
import { projects } from "../src/data/projects.ts";

describe("Chat HTML Sanitization & Markdown Rendering (Mejora #1)", () => {
    it("strips <script>, <iframe>, <object>, <embed>, and <form> tags", () => {
        const malicious = `
            <p>Hola</p>
            <script>alert('xss')</script>
            <iframe src="https://evil.com"></iframe>
            <object data="evil.swf"></object>
            <embed src="evil.swf" />
            <form action="https://evil.com"><input type="submit" /></form>
        `;
        const clean = sanitizeAssistantHtml(malicious);
        assert.ok(clean.includes("<p>Hola</p>"));
        assert.ok(!clean.includes("<script"));
        assert.ok(!clean.includes("<iframe"));
        assert.ok(!clean.includes("<object"));
        assert.ok(!clean.includes("<embed"));
        assert.ok(!clean.includes("<form"));
    });

    it("strips inline on* event attributes", () => {
        const malicious = `<img src="https://martinratti.com.ar/og-image.png" onerror="alert(1)" onload='steal()' /><div onclick="evil()">Texto</div>`;
        const clean = sanitizeAssistantHtml(malicious);
        assert.ok(!/on[a-z]+\s*=/i.test(clean));
        assert.ok(clean.includes("Texto"));
    });

    it("neutralizes javascript: and data: URLs on href and src", () => {
        const malicious = `<a href="javascript:alert(1)">Click</a><a href="data:text/html,<script>alert(1)</script>">Data</a><img src="javascript:evil()" />`;
        const clean = sanitizeAssistantHtml(malicious);
        assert.ok(!clean.toLowerCase().includes("javascript:"));
        assert.ok(!clean.toLowerCase().includes("data:text/html"));
    });

    it("ensures all rendered <a> links include target=\"_blank\" and rel=\"noopener noreferrer\"", () => {
        const html = renderAssistantMarkdown("Visita mi [GitHub](https://github.com/martin-ratti) o mi [CV](https://martinratti.com.ar/CV_Martin_Ratti.pdf)");
        const anchorMatches = html.match(/<a\b[^>]*>/gi) || [];
        assert.equal(anchorMatches.length, 2);
        for (const anchor of anchorMatches) {
            assert.ok(anchor.includes('target="_blank"'), `Missing target="_blank" in ${anchor}`);
            assert.ok(anchor.includes('rel="noopener noreferrer"'), `Missing rel="noopener noreferrer" in ${anchor}`);
        }
    });
});

describe("i18n Key Parity & Completeness (Mejora #7)", () => {
    it("has identical translation keys in Spanish (es) and English (en)", () => {
        const esKeys = Object.keys(ui.es).sort();
        const enKeys = Object.keys(ui.en).sort();
        assert.deepEqual(esKeys, enKeys);
    });

    it("has non-empty string values for every key in both languages", () => {
        for (const [key, val] of Object.entries(ui.es)) {
            assert.ok(typeof val === "string" && val.trim().length > 0, `Empty es value for ${key}`);
        }
        for (const [key, val] of Object.entries(ui.en)) {
            assert.ok(typeof val === "string" && val.trim().length > 0, `Empty en value for ${key}`);
        }
    });

    it("does not repeat 'highlight' twice in English stack.instruction", () => {
        const matches = ui.en["stack.instruction"].match(/\bhighlight\b/gi) || [];
        assert.equal(matches.length, 1);
    });
});

describe("Skill-to-Project Filter Alignment (Mejora #7)", () => {
    const allSkills = [
        ...skills.languages,
        ...skills.frontend,
        ...skills.backend,
        ...skills.tools,
    ].map((s) => s.name);

    const allProjectTags = new Set(projects.flatMap((p) => p.tags));

    it("matches every skill in skills.ts to at least one project tag in projects.ts", () => {
        for (const skillName of allSkills) {
            assert.ok(
                allProjectTags.has(skillName),
                `Skill "${skillName}" does not match any project tag in projects.ts`
            );
        }
    });

    it("every project tag corresponds to a valid skill in skills.ts", () => {
        const skillSet = new Set(allSkills);
        for (const project of projects) {
            for (const tag of project.tags) {
                assert.ok(
                    skillSet.has(tag),
                    `Project "${project.title}" has tag "${tag}" which is not in skills.ts`
                );
            }
        }
    });
});
