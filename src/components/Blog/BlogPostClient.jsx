"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

function getApiBase() {
  if (typeof window === "undefined") return "";
  const { hostname } = window.location;
  if (hostname === "localhost" || hostname === "127.0.0.1") {
    return "http://localhost:4000";
  }
  return process.env.NEXT_PUBLIC_API_BASE_URL || "";
}

function formatDate(dateStr) {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;
  return date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-gray-200">
      <div
        className="h-full bg-green-600 transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

function ShareButtons({ title }) {
  const [copied, setCopied] = useState(false);

  const handleNativeShare = () => {
    if (navigator.share) {
      navigator.share({ title, url: window.location.href }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  const whatsappUrl = () =>
    `https://wa.me/?text=${encodeURIComponent(title + " " + window.location.href)}`;

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs font-medium text-gray-500">Share:</span>
      <button
        onClick={handleNativeShare}
        className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-gray-100 rounded-md text-gray-700 border border-gray-200"
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
        </svg>
        {copied ? "Copied!" : "Share"}
      </button>
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-green-50 text-green-800 rounded-md border border-green-200"
      >
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        WhatsApp
      </a>
    </div>
  );
}

const SidebarBlogCard = ({ blog }) => (
  <Link href={`/blogs/${blog.slug}`} className="flex items-start gap-2.5 py-2 border-b border-gray-100 last:border-0">
    <div className="w-14 h-12 rounded-md overflow-hidden bg-gray-100 shrink-0 border border-gray-200">
      {blog.featuredImage ? (
        <img
          src={blog.featuredImage}
          alt={blog.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full bg-gray-100" />
      )}
    </div>
    <div className="flex-1 min-w-0">
      <h4 className="text-xs font-semibold text-gray-800 leading-snug line-clamp-3">
        {blog.title}
      </h4>
      {blog.readingTime && (
        <p className="text-[10px] text-gray-400 mt-0.5">{blog.readingTime}</p>
      )}
    </div>
  </Link>
);

function BlogPostSkeleton() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 animate-pulse">
      <div className="h-3 bg-gray-200 rounded w-1/4 mb-5" />
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-6">
        <div>
          <div className="h-7 bg-gray-200 rounded w-4/5 mb-2" />
          <div className="h-7 bg-gray-200 rounded w-3/5 mb-4" />
          <div className="h-3 bg-gray-200 rounded w-1/3 mb-6" />
          <div className="aspect-video bg-gray-200 rounded-md mb-6 border border-gray-200" />
          <div className="space-y-2">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="h-3.5 bg-gray-100 rounded" style={{ width: `${78 + (i % 4) * 5}%` }} />
            ))}
          </div>
        </div>
        <div className="border border-gray-200 rounded-md p-4">
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex gap-2.5 py-2">
              <div className="w-14 h-12 bg-gray-200 rounded-md shrink-0" />
              <div className="flex-1 space-y-1.5 pt-1">
                <div className="h-3 bg-gray-200 rounded" />
                <div className="h-3 bg-gray-200 rounded w-4/5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AuthorCard({ author }) {
  return (
    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-md border border-gray-200">
      <div className="w-9 h-9 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0">
        <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
        </svg>
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-900">{author}</p>
        <p className="text-xs text-gray-500 mt-0.5">
          Abhilashit Automobiles — Bihar&apos;s leading EV dealership
        </p>
      </div>
    </div>
  );
}

async function fetchSidebarBlogs(slug) {
  const apiBase = getApiBase();

  try {
    const relatedRes = await fetch(`${apiBase}/api/blogs/related/${slug}`);
    if (relatedRes.ok) {
      const related = await relatedRes.json();
      if (Array.isArray(related) && related.length > 0) {
        return related;
      }
    }
  } catch {
    // fall through to all blogs
  }

  try {
    const allRes = await fetch(`${apiBase}/api/blogs?status=published&limit=8`);
    if (allRes.ok) {
      const data = await allRes.json();
      const blogs = Array.isArray(data?.data) ? data.data : [];
      return blogs.filter((b) => b.slug !== slug).slice(0, 6);
    }
  } catch {
    // ignore
  }

  return [];
}

export function BlogPostClient({ slug }) {
  const [blog, setBlog] = useState(null);
  const [sidebarBlogs, setSidebarBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!slug) return;
    let mounted = true;
    setLoading(true);

    fetch(`${getApiBase()}/api/blogs/${slug}`)
      .then((res) => {
        if (res.status === 404) throw new Error("NOT_FOUND");
        if (!res.ok) throw new Error("Failed to load blog post");
        return res.json();
      })
      .then((data) => {
        if (!mounted) return;
        setBlog(data);

        document.title = `${data.metaTitle || data.title} | Abhilashit Automobiles`;
        let metaDescEl = document.querySelector('meta[name="description"]');
        if (!metaDescEl) {
          metaDescEl = document.createElement("meta");
          metaDescEl.setAttribute("name", "description");
          document.head.appendChild(metaDescEl);
        }
        metaDescEl.setAttribute("content", data.metaDescription || data.shortDescription || "");

        return fetchSidebarBlogs(slug);
      })
      .then((others) => {
        if (!mounted) return;
        setSidebarBlogs(Array.isArray(others) ? others : []);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err.message === "NOT_FOUND" ? "NOT_FOUND" : err.message || "Failed to load blog post.");
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });

    return () => { mounted = false; };
  }, [slug]);

  if (loading) return <BlogPostSkeleton />;

  if (error === "NOT_FOUND") {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Blog Post Not Found</h1>
        <p className="text-gray-500 text-sm mb-6">This blog post does not exist or may have been removed.</p>
        <Link href="/blogs" className="px-5 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-md">
          View All Articles
        </Link>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-12 text-center">
        <p className="text-red-600 text-sm mb-4">{error}</p>
        <Link href="/blogs" className="text-green-600 text-sm underline">← Back to Blog</Link>
      </div>
    );
  }

  if (!blog) return null;

  return (
    <div className="min-h-screen bg-white">
      <ReadingProgressBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: blog.metaTitle || blog.title,
            description: blog.metaDescription || blog.shortDescription || "",
            author: { "@type": "Organization", name: blog.author || "Abhilashit Automobiles" },
            publisher: {
              "@type": "Organization",
              name: "Abhilashit Automobiles",
              logo: { "@type": "ImageObject", url: "https://abhilashit.in/logo.png" },
            },
            datePublished: blog.publishDate || blog.createdAt,
            dateModified: blog.updatedAt || blog.createdAt,
            image: blog.featuredImage || "https://abhilashit.in/logo.png",
            url: window.location.href,
            keywords: Array.isArray(blog.keywords) ? blog.keywords.join(", ") : "",
            articleSection: blog.category || "Electric Vehicles",
          }),
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">

        <nav className="mb-4 text-xs text-gray-400 flex items-center gap-1 flex-wrap">
          <Link href="/">Home</Link>
          <span>›</span>
          <Link href="/blogs">Blog</Link>
          <span>›</span>
          {blog.category && (
            <>
              <span className="text-gray-500">{blog.category}</span>
              <span>›</span>
            </>
          )}
          <span className="text-gray-600 truncate max-w-[160px] sm:max-w-xs">{blog.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-6 items-start">

          <article>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {blog.category && (
                <span className="text-xs font-medium text-gray-700 bg-gray-100 px-2 py-0.5 rounded-md border border-gray-200">
                  {blog.category}
                </span>
              )}
              {blog.isFeatured && (
                <span className="text-xs font-medium text-gray-700 bg-gray-100 px-2 py-0.5 rounded-md border border-gray-200">
                  Featured
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-3">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 mb-4 pb-4 border-b border-gray-200">
              <span className="font-medium text-gray-700">{blog.author || "Abhilashit Automobiles"}</span>
              {blog.publishDate && (
                <>
                  <span>•</span>
                  <time dateTime={blog.publishDate}>{formatDate(blog.publishDate)}</time>
                </>
              )}
              {blog.readingTime && (
                <>
                  <span>•</span>
                  <span>{blog.readingTime}</span>
                </>
              )}
            </div>

            {blog.shortDescription && (
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                {blog.shortDescription}
              </p>
            )}

            {blog.featuredImage && (
              <div className="rounded-md overflow-hidden mb-5 aspect-video border border-gray-200">
                <img src={blog.featuredImage} alt={blog.title} className="w-full h-full object-cover" />
              </div>
            )}

            {Array.isArray(blog.tags) && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-5">
                {blog.tags.map((tag) => (
                  <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md border border-gray-200">
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            <div
              className="prose prose-sm sm:prose max-w-none prose-gray prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-green-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-blockquote:border-l-green-600 prose-blockquote:bg-gray-50 prose-blockquote:pl-4 prose-blockquote:py-2 prose-table:text-sm prose-img:rounded-md"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            <div className="mt-6">
              <AuthorCard author={blog.author || "Abhilashit Automobiles"} />
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <ShareButtons title={blog.title} />
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-md border border-gray-200">
              <h3 className="text-sm font-bold text-gray-900 mb-1">
                Ready to Start Your Electric Journey?
              </h3>
              <p className="text-xs text-gray-500 mb-3">
                Visit Abhilashit Automobiles for a test ride and personalised savings calculation.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded-md"
                >
                  Book Test Ride
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-4 py-2 border border-gray-900 text-gray-900 text-sm font-semibold rounded-md"
                >
                  View Models
                </Link>
              </div>
            </div>

            <div className="mt-5">
              <Link
                href="/blogs"
                className="inline-flex items-center text-sm text-gray-700 font-medium"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to All Articles
              </Link>
            </div>
          </article>

          <aside className="lg:sticky lg:top-20 space-y-4">

            <div className="border border-gray-200 rounded-md p-4">
              <div className="pb-2 mb-3 border-b border-gray-200">
                <h3 className="text-sm font-bold text-gray-900">Trending Blogs</h3>
              </div>

              {sidebarBlogs.length > 0 ? (
                <div>
                  {sidebarBlogs.slice(0, 6).map((b) => (
                    <SidebarBlogCard key={b.id || b.slug} blog={b} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-4">
                  <p className="text-xs text-gray-400 mb-2">More articles coming soon</p>
                  <Link href="/blogs" className="text-xs text-green-600 font-medium">
                    View All Articles
                  </Link>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-md p-4">
              <div className="pb-2 mb-3 border-b border-gray-200">
                <h3 className="text-sm font-bold text-gray-900">Categories</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["EV Tips", "News", "Reviews", "Maintenance", "Industry"].map((cat) => (
                  <Link
                    key={cat}
                    href={`/blogs?category=${encodeURIComponent(cat)}`}
                    className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md border border-gray-200"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Test ride available</p>
              <p className="text-xs text-gray-500 mb-3">Visit our showroom in Bihar for a free test ride.</p>
              <Link
                href="/contact-us"
                className="block text-center text-xs font-semibold bg-gray-900 text-white rounded-md py-2"
              >
                Contact Us
              </Link>
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
}
