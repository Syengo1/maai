import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://maactionaid.org';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // If you ever add an admin dashboard, you would block it here:
      // disallow: ['/admin/', '/api/'], 
    },
    sitemap: `${baseUrl}/sitemap.xml`, // Points directly to the dynamically generated sitemap
  };
}