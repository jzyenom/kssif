// "use client";

// import { useState, useEffect } from "react";
// import Navigation from "@/components/Navigation"; // Importing the Navigation component

// const Header: React.FC = () => {
//   const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
//   const [isScrolled, setIsScrolled] = useState<boolean>(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 w-full z-50 shadow-md sm:mb-4 transition-all duration-300 ${
//         isScrolled ? "bg-white/50 backdrop-blur-md" : "bg-white"
//       }`}
//     >
//       <div className="w-full mx-auto flex flex-wrap p-3 flex-col md:flex-row">
//         {/* Logo Section */}
//         <div className="flex flex-row items-center justify-between p-3 md:p-1">
//           <a href="/" className="flex mb-4 md:mb-0">
//             <img
//               src="kssif_Logo.png"
//               className="w-12"
//               alt="KSSIF Logo"
//               aria-label="KSSIF Logo"
//             />
//           </a>
//           {/* Mobile Menu Toggle Button */}
//           <button
//             className="text-black cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none content-end ml-auto"
//             type="button"
//             aria-label={
//               navbarOpen ? "Close navigation menu" : "Open navigation menu"
//             }
//             onClick={() => setNavbarOpen(!navbarOpen)}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="black"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="feather feather-menu"
//             >
//               <line x1="3" y1="12" x2="21" y2="12"></line>
//               <line x1="3" y1="6" x2="21" y2="6"></line>
//               <line x1="3" y1="18" x2="21" y2="18"></line>
//             </svg>
//           </button>
//         </div>

//         {/* Navigation Links */}
//         <div
//           className={`md:flex flex-grow items-center ${
//             navbarOpen ? "flex" : "hidden"
//           }`}
//         >
//           <nav className="md:ml-auto md:mr-auto text-base pt-1 md:pl-14 pl-1 flex flex-wrap items-center md:text-base text-lg md:justify-center justify-items-start">
//             <Navigation />
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
