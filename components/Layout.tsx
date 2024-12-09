import React from "react";

// Button component with type definitions for props
interface ButtonProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ href, className = "", children }) => (
  <a
    href={href}
    className={`inline-flex items-center py-2 sm:py-3 font-semibold transition duration-500 ease-in-out transform px-6 sm:px-8 text-sm sm:text-md rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 ${className}`}
  >
    <span>{children}</span>
  </a>
);

const Main: React.FC = () => {
  return (
    <section className="text-gray-600 body-font sm:mt-6">
      <div className="flex items-center justify-center min-h-screen w-full">
        <div className="w-full max-w-5xl pt-24 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            {/* Text and Buttons Section */}
            <div className="text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                Website is Under Construction
              </h1>
              <div className="mt-6 flex flex-col md:flex-row gap-2 items-center md:justify-start sm:space-y-4 md:space-x-6 md:space-y-0">
                {/* Home Button */}
                <Button
                  href="/"
                  className="text-black bg-white hover:text-white hover:bg-transparent hover:border hover:border-white"
                >
                  Home
                </Button>

                {/* Contact Us Button - Yellow and Outlined */}
                <Button
                  href="/"
                  className="text-yellow-500 border border-yellow-500 hover:bg-yellow-500 hover:text-black"
                >
                  Contact Us
                </Button>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex justify-center items-center mt-6 sm:mt-0">
              <div className="bg-[url('/constPath.svg')] bg-cover bg-center w-full h-80 sm:h-auto">
                <img
                  src="construction.svg"
                  alt="Under Construction"
                  className="w-full h-auto object-contain sm:w-[80%] md:w-auto md:h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
