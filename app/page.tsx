import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PortEcosystemTabs from "@/components/PortEcosystemTabs";
import BodyContent from "@/components/BodyContent";
import VesselGrid from "@/components/VesselGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <PortEcosystemTabs />
        <BodyContent />
        <VesselGrid />
      </main>
      <Footer />
    </>
  );
}
