'use client'
import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollTracker: React.FC = () => {
  const [scrollValue, setScrollValue] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [mvalue, setmvalue] = useState(1);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer) return; // Check if scrollContainer is null

    // Function to update the scroll value
    const updateScrollValue = () => {
      if (scrollContainer) {
        const newScrollValue = scrollContainer.scrollTop;
        setScrollValue(newScrollValue);
        let scvalue = Math.floor(newScrollValue / 30);
        if (scvalue > 33) scvalue = 33;
        if (scvalue < 1) scvalue = 1;
        setmvalue(scvalue);
      }
    };

    // Initialize ScrollTrigger
    const scrollTrigger = ScrollTrigger.create({
      trigger: ".hell",
      start: 'top top',
      end: '+=1000',
      scrub: 3,
      scroller: scrollContainer,
      onUpdate: () => {
        updateScrollValue();
      },
    });

    // Clean up ScrollTrigger on component unmount
    return () => {
      scrollTrigger.kill();
    };
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      style={{ height: '100vh', overflowY: 'scroll' }}
      className='flex items-center justify-center bg-[#090909]'
    >
      <div className='h-[400vh]'>a</div>
      <div className='h-[400vh]'></div>
      <img
        className={`sticky z-0 top-0 left-0 hell h-screen w-screen transition-transform duration-1000 ${scrollValue > 1000 ? '-translate-x-full' : 'translate-x-0'}`}
        src={`/images/animatedshow/ezgif-frame-0${(Math.floor(scrollValue / 33) + 1) > 33 ? 33 : (Math.floor(scrollValue / 33) + 1)}.jpg`}
      />
    </div>
  );
};

export default ScrollTracker;
