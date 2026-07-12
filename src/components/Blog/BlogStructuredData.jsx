export default function BlogStructuredData({ title, content, publishedDate, author, slug }) {
  const baseUrl = 'https://abhilashitautomobiles.com'; // Update with your actual domain
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "author": {
      "@type": "Organization",
      "name": author,
      "url": baseUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "Abhilashit Automobiles",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
      }
    },
    "datePublished": publishedDate,
    "dateModified": publishedDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/blogs/${slug}`
    },
    "articleSection": "Electric Vehicles",
    "keywords": [
      "electric scooter",
      "EV battery",
      "electric vehicle Bihar",
      "premium electric mobility",
      "affordable EV scooter",
      "electric scooter savings"
    ],
    "about": {
      "@type": "Thing",
      "name": "Electric Vehicles"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}