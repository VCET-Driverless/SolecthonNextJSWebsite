"use client";
import "./globals.css";
import NavBar from "./components/ui/Navbar";
import {Providers} from "./providers";

import { useState, useEffect } from 'react';
import Loading from "./components/LoadingScreen/Loading";  // Your custom loading screen component
// import './components/LoadingScreen/Loading.module.css';  // Global styles (optional)
import { usePathname } from 'next/navigation';





export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true); // Set loading screen to true when path changes

    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading screen to false after a delay (optional)
    },1000); // Adjust the delay if you need

    return () => clearTimeout(timer); // Clean up the timer
  }, [pathname]);  // Trigger effect on path change
  return (
    <>
    <html lang="en" >
    
      <body className="bg-[#f7f3ea] ">
            {isLoading && <Loading />} {/* Show loading screen when loading */}
          <Providers>
      {/* <BackgroundBeams
      /> */}
          <NavBar />
          {children}
        </Providers>
      
       
      </body>
    </html>
    </>
  );
}
