"use client";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AllPhoneCards() {
  const cardStyle = {
    width: 433 / 2,
    height: 882 / 2,
    transform:
      "translate3d(0px, 0px, 0px) rotate3d(0.811987, -0.33178, 0.480207, 65deg)",
  };

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"], // 动画区间
  });

  // 文字向上滑出
  const textY = useTransform(scrollYProgress, [0, 0.5], [500, 50]);
  const textOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} className="relative h-1/2 mt-24">
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
      <div>
        <div className="flex gap-20">
          <Iphone15Pro
            style={{ ...cardStyle }}
            className="size-full"
            src="/images/cats/001.png"
          />
          <Iphone15Pro
            style={{ ...cardStyle }}
            className="size-full"
            src="/images/cats/001.png"
          />
          <Iphone15Pro
            style={{ ...cardStyle }}
            className="size-full"
            src="/images/cats/001.png"
          />
          <Iphone15Pro
            style={{ ...cardStyle }}
            className="size-full"
            src="/images/cats/001.png"
          />
          <Iphone15Pro
            style={{ ...cardStyle }}
            className="size-full"
            src="/images/cats/001.png"
          />
        </div>

        <div className="flex gap-20 absolute top-2/3">
          <Iphone15Pro
            style={{ ...cardStyle }}
            className="size-full"
            src="/images/cats/001.png"
          />
          <Iphone15Pro
            style={{ ...cardStyle }}
            className="size-full"
            src="/images/cats/001.png"
          />
          <Iphone15Pro
            style={{ ...cardStyle }}
            className="size-full"
            src="/images/cats/001.png"
          />
          <Iphone15Pro
            style={{ ...cardStyle }}
            className="size-full"
            src="/images/cats/001.png"
          />
          <Iphone15Pro
            style={{ ...cardStyle }}
            className="size-full"
            src="/images/cats/001.png"
          />
        </div>
      </div>
    </section>
  );
}
