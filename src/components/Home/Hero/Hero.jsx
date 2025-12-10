export default function Hero({ onEnquire }) {
  return (
    <section className="px-4">
      <div
        className="h-[90vh] flex items-center justify-center bg-cover bg-center 
        relative px-6 py-8 md:px-12 md:py-16 rounded-3xl shadow-lg bg-[url('/hero/banner2.avif')]"
        
      >
        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight font-serif">
            Experience the Future of Electric Mobility
          </h1>

          <p className="mt-4 text-lg md:text-xl text-gray-200">
            Ride smarter, faster, and cleaner with our latest EV scooter lineup.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="/brochure.pdf"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition"
            >
              Download Brochure
            </a>

            <button
              type="button"
              onClick={() => onEnquire?.()}
              className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition"
            >
              Enquire now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
