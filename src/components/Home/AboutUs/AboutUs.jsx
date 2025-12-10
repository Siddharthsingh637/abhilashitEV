import React from "react";

export default function AboutUs() {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Text */}
        <div className="order-2 md:order-1">
          <div className="inline-block px-3 py-1 rounded-full bg-linear-to-r from-green-100 to-green-200 text-sm font-semibold text-green-800 mb-6">
            About Our EV Showroom
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Driving the Future of Mobility
          </h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Welcome to your destination for cutting-edge electric vehicles. We bring you the latest in EV technology, combining performance, style, and sustainability for a cleaner tomorrow.
          </p>

          <p className="text-base text-gray-600 mb-6">
            Our expert team is passionate about helping you find the perfect electric ride. Experience innovation, comfort, and reliability with every visit to our showroom.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <a
              href="/contact"
              className="inline-block bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-medium shadow-md transition"
            >
              Learn more about us
            </a>

            <a
              href="#our-work"
              className="inline-block text-green-700 hover:underline px-3 py-2 font-medium"
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
          <div className="w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden">
            <picture>
              <source srcSet="/about/about-image@2x.png" media="(min-width: 1024px)" />
              <img
                src="/hero/image.png"
                alt="Team collaborating on product design"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
            </picture>

            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900">Innovation Meets Sustainability</h3>
              <p className="text-sm text-gray-600 mt-2">
                Discover a curated selection of electric vehicles designed for a smarter, greener future. Your journey to sustainable mobility starts here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
