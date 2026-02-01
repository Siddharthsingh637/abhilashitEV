"use client";

export default function Hero({ onEnquire }) {
  return (
    <section className="">
      <div
        className="h-[70vh] sm:h-[80vh] md:h-[90vh] flex items-center justify-center bg-cover bg-center relative px-4 py-6 sm:px-6 sm:py-8 md:px-12 md:py-16 bg-[url('https://ik.imagekit.io/siddharth637/abhilashit/background.png')] overflow-hidden"
      >
        {/* Dim overlay for better text readability */}
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/30 to-white z-0"></div>
        
        <div className="relative z-10 text-center text-white px-2 sm:px-4 max-w-3xl mx-auto">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-wider"
            style={{ fontFamily: "var(--font-geist-sans)" }}
          >
            Experience the Future of 
          </h1>
          <h1
            className="text-3xl text-green-300 sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-wider"
            style={{ fontFamily: "var(--font-geist-sans)" }}
          >
             Electric Mobility
          </h1>

          <p
            className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-white px-2 font-light tracking-wide"
          >
            Ride smarter, faster, and cleaner with our latest EV scooter lineup.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col items-center justify-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={onEnquire}
              className="group relative w-full sm:w-auto bg-white text-black hover:bg-gray-50 px-8 py-3.5 sm:px-10 sm:py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 text-sm sm:text-base hover:scale-105 border border-white/50"
            >
              <span className="relative z-10">Enquire Now</span>
              <div className="absolute inset-0 rounded-full bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <a
              href="/about"
              className="text-sm sm:text-base font-light tracking-wider text-white/90 hover:text-white underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors"
            >
              Know more about our website
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
