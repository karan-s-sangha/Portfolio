import React from "react";

const Work = () => {
  // Portfolio projects data
  const projects = [
    {
      id: 1,
      title: "Full stack Netflix app",
      image: "/netflix.png", // Replace with your image path
      tags: ["Full Stack", "MERN", "TMDB API", "Responsive Design"],
      link: "https://github.com/karan-s-sangha/Netflix-Clone",
    },
    {
      id: 2,
      title: "Decked Out 2 Game",
      image: "/decked_out.png", // Replace with your image path
      tags: ["JavaScript", "Game Development", "AI Systems", "Isometric Design"],
      link: "https://github.com/karan-s-sangha/Decked-Out-2",
    },
    {
      id: 3,
      title: "Library Databae",
      image: "/libraray_database.png", // Replace with your image path
      tags: ["Java", "SQLite", "CRUD Operations", "OOP", "Transaction Processing"],
      link: "https://github.com/karan-s-sangha/Library_DataBase",
    },
    {
      id: 4,
      title: "TLQ-Pipeline",
      image: "/TLQ-Pipeline.png", // Replace with your image path
      tags: ["AWS Lambda", "Data Benchmarking", "ARM vs x86", "Pipeline Efficiency"],
      link: "https://github.com/kevt02/TLQ-Pipeline",
    },
  ];

  return (
    <section id="work" className="bg-gray-900 text-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-semibold mb-8">
          My <span className="text-white">portfolio highlights</span>
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover"
              />

              {/* Project Content */}
              <div className="flex justify-between p-4">
                <div>
                  <h3 className="text-lg font-semibold">{project.title}</h3>

                  {/* Tags */}
                  <div className="flex flex-wrap mt-2 gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-sm bg-gray-700 text-gray-300 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* External Link */}
                <div className="mt-4 flex justify-end">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition duration-300"
                  >
                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17l10-10M7 7h10M17 7v10" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
