"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PortEcosystemTabs from "@/components/PortEcosystemTabs";
import BodyContent from "@/components/BodyContent";
import Footer from "@/components/Footer";
import type { TabId } from "@/lib/portEcosystem";

export default function Home() {
  const [active, setActive] = useState<TabId>("classifieds");

  return (
    <>
      <Navbar active={active} onChange={setActive} />
      <main className="flex flex-1 flex-col">
        <Hero active={active} onChange={setActive} />
        <PortEcosystemTabs active={active} />
        <BodyContent />
      </main>
      <Footer />
    </>
  );
}
