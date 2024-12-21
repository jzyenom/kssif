import React, { useState, useEffect } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

// Reusable Search Input Component
const SearchInput: React.FC<{ onSearch: (query: string) => void }> = ({
  onSearch,
}) => {
  return (
    <input
      type="text"
      placeholder="Search"
      className="bg-purple-100 text-black px-3 py-2 rounded w-full md:w-80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-600 hover:ring-4 hover:ring-purple-500"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = ["Home", "About Us", "Services", "Contact Us", "Donate"];

  const handleSearch = (query: string) => {
    // Implement search logic here
    console.log("Search query:", query);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 shadow-md transition-all duration-300 ${
        isScrolled
          ? "bg-white/50 backdrop-blur-md text-black"
          : "bg-black text-white"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <img src="/kssif_Logo.png" alt="Logo" className="h-10" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center mx-auto">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
              className="hover:text-white text-sm lg:text-base xl:text-lg"
            >
              {link}
            </a>
          ))}
          {/* Search Input and Profile Icon */}
          <div className="flex items-center ml-32 space-x-6">
            <SearchInput onSearch={handleSearch} />
            <img
              src="/avatar.svg"
              alt="Profile"
              className="h-8 w-8 rounded-full"
            />
          </div>
        </div>

        {/* Avatar and Search Icon for Small Screens */}
        <div className="flex items-center space-x-4 md:hidden">
          <img
            src="/avatar.svg"
            alt="Profile"
            className="h-10 w-10 rounded-full"
          />
          <button
            onClick={() => setShowSearchModal(true)}
            className="bg-purple-500 text-white p-2 rounded-full"
          >
            <FaSearch className="text-lg" />
          </button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <span className="text-xl">☰</span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/75 space-y-2 py-4">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
              className="block text-center text-white hover:bg-gray-700 py-2"
            >
              {link}
            </a>
          ))}
        </div>
      )}

      {/* Search Modal */}
      {showSearchModal && (
        <div
          className={`fixed inset-0 bg-black/70 flex items-center justify-center z-50 transition-opacity duration-500 ${
            showSearchModal ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative bg-white flex flex-col items-center p-6 mb-6 rounded shadow-lg w-11/12 max-w-md transform transition-transform duration-500 scale-100">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
              onClick={() => setShowSearchModal(false)}
            >
              <FaTimes className="text-2xl" />
            </button>
            <div className="w-full my-10">
              <SearchInput onSearch={handleSearch} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;

// import React, { useState, useEffect } from "react";

// const Nav: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const links = ["Home", "About Us", "Services", "Contact Us", "Donate"];

//   return (
//     <nav
//       className={`fixed top-0 w-full z-50 shadow-md transition-all duration-300 ${
//         isScrolled
//           ? "bg-white/50 backdrop-blur-md text-black"
//           : "bg-black text-white"
//       }`}
//     >
//       <div className="container mx-auto px-4 flex justify-between items-center h-16">
//         {/* Logo */}
//         <img src="/kssif_Logo.png" alt="Logo" className="h-10" />

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex space-x-4 items-center">
//           {links.map((link, idx) => (
//             <a
//               key={idx}
//               href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
//               className="hover:text-white md:text-sm"
//             >
//               {link}
//             </a>
//           ))}
//           <input
//             type="text"
//             placeholder="Search"
//             className="bg-gray-700 text-white px-3 py-1 rounded"
//           />
//           <img
//             src="/avatar.svg"
//             alt="Profile"
//             className="h-10 w-10 rounded-full"
//           />
//         </div>

//         {/* Mobile Navigation Toggle */}
//         <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
//           <span className="text-xl">☰</span>
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="md:hidden bg-black/75 space-y-2 py-4">
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
//             src="/avatar.svg"
//             alt="Profile"
//             className="h-10 w-10 rounded-full block mx-auto my-2"
//           />
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Nav;
