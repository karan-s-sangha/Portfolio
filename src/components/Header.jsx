import React, { useState, useEffect } from "react";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Work from "./Work.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";

const Header = () => {
  const [activeSection, setActiveSection] = useState(""); // Track active section

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null, // Observe sections relative to the viewport
      threshold: 0.5, // Trigger when 30% of a section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Set the current active section
        }
      });
    }, options);

    // Observe all sections
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      // Cleanup observer when component unmounts
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full flex justify-between items-center bg-gray-900 text-white shadow-md z-50 px-4 py-3">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src="/portfolio.png" alt="Logo" className="h-8" />
          <span className="text-lg font-semibold">Karan</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-4">
          {[
            { name: "Home", href: "#home" },
            { name: "About", href: "#about" },
            { name: "Work", href: "#work" },
            { name: "Contact Me", href: "#contact" },
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`hover:bg-gray-700 px-3 py-2 rounded-md transition duration-300 ${
                activeSection === link.href.slice(1) ? "bg-white text-gray-900" : ""
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Contact Button */}
        {/* <div>
          <a
            href="#contact"
            className="bg-white text-gray-900 font-semibold px-4 py-2 rounded-full hover:bg-gray-200 transition duration-300"
          >
            Contact Me
          </a>
        </div> */}
      </header>

      {/* Page Sections */}
      <main className="mt-16">
        <section id="home" className={` ${activeSection === "home" ? "bg-white" : ""}`}>
          <Home />
        </section>
        <section id="about" className={` ${activeSection === "about" ? "bg-white" : ""}`}>
          <About />
        </section>
        <section id="work" className={` ${activeSection === "work" ? "bg-white" : ""}`}>
          <Work />
        </section>
        <section id="contact" className={` ${activeSection === "contact" ? "bg-white" : ""}`}>
          <Contact />
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Header;
