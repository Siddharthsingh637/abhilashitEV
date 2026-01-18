import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#020910] text-gray-200 mt-20 rounded-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          {/* Content */}
          <div className="px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            {/* Brand / About - full width top row */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-12 w-12 items-center justify-center bg-white/5">
                  <Image
                    src="https://ik.imagekit.io/siddharth637/abhilashit/logo-white.jpeg"
                    alt="Abhilashit Automobiles Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h2
                    className="text-xl sm:text-2xl font-semibold text-white tracking-tight"
                    style={{ fontFamily: "Arial, sans-serif" }}
                  >
                    Abhilashit Automobiles
                  </h2>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-emerald-400/80">
                    Electric Mobility Partner
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-400/90 leading-relaxed max-w-xl">
                Driving the future of electric mobility with innovation, performance and
                reliability. Step into a smarter, greener way to move.
              </p>
            </div>

            {/* Separator under brand/about */}
            <div className="mt-8 mb-10 border-t border-white/10" />

            {/* Links / Info grid */}
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
              {/* Quick Links */}
              <div>
                <h3 className="text-sm font-semibold text-gray-100 tracking-wide uppercase mb-5">
                  Quick Links
                </h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-emerald-300 transition-colors duration-200"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-emerald-300 transition-colors duration-200"
                    >
                      Products &amp; Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-emerald-300 transition-colors duration-200"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-emerald-300 transition-colors duration-200"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h3 className="text-sm font-semibold text-gray-100 tracking-wide uppercase mb-5">
                  Support
                </h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-emerald-300 transition-colors duration-200"
                    >
                      Warranty
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-emerald-300 transition-colors duration-200"
                    >
                      Service Centers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-emerald-300 transition-colors duration-200"
                    >
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-emerald-300 transition-colors duration-200"
                    >
                      Terms &amp; Policies
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-sm font-semibold text-gray-100 tracking-wide uppercase mb-5">
                  Contact
                </h3>
                <ul className="space-y-4 text-sm text-gray-400">
                  <li>
                    <span className="block text-xs font-semibold tracking-wide text-gray-300 uppercase mb-1">
                      Address
                    </span>
                    <p className="text-sm text-gray-400/90">
                      NH-31, Barh, Athmal Gola
                      <br />
                      Patna, Bihar
                    </p>
                  </li>
                  <li>
                    <span className="block text-xs font-semibold tracking-wide text-gray-300 uppercase mb-1">
                      Phone
                    </span>
                    <p className="text-sm text-gray-400/90">
                      +91 99110 75404
                    </p>
                  </li>
                  <li>
                    <span className="block text-xs font-semibold tracking-wide text-gray-300 uppercase mb-1">
                      Email
                    </span>
                    <p className="text-sm text-gray-400/90">
                      support@abhilashit.in
                    </p>
                  </li>
                  <li>
                    <span className="block text-xs font-semibold tracking-wide text-gray-300 uppercase mb-1">
                      Service Hours
                    </span>
                    <p className="text-sm text-gray-400/90">
                      Mon–Sat: 9:00 AM – 6:00 PM
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Divider */}
            <div className="mt-12 border-t border-white/10" />

            {/* Bottom Bar */}
            <div className="mt-8 flex flex-col gap-6 items-center justify-between text-xs sm:text-sm text-gray-500 md:flex-row">
              <p className="order-2 md:order-1 text-center md:text-left">
                © {new Date().getFullYear()} Abhilashit Automobiles. All rights reserved.
              </p>

              <div className="order-1 flex flex-col sm:flex-row items-center gap-6 md:order-2">
                {/* Social icons */}
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    aria-label="Visit our Instagram"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 hover:text-white hover:border-emerald-400/60 hover:bg-emerald-400/10 transition-colors duration-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="5" />
                      <circle cx="12" cy="12" r="4.2" />
                      <circle cx="17.3" cy="6.7" r="0.9" fill="currentColor" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="Visit our LinkedIn"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 hover:text-white hover:border-emerald-400/60 hover:bg-emerald-400/10 transition-colors duration-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="currentColor"
                    >
                      <path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5 1.9 5.5 1 4.6 1 3.5 1 2.4 1.9 1.5 3 1.5c1.1 0 1.98.9 1.98 2zM2 8h2v13H2zM8 8h3.8v1.8h.1C12.5 8.9 14 8 15.9 8 20 8 21 10.7 21 14.2V21H19v-6.1c0-1.5 0-3.5-2.1-3.5-2.1 0-2.4 1.6-2.4 3.4V21H12V8z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="Visit our YouTube"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 hover:text-white hover:border-emerald-400/60 hover:bg-emerald-400/10 transition-colors duration-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="currentColor"
                    >
                      <path d="M21.8 8.001a2.749 2.749 0 0 0-1.93-1.947C18.28 5.6 12 5.6 12 5.6s-6.28 0-7.87.454A2.749 2.749 0 0 0 2.2 8.001C1.75 9.6 1.75 12 1.75 12s0 2.4.45 3.999a2.749 2.749 0 0 0 1.93 1.947C5.72 18.4 12 18.4 12 18.4s6.28 0 7.87-.454a2.749 2.749 0 0 0 1.93-1.947C22.25 14.4 22.25 12 22.25 12s0-2.4-.45-3.999Z" />
                      <path d="M10.4 14.7 14.6 12l-4.2-2.7v5.4Z" />
                    </svg>
                  </a>
                </div>

                {/* Legal links */}
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <a href="#" className="hover:text-emerald-300 transition-colors duration-200">
                    Privacy Policy
                  </a>
                  <span className="h-0.5 w-0.5 rounded-full bg-gray-600" />
                  <a href="#" className="hover:text-emerald-300 transition-colors duration-200">
                    Terms of Service
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
