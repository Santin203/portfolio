const Hero = () => {
    return (
      <section className="h-screen bg-gradient-to-r from-indigo-900 via-teal-700 to-teal-500 text-white flex items-center justify-center text-center">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold">
            Hi, I'm Santiago
          </h1>
          <p className="mt-4 text-lg md:text-2xl">
            A passionate developer building impactful software solutions
          </p>
          <a
            href="#about"
            className="inline-block mt-6 px-6 py-3 bg-white text-teal-600 font-bold rounded-lg hover:bg-gray-100 transition"
          >
            Learn More
          </a>
        </div>
      </section>
    );
  };
  
  export default Hero;
  