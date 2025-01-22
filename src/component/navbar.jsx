import React, { useEffect, useState } from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { MdWhatsapp, MdEmail, MdBarChart, MdArchitecture, MdAddModerator, MdApartment } from "react-icons/md";
import { Link } from "react-scroll";
import { Tooltip } from 'react-tooltip';
import 'aos/dist/aos.css';
import WorkExperience from './experience';
import { IoIosCall, IoIosPrint } from "react-icons/io";

const Navbar = () => {
  const [animateIntro, setAnimateIntro] = useState(false);

  useEffect(() => {
    setAnimateIntro(true);
  }, []);

  return (
    <>
      <div data-aos="fade-up" data-aos-duration="2000" 
        className="flex gap-10 flex-col relative text-black"
        style={{
          background:
            'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/back.jpeg")',
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
          
          <div>
            <ul className="menu menu-xs menu-horizontal menu-dropdown-toggle bg-info rounded-box">
              <li>
                <Link to="projects" smooth={true} duration={1000} className="tooltip tooltip-bottom" data-tip="Projects">
                  <MdApartment className="text-xl" />
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={1000} className="tooltip tooltip-bottom" data-tip="Contact">
                  <IoIosCall className="text-xl" />
                </Link>
              </li>
              <li>
                <a href="/cv.pdf" download className="tooltip tooltip-bottom" data-tip="Download CV">
                  <IoIosPrint className="text-xl" />
                </a>
                <Tooltip place="bottom" type="dark" effect="solid" />
              </li>
            </ul>
          </div>
        </div>

        <div className="relative h-[70vh] gap-4 flex flex-col-reverse items-center justify-center text-center text-sm p-4 text-white sm:flex-col-reverse sm:text-l md:text-xl sm:items-center sm:gap-8 md:gap-20 w-[90%] ml-[5%] mt-[5%] sm:p-14 md:p-8 bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
          <div className="h-full  sm:w-10 w-full flex flex-row sm:flex-row gap-1.5 text-2xl items-center justify-center">
            <a href="wwww.github.com/dngtemple"><IoLogoGithub className="text-l text-info " /></a> 
            {/* <a href="mailto:donnahaytempleton1230@gmail.com"> <MdEmail className="text-l text-info " /></a> */}
            <a href="https://www.linkedin.com/in/clinton-templeton-a8700a271"> <IoLogoLinkedin className="text- text-info" /></a>
          </div>

          <div
            className={` p-2 sm:p-8 transition-all duration-1000 ${
              animateIntro ? "animate-intro" : "opacity-0"
            }`}
          >
            <h3 className="text-2xl sm:text-4xl night headline text-white" data-aos="fade-up">Hi! There 👋</h3>
            <p className="text-xl  md:text-xl mt-2 font-light text-white">
              I’m <span data-aos="fade-down" className="text-lg font-bold text-info animate-pulse">Clinton Templeton</span>, 
              a full-stack software developer and coding tutor. I develop industry-standard products that solve everyday problems,
              with an emphasis on user experience, accessibility, and performance.
            </p>
            
            <a href="https://wa.me/233277169914" target="_blank" rel="noopener noreferrer">
              <button className="btn-sm mt-6 btn btn-info">
                Hire Me <MdWhatsapp className="text-sm text-black" />
              </button>
            </a>
          </div>
        </div>
      </div>
      <WorkExperience/>
    </>
  );
};

export default Navbar;