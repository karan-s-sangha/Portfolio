import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [emailSent, setEmailSent] = useState(false); // State to track confirmation page

  // Function to handle form submission
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4k35qts", // Replace with your EmailJS Service ID
        "template_e3lcinl", // Replace with your EmailJS Template ID
        formRef.current,
        "mHG1_qap0-UFo1517" // Replace with your Public Key
      )
      .then(
        () => {
          setEmailSent(true); // Show confirmation page when email is sent
        },
        (error) => {
          console.error("Error:", error.text);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="bg-gray-700 text-white py-16 px-8 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side: Contact Information */}
        {!emailSent ? (
          <>
            <div>
              <h2 className="text-4xl font-bold mb-4">
                Contact <span className="text-gray-400">me</span> for <br />
                <span className="text-gray-400">collaboration</span>
              </h2>
              <p className="text-gray-400 mb-8">
                Reach out today to discuss your project needs and start
                collaborating on something amazing!
              </p>

              {/* Social Media Links */}
              <div className="flex space-x-4">
                <a
                  href="https://github.com/karan-s-sangha"
                  className="hover:text-blue-500 transition duration-300"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github text-2xl"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/karandeep-sangha/"
                  className="hover:text-blue-500 transition duration-300"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin text-2xl"></i>
                </a>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-6"
            >
              {/* Name and Email */}
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex-1">
                  <label className="block text-sm mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    required
                    className="w-full bg-gray-700 text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm mb-2" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="user_subject"
                    placeholder="Your Subject"
                    required
                    className="w-full bg-gray-700 text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Hi!"
                  required
                  className="w-full bg-gray-700 text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
              >
                Submit
              </button>
            </form>
          </>
        ) : (
          // Confirmation Message
          <div className="col-span-2 text-center">
            <h2 className="text-4xl font-bold mb-4 text-green-400">
              Thank You!
            </h2>
            <p className="text-lg text-gray-300">
              Your message has been successfully sent. I will get back to you
              soon!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
