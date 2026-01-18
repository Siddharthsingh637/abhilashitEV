"use client";

import { useEffect, useState } from "react";

export default function ServiceForm({ open, onClose }) {
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    vehicleModel: "",
    serviceType: "",
    preferredDate: "",
    comments: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle animation states
  useEffect(() => {
    if (!mounted) return;
    
    if (open) {
      setIsAnimating(true);
      document.body.style.overflow = "hidden";
    } else {
      // Delay closing animation to allow fade out
      const timer = setTimeout(() => {
        setIsAnimating(false);
        document.body.style.overflow = "";
      }, 300); // Match transition duration
      return () => clearTimeout(timer);
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
        serviceType: "",
        vehicleModel: "",
        preferredDate: "",
        comments: "",
      });
      setError("");
      setSuccess(false);
      setIsSubmitting(false);
    }
  }, [open]);

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted || (!open && !isAnimating)) return null;

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
    
    // Validate email contains @ symbol if provided
    if (formData.email && !formData.email.includes("@")) {
      setError("Please enter a valid email address with @ symbol");
      return;
    }
    
    setIsSubmitting(true);
  
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/service-booking`,
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
        throw new Error(data.message || "Failed to book service appointment");
      }
  
      setSuccess(true);
  
      setFormData({
        name: "",
        phone: "",
        email: "",
        serviceType: "",
        vehicleModel: "",
        preferredDate: "",
        comments: "",
      });
  
      setTimeout(() => {
        onClose?.();
      }, 2000);
    } catch (err) {
      console.error("Service booking error:", err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose?.();
    }
  };
  console.log("API:", process.env.NEXT_PUBLIC_API_BASE_URL);


  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center px-3 sm:px-4 transition-opacity duration-300 ease-out ${
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-out ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleBackdropClick}
        aria-hidden="true"
      />

      <div 
        className={`relative w-full max-w-sm sm:max-w-2xl rounded-2xl sm:rounded-3xl bg-white shadow-2xl p-4 sm:p-6 md:p-8 max-h-[90vh] overflow-y-auto transition-all duration-300 ease-out ${
          open 
            ? "opacity-100 scale-100 translate-y-0" 
            : "opacity-0 scale-95 translate-y-4"
        }`}
      >
        <div className="flex items-start justify-between gap-3 sm:gap-4">
          <div className="flex-1">
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-emerald-700">
              Service Appointment
            </p>
            <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-900 mt-0.5 sm:mt-1">
              Book Your Service
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-1.5 sm:mt-2">
              Schedule a service appointment for your EV. Our certified technicians 
              will ensure your vehicle is running at peak performance.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 transition text-xl sm:text-2xl leading-none shrink-0"
            aria-label="Close service form"
          >
            ×
          </button>
        </div>

        <form className="mt-4 sm:mt-6 space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
          {error && (
            <div className="rounded-lg sm:rounded-xl bg-red-50 border border-red-200 px-3 py-2 sm:px-4 sm:py-3">
              <p className="text-xs sm:text-sm text-red-800">{error}</p>
            </div>
          )}

          {success && (
            <div className="rounded-lg sm:rounded-xl bg-emerald-50 border border-emerald-200 px-3 py-2 sm:px-4 sm:py-3">
              <p className="text-xs sm:text-sm text-emerald-800">
                Service appointment booked successfully! We'll contact you soon.
              </p>
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
                className="w-full rounded-lg sm:rounded-xl border border-emerald-100 bg-white px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base text-gray-900 shadow-sm focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition"
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
                className="w-full rounded-lg sm:rounded-xl border border-emerald-100 bg-white px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base text-gray-900 shadow-sm focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition"
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
                className="w-full rounded-lg sm:rounded-xl border border-emerald-100 bg-white px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base text-gray-900 shadow-sm focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition"
              />
            </label>
            <label className="flex flex-col gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-gray-800">
              Vehicle Model
              <input
                type="text"
                name="vehicleModel"
                value={formData.vehicleModel}
                onChange={handleChange}
                placeholder="Your EV model"
                className="w-full rounded-lg sm:rounded-xl border border-emerald-100 bg-white px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base text-gray-900 shadow-sm focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition"
              />
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            <label className="flex flex-col gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-gray-800">
              Preferred Date
              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                required
                className="w-full rounded-lg sm:rounded-xl border border-emerald-100 bg-white px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base text-gray-900 shadow-sm focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition"
              />
            </label>
            <label className="flex flex-col gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-gray-800">
              Service Type
              <select 
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full rounded-lg sm:rounded-xl border border-emerald-100 bg-white px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base text-gray-900 shadow-sm focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition"
              >
                <option value="">Select service type</option>
                <option value="regular">Regular Service</option>
                <option value="repair">Repair & Maintenance</option>
                <option value="battery">Battery Check</option>
                <option value="inspection">Vehicle Inspection</option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>

          <label className="flex flex-col gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-gray-800">
            Additional Details
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              rows={3}
              placeholder="Any specific issues, concerns, or special requests for the service appointment."
              className="w-full rounded-lg sm:rounded-xl border border-emerald-100 bg-white px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base text-gray-900 shadow-sm focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition resize-none"
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
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 rounded-lg sm:rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-4 py-2 sm:px-5 sm:py-3 shadow-lg shadow-emerald-200 transition text-xs sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Booking..." : "Book Appointment"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
