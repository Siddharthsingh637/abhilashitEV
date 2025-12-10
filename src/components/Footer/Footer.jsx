export default function Footer() {
  return (
    <footer className="w-full bg-[#020910] text-gray-200 rounded-3xl mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold text-green-400">YourBrand</h2>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Driving the future of electric mobility with innovation, performance,
            and reliability. Join us on a greener journey ahead.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-green-300 mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-green-400 text-sm">Home</a></li>
            <li><a href="#" className="hover:text-green-400 text-sm">Products & Services</a></li>
            <li><a href="#" className="hover:text-green-400 text-sm">About Us</a></li>
            <li><a href="#" className="hover:text-green-400 text-sm">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-green-300 mb-3">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-green-400 text-sm">Warranty</a></li>
            <li><a href="#" className="hover:text-green-400 text-sm">Service Centers</a></li>
            <li><a href="#" className="hover:text-green-400 text-sm">FAQ</a></li>
            <li><a href="#" className="hover:text-green-400 text-sm">Terms & Policies</a></li>
          </ul>
        </div>

        {/* Contact Info (Replaces Newsletter) */}
        <div>
          <h3 className="text-lg font-semibold text-green-300 mb-3">Contact</h3>

          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <span className="block text-gray-300 font-medium">Address:</span>
              123 EV Street, Green Mobility Park, New Delhi, India
            </li>

            <li>
              <span className="block text-gray-300 font-medium">Phone:</span>
              +91 98765 43210
            </li>

            <li>
              <span className="block text-gray-300 font-medium">Email:</span>
              support@yourbrand.com
            </li>

            <li>
              <span className="block text-gray-300 font-medium">Service Hours:</span>
              Mon–Sat: 9:00 AM – 6:00 PM
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-10 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
}
