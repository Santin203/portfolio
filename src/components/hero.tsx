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
          <div className="mt-6 space-x-4">
            <a
              href="#about"
              className="inline-block px-6 py-3 bg-white text-teal-600 font-bold rounded-lg hover:bg-gray-100 transition"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-teal-500 text-white font-bold rounded-lg border-2 border-white hover:bg-teal-400 transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  