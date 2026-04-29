import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { SITE_CONFIG } from './src/data/config';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

// GERADOR DE SITEMAP PERSONALIZADO (Solução de Elite para evitar erros de build)
const customSitemap = () => ({
  name: 'custom-sitemap',
  hooks: {
    'astro:build:done': async ({ dir, pages }) => {
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${new URL(page.pathname, SITE_CONFIG.url).href}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`).join('\n')}
</urlset>`;
      
      const sitemapPath = fileURLToPath(new URL('sitemap-index.xml', dir));
      fs.writeFileSync(sitemapPath, sitemap);
      console.log('✅ Sitemap gerado com sucesso em:', sitemapPath);
    }
  }
});

export default defineConfig({
  site: SITE_CONFIG.url,
  output: 'static',
  trailingSlash: 'ignore',
  prefetch: true,
  integrations: [
    tailwind(),
    customSitemap() // Nossa integração manual e segura
  ]
});
