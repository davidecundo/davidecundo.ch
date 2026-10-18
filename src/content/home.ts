/**
 * All copy for the home page (src/pages/index.astro) in one place.
 * The «Neu auf LinkedIn» list lives in src/config/linkedin-posts.ts.
 *
 * Strings that are completely a [placeholder like this] are never rendered.
 */
import { site } from '../config/site';

export interface Link {
  label: string;
  href: string;
}

export interface Hero {
  /** Small mono role line above the H1. */
  meta: string;
  title: string;
  subline: string;
}

export interface Pillar {
  /** Title, rendered as the tile link with a ↘ arrow. */
  title: string;
  text: string;
  /** Proof line in mono under the text. */
  proof: string;
  href: string;
}

export interface Project {
  name: string;
  oneLiner: string;
  status: string;
  href: string;
  /** Optional target (domain or handle), announced to screen readers only so the row stays Name | one-liner | Status | arrow. */
  targetLabel?: string;
  external: boolean;
}

export interface FindMeItem {
  label: string;
  /** Short line under the label. */
  meta: string;
  href: string;
  external: boolean;
}

export const hero: Hero = {
  meta: `${site.name} · Key Account Manager im Verkauf · ${site.location}`,
  title: 'Ich baue mit KI, setze sie im Verkauf ein und zeige ehrlich, wo sie versagt.',
  subline:
    'Ich entwickle eigene Tools wie Zusamo, bereite Kundentermine mit KI vor und prüfe jedes Ergebnis, bevor ich es verwende.',
};

export const heroLinkedIn: Link = {
  label: 'Dienstags und freitags auf LinkedIn mitlesen',
  href: site.social.linkedin,
};

/** Visually hidden heading for the pillar grid. */
export const pillarsTitle = 'Bauen, anwenden, prüfen';

export const pillars: Pillar[] = [
  {
    title: 'Bauen',
    text: 'Mit Codex und Claude Code baue ich eigene Tools, ohne Programmierteam.',
    proof: 'Beleg: Zusamo, entstanden aus meinem Vereinstool',
    href: '/projekte/',
  },
  {
    title: 'Anwenden',
    text: 'KI bereitet meine Kundentermine vor, das Gespräch führe ich selbst.',
    proof: 'Beleg: Rund fünf Minuten Vorbereitung mit ChatGPT, Exa und Copilot',
    href: '/ueber-mich/#verkauf',
  },
  {
    title: 'Prüfen',
    text: 'Ich prüfe das Ergebnis. Immer.',
    proof: 'Beleg: Nichts wird veröffentlicht, bevor ich den Text freigegeben habe',
    href: '/ueber-mich/#pruefen',
  },
];

export const projectsTitle = 'Projekte';
export const projectsLink: Link = { label: 'Alle Projekte', href: '/projekte/' };

export const projects: Project[] = [
  {
    name: 'Zusamo',
    oneLiner: 'Vereinsverwaltung für kleine Vereine, entstanden aus meinem Clubtool.',
    status: 'Pilot',
    // Arrow only, no domain as text (the host is not named on the site).
    href: 'https://zusamo.klarki.ch/',
    external: true,
  },
  {
    name: 'Mein KI-Team',
    oneLiner: 'Vier KI-Assistenten, die nichts ohne meine Freigabe veröffentlichen.',
    status: 'im Einsatz',
    href: '/projekte/',
    external: false,
  },
  {
    name: 'Practical AI',
    oneLiner: 'Englische Posts auf X über praktische KI im Job.',
    status: 'Läuft',
    href: site.social.x,
    targetLabel: '@DavideCundo',
    external: true,
  },
];

export const linkedinTitle = 'Neu auf LinkedIn';
export const linkedinAll: Link = { label: 'Alle Posts auf LinkedIn', href: site.social.linkedin };

export const findMeTitle = 'Hier findest du mich';

export const findMe: FindMeItem[] = [
  { label: 'LinkedIn', meta: 'Dienstags und freitags, auf Deutsch', href: site.social.linkedin, external: true },
  { label: 'X', meta: '@DavideCundo, englisch, praktische KI im Job', href: site.social.x, external: true },
  { label: 'E-Mail', meta: site.email, href: `mailto:${site.email}`, external: false },
];
