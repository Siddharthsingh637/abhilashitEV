import React from "react";

export default function Brand() {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* CARD */}
        <div className=" overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">

            {/* LEFT SIDE — SCOOTY IMAGE */}
            <div className="flex items-center justify-center p-6 h-full min-h-[300px] md:min-h-[300px]">
              <img
                src="https://ik.imagekit.io/siddharth637/abhilashit/evimg.png?updatedAt=1764952635724"
                alt="Heraldebike Scooter"
                className="max-w-xs md:max-w-sm object-contain rounded-2xl"
              />
            </div>



            {/* RIGHT SIDE — CONTENT */}
            <div className="p-8 md:p-12 flex flex-col justify-center ">
              <div className="mb-6">
                <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                  HERALD E BIKE
                </h3>
                <p className="text-lg text-emerald-700 font-medium mt-1">
                  Green Revolution
                </p>
              </div>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                Heraldebike is accelerating the green revolution with high-performance,
                reliable and stylish electric scooters built for everyday life. Our
                products blend engineering precision with sustainable innovation to
                deliver unmatched riding experience and long-term value.
              </p>

              {/* CTA BUTTONS */}
              <div className="flex flex-wrap gap-4 mb-10">
                <a
                  href="/about"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition"
                >
                  Learn about the brand
                </a>

                <a
                  href="/contact"
                  className="border border-emerald-600 text-emerald-700 px-6 py-3 rounded-xl font-medium hover:bg-emerald-50 transition"
                >
                  Contact sales
                </a>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-emerald-50 border border-emerald-100 rounded-xl px-5 py-4 text-center shadow-sm">
                  <div className="text-2xl font-bold text-gray-900">120+</div>
                  <div className="text-xs text-gray-500 mt-1">Dealers</div>
                </div>

                <div className="bg-yellow-50 border border-yellow-100 rounded-xl px-5 py-4 text-center shadow-sm">
                  <div className="text-2xl font-bold text-gray-900">45K+</div>
                  <div className="text-xs text-gray-500 mt-1">Riders</div>
                </div>

                <div className="bg-emerald-50 border border-emerald-100 rounded-xl px-5 py-4 text-center shadow-sm">
                  <div className="text-2xl font-bold text-gray-900">98%</div>
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
