import React from 'react';
import BlogList from '@/components/Blog/BlogList';

export const metadata = {
  title: 'Electric Vehicle Blog | Abhilashit Automobiles - EV Insights & Tips',
  description:
    "Stay updated with the latest electric scooter trends, cost savings, maintenance tips, and industry insights. Expert advice from Bihar's premium EV dealer.",
  keywords:
    'electric vehicle blog, EV scooter tips, electric mobility Bihar, battery maintenance, EV cost savings, electric scooter reviews',
  openGraph: {
    title: 'Electric Vehicle Blog | Abhilashit Automobiles',
    description:
      "Expert EV insights, tips, and industry news from Bihar's leading electric scooter dealership.",
    url: 'https://abhilashit.in/blogs',
    siteName: 'Abhilashit Automobiles',
    type: 'website',
  },
  alternates: {
    canonical: 'https://abhilashit.in/blogs',
  },
};

const BlogsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <BlogList />
    </div>
  );
};

export default BlogsPage;
