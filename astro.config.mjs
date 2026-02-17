// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: true
    }
  },
  site: 'https://martinratti.com.ar',
  integrations: [sitemap()],
  output: 'server',
  adapter: node({
    mode: 'standalone'
  })
});