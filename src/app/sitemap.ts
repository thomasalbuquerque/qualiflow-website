import type { MetadataRoute } from 'next';
import { site } from '@/config/site';

// Necessário para gerar o arquivo no `output: "export"`.
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return site.nav.map((item) => ({
    url: new URL(item.href, site.url).toString(),
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: item.href === '/' ? 1 : 0.8,
  }));
}
