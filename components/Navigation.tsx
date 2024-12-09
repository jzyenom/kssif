import React from "react";
import NavigationItem from "./NavigationItem";

// Define the type for navigation items
interface NavItem {
  text: "Home" | "About us" | "Services" | "Donate" | "Contact us";
  href: string;
}

// Define the navigation items with corresponding links
const navItems: NavItem[] = [
  { text: "Home", href: "/" },
  { text: "About us", href: "/about" },
  { text: "Services", href: "/services" },
  { text: "Donate", href: "/donate" },
  { text: "Contact us", href: "/contact" },
];

const Navigation: React.FC = () => {
  return (
    <nav className="flex flex-auto gap-8 my-auto">
      {navItems.map(({ text, href }) => (
        <NavigationItem key={text} text={text} href={href} />
      ))}
    </nav>
  );
};

export default Navigation;
