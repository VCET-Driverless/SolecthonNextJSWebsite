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
    <div className=" overflow-hidden py-2 px-2 w-full absolute top-0 z-[100] bg-black/80 backdrop-blur-sm">
      <nav className="flex gap-2 relative justify-start w-full z-[100]  rounded-full">
        <div className="flex w-[120px] animate">

        <img src="/images/onlyLogoreal.png" className="w-15 h-10 rounded-full " alt="logo" />
      
        </div>
        <div className="flex justify-start items-center w-full ">
          <h2 className="font-sans font-normal text-2xl text-[#f4f0e3] text-center "> VCET SOLECTHON</h2>
        </div>
         
        <div className="flex justify-end items-center w-full">

        {navItems.map((item, index) => {
          const isActive = item.path === pathname;
          
          return (
            <Link
              key={item.path}
              className={`px-4 py-1  text-sm lg:text-base relative no-underline transition duration-150 ease-out hover:ease-in ${
                isActive ? "text-[#f4f0e3]" : "text-[#6291f7]"
              }`}
              data-active={isActive}
              href={item.path}
              onMouseOver={() => setHoveredPath(item.path)}
              onMouseLeave={() => setHoveredPath(pathname)}
              >
              <span>{item.name}</span>
              {item.path === hoveredPath && (
                <motion.div
                  className="absolute bottom-0 left-0 h-full bg-red-500 rounded-full -z-10"
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
      </nav>
    </div>
  );
}
