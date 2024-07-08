'use client'
import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollTracker = () => {
  const [scrollValue, setScrollValue] = useState(0);
  const scrollContainerRef = useRef(null);
  const [mvalue,setmvalue]=useState(1);
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    
    // Function to update the scroll value
    const updateScrollValue = () => {
      setScrollValue(scrollContainer.scrollTop);
      console.log(scrollValue);
      let scvalue=Math.floor(scrollValue/30);
      if(scvalue > 33) scvalue=33;
      if(scvalue < 1) scvalue=1;
      setmvalue(scvalue)
      console.log(mvalue);
    };

    // Initialize ScrollTrigger
    ScrollTrigger.create({
      trigger: ".hell",
      
      start: 'top top',
      end: '+=1000',
      scrub:0.5,
      scroller: scrollContainer,
      onUpdate: (self) => {
        updateScrollValue();
      },
    });

    // Clean up ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    
      <div
        ref={scrollContainerRef}
        style={{ height: '100vh', overflowY: 'scroll' }}
        className='flex items-center justify-center bg-[#090909]'
      >
      {/* <p className='fixed top-10 z-50  text-pink-600'>Scroll Value: {scrollValue}</p> */}
       
        <div className='h-[400vh]  '>a</div>
        <div className='h-[400vh] '> </div>
        <img  className={`sticky z-0 top-0 left-0 hell h-screen w-screen transition-transform duration-1000 ${scrollValue > 1000 ? '-translate-x-full' : 'translate-x-0'}`}
        src={`/images/animatedshow/ezgif-frame-0${(Math.floor(scrollValue/33)+1) > 33 ? 33 : (Math.floor(scrollValue/33)+1)}.jpg`} />
      </div>
    
   
  );
};

export default ScrollTracker;
