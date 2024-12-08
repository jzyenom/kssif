'use client'
import  {NextSeo}  from "next-seo";

export default function NotFound() {
  return (
    <>
      <NextSeo
        title="KSSIF - KINGDOM STARS SPORT INTERNATIONAL FOUNDATION"
        description="KSSIF - 404-Page"
        content="Welcome to Kingdom Star Sports International Foundation, where faith meets sports and purpose meets action."
        canonical="https://www.kssif.org"
        openGraph={{ 
          url: "https://www.kssif.org",
        }}
      />
      <div className="flex flex-col justify-center mx-auto mt-20 text-center max-w-2xl">
        {/* Page Header */}
        <h1 className="text-2xl mt-10 font-bold tracking-tight text-black md:text-5xl mb-4">
          Kingdom Stars Sport International Foundation
        </h1>

        {/* Animation and Centered Image in Faded Box */}
        <div className="flex items-center justify-center w-full">
          {/* Container Box with faded gray background */}
          <div className="flex items-center justify-center bg-gray-100 p-8 rounded-lg shadow-lg">
            <img
              src="/404.png"
              alt="404_image"
              className="animate-float w-24"
              width="100px"
              height="100px" // Adjust the size to your preference
            />
          </div>
        </div>

        {/* 404 Message */}
        <h2 className="text-3xl font-bold tracking-tight text-black md:text-5xl mt-10">
          404 – Unavailable
        </h2>
      </div>
    </>
  );
}
