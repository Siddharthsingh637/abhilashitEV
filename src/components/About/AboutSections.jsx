import { Zap, ShieldCheck, UserCheck } from "lucide-react";

const sections = [
  {
    title: "Quick Services",
    body:
      "Fast, dependable electric mobility without friction. From selection to support, we focus on simplicity, reliability, and long-term value—so you can move with confidence every day.",
    Icon: Zap,
    reverse: false,
  },
  {
    title: "Quality First",
    body:
      "Every vehicle meets strict standards for safety, build quality, and after-sales reliability. We work only with partners who deliver consistency, not compromises.",
    Icon: ShieldCheck,
    reverse: true,
  },
  {
    title: "Built for You",
    body:
      "Designed around real commuting needs. Whether short city rides or longer daily travel, our lineup balances comfort, performance, and ease of ownership.",
    Icon: UserCheck,
    reverse: false,
  },
];

export default function AboutSections() {
  return (
    <div className="bg-gray-900 ">
      {sections.map((section, index) => {
        const Icon = section.Icon;

        return (
          <section
            key={index}
            className="py-7 md:py-10 px-5 md:px-10"
          >
            <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
              {/* Text */}
              <div
                className={`${
                  section.reverse ? "md:order-2" : "md:order-1"
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <Icon className="w-6 h-6 text-white/80" />
                  <h2 className="text-xl font-light tracking-wide text-white">
                    {section.title}
                  </h2>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                  {section.body}
                </p>
              </div>

              {/* Visual */}
              <div
                className={`flex justify-center ${
                  section.reverse ? "md:order-1" : "md:order-2"
                }`}
              >
                <div className="w-28 h-28 rounded-full border border-green-300 flex items-center justify-center">
                  <Icon className="w-10 h-10 text-green-400" />
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
