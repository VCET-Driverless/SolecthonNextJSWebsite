'use client';
import { useState, useEffect } from 'react';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    'images/carousel/1.0.png',
    'images/carousel/autonomous-7.0.jpg',
    'images/carousel/3.0.png',
    'images/carousel/3.1.png',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [items.length]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div id="indicators-carousel" className=" snap-center relative w-full h-full" data-carousel="static">
      <div className="relative h-screen overflow-hidden ">
        {items.map((src, index) => (
          <div
            key={index}
            className={`absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 duration-700 ease-in-out ${index === activeIndex ? 'block' : 'hidden'}`}
            data-carousel-item={index === activeIndex ? 'active' : ''}
          >
            <img src={src} className="w-full h-full object-cover" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
        {items.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-white' : 'bg-gray-400'}`}
            aria-current={index === activeIndex}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            onClick={() => handleIndicatorClick(index)}
          ></button>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
