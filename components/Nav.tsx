import React, { useState } from "react";
import logo from "../public/kssif_Logo.png";
import profileIcon from "../public/kssif_Logo.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["Home", "About Us", "Services", "Contact Us", "Donate"];

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <img src="/kssif_Logo.png" alt="Logo" className="h-10" />
        <div className="hidden md:flex space-x-4 items-center">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
              className="hover:text-orange-500 md:text-sm"
            >
              {link}
            </a>
          ))}
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-700 text-white px-3 py-1 rounded"
          />
          <img
            src="/avatar.svg"
            alt="Profile"
            className="h-10 w-10 rounded-full"
          />
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <span className="text-xl">☰</span>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-900 space-y-2 py-4">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
              className="block text-center text-white hover:bg-gray-700 py-2"
            >
              {link}
            </a>
          ))}
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-700 text-white px-3 py-1 rounded block mx-auto"
          />
          <img
            src="/avatar.svg"
            alt="Profile"
            className="h-10 w-10 rounded-full block mx-auto my-2"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// type NavbarProps = {
//   logo: string;
//   profileIcon: string;
// };

// const Navbar: React.FC<NavbarProps> = ({ logo, profileIcon }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const links = ["Home", "About Us", "Services", "Contact Us", "Donate"];

//   return (
//     <nav className="bg-gray-800 text-white">
//       <div className="container mx-auto px-4 flex justify-between items-center h-16">
//         <img src={logo} alt="Logo" className="h-10" />
//         <div className="hidden md:flex space-x-6 items-center">
//           {links.map((link, idx) => (
//             <a key={idx} href={`#${link.toLowerCase().replace(/\s+/g, "")}`} className="hover:text-orange-500">
//               {link}
//             </a>
//           ))}
//           <input
//             type="text"
//             placeholder="Search"
//             className="bg-gray-700 text-white px-3 py-1 rounded"
//           />
//           <img src={profileIcon} alt="Profile" className="h-10 w-10 rounded-full" />
//         </div>
//         <button
//           className="md:hidden"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <span className="text-xl">☰</span>
//         </button>
//       </div>
//       {isOpen && (
//         <div className="md:hidden bg-gray-900 space-y-2 py-4">
//           {links.map((link, idx) => (
//             <a
//               key={idx}
//               href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
//               className="block text-center text-white hover:bg-gray-700 py-2"
//             >
//               {link}
//             </a>
//           ))}
//           <input
//             type="text"
//             placeholder="Search"
//             className="bg-gray-700 text-white px-3 py-1 rounded block mx-auto"
//           />
//           <img
//             src={profileIcon}
//             alt="Profile"
//             className="h-10 w-10 rounded-full block mx-auto my-2"
//           />
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
