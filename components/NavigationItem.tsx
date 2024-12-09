import React from "react";

// Define the props type for NavigationItem
interface NavigationItemProps {
  text: string; // The displayed text of the navigation item
  href?: string; // Optional link for the navigation item
}

const NavigationItem: React.FC<NavigationItemProps> = ({ text, href = "#" }) => {
  return (
    <li className="text-sm tracking-wide leading-5 text-black list-none">
      <a
        href={href}
        className="text-black hover:text-gray-700 font-medium transition-colors duration-200"
        aria-label={`Navigate to ${text}`}
      >
        {text}
      </a>
    </li>
  );
};

export default NavigationItem;
