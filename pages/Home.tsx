// Tailwind CSS and TypeScript homepage layout based on the provided PDF

// Navbar.tsx
import React, { useState } from "react";

type NavbarProps = {
  logo: string;
  profileIcon: string;
};

const Navbar: React.FC<NavbarProps> = ({ logo, profileIcon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["Home", "About Us", "Services", "Contact Us", "Donate"];

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <img src={logo} alt="Logo" className="h-10" />
        <div className="hidden md:flex space-x-6 items-center">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
              className="hover:text-orange-500"
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
            src={profileIcon}
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
            src={profileIcon}
            alt="Profile"
            className="h-10 w-10 rounded-full block mx-auto my-2"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// Hero.tsx
import React from "react";

type HeroProps = {
  title: string;
  subtitle: string;
  buttonText: string;
};

const Hero: React.FC<HeroProps> = ({ title, subtitle, buttonText }) => {
  return (
    <section className="bg-black-500 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-xl mb-6">{subtitle}</p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default Hero;

// Partners.tsx
import React from "react";

const Partners: React.FC = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">Our Partners</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {Array(8)
            .fill(null)
            .map((_, idx) => (
              <img
                key={idx}
                src="https://via.placeholder.com/150"
                alt={`Partner {idx + 1}`}
                className="h-20 mx-auto"
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;

// UpcomingEvents.tsx
import React from "react";

type Event = {
  date: string;
  title: string;
};

const UpcomingEvents: React.FC = () => {
  const events: Event[] = [
    { date: "{2025}", title: "{Celebrity Launch Magazine}" },
    { date: "{2025}", title: "{Another Event}" },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
        <div className="space-y-4">
          {events.map((event, idx) => (
            <div key={idx} className="border-b pb-4">
              <p className="text-xl font-bold">{event.title}</p>
              <p className="text-gray-600">{event.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;

// LatestNews.tsx
import React from "react";

type News = {
  title: string;
  date: string;
};

const LatestNews: React.FC = () => {
  const news: News[] = [
    {
      title: "{Attention-Grabbing Marketing in a Noisy Market}",
      date: "{December 21, 2022}",
    },
  ];

  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">Latest News</h2>
        <div className="space-y-4">
          {news.map((item, idx) => (
            <div key={idx} className="border-b pb-4">
              <p className="text-xl font-bold">{item.title}</p>
              <p className="text-gray-600">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;

// Newsletter.tsx
import React from "react";

const Newsletter: React.FC = () => {
  return (
    <section className="py-10 bg-blue-500 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">Sign up to our newsletter</h2>
        <p className="mb-4">
          Receive the latest exclusive news, updates & offers straight to your
          inbox!
        </p>
        <form className="flex justify-center space-x-2">
          <input
            type="email"
            placeholder="{Email address}"
            className="px-4 py-2 rounded bg-white text-gray-800"
          />
          <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded text-white">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;

// App.tsx
import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Partners from "./Partners";
import UpcomingEvents from "./UpcomingEvents";
import LatestNews from "./LatestNews";
import Newsletter from "./Newsletter";

const App: React.FC = () => {
  return (
    <div>
      <Navbar
        logo="https://via.placeholder.com/100"
        profileIcon="https://via.placeholder.com/40"
      />
      <Hero
        title="{Faith, Sports, and Purpose in Action}"
        subtitle="{Welcome to Kingdom Star Sports International Foundation}"
        buttonText="{Learn More}"
      />
      <Partners />
      <UpcomingEvents />
      <LatestNews />
      <Newsletter />
    </div>
  );
};

export default App;
