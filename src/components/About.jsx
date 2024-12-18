import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-gray-500 text-white py-16 px-8">
      <div className="max-w-5xl mx-auto">
        {/* Introduction */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-8 md:p-12">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Welcome! I'm Karan, a professional web developer with a knack for
            crafting visually stunning and highly functional full stack websites. Combining
            creativity and technical expertise, I transform your vision into a
            digital masterpiece that excels in both appearance and performance.
          </p>

          {/* Statistics */}
          <div className="flex mt-8 space-x-12 justify-center">
            {/* Projects Done */}
            <div className="text-center">
              <p className="text-4xl font-bold text-white">
                6<span className="text-blue-500">+</span>
              </p>
              <p className="text-gray-400 mt-2">Projects done</p>
            </div>

            {/* Years of Experience */}
            <div className="text-center">
              <p className="text-4xl font-bold text-white">
                1<span className="text-blue-500">+</span>
              </p>
              <p className="text-gray-400 mt-2">Years of experience</p>
            </div>
          </div>
        </div>

        {/* Essential Tools Section */}
        <div className="mt-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            <span className="text-white">Essential</span>{" "}
            <span className="text-white">Tools I use</span>
          </h2>
          <p className="text-white mb-8">
            Discover the powerful tools and technologies I use to create
            exceptional, high-performing websites & applications.
          </p>

          {/* Tools Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Tool 1 */}
            <div className="flex flex-col items-center bg-gray-800 rounded-lg p-4">
              <img src="/aws.png" alt="AWS" className="h-8 mb-2" />
              <p className="text-white font-semibold">AWS</p>
              <p className="text-gray-400 text-sm">Cloud Computing </p>
            </div>

            {/* Tool 2 */}
            <div className="flex flex-col items-center bg-gray-800 rounded-lg p-4">
              <img src="/css.png" alt="CSS" className="h-10 mb-2" />
              <p className="text-white font-semibold">CSS</p>
              <p className="text-gray-400 text-sm">User Interface</p>
            </div>

            {/* Tool 3 */}
            <div className="flex flex-col items-center bg-gray-800 rounded-lg p-4">
              <img src="/javascript.png" alt="JavaScript" className="h-10 mb-2" />
              <p className="text-white font-semibold">JavaScript</p>
              <p className="text-gray-400 text-sm">Interaction</p>
            </div>

            {/* Tool 4 */}
            <div className="flex flex-col items-center bg-gray-800 rounded-lg p-4">
              <img src="/node.png" alt="NodeJS" className="h-10 mb-2" />
              <p className="text-white font-semibold">NodeJS</p>
              <p className="text-gray-400 text-sm">Web Server</p>
            </div>

            {/* Tool 5 */}
            <div className="flex flex-col items-center bg-gray-800 rounded-lg p-4">
              <img src="/express.png" alt="ExpressJS" className="h-10 mb-2" />
              <p className="text-white font-semibold">ExpressJS</p>
              <p className="text-gray-400 text-sm">Node Framework</p>
            </div>

            {/* Tool 6 */}
            <div className="flex flex-col items-center bg-gray-800 rounded-lg p-4">
              <img src="/mongodb.png" alt="MongoDB" className="h-12 mb-2" />
              <p className="text-white font-semibold">MongoDB</p>
              <p className="text-gray-400 text-sm">Database</p>
            </div>

            {/* Tool 7 */}
            <div className="flex flex-col items-center bg-gray-800 rounded-lg p-4">
              <img src="/react.png" alt="React" className="h-8 mb-2" />
              <p className="text-white font-semibold">React</p>
              <p className="text-gray-400 text-sm">Framework</p>
            </div>

            {/* Tool 8 */}
            <div className="flex flex-col items-center bg-gray-800 rounded-lg p-4">
              <img src="/tailwind.png" alt="TailwindCSS" className="h-8 mb-2" />
              <p className="text-white font-semibold">TailwindCSS</p>
              <p className="text-gray-400 text-sm">User Interface</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
