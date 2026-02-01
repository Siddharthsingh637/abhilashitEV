import React from "react";

export default function Brand() {
  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* CARD */}
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">

            {/* LEFT SIDE — SCOOTY IMAGE */}
            <div className="flex items-center justify-center p-4 sm:p-6 h-full min-h-[250px] sm:min-h-[300px] md:min-h-[400px]">
              <img
                src="https://ik.imagekit.io/siddharth637/abhilashit/evimg.png?updatedAt=1764952635724"
                alt="Abhilashit Automobiles electric scooter"
                className="max-w-[200px] sm:max-w-xs md:max-w-sm object-contain rounded-xl sm:rounded-2xl"
              />
            </div>



            {/* RIGHT SIDE — CONTENT */}
            <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-4 sm:mb-6">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                  Abhilashit Automobiles
                </h3>
                <p className="text-base sm:text-lg text-emerald-700 font-medium mt-1">
                  Driving the green revolution
                </p>
              </div>

              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xl">
                Abhilashit Automobiles is accelerating the green revolution with
                high-performance, reliable and stylish electric scooters built for
                everyday life. Our products blend engineering precision with sustainable
                innovation to deliver an unmatched riding experience and long-term value
                for every customer.
              </p>

              {/* CTA BUTTONS */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-10">
                <a
                  href="/about"
                  className="w-full sm:w-auto text-center bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-semibold shadow-md transition text-sm sm:text-base"
                >
                  Learn about the brand
                </a>

                <a
                  href="/contact"
                  className="w-full sm:w-auto text-center border border-emerald-600 text-emerald-700 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-medium hover:bg-emerald-50 transition text-sm sm:text-base"
                >
                  Contact sales
                </a>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                <div className="bg-emerald-50 border border-emerald-100 rounded-lg sm:rounded-xl px-3 py-3 sm:px-5 sm:py-4 text-center shadow-sm">
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">120+</div>
                  <div className="text-xs text-gray-500 mt-1">Dealers</div>
                </div>

                <div className="bg-yellow-50 border border-yellow-100 rounded-lg sm:rounded-xl px-3 py-3 sm:px-5 sm:py-4 text-center shadow-sm">
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">45K+</div>
                  <div className="text-xs text-gray-500 mt-1">Riders</div>
                </div>

                <div className="bg-emerald-50 border border-emerald-100 rounded-lg sm:rounded-xl px-3 py-3 sm:px-5 sm:py-4 text-center shadow-sm">
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">98%</div>
                  <div className="text-xs text-gray-500 mt-1">Uptime</div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
