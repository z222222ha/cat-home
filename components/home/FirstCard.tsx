"use client";
import Cat2 from "@/components/icons/cat2";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FirstCard({ locale }: { locale: any }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  return (
    <section
      ref={containerRef}
      className="relative flex gap-2 sm:gap-12 items-center px-4 sm:px-8"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 100 }}
        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <Cat2 className="fill-black dark:fill-white w-48 h-48 sm:w-96 sm:h-96" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <h1>武工大猫咪图鉴</h1>
        <p className="mx-auto mt-6 sm:mt-8 max-w-2xl text-sm sm:text-3xl tracking-tight text-slate-700 dark:text-slate-400">
          {locale.description}
        </p>
      </motion.div>
    </section>
  );
}
