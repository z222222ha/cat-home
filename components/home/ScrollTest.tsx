"use client";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HorizontalFanCards() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"], // 动画区间
  });

  const cardStyle = {
    width: 433 / 1.5,
    height: 882 / 1.5,
    position: "absolute" as const,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 18,
    fontWeight: "bold",
    top: "10vh",
  };

  // 左卡片：向左移动
  const leftX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -(cardStyle.width + 80)]
  );
  // 中卡片：轻微放大 + 旋转
  const centerScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  // const centerRotate = useTransform(scrollYProgress, [0, 1], [0, 5]);
  // 右卡片：向右移动
  const rightX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, cardStyle.width + 80]
  );

  // 文字向上滑出
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const textOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={containerRef}
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        height: "80vh",
        width: "100%",
        marginTop: "30vh",
      }}
    >
      <motion.div
        style={{
          y: textY,
          opacity: textOpacity,
          textAlign: "center",
          marginBottom: 40,
        }}
      >
        <h1 style={{ fontSize: 32, fontWeight: "bold" }}>
          界面 <span style={{ color: "#2c84ff" }}>轻盈焕新</span>
        </h1>
        <p style={{ fontSize: 20, color: "#555" }}>简洁纯粹 · 氛围轻松</p>
      </motion.div>
      {/* 卡片直接 absolute + motion 控制 x */}
      <motion.div
        style={{ ...cardStyle, x: leftX, scale: centerScale, zIndex: 1 }}
      >
        <Iphone15Pro className="size-full" src="/images/cats/001.png" />
      </motion.div>
      <motion.div style={{ ...cardStyle, x: 0, scale: centerScale, zIndex: 3 }}>
        <Iphone15Pro className="size-full" src="/images/cats/001.png" />
      </motion.div>
      <motion.div
        style={{ ...cardStyle, x: rightX, scale: centerScale, zIndex: 2 }}
      >
        <Iphone15Pro className="size-full" src="/images/cats/001.png" />
      </motion.div>
    </section>
  );
}
