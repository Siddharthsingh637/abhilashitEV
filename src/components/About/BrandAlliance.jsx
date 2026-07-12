const ALLIANCE = {
  brandName: "Montra Electric",
  brandLogo:
    "https://ik.imagekit.io/siddharth637/abhilashit/evimg.png?updatedAt=1764952635724",
  landscapeImage:
    "https://ik.imagekit.io/siddharth637/abhilashit/ChatGPT%20Image%20Jul%206,%202026,%2012_07_38%20PM%20(1).png",
  abhilashitLogo:
    "https://ik.imagekit.io/siddharth637/abhilashit/WhatsApp%20Image%202026-01-08%20at%2001.14.42.jpeg",
};

export default function BrandAlliance() {
  return (
    <section className="bg-white">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center">
        {/* Landscape Image */}
        <div className="relative w-full aspect-[21/9] sm:aspect-[21/8] md:aspect-[21/7] overflow-hidden">
          <img
            src={ALLIANCE.landscapeImage}
            alt={`${ALLIANCE.brandName} electric rickshaw on road`}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 via-transparent " />

          <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-10 md:px-14 pb-8 md:pb-10">
            <div className="flex items-end justify-between gap-6">
              <p className="hidden md:block text-[10px] uppercase tracking-[0.35em] text-[#6b6760] font-medium whitespace-nowrap">
                Official Channel
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full px-6 sm:px-10 md:px-14 py-14 md:py-20 flex justify-center">
          <div className="w-full max-w-6xl">
            
            {/* Top Section: Split Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch">
              
              {/* Left Column: Heading & Sub Heading */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-8">
                {/* Heading Block */}
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#8a857c] mb-3">
                    Authorized Representation
                  </p>
                  <h2
                    className="text-[#1a1a18] leading-[1.25] tracking-[-0.02em] font-extrabold"
                    style={{
                      fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                    }}
                  >
                    Electric Rickshaw Mobility — Regional Authorization
                  </h2>
                </div>

                {/* Sub Heading Block */}
                <p className="text-[18px] sm:text-[20px] leading-[1.8] text-[#01460a] text-justify font-medium">
                  Abhilashit Automobiles holds official authorization to represent{" "}
                  {ALLIANCE.brandName} across designated territories — bringing
                  engineered electric rickshaw solutions to fleet operators,
                  commercial drivers, and last-mile businesses with the same
                  accountability expected of a premium mobility house.
                </p>
              </div>

              {/* Right Column: Paragraph */}
              <div className="lg:col-span-7 flex flex-col gap-6 text-[15px] sm:text-[16px] leading-[1.9] text-neutral-800 text-justify justify-center">
                <p>
                  The relationship between Abhilashit Automobiles and{" "}
                  {ALLIANCE.brandName} is built on a shared conviction: last-mile
                  transport in India deserves the same engineering rigour, safety
                  certification, and after-sales infrastructure that premium
                  two-wheeler mobility has long received. {ALLIANCE.brandName}{" "}
                  manufactures electric rickshaws engineered around lithium-ion
                  battery architecture, reinforced chassis geometry, and
                  zero-emission drivetrains calibrated for high-frequency daily
                  use — the kind of vehicles that carry goods, passengers, and
                  livelihoods across congested urban corridors and semi-urban
                  routes without compromise.
                </p>
                <p>
                  As the authorized regional channel, Abhilashit Automobiles
                  extends that manufacturing standard into a complete ownership
                  experience — from model selection and transparent pricing to
                  warranty-backed servicing, genuine spare availability, and
                  technical guidance for fleet deployment. Every unit retailed
                  through our network undergoes the same pre-delivery inspection
                  protocol applied across our electric scooter lineup, ensuring
                  battery health verification, brake calibration, and electrical
                  system diagnostics before a single rickshaw reaches a driver or
                  operator.
                </p>
              </div>

            </div>

            {/* Bottom Row: Full-width Paragraph */}
            <div className="w-full mt-10">
              <p className="text-[15px] sm:text-[16px] leading-[1.9] text-neutral-800 text-justify">
                For commercial operators evaluating electric rickshaw adoption,
                the authorization signals more than a dealership arrangement —
                it represents a long-term alignment between a manufacturer
                focused on three-wheeler electric mobility and a distributor
                committed to post-purchase reliability. Whether you are
                expanding an existing fleet, transitioning from conventional
                auto-rickshaws, or entering the last-mile delivery economy for
                the first time, this channel combines {ALLIANCE.brandName}&apos;s
                product engineering with Abhilashit&apos;s established service
                infrastructure, trained technicians, and regional parts
                logistics.
              </p>

              {/* Bottom Tags */}
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-12 pt-8 border-t border-[#e0ddd6]">
                {[
                  "E-Rickshaw Distribution",
                  "Lithium-Ion Battery Systems",
                  "Last-Mile Fleet Support",
                  "Zero-Emission Commercial Mobility",
                  "Authorized Service Network",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-[12px] sm:text-[13px] uppercase tracking-[0.25em] text-[#9a958c]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
