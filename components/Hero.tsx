
const Hero: React.FC = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center text-center md:text-left">
        {/* Left Side Content */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl font-extrabold leading-tight mb-6">
            Faith, Sports, and{" "}
            <span className="text-blue-400">Purpose in Action</span>
          </h1>
          <p className="text-lg mb-6">
            Welcome to Kingdom Star Sports International Foundation, a divine
            commission established to use the transformative power of sports to
            inspire change, nurture talent, and promote the Kingdom of God. Join
            us in our journey where faith meets sports, and purpose meets
            action.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded">
            See Upcoming Events
          </button>
        </div>
        {/* Right Side Image */}
        {/* <div className="md:w-1/2">
          <img
            src="/path-to-hero-image.jpg" // Replace with the actual path to the image
            alt="Faith and Sports"
            className="rounded-lg shadow-lg w-full"
          />
        </div> */}
<div className="md:w-1/2">
        <div className="hero-container md:ml-10">
      <img
        src="/path-to-hero-image.jpg" // Replace with the actual path to the image
        alt="Faith and Sports"
      />
    </div>
    </div>
      </div>
    </section>
  );
};

export default Hero;


