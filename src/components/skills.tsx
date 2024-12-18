const Skills = () => {
    const skills = [
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "AWS",
      "Python",
      "C#",
      "Git",
    ];
  
    return (
      <section className="py-20 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          {skills.map((skill) => (
            <div
              key={skill}
              className="p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Skills;
  