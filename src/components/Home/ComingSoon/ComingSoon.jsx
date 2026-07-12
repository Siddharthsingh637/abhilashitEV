"use client";

import React, { useState } from "react";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call for newsletter subscription
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setEmail("");
    }, 1200);
  };

  return (
    <section className="w-full py-12 sm:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto rounded-[32px] sm:rounded-[48px] overflow-hidden flex flex-col lg:flex-row min-h-[500px] lg:h-[600px] relative group">
        
        {/* LEFT COLUMN: Launch Copy and Newsletter Form */}
        <div className="w-full lg:w-1/2 p-6 sm:p-12 lg:p-16 flex flex-col justify-center">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700 mb-3 sm:mb-4 block">
            Introducing the Next Era
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-neutral-900 tracking-tight leading-[1.1] mb-4 sm:mb-6">
            Introducing you to the new standard of premium electric performance.
          </h2>
          
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6 sm:mb-8 font-normal">
            We are thrilled to give you an early look at our next-generation electric two-wheeler, built from the ground up to make your daily commute smoother, faster, and completely hassle-free. Engineered for riders who demand power and styling, this upcoming model combines a heavy-duty silent motor with an optimized long-range battery pack and advanced smart controls. It offers effortless acceleration, high-end braking stability, and premium comfort on city streets and open roads alike. The wait is almost over—sign up below to receive exclusive launch updates, early bird booking pricing, and priority delivery slots.
          </p>          
        </div>

        {/* RIGHT COLUMN: Teaser Image */}
        <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-auto relative overflow-hidden flex-shrink-0">
          <img
            src="https://ik.imagekit.io/siddharth637/abhilashit/ChatGPT%20Image%20Jul%2012,%202026,%2001_52_06%20PM%20(1).png"
            alt="Coming Soon Scooter Teaser"
            className="w-full h-full object-cover "
            loading="lazy"
          />
          {/* Shadow vignette overlay */}
          <div className="absolute inset-0  pointer-events-none" />
        </div>

      </div>
    </section>
  );
}