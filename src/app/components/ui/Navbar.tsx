// src/app/components/Navbr.tsx

"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/teams",
    name: "Teams",
  },
  {
    path: "/guestbook",
    name: "Guestbook",
  },
  {
    path: "/writing",
    name: "Writing",
  },
];

export default function NavBar() {
  let pathname = usePathname() || "/";

  if (pathname.includes("/writing/")) {
    pathname = "/writing";
  }

  const [hoveredPath, setHoveredPath] = useState(pathname);

  return (
     
    <div className=" overflow-hidden py-2 px-2 w-full absolute top-0 z-[50]  rounded-full ">
      <nav className="flex gap-2 relative justify-start  z-[100]  mx-2 my-1 ">
        <div className="border-2 rounded-full flex  p-1   justify-evenly  items-center  border-yellow -z-20 bg-white">

       
        <img src="images/onlyLogoreal.png" className="h-10 transform transition-transform duration-300 ease-in-out " alt="logo" />

        
       
       
         
        <div className="flex justify-end items-center w-full">

        {navItems.map((item, index) => {
          const isActive = item.path === pathname;
          
          return (
            <Link
              key={item.path}
              className={`px-4 py-1 z- text-md lg:text-base font-sans relative no-underline transition duration-150 ease-out hover:ease-in ${
                isActive ? "text-black" : "text-black"
              }`}
              data-active={isActive}
              href={item.path}
              onMouseOver={() => setHoveredPath(item.path)}
              onMouseLeave={() => setHoveredPath(pathname)}
              >
              <span>{item.name}</span>
              {item.path === hoveredPath && (
                <motion.div
                  className="absolute bottom-0 left-0 h-full  bg-yellow rounded-full -z-10"
                  layoutId="navbar"
                  aria-hidden="true"
                  style={{
                    width: "100%",
                  }}
                  transition={{
                    type: "spring",
                    bounce: 0.25,
                    stiffness: 130,
                    damping: 9,
                    duration: 0.3,
                  }}
                />
              )}
            </Link>
          );
        })}
        </div>
        </div>
      </nav>
    </div>
  );
}
