"use client";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const markers = [
  { x: 25, y: 10 },
  { x: 40, y: 70 },
  { x: 60, y: 20 },
  { x: 80, y: 30 },
  { x: 50, y: 40 },
];

export default function MapCard({ locale }: { locale: any }) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const isInView = useInView(mapRef);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"], // 动画区间
  });

  // 文字向上滑出
  const textY = useTransform(scrollYProgress, [0, 0.4], [50, -20]);
  const textOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const Marker = ({ className }: { className?: any }) => {
    return (
      <div className={className}>
        <div className="relative w-10 h-10 rotate-45">
          <div className="absolute inset-0 rounded-[50%_50%_0_50%] bg-transparent [background-image:radial-gradient(circle_11.2px_at_50%_50%,transparent_94%,#ff4747)]"></div>
          <div className="animate-ping absolute inset-0 rounded-[50%_50%_0_50%] bg-transparent [background-image:radial-gradient(circle_11.2px_at_50%_50%,transparent_94%,#ff4747)]"></div>
        </div>
      </div>
    );
  };

  return (
    <div
      ref={containerRef}
      className="relative mt-40 w-full h-screen flex flex-col items-center"
    >
      <motion.div
        style={{
          y: textY,
          opacity: textOpacity,
          textAlign: "center",
        }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <h2>
          {locale.title1}
          <span style={{ color: "#2c84ff" }}>{locale.title2}</span>
        </h2>
        <h3>{locale.description}</h3>
      </motion.div>

      <div className="relative w-2/3 h-4/5 rounded-2xl overflow-hidden shadow-lg">
        <motion.div
          ref={mapRef}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="w-full h-full bg-[url('/images/map.png')] bg-no-repeat bg-center"
        >
          {/* <Marker className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
          <Marker className="absolute top-[40%] left-[40%] translate-x-[-50%] translate-y-[-50%]" /> */}

          {markers.map((marker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, scale: 0.5 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.1, delay: 0.5 + index * 0.2 }}
              className={`z-10 absolute`}
              style={{
                top: `${marker.y}%`,
                left: `${marker.x}%`,
              }}
            >
              <Marker />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="size-full absolute top-[15%] left-[10%]"
      >
        <Iphone15Pro
          style={{ width: 433 / 1.2, height: 882 / 1.2 }}
          src="/images/map.png"
        />
      </motion.div>
    </div>
  );
}
