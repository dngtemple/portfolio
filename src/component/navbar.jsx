import React, { useEffect, useState } from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import {
  MdHome,
  MdContactPage,
  MdPallet,
  MdWhatsapp,
  MdEmail,
} from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  const [animateIntro, setAnimateIntro] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2000 });
    setAnimateIntro(true);
  }, []);

  return (
    <div data-aos="fade-up-right" data-aos-duration="2000" 
      className="flex gap-10 flex-col relative text-black"
      style={{
        background:
          'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("/back.jpeg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        width: "100%",
        padding: "2px",
      }}
    >
      <div className="p-2 flex justify-center h-8 items-center ml-[5%] mt-5 w-[90%] bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
        <div className="loop cubes top-10 z-50">
          {/* <div className="item cubes bg-info"></div> */}
        </div>
        <div>
          <ul className="menu menu-xs menu-horizontal menu-dropdown-toggle bg-info rounded-box">
            <li>
              <a className="tooltip tooltip-bottom" data-tip="Home">
                <MdHome className="text-xl" />
              </a>
            </li>
            <li>
              <a className="tooltip tooltip-bottom" data-tip="Projects">
                <MdPallet className="text-xl" />
              </a>
            </li>
            <li>
              <a className="tooltip tooltip-bottom" data-tip="Contact">
                <MdContactPage className="text-xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative h-[70vh] gap-4 flex flex-col-reverse items-center text-sm p-4 text-white sm:flex-row sm:text-l md:text-xl sm:items-center sm:gap-8 md:gap-20 w-[90%] ml-[5%] mt-[5%] sm:p-14 md:p-8 bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
        <div className="h-full sm:w-10 w-full flex flex-row sm:flex-col gap-1.5 text-2xl items-center justify-center">
          <IoLogoGithub className="text-sm text-info hover:text-white" />
          <MdEmail className="text-sm text-info hover:text-red-400" />
          <IoLogoLinkedin className="text-sm text-info hover:text-blue-900" />
        </div>

        <div
          className={`bg-transparent p-2 sm:p-8 transition-all duration-1000 ${
            animateIntro ? "animate-intro" : "opacity-0"
          }`}
        >
          <h3 className="text-2xl sm:text-4xl night headline text-black">Hi! There 👋</h3>
          <p className="text-xm sm:text-sm md:text-xl mt-2 font-light text-black">
            I’m Clinton Templeton, a passionate 21-year-old full-stack web
            developer based in Accra, Ghana. With 2+ years of experience, I
            specialize in crafting dynamic, responsive, and user-friendly web
            applications. My expertise spans the entire development stack, from
            designing captivating user interfaces to building robust backend
            systems.
            <br />
            <br />
            I thrive on transforming ideas into functional, visually appealing
            digital solutions. Whether it’s collaborating with teams to bring
            projects to life or working independently on innovative web
            applications, I approach every challenge with enthusiasm and
            dedication.
          </p>

          <button className="btn-sm mt-6 btn btn-info">
            Get In Touch <MdWhatsapp className="text-sm text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;