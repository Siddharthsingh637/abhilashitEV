"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do you offer EV test rides?",
    answer:
      "Yes. We offer test rides for our EV scooters by appointment. Visit our showroom or contact us to schedule a convenient slot.",
  },
  {
    question: "What is the warranty on EV scooters?",
    answer:
      "Warranty terms vary by model. Most of our EV scooters come with a standard warranty on battery and motor. Our team will share exact details for the model you choose.",
  },
  {
    question: "Do you provide servicing?",
    answer:
      "Yes. We provide full servicing and support for all Abhilashit EV scooters at our showroom and authorized service centers.",
  },
  {
    question: "Is financing available?",
    answer:
      "Yes. We have financing options for qualified buyers. Speak to our team for eligibility and EMI details.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 text-center">
      <h2 className="text-2xl md:text-3xl font-light tracking-wide text-gray-900 mb-12">
        Frequently Asked Questions
      </h2>
      <div className="space-y-0 border-t border-gray-200">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-200"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between gap-4 py-5 text-left text-gray-900 font-light"
            >
              <span className="text-base md:text-lg">{faq.question}</span>
              <ChevronDown
                className={`h-5 w-5 text-gray-500 shrink-0 transition-transform duration-200 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ${
                openIndex === index ? "max-h-48" : "max-h-0"
              }`}
            >
              <p className="pb-5 pr-8 text-sm text-gray-600 text-left leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
