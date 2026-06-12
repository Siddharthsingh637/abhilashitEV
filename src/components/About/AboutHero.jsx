export default function AboutHero() {
  return (
    <header className="relative w-full h-[60vh] min-h-[320px] md:h-[60vh] flex items-center justify-center bg-cover bg-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://ik.imagekit.io/siddharth637/abhilashit/hero/image.png?updatedAt=1767707169075')`,
        }}
      />
      {/* Dark subtle overlay for text readability */}
      <div className="absolute inset-0 bg-black/70 z-[1]" />
      {/* Centered heading */}
      <div className="relative z-10 text-center text-white px-4 max-w-2xl mx-auto">
        <p className="text-xs uppercase tracking-[0.25em] text-white/80 font-light mb-3">
          ABHILASHIT AUTOMOBILES
        </p>
        <h1 className="text-4xl md:text-6xl font-light tracking-wide mb-4">
          About Us
        </h1>
        <p className="text-base md:text-lg font-light tracking-wide text-white/90">
          We&apos;re here to help with bookings, inquiries, and everything about
          your EV journey.
        </p>
      </div>
    </header>
  );
}
