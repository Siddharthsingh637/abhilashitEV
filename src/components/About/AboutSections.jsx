const sections = [
  {
    title: "Our Vision",
    body: "We believe in a future where electric mobility is the norm—quiet, efficient, and kind to the planet. Our vision is to make that future accessible today by offering vehicles that combine reliability, style, and value in one package.Every model in our lineup is selected after rigorous evaluation. We partner with manufacturers who share our standards for build quality, safety, and after-sales support, so you can ride with confidence for years to come. Every model in our lineup is selected after rigorous evaluation. We partner with manufacturers who share our standards for build quality, safety, and after-sales support, so you can ride with confidence for years to come.Every model in our lineup is selected after rigorous evaluation. We partner with manufacturers who share our standards for build quality, safety.",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
    imageAlt: "Electric mobility vision",
    reverse: false,
  },
  {
    title: "Quality First",
    body: "Every model in our lineup is selected after rigorous evaluation. We partner with manufacturers who share our standards for build quality, safety, and after-sales support, so you can ride with confidence for years to come.",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
    imageAlt: "Premium electric scooter",
    reverse: true,
  },
  {
    title: "Built for You",
    body: "Whether you need a nimble runabout for the city or a capable ride for longer commutes, we focus on real-world needs. Our range is curated to suit different lifestyles while keeping the experience straightforward and enjoyable.",
    image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80",
    imageAlt: "Urban electric mobility",
    reverse: false,
  },
];

export default function AboutSections() {
  return (
    <div className="bg-white">
      {sections.map((section, index) => (
        <section
          key={index}
          className="py-16 md:py-24 px-6 md:px-8"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div
              className={`flex flex-col justify-center ${
                section.reverse ? "md:order-2" : "md:order-1"
              }`}
            >
              <h2 className="text-2xl font-light tracking-wide mb-4 text-gray-900">
                {section.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {section.body}
              </p>
            </div>
            <div
              className={`rounded-lg overflow-hidden ${
                section.reverse ? "md:order-1" : "md:order-2"
              }`}
            >
              <img
                src={section.image}
                alt={section.imageAlt}
                className="w-full h-[280px] md:h-[320px] object-cover rounded-lg"
              />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
