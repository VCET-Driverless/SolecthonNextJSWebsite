"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--yellow)",
    "var(--yellow)",
    "var(--yellow)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--red), var(--black))",
    "linear-gradient(to bottom right, var(--red), var(--red))",
    "linear-gradient(to bottom right, var(--red), var(--red))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
    // console.log("scroll",scrollYProgress);
  }, [activeCard]);


  return (
    <motion.div
      // animate={{
      //   backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      // }}
      className="h-[100vh] overflow-visible overflow-y-auto flex justify-center iteam-center relative space-x-52 rounded-md p-10"
      ref={ref}
    > 
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl flex flex-col justify-center items-center ">
          {content.map((item, index) => (
            <div key={item.title + index} className="snap-center my-52 w-full ">
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,

                }}
                className="text-4xl font-bold font-sans text-black w-full text-justify"
              >
                {item.title}
              </motion.p>
              <motion.p
                initial={{
                  opacity: 0,
                  
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                  backgroundColor: backgroundColors[activeCard % backgroundColors.length],

                }}
                className="snap-center text-lg p-5 text-justify rounded-3xl text-white max-w-lg mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-30" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "hidden lg:block h-[300px] w-[450px] rounded-md  sticky top-48 overflow-visible ",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
