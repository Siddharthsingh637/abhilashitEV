"use client";

import { MapPin, Phone, Clock, Mail } from "lucide-react";

const items = [
  {
    icon: MapPin,
    title: "Address",
    text: "NH-31, Barh, Athmal Gola\nPatna, Bihar",
  },
  {
    icon: Phone,
    title: "Call Us",
    text: "+91 99110 75404",
  },
  {
    icon: Clock,
    title: "Working Hours",
    text: "Mon–Sat: 9:00 AM – 6:00 PM",
  },
  {
    icon: Mail,
    title: "Email",
    text: "support@abhilashit.in",
  },
];

export default function ContactInfoStrip() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center py-16 border-y border-gray-200 bg-white">
      {items.map(({ icon: Icon, title, text }) => (
        <div key={title} className="flex flex-col items-center gap-4">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 text-green-900">
            <Icon className="h-5 w-5" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-gray-800 font-medium mb-2">
              {title}
            </h3>
            <p className="text-sm text-gray-600 whitespace-pre-line">{text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
