"use client";
import React, { useEffect, useRef } from "react";
import { ImagesSlider } from "../components/ui/images-slider";
import { motion } from "framer-motion";
import { TracingBeam } from "../components/ui/tracing-beam";
import { Tabs } from "../components/ui/tabs";
// import { Button } from "../components/ui/moving-border";
// import {TracingBeamDemo} from "./tm";
// Define the types
type TeamMember = {
  name: string;
  title: string;
  imageUrl: string;
  hoverImageUrl: string;
};

type TeamMembers = {
  [key: string]: TeamMember[];
};

// Properly type the teamMembers object
const teamMembers: TeamMembers = {
  ptDrivers: [
    {
      name: "Nat Reynolds",
      title: "Worldwide Partner",
      imageUrl:
        "https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/20b72dd9d347529c80882425/happy-man-with-long-thick-ginger-beard-has-friendly-smile_273609-16616.jpg?version=",
      hoverImageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGhhcHB5JTIwbWFufGVufDB8fHx8MTY1Nzg2Mzc2NA&ixlib=rb-1.2.1&q=80&w=400",
    },
    {
      name: "Nat Reynolds",
      title: "Worldwide Partner",
      imageUrl:
        "https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/20b72dd9d347529c80882425/happy-man-with-long-thick-ginger-beard-has-friendly-smile_273609-16616.jpg?version=",
      hoverImageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGhhcHB5JTIwbWFufGVufDB8fHx8MTY1Nzg2Mzc2NA&ixlib=rb-1.2.1&q=80&w=400",
    },
    {
      name: "Nat Reynolds",
      title: "Worldwide Partner",
      imageUrl:
        "https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/20b72dd9d347529c80882425/happy-man-with-long-thick-ginger-beard-has-friendly-smile_273609-16616.jpg?version=",
      hoverImageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGhhcHB5JTIwbWFufGVufDB8fHx8MTY1Nzg2Mzc2NA&ixlib=rb-1.2.1&q=80&w=400",
    },
    {
      name: "Nat Reynolds",
      title: "Worldwide Partner",
      imageUrl:
        "https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/20b72dd9d347529c80882425/happy-man-with-long-thick-ginger-beard-has-friendly-smile_273609-16616.jpg?version=",
      hoverImageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGhhcHB5JTIwbWFufGVufDB8fHx8MTY1Nzg2Mzc2NA&ixlib=rb-1.2.1&q=80&w=400",
    },
    
    {
      name: "Nat Reynolds",
      title: "Worldwide Partner",
      imageUrl:
        "https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/20b72dd9d347529c80882425/happy-man-with-long-thick-ginger-beard-has-friendly-smile_273609-16616.jpg?version=",
      hoverImageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGhhcHB5JTIwbWFufGVufDB8fHx8MTY1Nzg2Mzc2NA&ixlib=rb-1.2.1&q=80&w=400",
    },
    {
      name: "Nat Reynolds",
      title: "Worldwide Partner",
      imageUrl:
        "https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/20b72dd9d347529c80882425/happy-man-with-long-thick-ginger-beard-has-friendly-smile_273609-16616.jpg?version=",
      hoverImageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGhhcHB5JTIwbWFufGVufDB8fHx8MTY1Nzg2Mzc2NA&ixlib=rb-1.2.1&q=80&w=400",
    },
    {
      name: "Nat Reynolds",
      title: "Worldwide Partner",
      imageUrl:
        "https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/20b72dd9d347529c80882425/happy-man-with-long-thick-ginger-beard-has-friendly-smile_273609-16616.jpg?version=",
      hoverImageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGhhcHB5JTIwbWFufGVufDB8fHx8MTY1Nzg2Mzc2NA&ixlib=rb-1.2.1&q=80&w=400",
    },
    {
      name: "Nat Reynolds",
      title: "Worldwide Partner",
      imageUrl:
        "https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/20b72dd9d347529c80882425/happy-man-with-long-thick-ginger-beard-has-friendly-smile_273609-16616.jpg?version=",
      hoverImageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGhhcHB5JTIwbWFufGVufDB8fHx8MTY1Nzg2Mzc2NA&ixlib=rb-1.2.1&q=80&w=400",
    },
    {
      name: "adars",
      title: "Worldwide Partner",
      imageUrl:
        "https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/20b72dd9d347529c80882425/happy-man-with-long-thick-ginger-beard-has-friendly-smile_273609-16616.jpg?version=",
      hoverImageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGhhcHB5JTIwbWFufGVufDB8fHx8MTY1Nzg2Mzc2NA&ixlib=rb-1.2.1&q=80&w=400",
    }
  ],
  Autonomous: [
    {
      name: "Nat Reynolds",
      title: "Worldwide Partner",
      imageUrl:
        "https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/20b72dd9d347529c80882425/happy-man-with-long-thick-ginger-beard-has-friendly-smile_273609-16616.jpg?version=",
      hoverImageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGhhcHB5JTIwbWFufGVufDB8fHx8MTY1Nzg2Mzc2NA&ixlib=rb-1.2.1&q=80&w=400",
    },
    {
      name: "Nat Reynolds",
      title: "Worldwide Partner",
      imageUrl:
        "https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/20b72dd9d347529c80882425/happy-man-with-long-thick-ginger-beard-has-friendly-smile_273609-16616.jpg?version=",
      hoverImageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGhhcHB5JTIwbWFufGVufDB8fHx8MTY1Nzg2Mzc2NA&ixlib=rb-1.2.1&q=80&w=400",
    },
    {
      name: "Nat Reynolds",
      title: "Worldwide Partner",
      imageUrl:
        "https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/20b72dd9d347529c80882425/happy-man-with-long-thick-ginger-beard-has-friendly-smile_273609-16616.jpg?version=",
      hoverImageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGhhcHB5JTIwbWFufGVufDB8fHx8MTY1Nzg2Mzc2NA&ixlib=rb-1.2.1&q=80&w=400",
    },
    {
      name: "Nat Reynolds",
      title: "Worldwide Partner",
      imageUrl:
        "https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/20b72dd9d347529c80882425/happy-man-with-long-thick-ginger-beard-has-friendly-smile_273609-16616.jpg?version=",
      hoverImageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGhhcHB5JTIwbWFufGVufDB8fHx8MTY1Nzg2Mzc2NA&ixlib=rb-1.2.1&q=80&w=400",
    },
    
    {
      name: "Nat Reynolds",
      title: "Worldwide Partner",
      imageUrl:
        "https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/20b72dd9d347529c80882425/happy-man-with-long-thick-ginger-beard-has-friendly-smile_273609-16616.jpg?version=",
      hoverImageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGhhcHB5JTIwbWFufGVufDB8fHx8MTY1Nzg2Mzc2NA&ixlib=rb-1.2.1&q=80&w=400",
    },
    {
      name: "Nat Reynolds",
      title: "Worldwide Partner",
      imageUrl:
        "https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/20b72dd9d347529c80882425/happy-man-with-long-thick-ginger-beard-has-friendly-smile_273609-16616.jpg?version=",
      hoverImageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGhhcHB5JTIwbWFufGVufDB8fHx8MTY1Nzg2Mzc2NA&ixlib=rb-1.2.1&q=80&w=400",
    },
    {
      name: "Nat Reynolds",
      title: "Worldwide Partner",
      imageUrl:
        "https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/20b72dd9d347529c80882425/happy-man-with-long-thick-ginger-beard-has-friendly-smile_273609-16616.jpg?version=",
      hoverImageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGhhcHB5JTIwbWFufGVufDB8fHx8MTY1Nzg2Mzc2NA&ixlib=rb-1.2.1&q=80&w=400",
    },
    {
      name: "Nat Reynolds",
      title: "Worldwide Partner",
      imageUrl:
        "https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/20b72dd9d347529c80882425/happy-man-with-long-thick-ginger-beard-has-friendly-smile_273609-16616.jpg?version=",
      hoverImageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGhhcHB5JTIwbWFufGVufDB8fHx8MTY1Nzg2Mzc2NA&ixlib=rb-1.2.1&q=80&w=400",
    },
    {
      name: "adars",
      title: "Worldwide Partner",
      imageUrl:
        "https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/20b72dd9d347529c80882425/happy-man-with-long-thick-ginger-beard-has-friendly-smile_273609-16616.jpg?version=",
      hoverImageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGhhcHB5JTIwbWFufGVufDB8fHx8MTY1Nzg2Mzc2NA&ixlib=rb-1.2.1&q=80&w=400",
    }
  ],
  Bplan: [
    {
      name: "Nat Reynolds",
      title: "Worldwide Partner",
      imageUrl:
        "https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/20b72dd9d347529c80882425/happy-man-with-long-thick-ginger-beard-has-friendly-smile_273609-16616.jpg?version=",
      hoverImageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGhhcHB5JTIwbWFufGVufDB8fHx8MTY1Nzg2Mzc2NA&ixlib=rb-1.2.1&q=80&w=400",
    },
    {
      name: "Nat Reynolds",
      title: "Worldwide Partner",
      imageUrl:
        "https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/20b72dd9d347529c80882425/happy-man-with-long-thick-ginger-beard-has-friendly-smile_273609-16616.jpg?version=",
      hoverImageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGhhcHB5JTIwbWFufGVufDB8fHx8MTY1Nzg2Mzc2NA&ixlib=rb-1.2.1&q=80&w=400",
    },
    {
      name: "Nat Reynolds",
      title: "Worldwide Partner",
      imageUrl:
        "https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/20b72dd9d347529c80882425/happy-man-with-long-thick-ginger-beard-has-friendly-smile_273609-16616.jpg?version=",
      hoverImageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGhhcHB5JTIwbWFufGVufDB8fHx8MTY1Nzg2Mzc2NA&ixlib=rb-1.2.1&q=80&w=400",
    },
    {
      name: "Nat Reynolds",
      title: "Worldwide Partner",
      imageUrl:
        "https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/20b72dd9d347529c80882425/happy-man-with-long-thick-ginger-beard-has-friendly-smile_273609-16616.jpg?version=",
      hoverImageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGhhcHB5JTIwbWFufGVufDB8fHx8MTY1Nzg2Mzc2NA&ixlib=rb-1.2.1&q=80&w=400",
    },
    
    {
      name: "Nat Reynolds",
      title: "Worldwide Partner",
      imageUrl:
        "https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/20b72dd9d347529c80882425/happy-man-with-long-thick-ginger-beard-has-friendly-smile_273609-16616.jpg?version=",
      hoverImageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGhhcHB5JTIwbWFufGVufDB8fHx8MTY1Nzg2Mzc2NA&ixlib=rb-1.2.1&q=80&w=400",
    },
    {
      name: "Nat Reynolds",
      title: "Worldwide Partner",
      imageUrl:
        "https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/20b72dd9d347529c80882425/happy-man-with-long-thick-ginger-beard-has-friendly-smile_273609-16616.jpg?version=",
      hoverImageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGhhcHB5JTIwbWFufGVufDB8fHx8MTY1Nzg2Mzc2NA&ixlib=rb-1.2.1&q=80&w=400",
    },
    {
      name: "Nat Reynolds",
      title: "Worldwide Partner",
      imageUrl:
        "https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/20b72dd9d347529c80882425/happy-man-with-long-thick-ginger-beard-has-friendly-smile_273609-16616.jpg?version=",
      hoverImageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGhhcHB5JTIwbWFufGVufDB8fHx8MTY1Nzg2Mzc2NA&ixlib=rb-1.2.1&q=80&w=400",
    },
    {
      name: "Nat Reynolds",
      title: "Worldwide Partner",
      imageUrl:
        "https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/20b72dd9d347529c80882425/happy-man-with-long-thick-ginger-beard-has-friendly-smile_273609-16616.jpg?version=",
      hoverImageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGhhcHB5JTIwbWFufGVufDB8fHx8MTY1Nzg2Mzc2NA&ixlib=rb-1.2.1&q=80&w=400",
    },
    {
      name: "adars",
      title: "Worldwide Partner",
      imageUrl:
        "https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/20b72dd9d347529c80882425/happy-man-with-long-thick-ginger-beard-has-friendly-smile_273609-16616.jpg?version=",
      hoverImageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGhhcHB5JTIwbWFufGVufDB8fHx8MTY1Nzg2Mzc2NA&ixlib=rb-1.2.1&q=80&w=400",
    }
  ],
  chassis: [
    {
      name: "Monica Pouli",
      title: "Creative Leader",
      imageUrl:
        "https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/bb4a3324cba15018a0c8e5ad/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?version=",
      hoverImageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGhhcHB5JTIwbWFufGVufDB8fHx8MTY1Nzg2Mzc2NA&ixlib=rb-1.2.1&q=80&w=400",
    },
  ],
};

const images = [
  "/images/carousel/teamcarousel/1.0.png",
  "/images/carousel/teamcarousel/1.0.png",
  "/images/carousel/teamcarousel/1.0.png",
];

const Teamcategories = () => {
  return (
  <div className=" h-full rounded-3xl bg-white w-[100%]  ">

    <TracingBeam 
    className="  px-6">

    {Object.keys(teamMembers).map((subGroup, index) => (
< div key={index} className="w-full h-full  mx-2 py-8 ">
  <h2 className="text-3xl font-bold text-start mb-8">
    {subGroup.toUpperCase()}
  </h2>
  <div
    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-6 sm:gap-8 md:gap-10 lg:gap-16 "
   
  >
    {teamMembers[subGroup].map((member, idx) => (
      <motion.div
        key={idx}
        className="group relative flex flex-col items-center p-4 bg-transparent rounded-lg animate__animated animate__fadeInUp"
        style={{
          animationDuration: "1500ms",
          animationDelay: `${500 + idx * 250}ms`,
        }}
      >
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mb-4 transform transition-transform duration-300 group-hover:scale-105">
          <img
            alt={member.name}
            className="rounded-lg w-full h-full object-cover"
            src={member.imageUrl}
          />
          <img
            alt={member.name}
            className="rounded-lg w-full h-full object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            src={member.hoverImageUrl}
          />
        </div>
        <h5 className="text-center text-lg font-bold sm:text-xl">
          {member.name}
        </h5>
        <h6 className="text-center text-sm text-gray-600 sm:text-md">
          {member.title}
        </h6>
      </motion.div>
    ))}
  </div>
</div>
))}

    </TracingBeam>
    </div>
  );
  };

 function TabsDemo() {
    const tabs = [
      {
        title: "7.0",
        value: "product",
        content: (
          <div className="p-2 bg-purple-500 rounded-3xl ">
            <Teamcategories />
          </div>
        ),
      },
      {
        title: "6.0",
        value: "services",
        content: (
          <div className="p-2 bg-purple-500 rounded-3xl ">
            <Teamcategories />
          </div>
        ),
      },
      {
        title: "5.0",
        value: "playground",
        content: (
          <div className="p-2 bg-purple-500 rounded-3xl ">

            <Teamcategories />
          </div>
        ),
      },
      {
        title: "4.0",
        value: "content",
        content: (
          <div className="p-2 bg-purple-500 rounded-3xl ">

            <Teamcategories />
          </div>
        ),
      },
      {
        title: "3.0",
        value: "3.0",
        content: (
          <div className="p-2 bg-purple-500 rounded-3xl ">

            <Teamcategories />
          </div>
        ),
      },
      {
        title: "2.0",
        value: "3",
        content: (
          <div className="p-2 bg-purple-500 rounded-3xl ">
             
            <Teamcategories />
          </div>
        ),
      },
      {
        title: "1.0",
        value: "1",
        content: (
          <div className="p-2 bg-purple-500 rounded-3xl ">
            <Teamcategories />
          </div>
        ),
      },
    ];
   
    return (
    <div className="h-full [perspective:1000px] relative b flex flex-col  mx-auto w-full  items-center justify-center mt-24 lg:mt-4 ">
         <Tabs tabs={tabs} />
      
      </div>
    );
  }
function TeamPage() {

 
 

  return (

    < >
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      {/* <TracingBeamDemo /> */}
      {/* Image display section */}
      <ImagesSlider className=" h-[40vh] lg:h-[100vh] w-full overflow-hidden" images={images}>
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            Solecthon
          </motion.p>
          <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
            <span>Join now →</span>
            <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </button>
        </motion.div>
      </ImagesSlider>

      {/* The Team Section */}
    
    {/* <div ref={containerRef}  onScroll={showvalue}
      className="overflow-scroll h-24 w-24  grid grid-rows-1 grid-flow-col ">

    <div className="w-[300px] bg-pink-500 h-32">
    hello world 
    </div>
    <div className="w-[300px] bg-pink-500 h-32">
    hello world 
    </div>
    <div className="w-[300px] bg-blue-500 h-32">
    hello world 2
    </div>
    <div className="w-[300px] bg-green-500 h-32">
    hello world 3
    </div>
    <div className="w-[300px] bg-gray-500 h-32 ">end

    </div>
    </div> */}
    <div className=" h-screen " >
      <TabsDemo />
      </div>
    </div>
    </>
  );
}

export default TeamPage;
