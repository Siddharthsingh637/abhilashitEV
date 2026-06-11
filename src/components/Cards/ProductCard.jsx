"use client";

import React, { useState } from "react";
import EnquireForm from "@/components/Home/EnquiryForm/EnquireForm";

const ProductCard = ({
  name,
  description,
  imageUrl,
  priceRange,
  trueRange,
  speed,
  colorsAvailable = [],
  ctaText = "Enquire Now",
}) => {
  const [selectedColor, setSelectedColor] = useState(colorsAvailable[0] || null);
  const [showEnquiry, setShowEnquiry] = useState(false);

  return (
    <article className="group bg-white rounded-sm overflow-hidden border border-neutral-100  flex flex-row items-stretch h-[280px]">
      {/* IMAGE SECTION */}
      <div className="relative w-[35%] sm:w-[40%] lg:w-[45%] flex-shrink-0 h-full overflow-hidden bg-neutral-100">
        {/* Dynamic Image with Hover Zoom */}
        <img
          src={imageUrl || "/hero/banner2.avif"}
          alt={name}
          className="w-full h-full absolute inset-0 object-cover "
        />
        
        {/* Visual gradient depth overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/30 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10 pointer-events-none" />
      </div>

      {/* CONTENT SECTION */}
      <div className="w-[65%] sm:w-[60%] lg:w-[55%] p-4 sm:p-5 lg:p-6 flex flex-col justify-between h-full overflow-hidden">
        <div className="flex flex-col gap-1.5 sm:gap-2">
          {/* Header */}
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-sm sm:text-lg lg:text-2xl font-normal text-neutral-900 tracking-tight leading-tight line-clamp-1">
              {name}
            </h3>
          </div>

          {/* Description */}
          {description && (
            <p className="text-[10px] sm:text-xs lg:text-sm text-neutral-500 line-clamp-2 leading-relaxed">
              {description}
            </p>
          )}

          {/* Specifications Grid - 2 columns */}
          <div className="grid grid-cols-2 gap-1.5 sm:gap-3">
            {/* Range */}
            <div className="bg-neutral-50 rounded-xl p-1.5 sm:p-2 border border-neutral-100/50 hover:bg-emerald-50/10 hover:border-emerald-100/50 transition-colors duration-300">
              <div className="flex items-center gap-1 sm:gap-1.5 mb-0.5 sm:mb-1">
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-neutral-400">Range</span>
              </div>
              <p className="text-[10px] sm:text-xs lg:text-sm font-extrabold text-neutral-800 leading-none">{trueRange || "N/A"}</p>
            </div>

            {/* Top Speed */}
            <div className="bg-neutral-50 rounded-xl p-1.5 sm:p-2 border border-neutral-100/50 hover:bg-emerald-50/10 hover:border-emerald-100/50 transition-colors duration-300">
              <div className="flex items-center gap-1 sm:gap-1.5 mb-0.5 sm:mb-1">
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-neutral-400">Speed</span>
              </div>
              <p className="text-[10px] sm:text-xs lg:text-sm font-extrabold text-neutral-800 leading-none">{speed || "N/A"}</p>
            </div>
          </div>

          {/* Color Selector */}
          {colorsAvailable.length > 0 && (
            <div className="flex items-center gap-2">
              <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-wider text-neutral-400">Colors:</span>
              <div className="flex gap-1.5 flex-wrap">
                {colorsAvailable.slice(0, 5).map((color, index) => {
                  const isActive = selectedColor === color;
                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setSelectedColor(color)}
                      className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border transition-all duration-300 relative cursor-pointer ${
                        isActive 
                          ? "scale-110 shadow-md" 
                          : "border-neutral-200 hover:scale-105"
                      }`}
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Pricing & CTA */}
        <div className="border-t border-neutral-100 pt-2 sm:pt-3 flex flex-row items-center justify-between gap-2 mt-auto">
          <div>
            <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-neutral-400 block mb-0.5">Starting Price</span>
            <span className="text-xs sm:text-md lg:text-xl text-neutral-900 tracking-tight leading-none">
              {priceRange || "Price on Request"}
            </span>
          </div>

          <button 
            type="button"
            onClick={() => setShowEnquiry(true)}
            className="w-auto bg-emerald-800 hover:bg-emerald-700 text-white font-semibold py-1.5 px-3 sm:py-2 sm:px-4 lg:py-2.5 lg:px-6 rounded-sm sm:rounded-sm shadow-xs sm:shadow-lg hover:shadow-emerald-100 hover:translate-y-[-1px] active:translate-y-[1px] transition-all duration-200 text-[10px] sm:text-xs lg:text-sm tracking-wide cursor-pointer leading-tight"
          >
            {ctaText}
          </button>
        </div>
      </div>

      {/* Enquiry Modal */}
      <EnquireForm open={showEnquiry} onClose={() => setShowEnquiry(false)} />
    </article>
  );
};

export default ProductCard;