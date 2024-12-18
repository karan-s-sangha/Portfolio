import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Left Side: Call to Action */}
        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          <h2 className="text-4xl font-bold mb-4 leading-snug">
            Let's work <br />
            <span className="text-gray-400">together today!</span>
          </h2>
          <a
            href="#contact"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
          >
            Start project{" "}
            <span className="ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>

        {/* Center: Sitemap */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-4">Sitemap</h3>
          <ul className="space-y-2">
            {["Home", "About", "Work", "Contact me"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="hover:text-blue-500 transition duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Socials */}
        <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Socials</h3>
            <ul className="space-y-2">
                {[
                { name: "GitHub", link: "https://github.com/karan-s-sangha" },
                { name: "LinkedIn", link: "https://www.linkedin.com/in/karandeep-sangha/" },
                ].map((platform) => (
                <li key={platform.name}>
                    <a
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition duration-300"
                    >
                    {platform.name}
                    </a>
                </li>
                ))}
            </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
