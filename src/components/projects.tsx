const Projects = () => {
    const projects = [
      {
        title: "Basket Tracking System",
        description: "Barcode-based tracking app",
      },
      {
        title: "ARK PS4 Server Setup",
        description: "Ubuntu-based multiplayer server",
      },
      {
        title: "Kaggle Competition",
        description: "Ranked X% in leaderboard",
      },
    ];
  
    return (
      <section className="py-20 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="p-6 bg-gray-100 shadow-md rounded-lg hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-2 text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;
  