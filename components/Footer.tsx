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
      <div className="max-w-5xl mx-auto divide-y divide-gray-900 px-4 sm:px-6 md:px-8">
        <ul className="text-sm font-medium grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-y-10">
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

        <div className="flex justify-center items-center flex-col-reverse pt-5 mt-4 pb-4 border-t lg:flex-row bg-top border-black">
          <ul className="flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-6 sm:flex-row">
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
          <p className="text-md mx-auto md:mx-4 text-gray-200 hover:text-white transition-colors duration-300 font-light tracking-tight">
            © 2024 Cre8tif Technologies.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
