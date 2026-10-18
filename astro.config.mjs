// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Static site for Cloudflare Pages: build command `npm run build`, output `dist`.
// No adapter needed for static output.
export default defineConfig({
  site: 'https://davidecundo.ch',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  // German only for v1. English can be added later as a new locale ('en' -> /en/...).
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      // Legal pages and the 404 page stay out of the sitemap.
      filter: (page) => !/\/(impressum|datenschutz|404)\/?$/.test(page),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
