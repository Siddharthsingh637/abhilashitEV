export default function SubDealerApply() {
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
                                    Herald EV Network
                                </p>
                                <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                                    Showcase a modern EV lineup in your showroom.
                                </h3>
                            </div>
                        </div>

                        {/* Black box -> small paragraph */}
                        <div className="rounded-2xl sm:rounded-3xl text-gray-900 px-4 py-4 sm:px-6 sm:py-5">
                            <p className="text-balance text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl">
                                Join the Herald EV network and bring premium electric mobility to
                                your city with strong margins, marketing support and dedicated
                                assistance. We help you design the showroom experience, craft local
                                campaigns, and provide operations playbooks so you can focus on
                                delighting riders from day one.
                            </p>
                            <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base leading-relaxed text-gray-900">
                                As a Herald Sub-Dealer, you get priority access to new launches,
                                on-ground training for your team, and a dedicated relationship
                                manager focused on growing your EV business. We also share
                                proven sales scripts, assist with local lead generation, and
                                guide you through financing and RTO processes so every
                                walk-in becomes a confident EV customer.
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

                            <form className="space-y-3 sm:space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                    <label className="flex flex-col gap-1.5 sm:gap-2 text-sm font-medium text-gray-800">
                                        Full name
                                        <input
                                            type="text"
                                            placeholder="Enter your name"
                                            className="w-full rounded-lg sm:rounded-xl border border-emerald-100 bg-white px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base text-gray-900 shadow-sm focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition"
                                        />
                                    </label>
                                    <label className="flex flex-col gap-1.5 sm:gap-2 text-sm font-medium text-gray-800">
                                        Business name
                                        <input
                                            type="text"
                                            placeholder="Showroom / dealership"
                                            className="w-full rounded-lg sm:rounded-xl border border-emerald-100 bg-white px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base text-gray-900 shadow-sm focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition"
                                        />
                                    </label>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                    <label className="flex flex-col gap-1.5 sm:gap-2 text-sm font-medium text-gray-800">
                                        Email
                                        <input
                                            type="email"
                                            placeholder="you@example.com"
                                            className="w-full rounded-lg sm:rounded-xl border border-emerald-100 bg-white px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base text-gray-900 shadow-sm focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition"
                                        />
                                    </label>
                                    <label className="flex flex-col gap-1.5 sm:gap-2 text-sm font-medium text-gray-800">
                                        Phone number
                                        <input
                                            type="tel"
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
                                            placeholder="Your city"
                                            className="w-full rounded-lg sm:rounded-xl border border-emerald-100 bg-white px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base text-gray-900 shadow-sm focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition"
                                        />
                                    </label>
                                    <label className="flex flex-col gap-1.5 sm:gap-2 text-sm font-medium text-gray-800">
                                        Experience in EV/Auto
                                        <select className="w-full rounded-lg sm:rounded-xl border border-emerald-100 bg-white px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base text-gray-900 shadow-sm focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition">
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
                                        rows={4}
                                        placeholder="Share your dealership goals, location specifics, and any questions."
                                        className="w-full rounded-lg sm:rounded-xl border border-emerald-100 bg-white px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base text-gray-900 shadow-sm focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition resize-none"
                                    />
                                </label>

                                <button
                                    type="submit"
                                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg sm:rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 sm:py-3.5 shadow-lg shadow-emerald-200 transition text-sm sm:text-base"
                                >
                                    Submit Application
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
