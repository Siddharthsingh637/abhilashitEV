"use client";

import React from 'react';
import BlogNavigation from './BlogNavigation';
import BlogStructuredData from './BlogStructuredData';

const BlogPost = ({ title, content, publishedDate, author, readTime = "8 min read", slug }) => {
  return (
    <>
      <BlogStructuredData 
        title={title}
        content={content}
        publishedDate={publishedDate}
        author={author}
        slug={slug}
      />
      
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-gray-600">
          <a href="/" className="hover:text-gray-900">Home</a>
          <span className="mx-2">›</span>
          <a href="/blogs" className="hover:text-gray-900">Blog</a>
          <span className="mx-2">›</span>
          <span className="text-gray-900">{title.substring(0, 50)}...</span>
        </nav>

        {/* Header */}
        <header className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
            {title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
            <span className="font-medium">{author}</span>
            <span>•</span>
            <time dateTime={publishedDate}>{publishedDate}</time>
            <span>•</span>
            <span>{readTime}</span>
          </div>

          {/* Meta description for SEO */}
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            {title.includes('Save') && 'Discover how switching to electric scooters can save you ₹50,000+ annually. Real cost breakdowns, maintenance savings, and customer experiences from Bihar.'}
            {title.includes('Battery') && 'Simple daily habits can double your battery lifespan. Professional maintenance tips, charging best practices, and troubleshooting guides to protect your investment.'}
            {title.includes('Performance') && 'Electric scooters now dominate city acceleration and cost efficiency. Real-world performance comparison with hard data and user experiences.'}
          </p>
        </header>

        {/* Blog Content */}
        <div 
          className="prose prose-lg max-w-none prose-gray prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-green-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-blockquote:border-l-green-500 prose-blockquote:bg-green-50 prose-blockquote:pl-6 prose-blockquote:py-4 prose-table:text-sm"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* Social Share */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h4 className="text-sm font-medium text-gray-900 mb-3">Share this article</h4>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title, url: window.location.href });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link copied to clipboard!');
                }
              }}
              className="flex items-center px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
              Share
            </button>
            <a
              href={`https://wa.me/?text=Check out this article: ${title} ${window.location?.href || ''}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 text-sm bg-green-100 hover:bg-green-200 text-green-800 rounded-lg transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 p-6 sm:p-8 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border border-green-200">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your Electric Journey?
          </h3>
          <p className="text-gray-700 mb-6">
            Visit your nearest Abhilashit Automobiles showroom for a test ride and personalized savings calculation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a 
              href="/contact-us"
              className="inline-flex items-center justify-center px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
            >
              Book Test Ride
            </a>
            <a 
              href="/products"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-600 hover:text-white transition-colors"
            >
              View Models
            </a>
          </div>
        </div>
      </article>

      {/* Blog Navigation */}
      {slug && <BlogNavigation currentSlug={slug} />}
    </>
  );
};

export default BlogPost;