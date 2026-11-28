import type { Project } from "./projects/types.ts";
import { zenithPos } from "./projects/zenith-pos.ts";
import { pcfix } from "./projects/pcfix.ts";
import { trackerUtn } from "./projects/tracker-utn.ts";
import { ticketapp } from "./projects/ticketapp.ts";
import { buyjugador } from "./projects/buyjugador.ts";
import { impulsame } from "./projects/impulsame.ts";
import { ocrWeb } from "./projects/ocr-web.ts";
import { timelens } from "./projects/timelens.ts";
import { extractorOcr } from "./projects/extractor-ocr.ts";

export type { LocalizedText, Project, ProjectFeature, ProjectImage } from "./projects/types.ts";

export const projects: Project[] = [
    zenithPos,
    pcfix,
    trackerUtn,
    ticketapp,
    buyjugador,
    impulsame,
    ocrWeb,
    timelens,
    extractorOcr,
];
