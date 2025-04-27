"use client";
import Cat3 from "@/components/icons/cat3";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function FinalCard({ locale }: { locale: any }) {
  const imgRef = useRef(null);
  const isInView = useInView(imgRef);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"], // 动画区间
  });

  const bgOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const fontScale = useTransform(scrollYProgress, [0, 1], [10, 1]);
  const fontY = useTransform(scrollYProgress, [0, 1], [-400, 0]);

  return (
    <section className="w-full relative flex flex-col items-center mt-20">
      <div className="h-[120vh] w-full sticky top-0 flex flex-col items-center">
        <div className="h-[4%] w-full" />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="text-center mb-6"
        >
          <h2>
            {locale.title1}
            <span style={{ color: "#2c84ff" }}>{locale.title2}</span>
          </h2>
          <h3>{locale.description}</h3>
        </motion.div>

        <div className="">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="absolute left-[10%]"
          >
            <div className="relative">
              <Cat3 className="" />
            </div>
          </motion.div>
        </div>

        <motion.div
          ref={imgRef}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="relative"
        >
          <Iphone15Pro
            style={{ width: 433 / 1.2, height: 882 / 1.2 }}
            className="absolute top-0 left-0 rotate-12 translate-x-2/3"
            src=""
          />
          <Iphone15Pro
            className="absolute top-0 left-0 rotate-0"
            style={{ width: 433 / 1.2, height: 882 / 1.2 }}
            src=""
          />
        </motion.div>
      </div>

      <div
        ref={containerRef}
        className="h-[100vh] w-full relative flex items-center justify-center"
      >
        {/* <div className="size-full">4555</div> */}
        <motion.div
          style={{
            scale: fontScale,
            opacity: bgOpacity,
          }}
        >
          {/* 渐变 */}
          <span
            className="text-10xl font-bold"
            style={{
              fontSize: 200,
              fontWeight: "bold",
              background:
                "linear-gradient(90deg, #f8a9ff, #71c3ff 35%, #aeacff 65%, #f8a9ff)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            关注小流浪
          </span>
        </motion.div>
      </div>
    </section>
  );
}
