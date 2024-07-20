"use client";
import { useEffect, useRef, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [showH1, setShowH1] = useState(false);
  let wordsArray = words.split(" ");

  
  useEffect(() => {
    const sequence = async () => {
      if(!containerRef.current) return;
      if (containerRef.current) {
        const spans = containerRef.current.querySelectorAll("span");

        // Animate words in
        await animate(
          spans,
          { opacity: 0.6 },
          { duration: 1, delay: stagger(0.2) }
        );

        // Animate words out
        await animate(
          spans,
          { opacity: 0 },
          { duration: 1, delay: stagger(0.2, { startDelay: 1 }) } // 1 second pause before fading out
        );

        // Show h1 tag using Tailwind CSS
        setShowH1(true);
      }
    };

    sequence();
  }, [animate]);

  useEffect(() => {
    if (showH1) {
      const htwoElement = document.getElementById("htwo");
      if (htwoElement) {
        htwoElement.innerHTML = "SOLECTHON";
      }
      const honeElement = document.getElementById("hone");
      if (honeElement) {
        honeElement.innerHTML = "";
       }
      }
  }, [showH1]);

  const renderWords = () => {
    return (
      <motion.div ref={containerRef}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="dark:text-black font-cursive font-extralight opacity-0 italic   text-white "
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-2xl leading-snug tracking-wide">
          {showH1 ? (
            <h1 className="text-3xl text-yellow text-center transition-opacity duration-3000 ease-in-out">
              A STEP TOWARDS SUSTAINABILITY
            </h1>
          ) : (
            renderWords()
          )}
        </div>
      </div>
    </div>
  );
};
