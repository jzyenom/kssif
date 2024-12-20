import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="pb-4 text-gray-200 pt-8 text-center">
      <div className="max-w-5xl xl:max-w-5xl mx-auto divide-y divide-gray-900 px-4 sm:px-6 md:px-8">
        <ul className="text-sm font-medium sm:pb-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10">
          <li className="space-y-5 row-span-2">
            <h2 className="text-2xl tracking-wide text-white">Contact</h2>
              <ul className="space-y-4 font-light">
                <li className="hover:text-white transition-colors duration-200">
                    A 16, Flat 2, Aso House Estate, Airport Road, Abuja, Nigeria.
                </li>
                <li className="hover:text-white transition-colors duration-200">
                  07082383432, 09077720905
                </li>
              </ul>
          </li>

          <li className="space-y-5 row-span-2">
            <h2 className="text-2xl tracking-wide text-white">Quick links</h2>
            <ul className="space-y-4 font-light">
                <li className="hover:text-white transition-colors duration-200">
                  FAQs
                </li>
                <li className="hover:text-white transition-colors duration-200">
                  Home
                </li>
                <li className="hover:text-white transition-colors duration-200">
                  Contact Us
                </li>
                <li className="hover:text-white transition-colors duration-200">
                  Donate
                </li>
              </ul>
          </li>
          <li className="space-y-5 row-span-2">
            <h2 className="text-2xl tracking-wide text-white">Products</h2>
            <ul className="space-y-4">
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="/"
                >
                  Hosting
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="/"
                >
                  Domains
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="/"
                >
                  Security
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="/"
                >
                  SSL
                </a>
              </li>
            </ul>
          </li>
          <li className="space-y-5">
            <h2 className="text-2xl tracking-wide text-white">Connect</h2>
            <ul className="space-y-4">
            <ul className="space-y-4 font-light">
                <li className="hover:text-white transition-colors duration-200">
                  Twitter
                </li>
                <li className="hover:text-white transition-colors duration-200">
                  Facebook
                </li>
                <li className="hover:text-white transition-colors duration-200">
                  Instagram
                </li>
                <li className="hover:text-white transition-colors duration-200">
                  Youtube
                </li>
              </ul>
            </ul>
          </li>
        </ul>

        <div className="flex flex-col-reverse justify-between pt-5 pb-4 border-t lg:flex-row bg-top border-black">
          <ul className="flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="/"
                className="mx-auto text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-light"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-light"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-light"
              >
                Ad Choices
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-light"
              >
                Cookie Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-light"
              >
                Partners
              </a>
            </li>
          </ul>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <a
              href="/"
              className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-light tracking-tight"
            >
              © 2021 Company Inc.
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
