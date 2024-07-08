// src/app/layout.tsx
import "./globals.css";
import NavBar from "./components/Navbar";
import { BackgroundBeams } from "./components/ui/background-beams";
import {Providers} from "./providers";
export const metadata = {
  title: "Solecthon",
  description: "Solecthon Website Using Next Js with Next UI and Acternity UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <body className="bg-[#f7f3ea] ">
          <Providers>
      {/* <BackgroundBeams
      /> */}
          <NavBar />
          {children}
        </Providers>
      
       
      </body>
    </html>
  );
}
