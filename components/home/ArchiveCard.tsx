"use client";
import Cat5 from "@/components/icons/cat5";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { Mars, Venus } from "lucide-react";
import { useRef } from "react";

const reviews = [
  {
    name: "@cat1",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
    sex: 0,
  },
  {
    name: "@cat2",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
    sex: 0,
  },
  {
    name: "@cat3",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
    sex: 1,
  },
  {
    name: "@cat4",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
    sex: 1,
  },
  {
    name: "@cat5",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
    sex: 0,
  },
  {
    name: "@cat6",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
    sex: 1,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, body, sex }: any) => {
  return (
    <figure
      className={cn(
        "relative sm:h-full h-16 sm:w-64 w-32 cursor-pointer overflow-hidden rounded-xl border sm:p-4 p-2",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2 h-full sm:h-auto">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-row items-center gap-2">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          {sex === 1 && <Mars className="size-4" color="#2c84ff" />}
          {sex === 0 && <Venus className="size-4" color="#ff2c84" />}
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function ArchiveCard({ locale }: { locale: any }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);

  return (
    <section className="relative mt-20 w-screen sm:h-screen h-[65vh] flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.2, delay: 0.4 }}
        className="text-center"
      >
        <h2>
          {locale.title1}
          <span style={{ color: "#2c84ff" }}>{locale.title2}</span>
        </h2>
        <h3>{locale.description}</h3>
      </motion.div>

      <div className="w-full flex flex-row items-center justify-center px-4 sm:px-0">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3 }}
          className=""
        >
          <Iphone15Pro
            src=""
            className="sm:w-[calc(433px/1.2)] sm:h-[calc(882px/1.2)] w-[calc(433px/2.2)] h-[calc(882px/2.2)]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="relative flex w-3/5 flex-col items-center justify-center overflow-hidden"
        >
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-background"></div> */}
          {/* <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-background"></div> */}
        </motion.div>

        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="absolute right-[4%] bottom-[2%]"
        >
          <Cat5 className="sm:w-56 w-36 sm:h-56 h-36" />
        </motion.div>
      </div>
    </section>
  );
}
