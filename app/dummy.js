// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               app/page.js
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }

// pages/index.js
import Head from "next/head";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";

export default function Home() {
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
      {/* <main className="bg-gray-50 text-gray-800">
        <header className="bg-blue-900 text-white py-8 text-center">
          <h1 className="text-4xl font-bold">Kingdom Star Sports International Foundation</h1>
          <p className="mt-4 text-lg">
            Combining faith, sports, and purpose to inspire transformation.
          </p>
        </header>

        <section className="px-6 py-10 max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-6">Welcome Address</h2>
          <p className="leading-relaxed text-lg mb-6">
            Welcome to Kingdom Star Sports International Foundation, a divine commission
            established to use the transformative power of sports to inspire change, nurture talent,
            and promote the Kingdom of God. It is my pleasure to introduce you to a platform where
            faith meets sports, and purpose meets action.
          </p>
          <p className="leading-relaxed text-lg mb-6">
            Since our humble beginning on the 4th of April 2003, this foundation has been driven by
            a single, unwavering vision: to share the gospel of the Kingdom of God with sportsmen
            and women around the world. Through His Word, we equip them to stand out as stars
            and lights in their clubs, organisations, and communities, transforming the world of sports
            as reformers of their time.
          </p>
          <p className="leading-relaxed text-lg mb-6">
            As you explore our profile, I invite you to join us in this divine mission. Whether as a
            participant, partner, or supporter, your involvement will help us fulfill our mandate of
            discovering stars, empowering dreams, and spreading the love of God through sports.
          </p>
          <p className="font-semibold text-lg text-center mt-4">
            Evangelist Solomon Omonokhua <br /> Founder/President
          </p>
        </section>

        <section className="bg-gray-100 py-10 px-6">
          <h2 className="text-3xl font-semibold text-center mb-6">About Us</h2>
          <p className="leading-relaxed text-lg mb-6 max-w-5xl mx-auto">
            Kingdom Star Sports International Foundation is a visionary commission with a divine
            mandate to discover and nurture stars in the world of sports, empowering them to
            become reformers in our time. We unite individuals from diverse professions to promote
            the values of God's kingdom and transform the culture through sports.
          </p>
        </section>

        <section className="px-6 py-10 max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-6">Our Vision & Mission</h2>
          <ul className="list-disc pl-5 text-lg space-y-4">
            <li>
              <strong>Vision:</strong> To reach out to professionals, sports enthusiasts, and youths
              globally through sports with the message of hope.
            </li>
            <li>
              <strong>Mission:</strong> To reconcile people back to God and bring light into the
              sporting world.
            </li>
          </ul>
        </section>

        <section className="bg-gray-100 py-10 px-6">
          <h2 className="text-3xl font-semibold text-center mb-6">How You Can Support</h2>
          <ul className="list-disc pl-5 text-lg space-y-4">
            <li>Financial support for outreach programs and evangelism materials</li>
            <li>Provision of sports training kits for underprivileged youth</li>
            <li>
              Sponsoring seasonal sports competitions for talent scouting and development
            </li>
            <li>Providing scholarships and resources for education and training</li>
          </ul>
        </section>

        <footer className="bg-blue-900 text-white py-6 text-center">
          <p>
            <strong>Contact Us:</strong> A 16, Flat 2, Aso House Estate, Airport Road, Abuja, Nigeria
          </p>
          <p>Phone: 07082383432 | 09077720905</p>
          <p>
            <strong>Bank Details:</strong> Zenith Bank | Account Name: Kingdom Star Sports Int’l
            Foundation | Account No: 1220823660
          </p>
          <p className="mt-4">&copy; 2024 Kingdom Star Sports International Foundation</p>
        </footer>
      </main> */}

      <Header />
      <Layout />
      <Footer />
    </>
  );
}
