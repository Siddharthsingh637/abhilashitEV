import { BlogPostClient } from "@/components/Blog/BlogPostClient";

/**
 * With output:"export", every dynamic route MUST have all its params listed
 * in generateStaticParams. We use a single placeholder slug so Next.js
 * generates a shell HTML file at build time. The actual content is always
 * fetched client-side by BlogPostClient, so any slug works at runtime.
 *
 * Setting dynamicParams = false tells Next.js not to error on slugs that
 * aren't pre-listed — the shell page is served and the client fetches content.
 */
export const dynamicParams = false;

export async function generateStaticParams() {
  // Attempt to fetch known slugs from the API at build time
  try {
    const apiBase =
      process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000";

    const res = await fetch(`${apiBase}/api/blogs?status=published&limit=200`, {
      signal: AbortSignal.timeout(8000),
    });

    if (res.ok) {
      const data = await res.json();
      const blogs = Array.isArray(data?.data) ? data.data : [];
      if (blogs.length > 0) {
        return blogs.map((b) => ({ slug: b.slug }));
      }
    }
  } catch {
    // Fallback to legacy hardcoded slugs
  }

  return [
    { slug: "electric-scooter-savings-2026" },
    { slug: "ev-battery-maintenance-guide" },
    { slug: "ev-vs-petrol-performance-comparison" },
    { slug: "monsoon-safety-guide-for-electric-vehicles-everything-you-need-to-know" },
  ];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return {
    title: `Blog | Abhilashit Automobiles`,
    description:
      "Expert electric vehicle insights from Abhilashit Automobiles, Bihar's leading EV dealership.",
    alternates: {
      canonical: `https://abhilashit.in/blogs/${slug}`,
    },
    openGraph: {
      type: "article",
      siteName: "Abhilashit Automobiles",
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  return (
    <div className="min-h-screen bg-white">
      <BlogPostClient slug={slug} />
    </div>
  );
}