"use client";

import React from "react";

const models = [
  {
    id: 1,
    name: "Herald Pro",
    image: "/hero/banner2.avif",
    priceRange: "₹85,000 - ₹95,000",
  },
  {
    id: 2,
    name: "Herald Elite",
    image: "/hero/herobanner.png",
    priceRange: "₹95,000 - ₹1,10,000",
  },
  {
    id: 3,
    name: "Herald Sport",
    image: "/hero/image.png",
    priceRange: "₹75,000 - ₹85,000",
  },
  {
    id: 4,
    name: "Herald Classic",
    image: "/hero/banner2.avif",
    priceRange: "₹65,000 - ₹75,000",
  },
  {
    id: 5,
    name: "Herald Premium",
    image: "/hero/herobanner.png",
    priceRange: "₹1,10,000 - ₹1,25,000",
  },
];

export default function ExploreModels() {
  // Display only first 3 models
  const displayedModels = models.slice(0, 3);

  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Explore Our Models
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our premium range of electric scooters designed for every
            lifestyle.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {displayedModels.map((model) => (
            <div
              key={model.id}
              className="w-[320px] md:w-[380px]"
            >
              <ModelCard model={model} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ModelCard({ model }) {
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Image Container with good aspect ratio (16:10) */}
      <div className="relative w-full h-60 md:h-[280px] overflow-hidden bg-linear-to-br from-gray-100 to-gray-200">
        <img
          src={model.image}
          alt={model.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {model.name}
        </h3>
        <div className="flex items-center gap-2">
        <span className="text-xs text-gray-500 uppercase tracking-wide">
            Starting from
        </span>
          <span className="text-emerald-600 font-semibold text-lg">
            {model.priceRange}
          </span>
        </div>

        {/* Price badge */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-sm text-gray-700 mt-1">
            Competitive pricing with flexible EMI options
          </p>
        </div>
      </div>

      {/* Hover effect indicator */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
          View Details
        </div>
      </div>
    </div>
  );
}
