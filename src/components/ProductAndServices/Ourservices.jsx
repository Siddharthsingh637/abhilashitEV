"use client"

import React from 'react'
import { motion } from 'framer-motion'

const services = [
  {
    title: "Premium EV Servicing",
    description: "Keep your electric scooter performing at its peak. We provide certified diagnostics, battery health analysis, brake calibration, and regular tune-ups.",
    tags: ["Diagnostics", "Battery Check", "Tune-up"],
  },
  {
    title: "Battery Warranty & Support",
    description: "Official warranty-backed testing, battery reconditioning, and seamless replacement for lithium-ion battery packs to maximize your scooter's range and lifecycle.",
    tags: ["Li-Ion Battery", "Warranty Support", "Longevity"],
  },
  {
    title: "Genuine Spares & Accessories",
    description: "Access direct OEM parts and high-quality accessories designed specifically for your electric vehicle to ensure the highest safety and reliability.",
    tags: ["OEM Parts", "Smart Accessories", "Upgrades"],
  },
  {
    title: "Sub-Dealer & Franchise Program",
    description: "Partner with Abhilashit Automobiles. We offer complete setup support, branding guidelines, technical training, and marketing material for new franchise outlets.",
    tags: ["Franchise Setup", "Dealer Training", "Marketing Support"],
  }
]

const itemVariant = (index) => ({
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: index * 0.1 } }
})

const Ourservices = () => {
  return (
    <div className="bg-white rounded-t-[40px] md:rounded-t-[60px] px-5 sm:px-8 md:px-12 py-20 sm:py-24 md:py-28">
      <section className="w-full max-w-6xl mx-auto">
        <header className="text-center mb-16">
          {/* <h2
            className="font-black uppercase text-center text-neutral-900 mx-auto"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 90px)', letterSpacing: '-0.02em', color: '#0C0C0C' }}
          >
            Our Services
          </h2> */}
          <p
            className="mx-auto mt-6 font-light text-center"
            style={{ maxWidth: '700px', color: 'rgba(12,12,12,0.65)', fontSize: 'clamp(1rem, 2vw, 1.3rem)', lineHeight: '1.6' }}
          >
            Providing premium post-purchase support, genuine parts, and expert care to keep your electric vehicle running at peak performance.
          </p>
        </header>

        <div className="flex flex-col divide-y" role="list">
          {services.map((svc, idx) => (
            <motion.div
              key={svc.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={itemVariant(idx)}
              className="group py-8 md:py-10 border-b border-neutral-200 flex flex-col md:flex-row items-start gap-6 md:gap-10"
            >
              <div className="flex-shrink-0 w-full md:w-1/4 flex items-start">
                <motion.span
                  className="font-black leading-none text-neutral-900"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)', color: '#0C0C0C' }}
                >
                  {String(idx + 1).padStart(2, '0')}
                </motion.span>
              </div>

              <div className="w-full md:w-3/4">
                <h3 className="font-medium uppercase mb-3 text-neutral-900" style={{ fontSize: 'clamp(1.1rem, 2.2vw, 2.2rem)' }}>
                  <span className="transition-colors duration-300 group-hover:text-emerald-700">{svc.title}</span>
                </h3>

                <p className="font-light text-neutral-700 mb-4" style={{ maxWidth: '700px', color: 'rgba(12,12,12,0.65)', fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)', lineHeight: '1.7' }}>
                  {svc.description}
                </p>

                {svc.tags && (
                  <div className="flex flex-wrap gap-3">
                    {svc.tags.map((t) => (
                      <span key={t} className="text-xs px-4 py-2 rounded-full border" style={{ borderColor: 'rgba(12,12,12,0.15)' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <h4 className="font-semibold text-2xl text-neutral-900 mb-6">Need assistance or want to book a service?</h4>

          <button
            type="button"
            onClick={() => window.location.href = '/contact-us'}
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-white font-semibold shadow-lg transform transition-transform duration-200 cursor-pointer"
            style={{ background: 'linear-gradient(90deg,#0ea5a4,#047857)' }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            Contact Our Support
          </button>
        </motion.div>
      </section>
    </div>
  )
}

export default Ourservices
