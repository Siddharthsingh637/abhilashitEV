"use client";

import { useState } from "react";
import { initEmailJS, sendEnquiryEmail } from "@/lib/emailjs";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  city: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const phoneRegex = /^[0-9+\-\s()]*$/;
      if (!phoneRegex.test(value)) return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    if (!formData.name?.trim() || !formData.email?.trim() || !formData.phone?.trim() || !formData.city?.trim()) {
      setError("Please fill in all required fields.");
      return;
    }
    setIsSubmitting(true);
    try {
      initEmailJS();
      await sendEnquiryEmail(formData);
      setSuccess(true);
      setFormData(initialFormData);
    } catch (err) {
      setError("Something went wrong. Please try again or call us.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#ebe9e7] px-5 py-16 sm:px-8 md:py-20 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
        <div className="pt-2 lg:pt-1">
          <h2 className="max-w-md text-5xl font-normal leading-tight tracking-normal text-[#111217] sm:text-6xl">
            Talk with our team
          </h2>
          <p className="mt-9 max-w-md text-lg font-normal leading-8 text-[#111217]">
            Fill out your information and an Abhilashit representative will
            reach out to you. Have a simple question?{" "}
            <a href="#faq" className="underline underline-offset-4">
              Check out our FAQ.
            </a>
          </p>
        </div>

        <div className="rounded bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-2 md:grid-cols-[180px_1fr] md:items-center">
              <label htmlFor="name" className="text-base text-slate-600">
                Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="h-14 w-full border border-slate-300 bg-white px-5 text-lg text-slate-900 outline-none transition-colors placeholder:text-slate-500 focus:border-slate-900"
                placeholder="e.g., John Smith"
              />
            </div>

            <div className="grid gap-2 md:grid-cols-[180px_1fr] md:items-center">
              <label htmlFor="email" className="text-base text-slate-600">
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="h-14 w-full border border-slate-300 bg-white px-5 text-lg text-slate-900 outline-none transition-colors placeholder:text-slate-500 focus:border-slate-900"
                placeholder="name@company.com"
              />
            </div>

            <div className="grid gap-2 md:grid-cols-[180px_1fr] md:items-center">
              <label htmlFor="phone" className="text-base text-slate-600">
                Phone Number *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                className="h-14 w-full border border-slate-300 bg-white px-5 text-lg text-slate-900 outline-none transition-colors placeholder:text-slate-500 focus:border-slate-900"
                placeholder="+91 00000 00000"
              />
            </div>

            <div className="grid gap-2 md:grid-cols-[180px_1fr] md:items-center">
              <label htmlFor="city" className="text-base text-slate-600">
                City *
              </label>
              <input
                id="city"
                name="city"
                type="text"
                value={formData.city}
                onChange={handleChange}
                required
                className="h-14 w-full border border-slate-300 bg-white px-5 text-lg text-slate-900 outline-none transition-colors placeholder:text-slate-500 focus:border-slate-900"
                placeholder="e.g., Patna"
              />
            </div>

            <div className="grid gap-2 md:grid-cols-[180px_1fr]">
              <label htmlFor="message" className="pt-3 text-base text-slate-600">
                What would you like to discuss?
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full resize-none border border-slate-300 bg-white px-5 py-4 text-lg leading-8 text-slate-900 outline-none transition-colors placeholder:text-slate-500 focus:border-slate-900"
                placeholder="Tell us about the EV model, service, dealership, or question you would like to discuss."
              />
            </div>

            {(error || success) && (
              <div className="md:pl-[180px]">
                {error && <p className="text-sm text-red-600">{error}</p>}
                {success && (
                  <p className="text-sm text-green-800">
                    Message sent. We&apos;ll get back to you shortly.
                  </p>
                )}
              </div>
            )}

            <div className="md:pl-[180px]">
              <button
                type="submit"
                disabled={isSubmitting}
                className="h-14 min-w-36 bg-[#0d0e12] px-9 text-lg font-bold text-white transition-colors hover:bg-black disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
