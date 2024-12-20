"use client";
import React from 'react'
import Nav from "@/components/Nav"; 
import Hero from "@/components/Hero"; 
import Partners from "@/components/Partners";
import UpcomingEvents from "@/components/UpcomingEvents";
import LatestNews from "@/components/LatestNews"; 
import NewsLetter from "@/components/NewsLetter"; 
import Footer from "@/components/Footer"; 

const Home: React.FC = () => {
  return (
    <>
      {/* Applying SEO configurations with type safety */}

      {/* Ensure that Header and Layout are typed correctly */}
      <Nav />
      <Hero />
      <Partners />
      <UpcomingEvents />
      <LatestNews />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
