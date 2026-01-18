import React from "react";

export default function Servicebar({ onBookService }) {
  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Glow wrapper */}
        <div className="relative">
          <div className="absolute inset-0 rounded-2xl sm:rounded-[36px] bg-emerald-500/40 blur-3xl opacity-60 pointer-events-none" />

          {/* Main bar */}
          <div className="relative rounded-2xl sm:rounded-[36px] bg-linear-to-r from-emerald-900 via-emerald-800 to-emerald-700 px-4 py-8 sm:px-6 sm:py-10 md:px-16 md:py-14 shadow-2xl flex flex-col items-center justify-center text-center text-emerald-50">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold md:font-bold tracking-tight px-2">
              Premium Service. Hassle-Free Ownership.
            </h2>

            <p className="mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-emerald-100/90 px-2">
              Regular checkups, certified technicians and genuine parts — our
              service program keeps your EV performing at its best, mile after mile.
            </p>

            <button
              type="button"
              onClick={() => onBookService?.()}
              className="mt-6 sm:mt-8 w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white text-emerald-700 px-6 py-2.5 sm:px-8 sm:py-3 text-sm md:text-base font-semibold shadow-md hover:bg-emerald-50 transition"
            >
              Book Service Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
