"use client";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HorizontalFanCards({ locale }: { locale: any }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"], // 动画区间
  });

  const cardStyle = {
    // width: 433 / 1.5,
    // height: 882 / 1.5,
    position: "absolute" as const,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 18,
    fontWeight: "bold",
    top: "10vh",
  };

  // 左卡片：向左移动
  const leftX = useTransform(scrollYProgress, [0, 1], ["-50%", "-170%"]);
  // 中卡片：轻微放大 + 旋转
  const centerScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  // const centerRotate = useTransform(scrollYProgress, [0, 1], [0, 5]);
  // 右卡片：向右移动
  const rightX = useTransform(scrollYProgress, [0, 1], ["-50%", "70%"]);

  // 文字向上滑出
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const textOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="relative sm:h-[80vh] h-[60vh] w-full mt-[40vh]"
    >
      <motion.div
        style={{
          y: textY,
          opacity: textOpacity,
          textAlign: "center",
          marginBottom: 40,
        }}
      >
        <h2>
          {locale.title1}
          <span style={{ color: "#2c84ff" }}>{locale.title2}</span>
        </h2>
        <h3>{locale.description}</h3>
      </motion.div>
      {/* 卡片直接 absolute + motion 控制 x */}
      <motion.div
        style={{ x: leftX, scale: centerScale, zIndex: 1 }}
        className="absolute left-1/2 sm:w-[calc(433px/1.5)] sm:h-[calc(882px/1.5)] w-[calc(433px/2.2) h-[calc(882px/2.2)]"
      >
        <Iphone15Pro className="size-full" src="/images/cats/001.png" />
      </motion.div>
      <motion.div
        style={{
          x: "-50%",
          scale: centerScale,
          zIndex: 3,
        }}
        className="absolute left-1/2 sm:w-[calc(433px/1.5)] sm:h-[calc(882px/1.5)] w-[calc(433px/2.2) h-[calc(882px/2.2)]"
      >
        <Iphone15Pro className="size-full" src="/images/cats/001.png" />
      </motion.div>
      <motion.div
        style={{ x: rightX, scale: centerScale, zIndex: 2 }}
        className="absolute left-1/2 sm:w-[calc(433px/1.5)] sm:h-[calc(882px/1.5)] w-[calc(433px/2.2) h-[calc(882px/2.2)]"
      >
        <Iphone15Pro className="size-full" src="/images/cats/001.png" />
      </motion.div>
    </section>
  );
}
