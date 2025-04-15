"use client";
import { IconCloud } from "@/components/magicui/icon-cloud";
import { motion } from "framer-motion";

const images = [
  "/images/users/1.png",
  "/images/users/6.png",
  "/images/users/7.png",
  "/images/users/2.png",
  "/images/users/8.png",
  "/images/users/9.png",
  "/images/users/10.png",
  "/images/users/5.png",
  "/images/users/11.png",
  "/images/users/12.png",
  "/images/users/3.png",
  "/images/users/13.png",
  "/images/users/14.png",
  "/images/users/4.png",
];

export function IconCloudDemo({ locale }: { locale: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <section className="flex flex-col items-center justify-center gap-20">
        <div className="flex flex-col items-center">
          <IconCloud images={images} />
          <p className="text-sm text-slate-700 dark:text-slate-400">
            <span className="text-primary font-semibold text-base">1000+</span>{" "}
            {locale.maker}
          </p>
        </div>
      </section>
    </motion.div>
  );
}

export default IconCloudDemo;
