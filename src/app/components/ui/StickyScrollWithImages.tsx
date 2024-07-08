"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";

export const StickyScrollImages = ({
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

//   const backgroundColors = [
//     "var(--cyan-500)",
//     "var(--pink-500)",
//     "var(--orange-500)",
//   ];
//   const linearGradients = [
//     "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
//     "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
//     "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
//   ];

//   const [backgroundGradient, setBackgroundGradient] = useState(
//     linearGradients[0]
//   );

//   useEffect(() => {
//     setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
//   }, [activeCard]);

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
              
                className="snap-center  text-white max-w-lg mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div

        className={cn(
          "hidden lg:block h-[300px] w-[450px] rounded-md shadow-xl shadow-red-700 sticky top-48 overflow-visible",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
