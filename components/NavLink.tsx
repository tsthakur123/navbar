"use client";
import gsap from "gsap";
import Link from "next/link";
import React, { useRef } from "react";

// Define the types of props that NavLink will receive
interface NavProps {
  title: string; // The text to display for the navigation link
  link: string;  // The URL or fragment identifier for the navigation link
  isDarkMode: boolean; // State indicating if dark mode is enabled
}

// NavLink component for individual navigation items
const NavLink: React.FC<NavProps> = ({ title, link, isDarkMode }) => {
  // Reference to the line element for animation
  const lineRef = useRef<HTMLDivElement | null>(null);

  // Handle mouse enter event for the link
  const handleMouseEnter = () => {
    if (lineRef.current) {
      gsap.to(lineRef.current, {
        width: "100%", // Animate width to 100%
        duration: 0.1, // Duration of animation
        ease: "power2.out", // Easing function
      });
    }
  };

  // Handle mouse leave event for the link
  const handleMouseLeave = () => {
    if (lineRef.current) {
      gsap.to(lineRef.current, {
        width: "0%", // Animate width back to 0%
        duration: 0.1, // Duration of animation
        ease: "power2.out", // Easing function
      });
    }
  };

  return (
    <div className="nav flex items-center space-x-8">
      <div
        className="relative"
        onMouseEnter={handleMouseEnter} // Apply animation on mouse enter
        onMouseLeave={handleMouseLeave} // Revert animation on mouse leave
      >
        <Link
          href={link}
          className={`relative ${isDarkMode ? 'text-gray-300' : 'text-gray-800'} hover:text-[#57B6FE]`}
        >
          {title}
        </Link>
        {/* Line element for the underline effect */}
        <div
          ref={lineRef} // Attach the ref for GSAP animation
          id="bLine"
          className="absolute bottom-0 left-0 h-[1px] bg-[#726BFF] transition-all"
        ></div>
      </div>
    </div>
  );
};

export default NavLink;
