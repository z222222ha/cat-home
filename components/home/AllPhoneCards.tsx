"use client";
import { type ConfettiRef } from "@/components/magicui/confetti";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import RainbowButton from "@/components/RainbowButton";
import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function AllPhoneCards({ locale }: { locale: any }) {
  const cardStyle = {
    width: 433 / 2,
    height: 882 / 2,
    transform:
      "translate3d(0px, 0px, 0px) rotate3d(0.811987, -0.33178, 0.480207, 65deg)",
  };

  const containerRef = useRef(null);

  const { scrollYProgress, scrollY } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"], // 动画区间
  });

  // 文字向上滑出
  const textY = useTransform(scrollYProgress, [0, 0.5], [1000, 50]);
  const textOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // 手机跟随 scroll 经过 transform rotate
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, 640]);
  const phoneRotate = useTransform(scrollYProgress, [0, 1], [0, 65]);

  const [rotate, setRotate] = useState<number>();
  useMotionValueEvent(phoneRotate, "change", (latest) => {
    setRotate(latest);
  });

  const textRef = useRef(null);
  const isInView = useInView(textRef);

  const confettiRef = useRef<ConfettiRef>(null);

  const test2Ref = useRef(null);
  const text2IsInView = useInView(test2Ref);

  useEffect(() => {
    console.log("text2IsInView", text2IsInView);
    text2IsInView && confettiRef.current?.fire({});
  }, [text2IsInView]);

  return (
    <section className="mt-20 relative">
      <section className="flex flex-col items-center justify-center gap-4 mb-20">
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: 32, fontWeight: "bold" }}>
            {locale.title1}
            <span style={{ color: "#2c84ff" }}>{locale.title2}</span>
          </h1>
          <h1 style={{ fontSize: 32, fontWeight: "bold" }}>
            {locale.title3}
            <span style={{ color: "#2c84ff" }}>{locale.title4}</span>
          </h1>
        </motion.div>
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          className="flex flex-col items-center justify-center gap-4"
        >
          <Image
            alt="mini-program"
            src="/images/mini-program.png"
            width={200}
            height={200}
          ></Image>
          <p style={{ fontSize: 20, color: "#555", fontWeight: "bold" }}>
            {locale.description1}
          </p>
          <RainbowButton text="扫一扫加入我们！" />
        </motion.div>
      </section>

      <div className="w-full flex justify-center">
        <motion.div
          style={{
            width: 433 / 2,
            height: 882 / 2,
            y: phoneY,
            zIndex: 9,
          }}
        >
          <Iphone15Pro
            className="size-full"
            src="/images/cats/001.png"
            style={{
              transform: `rotate3d(0.811987, -0.33178, 0.480207, ${rotate}deg)`,
            }}
          />
        </motion.div>
      </div>
      <section ref={containerRef} className="relative h-1/2 mt-24">
        <motion.div
          style={{
            y: textY,
            opacity: textOpacity,
            textAlign: "center",
            marginBottom: 40,
          }}
        >
          <h1 ref={test2Ref} style={{ fontSize: 32, fontWeight: "bold" }}>
            {locale.title5}
            <span style={{ color: "#2c84ff" }}>{locale.title6}</span>
          </h1>
          <p style={{ fontSize: 20, color: "#555", fontWeight: "bold" }}>
            {locale.description2}
          </p>
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
              style={{ ...cardStyle, visibility: "hidden" }}
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
    </section>
  );
}
