import { site } from './site';

/**
 * «Neu auf LinkedIn» on the home page. Newest first, show three.
 * Only date and title line, never impressions, reactions or follower counts.
 *
 * To update: add the new post on top and drop the oldest one.
 * Entries without their own post URL link to the profile.
 */
const POST_URL_FALLBACK = site.social.linkedin;

export interface LinkedInPost {
  /** Display date, Swiss format DD.MM.YYYY. */
  date: string;
  /** ISO date for the <time> element. */
  isoDate: string;
  title: string;
  href: string;
}

export const linkedinPosts: LinkedInPost[] = [
  {
    date: '17.09.2026',
    isoDate: '2026-09-17',
    title: 'Mit KI einen Power-BI-Report gebaut, ohne Vorkenntnisse in Power BI',
    href: POST_URL_FALLBACK,
  },
  {
    date: '14.09.2026',
    isoDate: '2026-09-14',
    title: 'Mein Morgenbriefing um 7 Uhr: Die KI schlägt vor, ich entscheide',
    href: POST_URL_FALLBACK,
  },
  {
    date: '08.09.2026',
    isoDate: '2026-09-08',
    title: 'Wie KI mir im Verkauf mehr Zeit für Kunden verschafft',
    href: POST_URL_FALLBACK,
  },
];
