import React from "react";

const Footer: React.FC = () => {
  const links = [
    {
      title: "Contact",
      items: [
        "A 16, Flat 2, Aso House Estate, Airport Road, Abuja, Nigeria.",
        "07082383432, 09077720905",
      ],
    },
    { title: "Quick Links", items: ["FAQs", "Home", "Contact Us", "Donate"] },
    {
      title: "Products",
      items: ["Hosting", "Domains", "Security", "SSL"],
      isAnchor: true,
    },
    {
      title: "Connect",
      items: ["Twitter", "Facebook", "Instagram", "Youtube"],
    },
  ];

  const footerLinks = [
    "Terms of Service",
    "Privacy Policy",
    "Ad Choices",
    "Cookie Policy",
    "Partners",
  ];

  return (
    <footer className="pb-4 text-gray-200 pt-8 text-center">
      <div className="max-w-5xl mx-auto divide-y divide-gray-900 px-4 sm:px-6 md:px-8">
        <ul className="text-sm font-medium grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10">
          {links.map(({ title, items, isAnchor }, index) => (
            <li key={index} className="space-y-5 row-span-2">
              <h2 className="text-2xl tracking-wide text-white">{title}</h2>
              <ul className="space-y-4 font-light">
                {items.map((item, idx) =>
                  isAnchor ? (
                    <li key={idx}>
                      <a
                        className="hover:text-white transition-colors duration-200 text-xl"
                        href="/"
                      >
                        {item}
                      </a>
                    </li>
                  ) : (
                    <li
                      key={idx}
                      className="hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </li>
                  )
                )}
              </ul>
            </li>
          ))}
        </ul>

        <div className="flex flex-col-reverse justify-between pt-5 pb-4 border-t lg:flex-row bg-top border-black">
          <ul className="flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            {footerLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href="/"
                  className="text-md text-gray-200 hover:text-white transition-colors duration-300 font-light"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-md text-gray-200 hover:text-white transition-colors duration-300 font-light tracking-tight">
            © 2021 Company Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
