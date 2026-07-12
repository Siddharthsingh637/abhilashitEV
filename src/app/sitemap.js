export const dynamic = 'force-static';

export default function sitemap() {
  const baseUrl = 'https://abhilashit.in/'; // Update with your actual domain

  const blogPosts = [
    {
      slug: 'electric-scooter-savings-2026',
      lastModified: '2026-01-15',
    },
    {
      slug: 'ev-battery-maintenance-guide', 
      lastModified: '2026-01-20',
    },
    {
      slug: 'ev-vs-petrol-performance-comparison',
      lastModified: '2026-01-25',
    },
  ];

  const staticPages = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: new Date(post.lastModified),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}