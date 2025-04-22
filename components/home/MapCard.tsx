"use client";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const markers = [
  { x: 20, y: 90 },
  { x: 20, y: 40 },
  { x: 50, y: 50 },
];

export default function MapCard() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);

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
    <div className="relative mt-60 w-full h-screen flex justify-center">
      <div className="relative w-2/3 h-4/5 rounded-2xl overflow-hidden shadow-lg">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="w-full h-full bg-[url('/images/map.png')] bg-no-repeat bg-center"
        ></motion.div>

        {markers.map((marker, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100, scale: 0.5 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.1, delay: 0.5 + index * 0.2 }}
            className={`z-10 absolute top-[${marker.x}%] left-[${marker.y}%]`}
          >
            <Marker />
          </motion.div>
        ))}
      </div>

      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="size-full absolute top-[10%] left-[10%]"
      >
        <Iphone15Pro
          style={{ width: 433 / 1.2, height: 882 / 1.2 }}
          src="/images/map.png"
        />
      </motion.div>

      {/* <motion.div
        className="absolute"
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <h2>咪咪咪咪</h2>
      </motion.div> */}
    </div>
  );
}
