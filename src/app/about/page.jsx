import AboutHero from "@/components/About/AboutHero";
import AboutIntro from "@/components/About/AboutIntro";
import AboutSections from "@/components/About/AboutSections";
import WhytoChoose from "@/components/About/WhytoChoose";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-light">
      <AboutHero />
      <AboutIntro />
      <AboutSections />
      <WhytoChoose />

    </main>
  );
}
