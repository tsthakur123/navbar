import React from "react";
import NavLink from "./NavLink";

// Define the types of props that NavLinks will receive
interface NavProps {
  isDarkMode: boolean; // State indicating if dark mode is enabled
}

// NavLinks component to render a list of navigation links
const NavLinks: React.FC<NavProps> = ({ isDarkMode }) => {
  
  // Array of navigation links with title and URL
  const navLinks = [
    {
      id: 1,
      title: "Features",
      link: "#home",
    },
    {
      id: 2,
      title: "How It Works",
      link: "#about",
    },
    {
      id: 3,
      title: "Roadmap",
      link: "#services",
    },
    {
      id: 4,
      title: "API",
      link: "#testimonials",
    },
    {
      id: 5,
      title: "Price",
      link: "#contact",
    },
    {
      id: 6,
      title: "Models",
      link: "#contact",
    },
  ];

  return (
    <nav className="flex flex-wrap justify-center gap-4 md:gap-4">
      {/* Map through the navLinks array and render a NavLink component for each */}
      {navLinks.map((link) => (
        <NavLink
          isDarkMode={isDarkMode} // Pass dark mode state to NavLink
          key={link.id} // Unique key for each NavLink
          title={link.title} // Navigation link title
          link={link.link} // Navigation link URL
        />
      ))}
    </nav>
  );
};

export default NavLinks;
