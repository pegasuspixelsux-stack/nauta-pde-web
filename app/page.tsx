import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BodyContent from "@/components/BodyContent";
import VesselGrid from "@/components/VesselGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <BodyContent />
        <VesselGrid />
      </main>
      <Footer />
    </>
  );
}
