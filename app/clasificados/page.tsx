"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClassifiedsSection from "@/components/ClassifiedsSection";
import type { TabId } from "@/lib/portEcosystem";

export default function ClasificadosPage() {
  const [active, setActive] = useState<TabId>("classifieds");

  return (
    <>
      <Navbar active={active} onChange={setActive} />
      <main className="flex flex-1 flex-col pt-16">
        <ClassifiedsSection />
      </main>
      <Footer />
    </>
  );
}
