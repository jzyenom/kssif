import React from "react";

const UnderConstruction: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-blue-900 text-white px-4">
      {/* Header Navigation */}
      <header className="w-full max-w-7xl flex justify-between items-center py-4 px-6 bg-white text-black shadow-md">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 bg-gray-300 rounded-full"></div>{" "}
          {/* Dummy Logo */}
          <span className="font-bold">Logo</span>
        </div>
        <nav className="flex space-x-6">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            About us
          </a>
          <a href="#" className="hover:underline">
            Services
          </a>
          <a href="#" className="hover:underline">
            Donate
          </a>
          <a href="#" className="hover:underline">
            Contact us
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
          <div className="h-8 w-8 bg-purple-400 rounded-full"></div>{" "}
          {/* Profile Icon */}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center text-center space-y-6">
        <h1 className="text-4xl font-bold text-white">
          Website is Under Construction
        </h1>
        <div className="flex space-x-4">
          <button className="px-6 py-2 bg-white text-black rounded-md font-medium hover:bg-gray-200">
            Homepage
          </button>
          <button className="px-6 py-2 bg-yellow-500 text-black rounded-md font-medium hover:bg-yellow-600">
            Contact Us
          </button>
        </div>
        <div className="relative mt-8">
          {/* Dummy Construction Illustration */}
          <div className="h-48 w-48 bg-gray-400 rounded-md"></div>
        </div>
      </main>
    </div>
  );
};

export default UnderConstruction;

