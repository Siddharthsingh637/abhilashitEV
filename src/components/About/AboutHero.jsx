export default function AboutHero() {
  return (
    <header className="relative w-full h-[60vh] min-h-[320px] md:h-[70vh] flex items-center justify-center bg-cover bg-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80')`,
        }}
      />
      {/* Dark subtle overlay for text readability */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />
      {/* Centered heading */}
      <h1 className="relative z-10 text-white text-4xl md:text-6xl font-extralight tracking-wide text-center px-4">
        About Us
      </h1>
    </header>
  );
}
