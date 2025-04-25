"use client";
import Cat1 from "@/components/icons/cat1";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FirstCard({ locale }: { locale: any }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  return (
    <section ref={containerRef} className="relative  flex gap-8 items-center">
      <div className="">
        <Cat1 className="rotate-45 fill-black dark:fill-white" />
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <h1>武工大猫咪图鉴</h1>
        <p className="mx-auto mt-6 sm:mt-8 max-w-2xl text-base sm:text-3xl tracking-tight text-slate-700 dark:text-slate-400">
          {locale.description}
        </p>
      </motion.div>
    </section>
  );
}
