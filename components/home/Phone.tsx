"use client";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import { motion } from "framer-motion";

export default function Phone() {
  return (
    <section className="relative mt-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ amount: 0.2 }} // 只触发一次，进入 20% 高度就触发
      >
        <h2>滚动到我时我才动~</h2>
      </motion.div>
      <Iphone15Pro className="size-full" src="/images/cats/001.png" />
    </section>
  );
}
