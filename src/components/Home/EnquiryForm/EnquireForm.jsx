"use client";

import { useEffect, useState } from "react";

export default function EnquireForm({ open, onClose }) {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock scroll when modal is open
  useEffect(() => {
    if (!mounted) return;
    
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, mounted]);

  // Reset form when modal closes
  useEffect(() => {
    if (!open) {
      setFormData({
        name: "",
        phone: "",
        email: "",
        city: "",
        message: "",
      });
      setError("");
      setSuccess(false);
      setIsSubmitting(false);
    }
  }, [open]);

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Prevent alphabets in phone number field
    if (name === "phone") {
      // Only allow numbers, +, -, spaces, parentheses, and other common phone characters
      const phoneRegex = /^[0-9+\-\s()]*$/;
      if (!phoneRegex.test(value)) {
        return; // Don't update if invalid character
      }
    }
    
    // Ensure email contains @ symbol
    if (name === "email" && value && !value.includes("@")) {
      // Allow typing but will be validated on submit
    }
    
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    // Validate email contains @ symbol
    if (formData.email && !formData.email.includes("@")) {
      setError("Please enter a valid email address with @ symbol");
      return;
    }
    
    setIsSubmitting(true);
  
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/enquiry`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
  
      const data = await res.json();
  
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to send enquiry");
      }
  
      setSuccess(true);
  
      setFormData({
        name: "",
        phone: "",
        email: "",
        city: "",
        message: "",
      });
  
      setTimeout(() => {
        onClose?.();
      }, 2000);
    } catch (err) {
      console.error("Enquiry error:", err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center px-3 sm:px-4 transition-opacity duration-300 ease-out ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <div
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-out ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <div className={`relative w-full max-w-sm sm:max-w-2xl rounded-2xl sm:rounded-3xl bg-white shadow-2xl p-4 sm:p-6 md:p-8 max-h-[90vh] overflow-y-auto transition-all duration-300 ease-out ${open ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}>
        <div className="flex items-start justify-between gap-3 sm:gap-4">
          <div className="flex-1">
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-emerald-700">
              Quick Enquiry
            </p>
            <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-900 mt-0.5 sm:mt-1">
              Tell us what you need
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-1.5 sm:mt-2">
              Share a few details and our team will connect with you shortly to
              answer questions, schedule a test ride, or plan a dealership visit.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 transition text-xl sm:text-2xl leading-none shrink-0"
            aria-label="Close enquiry form"
          >
            ×
          </button>
        </div>

        <form className="mt-4 sm:mt-6 space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
          {/* Success Message */}
          {success && (
            <div className="rounded-lg sm:rounded-xl bg-emerald-50 border border-emerald-200 p-3 sm:p-4">
              <p className="text-sm sm:text-base text-emerald-800 font-medium">
                ✓ Enquiry submitted successfully! We'll get back to you soon.
              </p>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="rounded-lg sm:rounded-xl bg-red-50 border border-red-200 p-3 sm:p-4">
              <p className="text-sm sm:text-base text-red-800">{error}</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            <label className="flex flex-col gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-gray-800">
              Full name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                disabled={isSubmitting}
                className="w-full rounded-lg sm:rounded-xl border border-emerald-100 bg-white px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base text-gray-900 shadow-sm focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </label>
            <label className="flex flex-col gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-gray-800">
              Phone number
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+91 98765 43210"
                disabled={isSubmitting}
                className="w-full rounded-lg sm:rounded-xl border border-emerald-100 bg-white px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base text-gray-900 shadow-sm focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            <label className="flex flex-col gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-gray-800">
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                disabled={isSubmitting}
                className="w-full rounded-lg sm:rounded-xl border border-emerald-100 bg-white px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base text-gray-900 shadow-sm focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </label>
            <label className="flex flex-col gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-gray-800">
              City
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Your city"
                disabled={isSubmitting}
                className="w-full rounded-lg sm:rounded-xl border border-emerald-100 bg-white px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base text-gray-900 shadow-sm focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </label>
          </div>

          <label className="flex flex-col gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-gray-800">
            What would you like to know?
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              placeholder="Model interest, timeline, dealership inquiry, or any specific questions."
              disabled={isSubmitting}
              className="w-full rounded-lg sm:rounded-xl border border-emerald-100 bg-white px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base text-gray-900 shadow-sm focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition resize-none disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </label>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2 sm:gap-3 pt-1 sm:pt-2">
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm font-semibold text-gray-700 rounded-lg sm:rounded-xl hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting || success}
              className="inline-flex items-center justify-center gap-2 rounded-lg sm:rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-4 py-2 sm:px-5 sm:py-3 shadow-lg shadow-emerald-200 transition text-xs sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Submit Enquiry"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

