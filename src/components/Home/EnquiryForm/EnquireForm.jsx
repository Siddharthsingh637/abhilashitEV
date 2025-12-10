import { useEffect } from "react";

export default function EnquireForm({ open, onClose }) {
  // Lock scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit handling can be wired up later; close for now
    onClose?.();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-2xl rounded-3xl bg-white shadow-2xl p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
              Quick Enquiry
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">
              Tell us what you need
            </h3>
            <p className="text-gray-600 mt-2">
              Share a few details and our team will connect with you shortly to
              answer questions, schedule a test ride, or plan a dealership visit.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 transition"
            aria-label="Close enquiry form"
          >
            ×
          </button>
        </div>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex flex-col gap-2 text-sm font-medium text-gray-800">
              Full name
              <input
                type="text"
                required
                placeholder="Enter your name"
                className="w-full rounded-xl border border-emerald-100 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-gray-800">
              Phone number
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                className="w-full rounded-xl border border-emerald-100 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition"
              />
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex flex-col gap-2 text-sm font-medium text-gray-800">
              Email
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-emerald-100 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-gray-800">
              City
              <input
                type="text"
                placeholder="Your city"
                className="w-full rounded-xl border border-emerald-100 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition"
              />
            </label>
          </div>

          <label className="flex flex-col gap-2 text-sm font-medium text-gray-800">
            What would you like to know?
            <textarea
              rows={4}
              placeholder="Model interest, timeline, dealership inquiry, or any specific questions."
              className="w-full rounded-xl border border-emerald-100 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition resize-none"
            />
          </label>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-3 text-sm font-semibold text-gray-700 rounded-xl hover:bg-gray-100 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-3 shadow-lg shadow-emerald-200 transition"
            >
              Submit Enquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
