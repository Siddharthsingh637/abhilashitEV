"use client";

import { useState } from "react";
import { requestJson } from "@/lib/api";

export default function SubDealerApply() {
    const [showForm, setShowForm] = useState(false);
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
            const data = await requestJson("/sub-dealer", {
                method: "POST",
                body: JSON.stringify(formData),
            });

            if (!data?.success) {
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
        <section className="w-full py-12 sm:py-20 px-4 sm:px-6 md:px-8 ">
            <div className="max-w-7xl mx-auto  rounded-[32px] sm:rounded-[48px] overflow-hidden flex flex-col lg:flex-row  lg:h-[660px]">
                
                {/* LEFT COLUMN: Hero Image Panel (hidden on small viewports) */}
                <div className={`hidden lg:block relative transition-all duration-700 ease-in-out overflow-hidden flex-shrink-0 ${
                    showForm 
                        ? 'lg:w-[40%]' 
                        : 'lg:w-[45%]'
                }`}>
                    <img
                        src="https://ik.imagekit.io/siddharth637/abhilashit/ChatGPT%20Image%20Jun%2010,%202026,%2009_55_38%20PM%20(1).png"
                        alt="Sub-Dealer Showroom Hero"
                        className={`w-full h-full object-cover transition-transform duration-700 ease-in-out ${
                            showForm ? 'scale-[1.04]' : 'scale-100'
                        }`}
                        loading="lazy"
                    />
                    {/* Shadow overlay */}
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent pointer-events-none" /> */}
                </div>

                {/* RIGHT COLUMN: Interactive Panel */}
                <div className={`w-full transition-all duration-700 ease-in-out flex flex-col justify-center p-6 sm:p-12 lg:p-16 relative overflow-hidden min-h-[500px] lg:min-h-0 ${
                    showForm ? 'lg:w-[60%]' : 'lg:w-[50%]'
                }`}>
                    
                    {/* Parent Content Wrapper */}
                    <div className="relative w-full h-full flex flex-col justify-center">
                        
                        {/* 1. INITIAL LANDING BLOCK */}
                        <div className={`transition-all duration-500 ease-in-out flex flex-col justify-center ${
                            showForm 
                                ? 'opacity-0 -translate-x-12 pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2' 
                                : 'opacity-100 translate-x-0 relative z-10'
                        }`}>
                            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700 mb-2 sm:mb-4 block">
                                Partnership Program
                            </span>
                            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-neutral-900 tracking-tighter leading-[0.95] uppercase mb-4 sm:mb-6">
                                Join Our<br /> Family
                            </h2>
                            <p className="text-sm sm:text-lg text-neutral-600 mb-6 sm:mb-8 font-medium max-w-md">
                                Become a sub-dealer and showcase a high-performance, premium electric two-wheeler lineup in your city.
                            </p>
                            <div>
                                <button
                                    type="button"
                                    onClick={() => setShowForm(true)}
                                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-emerald-600/10 hover:shadow-emerald-600/20 hover:translate-y-[-1px] active:translate-y-[1px] transition-all duration-200 text-sm sm:text-base tracking-wide cursor-pointer flex items-center gap-2"
                                >
                                    Apply Now
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14" />
                                        <path d="M12 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* 2. APPLICATION FORM BLOCK */}
                        <div className={`transition-all duration-500 ease-in-out flex flex-col justify-center ${
                            showForm 
                                ? 'opacity-100 translate-x-0 relative z-10' 
                                : 'opacity-0 translate-x-12 pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2'
                        }`}>
                            
                            {/* Form Header with Back Button */}
                            <div className="flex items-center justify-between mb-4 sm:mb-6 border-b border-neutral-200/50 pb-4">
                                <div>
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                                        Sub-Dealer Program
                                    </span>
                                    <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-950 tracking-tight leading-none">
                                        Be a Sub-Dealer
                                    </h3>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setShowForm(false)}
                                    className="text-xs sm:text-sm font-semibold text-neutral-500 hover:text-neutral-950 transition flex items-center gap-1.5 cursor-pointer py-1 px-3 rounded-lg hover:bg-neutral-100/50"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                    </svg>
                                    Back
                                </button>
                            </div>

                            <form className="space-y-4" onSubmit={handleSubmit}>
                                {/* Error Indicator */}
                                {error && (
                                    <div className="rounded-xl bg-red-50 border border-red-200 p-3">
                                        <p className="text-xs sm:text-sm text-red-800 font-medium">{error}</p>
                                    </div>
                                )}

                                {/* Success Indicator */}
                                {success && (
                                    <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3">
                                        <p className="text-xs sm:text-sm text-emerald-800 font-medium leading-relaxed">
                                            ✓ Application submitted successfully! Our business development team will contact you within one business day.
                                        </p>
                                    </div>
                                )}

                                {/* Inputs Row 1 */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <label className="flex flex-col gap-1.5 text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                                        Full name
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter your name"
                                            className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-50 transition-all duration-300 outline-none"
                                        />
                                    </label>
                                    <label className="flex flex-col gap-1.5 text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                                        Company
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            placeholder="Company name"
                                            className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-50 transition-all duration-300 outline-none"
                                        />
                                    </label>
                                </div>

                                {/* Inputs Row 2 */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <label className="flex flex-col gap-1.5 text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                                        Email
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="you@example.com"
                                            className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-50 transition-all duration-300 outline-none"
                                        />
                                    </label>
                                    <label className="flex flex-col gap-1.5 text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                                        Phone number
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            placeholder="+91 98765 43210"
                                            className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-50 transition-all duration-300 outline-none"
                                        />
                                    </label>
                                </div>

                                {/* Inputs Row 3 */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <label className="flex flex-col gap-1.5 text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                                        City
                                        <input
                                            type="text"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            placeholder="Your city"
                                            className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-50 transition-all duration-300 outline-none"
                                        />
                                    </label>
                                    <label className="flex flex-col gap-1.5 text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                                        Experience in EV/Auto
                                        <select 
                                            name="experience"
                                            value={formData.experience}
                                            onChange={handleChange}
                                            className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-50 transition-all duration-300 outline-none cursor-pointer"
                                        >
                                            <option value="">Select range</option>
                                            <option value="none">New to the segment</option>
                                            <option value="1-3">1-3 years</option>
                                            <option value="3-7">3-7 years</option>
                                            <option value="7+">7+ years</option>
                                        </select>
                                    </label>
                                </div>

                                {/* Inputs Block 4 */}
                                <label className="flex flex-col gap-1.5 text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                                    How can we help?
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={3}
                                        placeholder="Share your dealership goals, location specifics, and any questions."
                                        className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-50 transition-all duration-300 outline-none resize-none"
                                    />
                                </label>

                                {/* Submit CTA */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 shadow-lg shadow-emerald-600/10 hover:shadow-emerald-600/20 hover:translate-y-[-1px] active:translate-y-[1px] transition-all duration-200 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                                >
                                    {isSubmitting ? "Submitting Application..." : "Submit Application"}
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
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
