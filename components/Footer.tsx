import React from "react";

interface LinkItem {
  title: string;
  items: string[];
  isAnchor?: boolean;
}

const Footer: React.FC = () => {
  const links: LinkItem[] = [
    {
      title: "Contact",
      items: [
        "A 16, Flat 2, Aso House Estate, Airport Road, Abuja, Nigeria.",
        "07082383432, 09077720905",
      ],
    },
    {
      title: "Quick Links",
      items: ["FAQs", "Home", "Contact Us", "Donate"],
      isAnchor: true,
    },
    {
      title: "Connect",
      items: ["Twitter", "Facebook", "Instagram", "Youtube"],
    },
  ];

  const footerLinks: string[] = [
    "Terms of Service",
    "Privacy Policy",
    "Ad Choices",
    "Cookie Policy",
    "Partners",
  ];

  return (
    <footer className="pb-4 text-gray-200 pt-8 text-center">
      <div className="max-w-7xl mx-auto divide-y divide-gray-700 px-4 sm:px-6 lg:px-8">
        <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-left">
          {links.map(({ title, items, isAnchor }, index) => (
            <li key={index} className="space-y-4">
              <h2 className="text-xl font-semibold tracking-wide text-white">
                {title}
              </h2>
              <ul className="space-y-2 text-sm font-light">
                {items.map((item, idx) =>
                  isAnchor ? (
                    <li key={idx}>
                      <a
                        href="/"
                        className="hover:text-white transition-colors duration-200"
                      >
                        {item}
                      </a>
                    </li>
                  ) : (
                    <li key={idx} className="transition-colors duration-200">
                      {item}
                    </li>
                  )
                )}
              </ul>
            </li>
          ))}
        </ul>

        {/* <div className="flex flex-col-reverse justify-between pt-6 mt-8 border-t border-gray-600 lg:flex-row">
          <ul className="flex flex-wrap justify-center space-y-2 lg:space-y-0 lg:space-x-5">
            {footerLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href="/"
                  className="text-sm text-gray-200 hover:text-white transition-colors duration-300 font-light"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-200 hover:text-white transition-colors duration-300 font-light tracking-tight mt-4 lg:mt-0">
            © 2024 Cre8tif Technologies.
          </p>
        </div> */}
        <div className="flex flex-col-reverse justify-between pt-6 mt-8 border-t border-gray-600 lg:flex-row">
          {/* <ul className="flex flex-wrap justify-center md:justify-center lg:justify-start space-y-2 lg:space-y-0 lg:space-x-5">
            {footerLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href="/"
                  className="text-sm text-gray-200 hover:text-white transition-colors duration-300 font-light"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul> */}
          <p className="text-sm text-gray-200 hover:text-white transition-colors duration-300 font-light tracking-tight  lg:mt-0">
            © 2024 Cre8tif Technologies.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
