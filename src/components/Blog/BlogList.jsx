"use client";

import React from 'react';
import Link from 'next/link';

const BlogCard = ({ title, excerpt, publishedDate, readTime, slug, image }) => (
  <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
    {image && (
      <div className="aspect-video bg-gray-200">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    )}
    
    <div className="p-6">
      <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
        <time dateTime={publishedDate}>{publishedDate}</time>
        <span>•</span>
        <span>{readTime}</span>
      </div>
      
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 leading-tight">
        <Link 
          href={`/blogs/${slug}`}
          className="hover:text-green-600 transition-colors"
        >
          {title}
        </Link>
      </h2>
      
      <p className="text-gray-700 mb-4 leading-relaxed">
        {excerpt}
      </p>
      
      <Link 
        href={`/blogs/${slug}`}
        className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors"
      >
        Read More
        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  </article>
);

const BlogList = () => {
  const blogs = [
    {
      title: "Electric vs Petrol Scooters: Which Actually Performs Better in 2026?",
      excerpt: "Electric scooters now dominate city acceleration and cost efficiency. Real-world performance comparison with hard data, user experiences, and expert analysis to help you choose.",
      publishedDate: "January 25, 2026",
      readTime: "10 min read", 
      slug: "ev-vs-petrol-performance-comparison",
      image: "https://ik.imagekit.io/siddharth637/abhilashit/hero/banner2.avif"
    },
    {
      title: "Complete EV Battery Care Guide: Make Your Electric Scooter Battery Last 5+ Years",
      excerpt: "Simple daily habits can double your battery lifespan. Learn professional maintenance tips, charging best practices, and troubleshooting guides to protect your investment.",
      publishedDate: "January 20, 2026", 
      readTime: "12 min read",
      slug: "ev-battery-maintenance-guide",
      image: "https://ik.imagekit.io/siddharth637/abhilashit/hero/herobanner.png"
    },
    {
      title: "How Much Money Can You Actually Save by Switching to an Electric Scooter in 2026?",
      excerpt: "Rising fuel prices got you thinking twice about your daily commute? Discover how electric scooters can save you ₹50,000+ annually with real cost breakdowns and customer experiences.",
      publishedDate: "January 15, 2026",
      readTime: "8 min read",
      slug: "electric-scooter-savings-2026",
      image: "https://ik.imagekit.io/siddharth637/abhilashit/1769158274471.png"
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Electric Vehicle Insights
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
          Stay updated with the latest trends, tips, and insights about electric mobility in India. 
          Expert advice from Abhilashit Automobiles.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>

      {/* Empty State for Future Posts */}
      {blogs.length >= 3 && (
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Subscribe for Latest EV Insights
            </h3>
            <p className="text-gray-600 mb-4">
              Get expert tips, industry trends, and exclusive content delivered to your inbox.
            </p>
            <a 
              href="/contact-us" 
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
            >
              Stay Updated
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogList;