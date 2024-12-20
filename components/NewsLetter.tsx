
const Newsletter: React.FC = () => {
  //   return (
  //     <section className="py-10 bg-blue-500 text-white">
  //       <div className="container mx-auto text-center">
  //         <h2 className="text-2xl font-bold mb-6">Sign up to our newsletter</h2>
  //         <p className="mb-4">Receive the latest exclusive news, updates & offers straight to your inbox!</p>
  //         <form className="flex justify-center space-x-2">
  //           <input
  //             type="email"
  //             placeholder="Email address"
  //             className="px-4 py-2 rounded bg-white text-gray-800"
  //           />
  //           <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded text-white">Subscribe</button>
  //         </form>
  //       </div>
  //     </section>
  //   );
  // };
  {
    /* <section className="bg-gradient-to-r from-blue-800 to-blue-500 text-white py-20"> */
  }

  //   return (
  //     <section className="bg-gray-100 py-16">
  //       <div className="mx-auto  md:px-12 lg:px-24">
  //         {/* Signup Section */}
  //         <div className="bg-gradient-to-r from-gray-300 to-gray mb-12">
  //           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
  //             Sign up to our newsletter
  //           </h2>
  //           <p className="text-gray-600 text-lg md:text-xl">
  //             Receive the latest exclusive news, updates & offers straight to your
  //             inbox!
  //           </p>
  //           <form className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
  //             <input
  //               type="email"
  //               placeholder="Email address"
  //               className="w-full md:w-auto px-4 py-3 text-gray-800 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
  //             />
  //             <button
  //               type="submit"
  //               className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-all"
  //             >
  //               Subscribe
  //             </button>
  //           </form>
  //         </div>

  //         {/* Newsletter Section */}
  //         <div className="text-center">
  //           <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
  //             Newsletter
  //           </h3>
  //           <p className="text-gray-600 text-lg md:text-xl mb-6">
  //             Stay informed with our latest events, initiatives, and updates.
  //           </p>
  //           <a
  //             href="#"
  //             className="text-blue-500 hover:underline text-lg md:text-xl font-semibold"
  //           >
  //             See all events here
  //           </a>
  //         </div>
  //       </div>
  //     </section>
  //   );
  // };

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 lg:px-20">
        {/* Newsletter Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Sign up to our <span className="text-blue-500">Newsletter</span>
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Receive the latest exclusive news, updates & offers straight to your
            inbox!
          </p>
        </div>

        {/* Newsletter Form */}
        <div className="bg-white shadow-lg rounded-lg p-8 lg:flex lg:items-center lg:justify-between">
          <div className="lg:flex-1 lg:mr-8">
            <input
              type="email"
              placeholder="Email address"
              className="w-full lg:w-auto bg-gray-200 text-gray-800 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="mt-4 lg:mt-0 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
            Subscribe
          </button>
        </div>

        {/* Latest News Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800">Latest News</h3>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Single News Item */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">December 21, 2022</p>
                <h4 className="text-lg font-bold text-gray-800 mb-4">
                  Attention-Grabbing Marketing in a Noisy Market
                </h4>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-600 font-medium"
                >
                  Read
                </a>
              </div>
            </div>
            {/* Repeat news items as necessary */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
