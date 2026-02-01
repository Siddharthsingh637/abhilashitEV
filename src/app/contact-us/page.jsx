import ContactHero from "@/components/ContactUs/ContactHero";
import ContactInfoStrip from "@/components/ContactUs/ContactInfoStrip";
import ContactForm from "@/components/ContactUs/ContactForm";
import MapSection from "@/components/ContactUs/MapSection";
import FAQSection from "@/components/ContactUs/FAQSection";
import Image from "next/image";

export default function ContactUsPage() {
  return (
    <main className="bg-white">
      <ContactHero />
      <ContactInfoStrip />
      {/* Main contact section: form + premium EV visual */}
      <section className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto px-6 py-20 items-start">
        <ContactForm />
        <div className="relative w-full aspect-4/3 md:aspect-square rounded-lg overflow-hidden bg-gray-100">
          <Image
            src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80"
            alt="Premium EV scooter at Abhilashit Automobiles showroom"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
          />
        </div>
      </section>
      <MapSection />
      <FAQSection />
    </main>
  );
}
