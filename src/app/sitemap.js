export const dynamic = 'force-static';

const BASE_URL = 'https://abhilashit.in';
const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.abhilashit.in';

export default async function sitemap() {
  const staticPages = [
    { url: `${BASE_URL}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/products`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/contact-us`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blogs`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ];

  // Fetch all published blog slugs from the API for dynamic sitemap generation
  let blogPages = [];
  try {
    const res = await fetch(`${API_URL}/api/blogs?status=published&limit=100`, {
      next: { revalidate: 3600 }, // revalidate every hour
    });
    if (res.ok) {
      const data = await res.json();
      const blogs = Array.isArray(data?.data) ? data.data : [];
      blogPages = blogs.map((blog) => ({
        url: `${BASE_URL}/blogs/${blog.slug}`,
        lastModified: blog.updatedAt ? new Date(blog.updatedAt) : new Date(),
        changeFrequency: 'monthly',
        priority: blog.isFeatured ? 0.8 : 0.6,
      }));
    }
  } catch {
    // Fallback: no blog pages in sitemap if API is unreachable at build time
  }

  return [...staticPages, ...blogPages];
}