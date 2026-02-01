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
    if (!formData.name?.trim() || !formData.email?.trim()) {
      setError("Please fill in Name and Email.");
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
    <div>
      <h2 className="text-2xl md:text-3xl font-light tracking-wide text-gray-900 mb-2">
        Send Us a Message
      </h2>
      <p className="text-gray-600 text-sm mb-8">
        Our team will get back to you shortly.
      </p>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className="block text-xs uppercase tracking-wider text-gray-500 mb-1.5"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:border-green-900 focus:ring-0 focus:outline-none transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-xs uppercase tracking-wider text-gray-500 mb-1.5"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:border-green-900 focus:ring-0 focus:outline-none transition-colors"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-xs uppercase tracking-wider text-gray-500 mb-1.5"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:border-green-900 focus:ring-0 focus:outline-none transition-colors"
            placeholder="+91 00000 00000"
          />
        </div>
        <div>
          <label
            htmlFor="city"
            className="block text-xs uppercase tracking-wider text-gray-500 mb-1.5"
          >
            City
          </label>
          <input
            id="city"
            name="city"
            type="text"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:border-green-900 focus:ring-0 focus:outline-none transition-colors"
            placeholder="Your city"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-xs uppercase tracking-wider text-gray-500 mb-1.5"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:border-green-900 focus:ring-0 focus:outline-none transition-colors resize-none"
            placeholder="Your message"
          />
        </div>
        {error && (
          <p className="text-sm text-red-600">{error}</p>
        )}
        {success && (
          <p className="text-sm text-green-800">
            Message sent. We&apos;ll get back to you shortly.
          </p>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-3 rounded-sm bg-green-900 text-white text-sm uppercase tracking-wider font-medium hover:bg-green-950 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending…" : "SEND MESSAGE"}
        </button>
      </form>
    </div>
  );
}
