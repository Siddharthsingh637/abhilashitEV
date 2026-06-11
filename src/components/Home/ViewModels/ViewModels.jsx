"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import ModelCard from "@/components/Cards/ModelCards";
import { requestJson } from "@/lib/api";

export default function ExploreModels() {
  const [models, setModels] = useState([]);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const fetchModels = async () => {
      try {
        const data = await requestJson("/models", { signal: controller.signal });
        const list = Array.isArray(data) ? data : data?.models || [];

        if (!isMounted) return;
        setModels(
          list.map((model) => ({
            id: model.id,
            name: model.name,
            image: model.imageUrl,
            priceRange: model.priceRange,
            trueRange: model.trueRange,
            speed: model.speed,
            colorsAvailable: model.colorsAvailable,
          }))
        );
      } catch (error) {
        if (error?.name !== "AbortError") {
          console.error("Failed to load models", error);
        }
      }
    };

    fetchModels();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

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
  }, [setCurrentIndex]);

  // Handle infinite scroll jumps
  useEffect(() => {
    if (displayModels.length === 0) return;
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
    if (displayModels.length === 0 || isPaused) return undefined;
    const interval = setInterval(handleNext, 2000);
    return () => clearInterval(interval);
  }, [displayModels.length, handleNext, isPaused]);

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
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
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

        </div>
      </div>
    </section>
  );
}
