import { MetadataRoute } from 'next';
import { BRAND_ARCHIVE } from './constants'; 

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://glacialabs.com';

  // 1. Core Static Pages
  const staticPages = [
    '',
    '/work',
    '/services',
    '/about',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  /** * 2. Dynamic Project Entries
   * Even if you don't have separate sub-pages (e.g., /projects/yangtze), 
   * including your archive data here helps Google's "Knowledge Graph" 
   * connect Glacia Labs to these high-end brands.
   */
  const projectEntries = BRAND_ARCHIVE.map((project) => ({
    url: `${baseUrl}/projects?client=${project.name.toLowerCase().replace(/\s+/g, '-')}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...projectEntries];
}