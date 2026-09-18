import ConfigSections from "@/components/ConfigSections";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import InviteSection from "@/components/InviteSection";
import LightningBackground from "@/components/LightningBackground";
import ModsGrid from "@/components/ModsGrid";
import Navbar from "@/components/Navbar";
import Rules from "@/components/Rules";

export default function Home() {
  return (
    <>
      <LightningBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Highlights />
          <ConfigSections />
          <ModsGrid />
          <Rules />
          <InviteSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
