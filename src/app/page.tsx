"use client";

import Carousel from "./components/ui/Carousel";
import React from "react";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { TextGenerateEffect } from "./components/ui/text-generate-effect";
import { useRef } from "react";
import { Button } from "./components/ui/moving-border";
import { StickyScroll } from "./components/ui/sticky-scroll-reveal";
// import ScrollTracker from "./components/ui/ScrollTracker";
import {
  TextRevealCard,

} from "./components/ui/text-reveal-card";  
 
// import { StickyScrollImages } from "./components/ui/StickyScrollWithImages";
import { Image } from "@nextui-org/react";
import HorizontalCards from "./components/ui/horizontalscroll";
import {Shiba} from "./components/3dfile/shiba";
// import gsap from "gsap";
// import ImageSequence from "./CarviewimageSequence";
export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);
  const textBlockRef = useRef(null);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const footerNavs = [
    {
      label: "Company",
      items: [
        {
          href: "javascript:void()",
          name: "Partners",
        },
        {
          href: "javascript:void()",
          name: "Blog",
        },
        {
          href: "javascript:void()",
          name: "Team",
        },
        {
          href: "javascript:void()",
          name: "Careers",
        },
      ],
    },
    {
      label: "Resources",
      items: [
        {
          href: "javascript:void()",
          name: "contact",
        },
        {
          href: "javascript:void()",
          name: "Support",
        },
        {
          href: "javascript:void()",
          name: "Docs",
        },
        {
          href: "javascript:void()",
          name: "Pricing",
        },
      ],
    },
    {
      label: "About",
      items: [
        {
          href: "javascript:void()",
          name: "Terms",
        },
        {
          href: "javascript:void()",
          name: "License",
        },
        {
          href: "javascript:void()",
          name: "Privacy",
        },
        {
          href: "javascript:void()",
          name: "About US",
        },
      ],
    },
  ];

  useEffect(() => {
    if (!textBlockRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEnteredViewport(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    observer.observe(textBlockRef.current);

    return () => {
      if(!textBlockRef.current) return;
      if (observer && observer.unobserve ) {
        observer.unobserve(textBlockRef.current);
      }
    };
  }, [textBlockRef]);

  const contents = [
    {
      title: "Our Objective",
      description:
        "Over the last couple of years, the popularity of unconventional sources of fuel, and their applications in the field of mobility has been a subject of interest of many engineers and students from across the globe. We, at Team VCET SOLECTHON aim to turn this concept into a reality and present our very own automobile venture, which will potentially be able of face the mobility challenges of the modern India. ",
      content: (
        <Image
          isBlurred
          isZoomed
          src="images/carousel/homecarousel/7.0.jpg"
          alt="Our Objective"
          className="m-5 w-[420px] h-[280px] object-cover  "
        />
      ),
    },
    {
      title: "Our Goal",
      description:
        "Our goal is to drive the world towards sustainable energy and renewable energy sources by creating technologically innovative product with help younger genereation for making a greener tomorrow.",
      content: (
        <Image
          isBlurred
          isZoomed
          src="images/carousel/homecarousel/3.1.png"
          alt="Our Goal"
          className="m-5 w-[420px] h-[280px] object-cover"
        />
      ),
    },
    {
      title: "Our Aim",
      description:
        "Our aim is to build highly efficient solar powered electric autonomous vehicle by inculcating the latest designs innovations .Solecthon is a step towards the future of mobility.",
      content: (
        <Image
          isBlurred
          isZoomed
          src="images/carousel/homecarousel/3.0.png"
          alt="Our Aim"
          className="m-5 w-[420px] h-[280px] object-cover"
        />
      ),
    },
  ];


  const stats = [
    {
      data: "INF",
      title: "PASSION",
    },
    {
      data: "150+",
      title: "STUDENTS",
    },
    {
      data: "8+",
      title: "CARS",
    },
    {
      data: "50+",
      title: "SPONSORS",
    },
  ];





  return (
    <>
    
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll overflow-clip z-10">
        <div id="trigger" className=" snap-center  w-screen h-screen  bg-white justify-center">
          {/* ScrollTracker  */}
          <Shiba />
        </div>
      
        {/* Video Section */}
        <div className="snap-center overflow-hidden relative w-screen h-screen flex flex-col justify-evenly items-center pt-[10vh]">
          {isClient && (
            <div className="absolute top-0 left-0 w-screen h-screen z-0 transform scale-110">
              <ReactPlayer
                url="https://youtu.be/2-9KmXhLVJQ&vq=hd1080" // Replace with your YouTube video URL
                playing
                loop
                muted
                width="100%"
                height="100%"
                className=" overflow-hidden  react-player"
              />
            </div>
          )}

          {/* Black Tint Overlay */}
          <div className=" absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

          {/* Content */}
          <div className="relative z-20 flex flex-col justify-evenly items-center w-full h-full">
            <div className=" flex justify-center items-center  ">
              <h1 id="hone" className="text-4xl font-bold text-yellow m-5">
                WHO ARE 
              </h1>
              <h1 id="htwo" className="text-4xl font-bold text-white">
                WE ?
              </h1>
            </div>
            <div
              className="flex justify-center items-center"
              ref={textBlockRef}
            >
              {hasEnteredViewport && (
                <TextGenerateEffect
                  words="Solar Electric Autonomous car team of Vidyavardhini's College Of Engineering & Technology, is an entirely student-run, non-profit organization fueled by its member's passion for environmentally sustainable technology. All team members get unique opportunity to gain valuable hands-on engineering and business experience while raising community awareness of clean energy vehicles."
                  className="w-[60vw] text-white text-justify"
                />
              )}
            </div>
            <div className="flex justify-center mt-10 items-center animate-bounce">
              <Button
                borderRadius="1.75rem"
                className="text-lg bg-transparent hover:bg-yellow hover:text-white "
              >
                <a
                  href="/contact-us"
                  className="sa text-[#fff] text-xl text-semibold bg-black px-8 rounded-3xl py-3"
                >
                  Become Partner
                </a>
              </Button>
            </div>
          </div>
        </div>
           {/* Carousel */}
        <Carousel />

        {/* Sticky roll  */}
        <div className="snap-center  w-screen h-screen overflow-hidden justify-center ">
          <div className="">
            <StickyScroll content={contents} contentClassName="overflow-visible" />
          </div>
        </div>

     

      {/* cars veiw page */}
        <div className=" snap-center  w-screen h-screen  bg-white justify-evenly">
              <div className="relative top-20 text-slate-400 ">
          <TextRevealCard
        text="      Emerging Future Mobility"
        revealText="A Step Towards Sustainaility"
        className="bg-white w-screen flex   justify-items-center justify-center"
      >

        </TextRevealCard>

          </div>
          <HorizontalCards />
         

        </div>

         {/* Links View */}


        {/* statics */}

        {/* <section className="py-14 h-[50vh]">
          <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
            <div className="max-w-2xl mx-auto text-center flex justify-center items-center">
              <Image src="images/onlyLogoreal.png" alt="Solecthon" width={180} height={150}
                isBlurred

              />
           
            </div>
            <div className="mt-12">
              <ul className="flex flex-col items-center justify-center gap-y-10 sm:flex-row sm:flex-wrap lg:divide-x">
                {stats.map((item, idx) => (
                  <li key={idx} className="text-center px-12 md:px-16">
                    <h4 className="text-4xl text-red-500 font-semibold">
                      {item.data === "INF" ? (
                        <Image

                          isZoomed
                          src="images/infinity.svg" 
                          alt="INF"
                          width={70}
                          height={60}

                        />
                      ) : (
                        item.data
                      )}
                    </h4>
                    <p className="mt-3 font-medium">{item.title}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section> */}
        {/* Footer */}
        {/* <footer className="text-gray-500 h-[50vh] snap-end px-4 py-3 max-w-screen-xl mx-auto md:px-8">
          <div className="gap-6 justify-between md:flex">
            <div className="flex-1">
              <div className="max-w-xs">
                <Image

                  alt="VCET Logo"
                  src="images/vcet-logo.jpeg"
                  className=" w-24 h-24 rounded-full object-cover"
                />
                <p className="leading-relaxed mt-2 text-[15px]">
                Lorem Ipsum has been the industry&apos;s standard dummy text ever
                since the 1500s.
                </p>
              </div>
              <form onSubmit={(e) => e.preventDefault()}>
                <label className="block pt-4 pb-2">Stay up to date</label>
                <div className="max-w-sm flex items-center border rounded-md p-1">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-2.5 outline-none"
                  />
                  <button className="p-2.5 rounded-md text-white bg-indigo-600 outline-none shadow-md focus:shadow-none sm:px-5">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
            <div className="flex-1 mt-10 space-y-3 items-center justify-between sm:flex md:space-y-0 md:mt-0">
              {footerNavs.map((item, idx) => (
                <ul className="space-y-4" key={idx}>
                  <h4 className="text-gray-800 font-medium">{item.label}</h4>
                  {item.items.map((el, idx) => (
                    <li key={idx}>
                      <a
                        href={el.href}
                        className="hover:underline hover:text-indigo-600"
                      >
                        {el.name}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
          <div className="mt-8 py-3 border-t items-center justify-between sm:flex">
            <div className="mt-4 sm:mt-0">
              &copy; 2022 Float UI All rights reserved.
            </div>
            <div className="mt-6 sm:mt-0">
              <ul className="flex items-center space-x-4">
                <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                  <a href="javascript:void()">
                    <svg
                      className="svg-icon w-6 h-6 text-blue-400"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="none"
                        d="M18.258,3.266c-0.693,0.405-1.46,0.698-2.277,0.857c-0.653-0.686-1.586-1.115-2.618-1.115c-1.98,0-3.586,1.581-3.586,3.53c0,0.276,0.031,0.545,0.092,0.805C6.888,7.195,4.245,5.79,2.476,3.654C2.167,4.176,1.99,4.781,1.99,5.429c0,1.224,0.633,2.305,1.596,2.938C2.999,8.349,2.445,8.19,1.961,7.925C1.96,7.94,1.96,7.954,1.96,7.97c0,1.71,1.237,3.138,2.877,3.462c-0.301,0.08-0.617,0.123-0.945,0.123c-0.23,0-0.456-0.021-0.674-0.062c0.456,1.402,1.781,2.422,3.35,2.451c-1.228,0.947-2.773,1.512-4.454,1.512c-0.291,0-0.575-0.016-0.855-0.049c1.588,1,3.473,1.586,5.498,1.586c6.598,0,10.205-5.379,10.205-10.045c0-0.153-0.003-0.305-0.01-0.456c0.7-0.499,1.308-1.12,1.789-1.827c-0.644,0.28-1.334,0.469-2.06,0.555C17.422,4.782,17.99,4.091,18.258,3.266"
                      ></path>
                    </svg>
                  </a>
                </li>

                <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                  <a href="javascript:void()">
                    <svg
                      className="svg-icon w-6 h-6 text-blue-700"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="none"
                        d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z"
                      ></path>
                    </svg>
                  </a>
                </li>

                <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                  <a href="javascript:void()">
                    <svg
                      className="svg-icon w-6 h-6 text-blue-500"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="none"
                        d="M10,2.531c-4.125,0-7.469,3.344-7.469,7.469c0,4.125,3.344,7.469,7.469,7.469c4.125,0,7.469-3.344,7.469-7.469C17.469,5.875,14.125,2.531,10,2.531 M10,3.776c1.48,0,2.84,0.519,3.908,1.384c-1.009,0.811-2.111,1.512-3.298,2.066C9.914,6.072,9.077,5.017,8.14,4.059C8.728,3.876,9.352,3.776,10,3.776 M6.903,4.606c0.962,0.93,1.82,1.969,2.53,3.112C7.707,8.364,5.849,8.734,3.902,8.75C4.264,6.976,5.382,5.481,6.903,4.606 M3.776,10c2.219,0,4.338-0.418,6.29-1.175c0.209,0.404,0.405,0.813,0.579,1.236c-2.147,0.805-3.953,2.294-5.177,4.195C4.421,13.143,3.776,11.648,3.776,10 M10,16.224c-1.337,0-2.572-0.426-3.586-1.143c1.079-1.748,2.709-3.119,4.659-3.853c0.483,1.488,0.755,3.071,0.784,4.714C11.271,16.125,10.646,16.224,10,16.224 M13.075,15.407c-0.072-1.577-0.342-3.103-0.806-4.542c0.673-0.154,1.369-0.243,2.087-0.243c0.621,0,1.22,0.085,1.807,0.203C15.902,12.791,14.728,14.465,13.075,15.407 M14.356,9.378c-0.868,0-1.708,0.116-2.515,0.313c-0.188-0.464-0.396-0.917-0.621-1.359c1.294-0.612,2.492-1.387,3.587-2.284c0.798,0.97,1.302,2.187,1.395,3.517C15.602,9.455,14.99,9.378,14.356,9.378"
                      ></path>
                    </svg>
                  </a>
                </li>

                <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                  <a href="javascript:void()">
                    <svg
                      className="svg-icon w-6 h-6 text-red-600"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="none"
                        d="M9.797,2.214C9.466,2.256,9.134,2.297,8.802,2.338C8.178,2.493,7.498,2.64,6.993,2.935C5.646,3.723,4.712,4.643,4.087,6.139C3.985,6.381,3.982,6.615,3.909,6.884c-0.48,1.744,0.37,3.548,1.402,4.173c0.198,0.119,0.649,0.332,0.815,0.049c0.092-0.156,0.071-0.364,0.128-0.546c0.037-0.12,0.154-0.347,0.127-0.496c-0.046-0.255-0.319-0.416-0.434-0.62C5.715,9.027,5.703,8.658,5.59,8.101c0.009-0.075,0.017-0.149,0.026-0.224C5.65,7.254,5.755,6.805,5.948,6.362c0.564-1.301,1.47-2.025,2.931-2.458c0.327-0.097,1.25-0.252,1.734-0.149c0.289,0.05,0.577,0.099,0.866,0.149c1.048,0.33,1.811,0.938,2.218,1.888c0.256,0.591,0.33,1.725,0.154,2.483c-0.085,0.36-0.072,0.667-0.179,0.993c-0.397,1.206-0.979,2.323-2.295,2.633c-0.868,0.205-1.519-0.324-1.733-0.869c-0.06-0.151-0.161-0.418-0.101-0.671c0.229-0.978,0.56-1.854,0.815-2.831c0.243-0.931-0.218-1.665-0.943-1.837C8.513,5.478,7.816,6.312,7.579,6.858C7.39,7.292,7.276,8.093,7.426,8.672c0.047,0.183,0.269,0.674,0.23,0.844c-0.174,0.755-0.372,1.568-0.587,2.31c-0.223,0.771-0.344,1.562-0.56,2.311c-0.1,0.342-0.096,0.709-0.179,1.066v0.521c-0.075,0.33-0.019,0.916,0.051,1.242c0.045,0.209-0.027,0.467,0.076,0.621c0.002,0.111,0.017,0.135,0.052,0.199c0.319-0.01,0.758-0.848,0.917-1.094c0.304-0.467,0.584-0.967,0.816-1.514c0.208-0.494,0.241-1.039,0.408-1.566c0.12-0.379,0.292-0.824,0.331-1.24h0.025c0.066,0.229,0.306,0.395,0.485,0.52c0.56,0.4,1.525,0.77,2.573,0.523c1.188-0.281,2.133-0.838,2.755-1.664c0.457-0.609,0.804-1.313,1.07-2.112c0.131-0.392,0.158-0.826,0.256-1.241c0.241-1.043-0.082-2.298-0.384-2.981C14.847,3.35,12.902,2.17,9.797,2.214"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <style jsx>{`
            .svg-icon path,
            .svg-icon polygon,
            .svg-icon rect {
              fill: currentColor;
            }
          `}</style>
        </footer> */}
      </div>

      {/* */}

      {/* Footer */}
      {/*  */}
    </>
  );
}
