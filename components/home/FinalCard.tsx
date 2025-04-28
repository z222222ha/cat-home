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
      <div className="h-[120vh] w-full sticky top-0 flex flex-col pt-10">
        <motion.div
          ref={imgRef}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="text-center sm:mb-20 mb-5"
        >
          <h2>
            {locale.title1}
            <span style={{ color: "#2c84ff" }}>{locale.title2}</span>
          </h2>
          <h3>{locale.description}</h3>
        </motion.div>

        <div className="w-full flex items-center justify-end sm:gap-40 gap-0 sm:flex-col md:flex-row flex-col sm:px-0 px-10">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Cat3 className="sm:w-[32rem] sm:h-[32rem] w-24 h-24" />
          </motion.div>

          <div className="flex">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="sm:w-[calc(433px/1.5)] sm:h-[calc(882px/1.5)] w-[calc(433px/2.2) h-[calc(882px/2.2)]"
            >
              <Iphone15Pro className="size-full" src="" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100, x: "-50%", rotate: 0 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: 12 } : {}}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="origin-bottom sm:w-[calc(433px/1.5)] sm:h-[calc(882px/1.5)] w-[calc(433px/2.2) h-[calc(882px/2.2)]"
            >
              <Iphone15Pro className="size-full" src="" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100, x: "-100%", rotate: 0 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: 24 } : {}}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="origin-bottom-left sm:w-[calc(433px/1.5)] sm:h-[calc(882px/1.5)] w-[calc(433px/2.2) h-[calc(882px/2.2)]"
            >
              <Iphone15Pro className="size-full" src="" />
            </motion.div>
          </div>
        </div>
      </div>

      <div
        ref={containerRef}
        className="h-[120vh] w-full relative flex items-center justify-center"
      >
        {/* <div className="size-full">4555</div> */}
        <motion.span
          style={{
            scale: fontScale,
            opacity: bgOpacity,
          }}
        >
          {/* 渐变 */}
          <span
            className="sm:text-10xl text-4xl font-bold"
            style={{
              background:
                "linear-gradient(90deg, #f8a9ff, #71c3ff 35%, #aeacff 65%, #f8a9ff)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            关注小流浪
          </span>
        </motion.span>
      </div>
    </section>
  );
}
