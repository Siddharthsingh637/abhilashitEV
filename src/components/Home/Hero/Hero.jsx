"use client";

export default function Hero({ onEnquire }) {
  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div
        className="h-[70vh] sm:h-[80vh] md:h-[90vh] flex items-center justify-center bg-cover bg-center relative px-4 py-6 sm:px-6 sm:py-8 md:px-12 md:py-16 rounded-2xl sm:rounded-3xl shadow-lg bg-[url('https://ik.imagekit.io/siddharth637/abhilashit/hero/image.png')] overflow-hidden"
      >
        {/* Dim overlay for better text readability */}
        <div className="absolute inset-0 bg-linear-to-b from-black/90 via-black/70 to-black/60 z-0"></div>
        
        <div className="relative z-10 text-center text-white px-2 sm:px-4 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight" style={{ fontFamily: 'var(--font-playfair-display)' }}>
            Experience the Future of 
          </h1>
          <h1 className="text-3xl text-green-300 sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
             Electric Mobility
          </h1>

          <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-green-600 px-2 font-light tracking-wide">
            Ride smarter, faster, and cleaner with our latest EV scooter lineup.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <a
              href="/"
              className="group relative w-full sm:w-auto bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-3.5 sm:px-10 sm:py-4 rounded-full font-medium shadow-xl border border-white/20 hover:border-white/30 transition-all duration-300 text-sm sm:text-base hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10">Download Brochure</span>
              <div className="absolute inset-0 rounded-full bg-linear-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <button
              type="button"
              onClick={onEnquire}
              className="group relative w-full sm:w-auto bg-white text-black hover:bg-gray-50 px-8 py-3.5 sm:px-10 sm:py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 text-sm sm:text-base hover:scale-105 border border-white/50"
            >
              <span className="relative z-10">Enquire Now</span>
              <div className="absolute inset-0 rounded-full bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
