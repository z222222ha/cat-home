"use client";
import { LineText } from "@/components/LineText";
import { motion } from "framer-motion";

const Hero = ({ locale, langName }: { locale: any; langName: string }) => {
  return (
    <section className="relative h-[100vh]">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1],
          scale: {
            type: "tween", // tween spring
            // damping: 10, // if spring
            // stiffness: 50, // if spring
            // restDelta: 0.001, // if spring
          },
        }}
      >
        <div
          lang={langName}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 md:pt-10 text-center"
        >
          <h1>
            {locale.title1} <LineText>{locale.title2}</LineText> {locale.title3}
          </h1>
          <p className="mx-auto mt-6 sm:mt-8 max-w-2xl text-base sm:text-3xl tracking-tight text-slate-700 dark:text-slate-400">
            {/* {siteConfig.description} */}
            {locale.description}
          </p>
        </div>
        {/* <img src="/images/foot.svg" alt="" />
        <img src="/images/foot.svg" alt="" className="scale-50" />
        <img src="/images/foot.svg" alt="" className="scale-[0.3]" />
        <img
          src="/images/c_1.png"
          alt=""
          className="absolute top-[50%] left-[50%]"
        /> */}
      </motion.div>
    </section>
  );
};

export default Hero;
