"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function BodyContent() {
  return (
    <section id="heritage" className="bg-white py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-100 lg:order-2"
          >
            <Image
              src="https://images.unsplash.com/photo-1741183575544-ae96e3c8c221?auto=format&fit=crop&w=1600&q=80"
              alt="Luxury motor yachts moored side by side in a marina"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="max-w-2xl lg:order-1"
          >
            <p className="mb-5 text-[13px] font-medium tracking-[0.2em] text-neutral-500">
              HERITAGE
            </p>
            <h2 className="text-4xl font-semibold -tracking-tight text-neutral-900 sm:text-5xl">
              Where the Río de la Plata meets the Atlantic.
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-neutral-600">
              <p>
                For nearly a century, Punta del Este has stood as the point
                where two waters and two worlds converge — the calm, brown
                current of the Río de la Plata giving way to the open blue
                of the South Atlantic. It is a harbor built for arrivals,
                and for vessels of consequence.
              </p>
              <p>
                Nauta PDE was founded on a simple premise: that a yacht is
                not merely purchased, but placed — into the right hands, the
                right waters, and the right mooring. Every vessel in our
                care is selected for its pedigree, inspected to a
                transatlantic standard, and presented without pretense.
              </p>
              <p>
                What remains is a fleet as considered as the coastline it
                calls home.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
