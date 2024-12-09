"use client";
import Header from "@/components/Header"; // Ensure this is correctly exported and implemented
import Layout from "@/components/Layout"; // Ensure this is correctly exported and implemented



const Home: React.FC = () => {
  return (
    <>
      {/* Applying SEO configurations with type safety */}

      {/* Ensure that Header and Layout are typed correctly */}
      <Header />
      <Layout />
    </>
  );
};

export default Home;
