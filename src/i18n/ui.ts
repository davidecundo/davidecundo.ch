/**
 * UI strings per locale. v1 is German only (de-CH, Swiss spelling: always "ss").
 * To add English later: add an `en` block with the same keys and create pages under src/pages/en/.
 */
export const languages = {
  de: 'Deutsch',
} as const;

export const defaultLang = 'de';
export type Lang = keyof typeof languages;

export const ui = {
  de: {
    'skip.toMain': 'Zum Inhalt springen',
    'nav.label': 'Hauptnavigation',
    'nav.menu': 'Menü',
    'nav.home': 'Start',
    'nav.about': 'Über mich',
    'nav.projects': 'Projekte',
    'nav.skills': 'Skills & Tools',
    'nav.contact': 'Kontakt',
    'footer.legal': 'Rechtliches',
    'footer.imprint': 'Impressum',
    'footer.privacy': 'Datenschutz',
    'footer.social': 'Social Media',
    'footer.nav': 'Fusszeile',
    'cta.request': 'Schreib mir',
    'cta.projects': 'Woran ich arbeite',
    'cta.linkedin': 'Folge mir auf LinkedIn',
    'cta.send': 'Nachricht senden',
    'external.newTab': '(öffnet in neuem Tab)',
  },
} as const;

export type UiKey = keyof (typeof ui)[typeof defaultLang];

export function useTranslations(lang: Lang = defaultLang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/**
 * Main navigation. Paths are locale-neutral; for English they would get an /en prefix.
 */
export const navItems: { key: UiKey; href: string }[] = [
  { key: 'nav.home', href: '/' },
  { key: 'nav.about', href: '/ueber-mich/' },
  { key: 'nav.projects', href: '/projekte/' },
  { key: 'nav.skills', href: '/skills-tools/' },
  { key: 'nav.contact', href: '/kontakt/' },
];
