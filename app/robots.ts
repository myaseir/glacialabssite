import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/private', '/api'], // Add any private routes here
    },
    sitemap: 'https://glacialabs.com/sitemap.xml',
  };
}