import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="h-[500px] bg-gray-900 text-white flex justify-center items-center px-8 md:px-16">
      {/* Left Content */}
        <div className="flex flex-col space-y-6 w-full">
            {/* Status */}
            <div className="flex items-center space-x-2">
              <a
                href="https://www.linkedin.com/in/karandeep-sangha/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/profile.png" // Replace with the profile image path
                  alt="Profile"
                  className="h-8 w-8 rounded-full"
                />
              </a>
              <span className="text-sm text-gray-400">Available for work</span>
            </div>
            
            {/* Headline */}
            <h1 className="text-center text-4xl md:text-6xl font-bold leading-tight">
            Building Scalable Modern Full Stack Websites for the Future
            </h1>

            {/* Buttons */}
            <div className="flex space-x-4">
            <a
                href="/Karan_Resume.pdf" // Replace with your CV file path
                download="Karan_Resume.pdf"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg flex items-center space-x-2"
            >
                <span>Download Resume</span>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v4a2 2 0 002 2h12a2 2 0 002-2v-4m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
                </svg>
            </a>
            <a
                href="#about"
                className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-lg flex items-center space-x-2"
            >
                <span>Scroll down</span>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                />
                </svg>
            </a>
            </div>
        </div>

      {/* Right Image */}
      {/* <div className="hidden md:block">
        <img
          src="/person-image.png" // Replace with the person’s image path
          alt="Person"
          className="h-96 rounded-lg"
        />
      </div> */}
    </section>
  );
};

export default Home;
