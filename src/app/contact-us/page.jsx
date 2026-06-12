import ContactHero from "@/components/ContactUs/ContactHero";
import ContactInfoStrip from "@/components/ContactUs/ContactInfoStrip";
import ContactForm from "@/components/ContactUs/ContactForm";
import MapSection from "@/components/ContactUs/MapSection";
import FAQSection from "@/components/ContactUs/FAQSection";

export default function ContactUsPage() {
  return (
    <main className="bg-white">
      <ContactHero />
      <ContactInfoStrip />
      <ContactForm />
      <MapSection />
      <FAQSection />
    </main>
  );
}
