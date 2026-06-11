import React from 'react'

const HeaderProductList = () => {
    return (
        <section className="relative w-full h-[60vh] min-h-[320px] md:h-[60vh] flex items-center justify-center bg-cover bg-center overflow-hidden">
            {/* Background image - premium EV showroom / electric scooter */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://ik.imagekit.io/siddharth637/abhilashit/WhatsApp%20Image%202026-06-11%20at%2000.24.18.jpeg')`,
                }}
            />
            {/* Dark gradient overlay: black + dark green tint for readability */}
            <div
                className="absolute inset-0 z-[1]"
                style={{
                    background:
                        "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.5) 50%, rgba(20,83,45,0.4) 100%)",
                }}
            />
            {/* Centered content */}
            <div className="relative z-10 text-center text-white px-4 max-w-2xl mx-auto">
                <p className="text-xs uppercase tracking-[0.25em] text-white/80 font-light mb-3">
                    ABHILASHIT AUTOMOBILES
                </p>
                <h1 className="text-4xl md:text-6xl font-light tracking-wide mb-4">
                    Our EV Lineup                </h1>
                <p className="text-base md:text-lg font-light tracking-wide text-white/90">
                    Explore our premium range of electric vehicles designed for style, performance, and a sustainable future.
                </p>
            </div>
        </section>)
}

export default HeaderProductList;

