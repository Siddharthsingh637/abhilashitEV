"use client";

export default function ComingSoon() {
  return (
    <section className="relative h-[90vh] min-h-[700px] w-full overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover scale-105"
        style={{
          backgroundImage: `url("https://ik.imagekit.io/siddharth637/abhilashit/ChatGPT%20Image%20Jun%2027,%202026,%2005_56_48%20PM%20(1).png")`,
        }}
      />

      {/* Dark Premium Overlay */}
      <div className="absolute inset-0 bg-black/15" />

      {/* Grey Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/60 via-black/40 to-zinc-800/70" />

      {/* Top Fade */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent" />

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />

      {/* Content */}
      <div className="relative z-20 flex h-full items-center justify-center px-6">

        <div className="text-center">

          <p className="mb-5 uppercase tracking-[0.55em] text-zinc-300 text-sm font-light">
            New Product Launch
          </p>

          <h1 className="select-none font-black uppercase leading-none text-white">
            <span
              className="
              block
              text-[4rem]
              sm:text-[6rem]
              md:text-[8rem]
              lg:text-[10rem]
              xl:text-[12rem]
              tracking-tight
              text-transparent
              [-webkit-text-stroke:2px_rgba(255,255,255,0.9)]
              "
            >
              COMING
            </span>

            <span
              className="
              block
              -mt-3
              text-[4rem]
              sm:text-[6rem]
              md:text-[8rem]
              lg:text-[10rem]
              xl:text-[12rem]
              tracking-tight
              text-white
              drop-shadow-[0_10px_40px_rgba(255,255,255,0.15)]
              "
            >
              SOON
            </span>
          </h1>

          {/* <div className="mx-auto mt-10 max-w-xl rounded-full border border-white/15 bg-white/5 px-8 py-4 backdrop-blur-md">

            <p className="text-zinc-300 text-sm md:text-base tracking-wide">
              Engineering the next generation of electric mobility with
              innovation, efficiency, and sustainable performance.
            </p>

          </div> */}

        </div>

      </div>
    </section>
  );
}