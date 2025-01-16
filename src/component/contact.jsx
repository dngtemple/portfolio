import React, { useEffect } from 'react';
import { IoLogoLinkedin, IoLogoTwitter, IoLogoXbox,  } from 'react-icons/io5';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdAlternateEmail } from "react-icons/md";
import { FaSquareUpwork } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="container mx-auto my-10 px-4">
      <h2 className="text-center text-3xl font-bold mb-6 text-info" data-aos="fade-down">Contact Me</h2>
      <p className="text-center text-lg mb-8" data-aos="fade-up">
        I am available for full-time and freelance work. Contact me through any of the links below:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6" data-aos="zoom-in">
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
          <a href="mailto:your-email@example.com" className="text-info text-4xl hover:text-blue-500">
            <MdAlternateEmail />
          </a>
          <p className="mt-2 text-center">Email</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-info text-4xl hover:text-blue-700">
            <IoLogoLinkedin />
          </a>
          <p className="mt-2 text-center">LinkedIn</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
          <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-info text-4xl hover:text-blue-400">
            <BsTwitterX />
          </a>
          <p className="mt-2 text-center">Twitter</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
          <a href="https://www.upwork.com/freelancers/your-profile" target="_blank" rel="noopener noreferrer" className="text-info text-4xl hover:text-green-500">
            <FaSquareUpwork />
          </a>
          <p className="mt-2 text-center">Upwork</p>
        </div>
      </div>
    </div>
  );
}