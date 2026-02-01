import React from "react";

export default function AboutUs() {
  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
        {/* Left: Text */}
        <div className="order-2 md:order-1">
          <div className="inline-block px-3 py-1 rounded-full bg-linear-to-r from-green-100 to-green-200 text-xs sm:text-sm font-semibold text-green-800 mb-4 sm:mb-6">
            About Our EV Bikes
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 sm:mb-4 leading-tight">
            Driving the Future of Mobility
          </h2>

          <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
            Welcome to your destination for cutting-edge electric vehicles. We bring you the latest in EV technology, combining performance, style, and sustainability for a cleaner tomorrow.
          </p>

          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
            Our expert team is passionate about helping you find the perfect electric ride. Experience innovation, comfort, and reliability with every visit to our showroom.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href="/contact"
              className="inline-block text-center bg-black hover:bg-black-800 text-white px-5 py-2.5 sm:px-6 sm:py-3 font-medium shadow-md transition text-sm sm:text-base"
            >
              Learn more about us
            </a>

            <a
              href="#our-work"
              className="inline-block text-center text-green-700 hover:underline px-3 py-2 font-medium text-sm sm:text-base"
            >
              See our EV lineup
            </a>
          </div>

          {/* Small stat cards */}
          {/* <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-gray-900">120+</div>
              <div className="text-sm text-gray-500">Projects</div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-gray-900">10k+</div>
              <div className="text-sm text-gray-500">Hours of work</div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm hidden sm:block">
              <div className="text-2xl font-bold text-gray-900">8</div>
              <div className="text-sm text-gray-500">Team members</div>
            </div>
          </div> */}
        </div>

        {/* Right: Image card */}
        <div className="order-1 md:order-2 flex items-center justify-center">
          <div className="w-full max-w-md bg-white overflow-hidden">
            <picture>
              {/* <source
                srcSet="https://your-cdn.com/images/about-image@2x.png"
                media="(min-width: 1024px)"
              /> */}
              <img
                src="https://ik.imagekit.io/siddharth637/abhilashit/1769158274471.png"
                alt="Team collaborating on product design"
                className="w-full h-130 object-cover"
                loading="lazy"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
