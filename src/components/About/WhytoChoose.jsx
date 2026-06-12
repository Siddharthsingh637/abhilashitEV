import { BadgeIndianRupee, Gem, Headphones, MapPinned, Sparkle } from "lucide-react";

const reasons = [
  {
    title: "Trusted EV Range",
    description:
      "Explore practical electric scooters selected for daily commutes, comfort, and dependable city riding.",
    Icon: MapPinned,
  },
  {
    title: "Happy EV Owners",
    description:
      "Customers choose us for clear guidance, smooth delivery, and support that continues after purchase.",
    Icon: Gem,
  },
  {
    title: "Right Value",
    description:
      "Get transparent pricing, model guidance, and ownership options that fit your budget and riding needs.",
    Icon: BadgeIndianRupee,
  },
  {
    title: "Service Support",
    description:
      "From test rides to servicing, our team helps keep your EV experience simple and reliable.",
    Icon: Headphones,
  },
];

export default function WhytoChoose() {
  return (
    <section className=" px-5 py-14 text-[#2d2d2f] sm:px-8 md:py-16 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-center gap-4 md:mb-16">
          <span className="h-12 w-1.5 shrink-0 bg-[#f4de49] md:h-14" />
          <h2 className="text-3xl font-extrabold leading-tight tracking-normal sm:text-4xl md:text-5xl">
            Why Choose Abhilashit ?
          </h2>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {reasons.map(({ title, description, Icon }) => (
            <article key={title} className="flex flex-col items-start">
              <div className="mb-5 flex h-16 w-16 items-center justify-center self-start sm:self-center lg:self-start">
                <div className="relative">
                  <Icon
                    aria-hidden="true"
                    className="h-12 w-12 stroke-[#4a90e2]"
                    strokeWidth={1.7}
                  />
                  <Sparkle
                    aria-hidden="true"
                    className="absolute -right-1.5 -top-1.5 h-4 w-4 stroke-[#f4de49]"
                    strokeWidth={2.4}
                  />
                </div>
              </div>

              <h3 className="mb-3 text-xl font-extrabold leading-snug tracking-normal md:text-2xl">
                {title}
              </h3>
              <p className="max-w-xs text-base font-bold leading-7 text-[#9ea6ae]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
