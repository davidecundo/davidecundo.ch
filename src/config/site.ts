/**
 * Central site settings. Change values here, not in the pages.
 * The name is always "Davide Cundò" (with accent).
 */
export const site = {
  url: 'https://davidecundo.ch',
  name: 'Davide Cundò',
  /** BCP 47 tag for <html lang>. */
  htmlLang: 'de-CH',
  /** Open Graph locale. */
  ogLocale: 'de_CH',
  location: 'Wetzikon ZH',
  /** Public contact address. Used for mailto links. */
  email: 'hallo@davidecundo.ch',
  social: {
    linkedin: 'https://www.linkedin.com/in/davide-cundo',
    x: 'https://x.com/DavideCundo',
  },
} as const;

export type Site = typeof site;
