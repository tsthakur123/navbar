"use client"
import Navbar from "@/components/Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";

export default function Home() {
  // State to manage dark mode
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Effect to toggle dark mode class on the document root
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]); // Dependency array to re-run effect when isDarkMode changes

  useGSAP(
    () => (
      // Navbar animation
      gsap.from(".nav", {
        y: "100%",
        opacity: "0",
        duration: 0.4,
        stagger: 0.1,
        ease: "expo.in",
      }),
      gsap.from(".reveal", {
        opacity: 0,
        scale: 0,
        duration: 0.7,
        stagger: 0.2,
        ease: "circ.out",
      })
    )
  );
  return (
    <div className="w-full h-screen">
      {/* Navbar component */}
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </div>
  );
}
