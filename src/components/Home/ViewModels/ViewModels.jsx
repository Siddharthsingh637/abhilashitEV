"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import ModelCard from "@/components/Cards/ModelCards";

const models = [
  {
    id: 1,
    name: "Legend DLX",
    image: "/hero/banner2.avif",
    priceRange: "₹73,000",
    trueRange: "95 - 100 km",
    speed: "42 km/h",
    colorsAvailable: ["#FF0000", "#0000FF", "gray", "#000000", "#FFD700", ],
  },
  {
    id: 2,
    name: "Royal",
    image: "https://ik.imagekit.io/siddharth637/abhilashit/hero/royal-modell.jpeg",
    priceRange: "₹68,000",
    trueRange: "95 - 100 km",
    speed: "25 - 42 km/h",
    colorsAvailable: ["#FF0000", "#0000FF", "black", "#808080"],
  },
  {
    id: 3,
    name: "Royal Prime",
    image: "https://ik.imagekit.io/siddharth637/abhilashit/hero/royal-model.jpeg",
    priceRange: "₹78,000",
    trueRange: "95 - 100 km",
    speed: "25 - 42 km/h",
    colorsAvailable: ["#FF0000", "#0000FF", "grey", "#000000", "white"],
  },
  {
    id: 4,
    name: "Rider",
    image: "https://ik.imagekit.io/siddharth637/abhilashit/hero/rider-model.jpeg",
    priceRange: "₹63,000",
    trueRange: "95 - 100 km",
    speed: "25 - 42 km/h",
    colorsAvailable: ["#FF0000", "#0000FF", "grey", "#000000"],
  },
];

export default function ExploreModels() {
  // Use only first 4 models
  const displayModels = models.slice(0, 4);
  
  // Responsive visible cards: 1 on mobile, 2 on tablet, 3 on desktop
  const [visibleCards, setVisibleCards] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const carouselRef = useRef(null);
  
  useEffect(() => {
    const updateVisibleCards = () => {
      let newVisibleCards;
      if (window.innerWidth >= 1024) {
        newVisibleCards = 3; // Desktop: 3 cards
      } else if (window.innerWidth >= 640) {
        newVisibleCards = 2; // Tablet: 2 cards
      } else {
        newVisibleCards = 1; // Mobile: 1 card
      }
      
      if (newVisibleCards !== visibleCards) {
        setVisibleCards(newVisibleCards);
        // Reset to start position when cards change
        setCurrentIndex(newVisibleCards);
      }
    };
    
    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, [visibleCards]);
  
  // Create infinite scroll by duplicating cards
  // Pattern: [last N] [original 4] [first N] where N = visibleCards
  const infiniteModels = [
    ...displayModels.slice(-visibleCards), // Last N cards at start
    ...displayModels, // Original 4 cards
    ...displayModels.slice(0, visibleCards), // First N cards at end
  ];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => prev - 1);
  }, []);

  // Handle infinite scroll jumps
  useEffect(() => {
    // If we've moved past the original cards (position >= 7), jump to start
    if (currentIndex >= displayModels.length + visibleCards) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(visibleCards);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 700);
      return () => clearTimeout(timer);
    }
    // If we've moved before the original cards (position < 3), jump to show last set
    if (currentIndex < visibleCards) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        // Jump to position that shows the same cards but from original set
        // Position 2 shows [3,0,1] duplicates, so jump to position 6 which shows [3,0,1] original
        setCurrentIndex(displayModels.length + visibleCards - 1);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, displayModels.length, visibleCards]);

  useEffect(() => {
    const interval = setInterval(handleNext, 3500);
    return () => clearInterval(interval);
  }, [handleNext]);

  // Calculate transform for smooth sliding animation
  const translateX = -(currentIndex * (100 / visibleCards));

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-3 sm:mb-4 px-2">
            Explore Our Models
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Discover our premium range of electric scooters designed for every
            lifestyle.
          </p>
        </div>

        {/* Cards carousel */}
        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              ref={carouselRef}
              className="flex"
              style={{
                transform: `translateX(${translateX}%)`,
                transition: isTransitioning ? 'transform 700ms ease-in-out' : 'none',
              }}
            >
              {infiniteModels.map((model, index) => (
                <div
                  key={`${model.id}-${index}`}
                  className="flex-none px-2 sm:px-3"
                  style={{ width: `${100 / visibleCards}%` }}
                >
                  <ModelCard model={model} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <button
              onClick={handlePrev}
              className="rounded-full border-2 border-gray-300 bg-white px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg font-semibold text-gray-700 shadow-md hover:bg-gray-50 hover:border-emerald-500 active:scale-95 transition-all duration-200"
              aria-label="Previous models"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="rounded-full border-2 border-gray-300 bg-white px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg font-semibold text-gray-700 shadow-md hover:bg-gray-50 hover:border-emerald-500 active:scale-95 transition-all duration-200"
              aria-label="Next models"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
