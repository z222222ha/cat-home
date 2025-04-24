"use client";
import { LineText } from "@/components/LineText";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FirstCard({ locale }: { locale: any }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  return (
    <section ref={containerRef} className="relative h-[100vh]">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 md:pt-10 text-center">
          <h1>
            {locale.title1} <LineText>{locale.title2}</LineText> {locale.title3}
          </h1>
          <p className="mx-auto mt-6 sm:mt-8 max-w-2xl text-base sm:text-3xl tracking-tight text-slate-700 dark:text-slate-400">
            {/* {siteConfig.description} */}
            {locale.description}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
