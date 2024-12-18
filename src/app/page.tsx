import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Santiago's Portfolio</title>
        <meta name="description" content="Santiago Jiménez Casas Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-100 text-gray-800">
        {/* Hero Section */}
        <section className="h-screen bg-gradient-to-r from-indigo-500 to-purple-600 text-white flex items-center justify-center text-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold">
              Hi, I'm Santiago
            </h1>
            <p className="mt-4 text-lg md:text-2xl">
              A passionate developer building impactful software solutions
            </p>
            <a
              href="#about"
              className="inline-block mt-6 px-6 py-3 bg-white text-indigo-600 font-bold rounded-lg hover:bg-indigo-100"
            >
              Learn More
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6 md:px-20 bg-white">
          <h2 className="text-3xl font-bold text-center mb-6">About Me</h2>
          <p className="text-lg leading-7 text-center max-w-3xl mx-auto">
            I'm a Computer Science student at Texas Tech University Costa Rica
            with a strong background in web development, software engineering,
            and machine learning. I enjoy building projects that solve real-world
            problems while learning new technologies.
          </p>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-6 md:px-20 bg-gray-50">
          <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
            {["JavaScript", "React", "Next.js", "Tailwind CSS", "AWS", "Python", "C#", "Git"].map(
              (skill) => (
                <div
                  key={skill}
                  className="p-4 bg-white shadow-md rounded-lg hover:shadow-lg"
                >
                  {skill}
                </div>
              )
            )}
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 px-6 md:px-20 bg-white">
          <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Basket Tracking System", description: "Barcode-based tracking app" },
              { title: "ARK PS4 Server Setup", description: "Ubuntu-based multiplayer server" },
              { title: "Kaggle Competition", description: "Ranked X% in leaderboard" },
            ].map((project) => (
              <div
                key={project.title}
                className="p-6 bg-gray-100 shadow-md rounded-lg hover:shadow-lg"
              >
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="mt-2 text-gray-700">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-6 md:px-20 bg-gray-50">
          <h2 className="text-3xl font-bold text-center mb-6">Contact</h2>
          <div className="text-center">
            <p className="text-lg">
              Let's connect on{" "}
              <a
                href="https://www.linkedin.com/in/santiago-jimenez-casas/"
                className="text-indigo-600 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>{" "}
              or{" "}
              <a
                href="mailto:youremail@example.com"
                className="text-indigo-600 hover:underline"
              >
                send me an email
              </a>
              .
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
