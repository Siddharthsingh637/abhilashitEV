"use client";

import { MapPin, Clock } from "lucide-react";

const ADDRESS = "NH-31, Barh, Athmal Gola, Patna, Bihar";
const HOURS = "Mon–Sat: 9:00 AM – 6:00 PM";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Barh+Athmal+Gola+Patna+Bihar";

export default function MapSection() {
  return (
    <section className="relative w-full min-h-[400px] md:min-h-[450px]">
      {/* Full-width map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.350625!2d85.0!3d25.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM2JzAwLjAiTiA4NcKwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
        title="Abhilashit Automobiles Showroom"
        className="absolute inset-0 w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      {/* Overlay card on left */}
      <div className="absolute inset-0 flex items-center p-6 md:p-10 z-10 pointer-events-none">
        <div className="pointer-events-auto w-full max-w-sm rounded-lg bg-white p-8 border border-gray-200">
          <h3 className="text-xl font-light tracking-wide text-gray-900 mb-6">
            Visit Our Showroom
          </h3>
          <div className="space-y-4 text-gray-600">
            <div className="flex gap-3">
              <MapPin className="h-5 w-5 text-green-900 shrink-0 mt-0.5" />
              <p className="text-sm">{ADDRESS}</p>
            </div>
            <div className="flex gap-3">
              <Clock className="h-5 w-5 text-green-900 shrink-0 mt-0.5" />
              <p className="text-sm">{HOURS}</p>
            </div>
          </div>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-6 py-3 rounded-full border-2 border-green-900 text-green-900 text-sm uppercase tracking-wider font-medium hover:bg-green-900 hover:text-white transition-colors"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
