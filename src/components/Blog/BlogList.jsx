"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";

function getApiBase() {
  if (typeof window === "undefined") return "";
  const { hostname } = window.location;
  if (hostname === "localhost" || hostname === "127.0.0.1") {
    return "http://localhost:4000";
  }
  return process.env.NEXT_PUBLIC_API_BASE_URL || "";
}

async function fetchBlogs(params = {}) {
  const query = new URLSearchParams();
  if (params.page) query.set("page", params.page);
  if (params.limit) query.set("limit", params.limit);
  if (params.search) query.set("search", params.search);
  if (params.category) query.set("category", params.category);
  if (params.status) query.set("status", "published");
  const qs = query.toString();
  const res = await fetch(`${getApiBase()}/api/blogs${qs ? `?${qs}` : ""}`);
  if (!res.ok) throw new Error("Failed to fetch blogs");
  return res.json();
}

const CategoryBadge = ({ label }) => (
  <span className="absolute bottom-2 right-2 text-[10px] font-semibold uppercase tracking-wide bg-white text-gray-800 px-2 py-0.5 rounded-md border border-gray-200">
    {label}
  </span>
);

const AuthorLine = ({ author, size = "sm" }) => {
  if (!author) return null;
  const avatarSize = size === "sm" ? "w-5 h-5" : "w-4 h-4";
  const iconSize = size === "sm" ? "w-3 h-3" : "w-2.5 h-2.5";
  return (
    <div className="flex items-center gap-1.5">
      <div className={`${avatarSize} rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0`}>
        <svg className={`${iconSize} text-gray-400`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
        </svg>
      </div>
      <span className="text-xs text-gray-500">{author}</span>
    </div>
  );
};

const SpotlightCard = ({ blog }) => (
  <Link href={`/blogs/${blog.slug}`} className="block">
    <article>
      <div className="rounded-md overflow-hidden bg-gray-100 aspect-[16/10] relative border border-gray-200">
        {blog.featuredImage ? (
          <img
            src={blog.featuredImage}
            alt={blog.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        {blog.category && <CategoryBadge label={blog.category} />}
      </div>
      <h2 className="mt-2.5 text-lg font-bold text-gray-900 leading-snug line-clamp-2">
        {blog.title}
      </h2>
      <div className="mt-1.5">
        <AuthorLine author={blog.author} />
      </div>
    </article>
  </Link>
);

const TrendingCard = ({ blog }) => (
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
    <h4 className="text-sm font-semibold text-gray-800 leading-snug line-clamp-3 pt-0.5">
      {blog.title}
    </h4>
  </Link>
);

const CategoryCard = ({ blog }) => (
  <Link href={`/blogs/${blog.slug}`} className="block">
    <article>
      <div className="rounded-md overflow-hidden bg-gray-100 aspect-[16/10] relative border border-gray-200">
        {blog.featuredImage ? (
          <img
            src={blog.featuredImage}
            alt={blog.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <svg className="w-7 h-7 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        {blog.category && <CategoryBadge label={blog.category} />}
      </div>
      <h3 className="mt-2 text-sm font-bold text-gray-900 leading-snug line-clamp-2">
        {blog.title}
      </h3>
      <div className="mt-1">
        <AuthorLine author={blog.author} size="xs" />
      </div>
    </article>
  </Link>
);

const SpotlightSkeleton = () => (
  <div className="animate-pulse">
    <div className="rounded-md bg-gray-200 aspect-[16/10] border border-gray-200" />
    <div className="mt-2.5 h-4 bg-gray-200 rounded w-4/5" />
    <div className="mt-1 h-3 bg-gray-100 rounded w-1/3" />
  </div>
);

const TrendingSkeleton = () => (
  <div className="flex items-start gap-2.5 py-2 animate-pulse">
    <div className="w-14 h-12 rounded-md bg-gray-200 shrink-0" />
    <div className="flex-1 space-y-1.5 pt-1">
      <div className="h-3 bg-gray-200 rounded w-full" />
      <div className="h-3 bg-gray-200 rounded w-4/5" />
    </div>
  </div>
);

const CategoryCardSkeleton = () => (
  <div className="animate-pulse">
    <div className="rounded-md bg-gray-200 aspect-[16/10] border border-gray-200" />
    <div className="mt-2 h-3.5 bg-gray-200 rounded w-full" />
    <div className="mt-1 h-3 bg-gray-100 rounded w-1/3" />
  </div>
);

const SectionHeader = ({ title, href }) => (
  <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-200">
    <h2 className="text-sm font-bold text-gray-900">{title}</h2>
    {href && (
      <Link
        href={href}
        className="text-xs text-gray-600 border border-gray-300 rounded-md px-2 py-0.5"
      >
        Read More
      </Link>
    )}
  </div>
);

const PAGE_SIZE = 30;

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [activeCategory, setActiveCategory] = useState("");

  const loadBlogs = useCallback(() => {
    let mounted = true;
    setLoading(true);
    setError("");
    fetchBlogs({ page: 1, limit: PAGE_SIZE, search, category: activeCategory, status: "published" })
      .then((res) => {
        if (!mounted) return;
        setBlogs(Array.isArray(res?.data) ? res.data : []);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err?.message || "Failed to load blog posts.");
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });
    return () => { mounted = false; };
  }, [search, activeCategory]);

  useEffect(() => {
    const cleanup = loadBlogs();
    return cleanup;
  }, [loadBlogs]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearch(searchInput);
    setActiveCategory("");
  };

  const spotlight = blogs[0] || null;
  const trending = blogs.slice(1, 4);
  const restBlogs = blogs.slice(4);

  const categoryMap = {};
  restBlogs.forEach((b) => {
    const cat = b.category || "General";
    if (!categoryMap[cat]) categoryMap[cat] = [];
    categoryMap[cat].push(b);
  });
  const categories = Object.keys(categoryMap);
  const allCategories = [...new Set(blogs.map((b) => b.category).filter(Boolean))];
  const isFiltered = search || activeCategory;

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">

      <div className="mb-5">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
          EV Insights & Updates
        </h1>
        <p className="text-sm text-gray-500 mt-0.5">
          Tips, news, and stories from Abhilashit Automobiles.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 mb-4">
        <form onSubmit={handleSearchSubmit} className="flex gap-2 flex-1">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search articles…"
            className="flex-1 border border-gray-300 rounded-md px-3 py-1.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600"
          />
          <button
            type="submit"
            className="px-3 py-1.5 bg-gray-900 text-white text-sm font-medium rounded-md"
          >
            Search
          </button>
          {search && (
            <button
              type="button"
              onClick={() => { setSearch(""); setSearchInput(""); }}
              className="px-3 py-1.5 text-sm text-gray-600 border border-gray-300 rounded-md"
            >
              Clear
            </button>
          )}
        </form>
      </div>

      {allCategories.length > 0 && !loading && (
        <div className="flex flex-wrap gap-1.5 mb-5">
          <button
            type="button"
            onClick={() => setActiveCategory("")}
            className={`px-2.5 py-1 rounded-md text-xs font-medium border ${
              activeCategory === ""
                ? "bg-gray-900 text-white border-gray-900"
                : "bg-white text-gray-600 border-gray-300"
            }`}
          >
            All
          </button>
          {allCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-2.5 py-1 rounded-md text-xs font-medium border ${
                activeCategory === cat
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-600 border-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-sm text-red-700">
          {error}
        </div>
      )}

      {isFiltered ? (
        <div>
          {search && (
            <p className="text-sm text-gray-500 mb-3">
              Results for <span className="font-medium text-gray-800">&ldquo;{search}&rdquo;</span>
              {blogs.length > 0 && ` — ${blogs.length} post${blogs.length !== 1 ? "s" : ""}`}
            </p>
          )}
          {loading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {Array.from({ length: 6 }).map((_, i) => <CategoryCardSkeleton key={i} />)}
            </div>
          ) : blogs.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-500 text-sm">No posts found. Try a different search or category.</p>
              <button
                type="button"
                onClick={() => { setSearch(""); setSearchInput(""); setActiveCategory(""); }}
                className="mt-3 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md"
              >
                View All Posts
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {blogs.map((blog) => <CategoryCard key={blog.id} blog={blog} />)}
            </div>
          )}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-0 mb-7 border border-gray-200 rounded-md overflow-hidden">
            <div className="p-4 md:pr-5 md:border-r border-gray-200">
              <SectionHeader title="Spotlight" />
              {loading ? <SpotlightSkeleton /> : spotlight ? (
                <SpotlightCard blog={spotlight} />
              ) : null}
            </div>

            <div className="p-4 md:pl-5 bg-gray-50/50">
              <SectionHeader title="Trending" />
              {loading ? (
                <div>
                  {Array.from({ length: 3 }).map((_, i) => <TrendingSkeleton key={i} />)}
                </div>
              ) : trending.length > 0 ? (
                <div>
                  {trending.map((blog) => (
                    <TrendingCard key={blog.id} blog={blog} />
                  ))}
                </div>
              ) : null}
            </div>
          </div>

          {loading ? (
            <div className="space-y-6">
              {Array.from({ length: 2 }).map((_, si) => (
                <div key={si}>
                  <div className="h-4 bg-gray-200 rounded w-24 mb-3 animate-pulse" />
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {Array.from({ length: 2 }).map((_, i) => <CategoryCardSkeleton key={i} />)}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {categories.map((cat) => (
                <div key={cat}>
                  <SectionHeader
                    title={cat}
                    href={`/blogs?category=${encodeURIComponent(cat)}`}
                  />
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {categoryMap[cat].slice(0, 2).map((blog) => (
                      <CategoryCard key={blog.id} blog={blog} />
                    ))}
                  </div>
                </div>
              ))}

              {categories.length === 0 && blogs.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {blogs.slice(4).map((blog) => (
                    <CategoryCard key={blog.id} blog={blog} />
                  ))}
                </div>
              )}
            </div>
          )}

          {!loading && blogs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-sm">Blog posts will appear here once published.</p>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default BlogList;
