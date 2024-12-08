import Head from "next/head";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Kingdom Star Sports International Foundation</title>
        <meta
          name="description"
          content="Welcome to Kingdom Star Sports International Foundation, where faith meets sports and purpose meets action."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
