"use client";

import React from 'react';
import Link from 'next/link';

const BlogNavigation = ({ currentSlug }) => {
  const blogPosts = [
    {
      title: "Electric vs Petrol Performance Comparison",
      slug: "ev-vs-petrol-performance-comparison",
      category: "Performance"
    },
    {
      title: "EV Battery Maintenance Guide", 
      slug: "ev-battery-maintenance-guide",
      category: "Maintenance"
    },
    {
      title: "Electric Scooter Savings Calculator",
      slug: "electric-scooter-savings-2026", 
      category: "Cost Analysis"
    }
  ];

  const currentIndex = blogPosts.findIndex(post => post.slug === currentSlug);
  const previousPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Related Articles */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogPosts
            .filter(post => post.slug !== currentSlug)
            .map((post) => (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="text-xs font-medium text-green-600 mb-1">
                  {post.category}
                </div>
                <div className="font-semibold text-gray-900 text-sm leading-snug">
                  {post.title}
                </div>
              </Link>
            ))}
        </div>
      </div>

      {/* Previous/Next Navigation */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-8 border-t border-gray-200">
        {previousPost ? (
          <Link
            href={`/blogs/${previousPost.slug}`}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
          >
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <div>
              <div className="text-sm text-gray-500">Previous</div>
              <div className="font-medium">{previousPost.title}</div>
            </div>
          </Link>
        ) : (
          <div></div>
        )}

        {nextPost && (
          <Link
            href={`/blogs/${nextPost.slug}`}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors group text-right"
          >
            <div>
              <div className="text-sm text-gray-500">Next</div>
              <div className="font-medium">{nextPost.title}</div>
            </div>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
};

export default BlogNavigation;