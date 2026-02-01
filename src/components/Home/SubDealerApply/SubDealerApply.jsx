"use client";

import { useState } from "react";

export default function SubDealerApply() {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        city: "",
        experience: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

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
                `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/sub-dealer`,
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
                throw new Error(data.message || "Failed to submit application");
            }
    
            setSuccess(true);
    
            setFormData({
                name: "",
                company: "",
                email: "",
                phone: "",
                city: "",
                experience: "",
                message: "",
            });
    
            setTimeout(() => {
                setSuccess(false);
            }, 5000);
        } catch (err) {
            console.error("Sub-dealer application error:", err);
            setError(err.message || "Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="w-full  py-12 sm:py-16 md:py-20 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
                {/* Heading + subheading */}
                <header className="mb-6 sm:mb-8 md:mb-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-emerald-700">
                        Partner With Us
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mt-2">
                        Apply to become a Sub-Dealer
                    </h2>
                </header>

                {/* Main layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-start">
                    {/* LEFT COLUMN: image (grey box) + small paragraph (black box) */}
                    <div className="flex flex-col gap-4 sm:gap-6">
                        {/* Grey box -> Image */}
                        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl bg-gray-200 h-[220px] sm:h-[260px] md:h-80">
                            <img
                                src="/subdealer.png"
                                alt="Premium EV showroom interior"
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
                            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white">
                                <p className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-emerald-100 mb-1 sm:mb-2">
                                    Abhilashit Automobiles Network
                                </p>
                                <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                                    Showcase a modern electric two-wheeler lineup in your showroom.
                                </h3>
                            </div>
                        </div>

                        {/* Black box -> small paragraph */}
                        <div className="rounded-2xl sm:rounded-3xl text-gray-900 px-4 py-4 sm:px-6 sm:py-5">
                            <p className="text-balance text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl">
                                Join the Abhilashit Automobiles network and bring premium electric
                                mobility to your city with strong margins, marketing support and
                                dedicated assistance. We help you design the showroom experience,
                                craft local campaigns, and provide operations playbooks so you can
                                focus on delighting riders from day one.
                            </p>
                            <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base leading-relaxed text-gray-900">
                                As an Abhilashit Automobiles Sub-Dealer, you get priority access to
                                new launches, on-ground training for your team, and a dedicated
                                relationship manager focused on growing your EV business. We also
                                share proven sales scripts, assist with local lead generation, and
                                guide you through financing and RTO processes so every walk-in
                                becomes a confident EV customer.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: form (green box) */}
                    <div className="">
                        {/* inner card */}
                        <div className="pl-0 lg:pl-8 xl:pl-20">
                            <div className="mb-4 sm:mb-6">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-emerald-700">
                                    Sub-Dealer Application
                                </p>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mt-2">
                                    Tell us about your dealership
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600 mt-2 sm:mt-3">
                                    Share your details and our business development team will connect
                                    within one business day.
                                </p> 
                            </div>

                            <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
                                {error && (
                                    <div className="rounded-lg sm:rounded-xl bg-red-50 border border-red-200 px-3 py-2 sm:px-4 sm:py-3">
                                        <p className="text-xs sm:text-sm text-red-800">{error}</p>
                                    </div>
                                )}

                                {success && (
                                    <div className="rounded-lg sm:rounded-xl bg-emerald-50 border border-emerald-200 px-3 py-2 sm:px-4 sm:py-3">
                                        <p className="text-xs sm:text-sm text-emerald-800">
                                            Application submitted successfully! Our business development team will contact you within one business day.
                                        </p>
                                    </div>
                                )}

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                    <label className="flex flex-col gap-1.5 sm:gap-2 text-sm font-medium text-gray-800">
                                        Full name
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter your name"
                                            className="w-full rounded-lg sm:rounded-xl border border-emerald-100 bg-white px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base text-gray-900 shadow-sm focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition"
                                        />
                                    </label>
                                    <label className="flex flex-col gap-1.5 sm:gap-2 text-sm font-medium text-gray-800">
                                        Company
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            placeholder="Company name"
                                            className="w-full rounded-lg sm:rounded-xl border border-emerald-100 bg-white px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base text-gray-900 shadow-sm focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition"
                                        />
                                    </label>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                    <label className="flex flex-col gap-1.5 sm:gap-2 text-sm font-medium text-gray-800">
                                        Email
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="you@example.com"
                                            className="w-full rounded-lg sm:rounded-xl border border-emerald-100 bg-white px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base text-gray-900 shadow-sm focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition"
                                        />
                                    </label>
                                    <label className="flex flex-col gap-1.5 sm:gap-2 text-sm font-medium text-gray-800">
                                        Phone number
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            placeholder="+91 98765 43210"
                                            className="w-full rounded-lg sm:rounded-xl border border-emerald-100 bg-white px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base text-gray-900 shadow-sm focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition"
                                        />
                                    </label>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                    <label className="flex flex-col gap-1.5 sm:gap-2 text-sm font-medium text-gray-800">
                                        City
                                        <input
                                            type="text"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            placeholder="Your city"
                                            className="w-full rounded-lg sm:rounded-xl border border-emerald-100 bg-white px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base text-gray-900 shadow-sm focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition"
                                        />
                                    </label>
                                    <label className="flex flex-col gap-1.5 sm:gap-2 text-sm font-medium text-gray-800">
                                        Experience in EV/Auto
                                        <select 
                                            name="experience"
                                            value={formData.experience}
                                            onChange={handleChange}
                                            className="w-full rounded-lg sm:rounded-xl border border-emerald-100 bg-white px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base text-gray-900 shadow-sm focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition"
                                        >
                                            <option value="">Select range</option>
                                            <option value="none">New to the segment</option>
                                            <option value="1-3">1-3 years</option>
                                            <option value="3-7">3-7 years</option>
                                            <option value="7+">7+ years</option>
                                        </select>
                                    </label>
                                </div>

                                <label className="flex flex-col gap-1.5 sm:gap-2 text-sm font-medium text-gray-800">
                                    How can we help?
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        placeholder="Share your dealership goals, location specifics, and any questions."
                                        className="w-full rounded-lg sm:rounded-xl border border-emerald-100 bg-white px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base text-gray-900 shadow-sm focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition resize-none"
                                    />
                                </label>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg sm:rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 sm:py-3.5 shadow-lg shadow-emerald-200 transition text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? "Submitting..." : "Submit Application"}
                                    {!isSubmitting && (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 sm:h-5 sm:w-5"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                        >
                                            <path d="M5 12h14" />
                                            <path d="M13 6l6 6-6 6" />
                                        </svg>
                                    )}
                                </button>

                                <p className="text-xs sm:text-sm text-gray-500 text-center px-2">
                                    We respect your privacy. Your details remain confidential and are
                                    used only for partnership discussions.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
