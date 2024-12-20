// import React from 'react';

// type Event = {
//   date: string;
//   title: string;
// };

// const UpcomingEvents: React.FC = () => {
//   const events: Event[] = [
//     { date: '2025', title: 'Celebrity Launch Magazine' },
//     { date: '2025', title: 'Another Event' },
//     { date: '2025', title: 'Another Third Event' },
//     { date: '2025', title: 'Another Fourth Event' },
//   ];

//   return (
//     <section className="py-10 bg-white">
//       <div className="container mx-auto">
//       <h2 className="text-4xl font-light mb-2 text-blue-400">2025</h2>
//       <div className="container mx-auto flex flex-col md:flex-row items-center text-center md:text-left">
//         {/* Left Side Content */}
//         <div className="md:w-1/2 mb-8 md:mb-0">
//           <h1 className="text-5xl font-extrabold leading-tight mb-6">
//             <span className="text-blue-400">Upcoming Events</span>
//           </h1>
//         </div>
//         {/* Right Side Image */}

//       <div className="md:w-1/2">
//         <div className="float-end">
//             <button className="bg-blue-500 hover:bg-blue-600 text-white font-light px-6 py-3 rounded-3xl">
//               See Upcoming Events Here <span></span>
//             </button>
//             {/* <img
//               src="/path-to-hero-image.jpg" // Replace with the actual path to the image
//               alt="Faith and Sports"
//             /> */}
//         </div>
//       </div>

//       </div>
//         <div className="grid grid-cols-1 sm:grid-cols-4 gap-0">
//         {events.map((event, idx) => (
//           <div key={idx} className="container event-bg">
//             <div className="event-image mx-auto mt-4">

//             </div>
//             <div className="text-left pl-4 pt-4">
//             <p className="text-l font-bold">{event.title}</p>
//             <p className="text-gray-600">{event.date}</p>
//             </div>
//           </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default UpcomingEvents;
import React from 'react';

type Event = {
  date: string;
  title: string;
};

const UpcomingEvents: React.FC = () => {
  const events: Event[] = [
    { date: '2025', title: 'Celebrity Launch Magazine' },
    { date: '2025', title: 'Another Event' },
    { date: '2025', title: 'Another Third Event' },
    { date: '2025', title: 'Another Fourth Event' },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 py-6">
     
               {/* Section Header */}
        <div className="text-center lg:text-left mb-8">
          <h2 className="text-4xl font-light mb-2 text-blue-400">2025</h2>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            <span className="text-blue-400">Upcoming Events</span>
          </h1>
        </div>

        {/* Button */}
        <div className="mb-8 text-center lg:text-right">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-full transition">
            See All Events Here
          </button>
        </div>


        </div>
        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="event-bg mx-auto flex flex-col items-center justify-center shadow-md hover:shadow-lg transition"
            >
              <div className="event-image mb-4"></div>
              <div className="text-center">
                <p className="text-lg font-semibold mb-2 text-gray-800">{event.title}</p>
                <p className="text-sm text-gray-600">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;


{
  /* <section className="py-10 bg-gray-100">
<div className="container mx-auto text-center">
  <h2 className="text-2xl font-bold mb-6">Our Partners</h2>
  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
    {Array(4)
      .fill(null)
      .map((_, idx) => (
        <div key={idx} className="w-40"></div>
      ))}
  </div>
</div>
</section> */
}
