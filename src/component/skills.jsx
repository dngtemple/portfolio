import React, { useEffect, useState } from "react";
import { FaCss3, FaFigma, FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoGithub, IoLogoJavascript } from "react-icons/io5";
import { IoLogoFigma } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io5";
import { SiAdobeillustrator } from "react-icons/si";
import { BiLogoMongodb, BiLogoPython, BiLogoTailwindCss } from "react-icons/bi";
import { SiMysql } from "react-icons/si";

const TechStack = () => {
  const handleScroll = () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        card.classList.add("animate-intro");
      } else {
        card.classList.remove("animate-intro");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="relative"
      style={{
        background:
          "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/back.jpeg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "100vh",
        width: "100%",
        padding: "0px",
      }}
    >
      <div className="z-10 absolute flex flex-wrap gap-2 justify-between mt-[10%] w-[90%] ml-[5%] p-4 bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
        {/* Card 1 */}
        <div className="card bg-white w-[48%] sm:w-[32%] rounded p-4 flex flex-col justify-center items-center transition-all ease-in-out hover:bg-info hover:translate-y-[-5px]">
          <div className="content flex flex-col justify-center items-center">
            <FaHtml5 className="text-5xl text-info" />
            <p className="text-sm sm:text-l">HTML</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-white w-[48%] sm:w-[32%] rounded p-4 flex flex-col justify-center items-center transition-all ease-in-out hover:bg-info hover:translate-y-[-5px]">
          <div className="content flex flex-col justify-center items-center">
            <FaCss3 className="text-5xl text-info" />
            <p className="text-sm sm:text-l">CSS</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card bg-white w-[48%] sm:w-[32%] rounded p-4 flex flex-col justify-center items-center transition-all ease-in-out hover:bg-info hover:translate-y-[-5px]">
          <div className="content flex flex-col justify-center items-center">
            <IoLogoJavascript className="text-5xl text-info" />
            <p className="text-sm sm:text-l">JavaScript</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card bg-white w-[48%] sm:w-[32%] rounded p-4 flex flex-col justify-center items-center transition-all ease-in-out hover:bg-info hover:translate-y-[-5px]">
          <div className="content flex flex-col justify-center items-center">
            <FaReact className="text-5xl text-info" />
            <p className="text-sm sm:text-l">React</p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="card bg-white w-[48%] sm:w-[32%] rounded p-4 flex flex-col justify-center items-center transition-all ease-in-out hover:bg-info hover:translate-y-[-5px]">
          <div className="content flex flex-col justify-center items-center">
            <FaNodeJs className="text-5xl text-info" />
            <p className="text-sm sm:text-l">Node</p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="card bg-white w-[48%] sm:w-[32%] rounded p-4 flex flex-col justify-center items-center transition-all ease-in-out hover:bg-info hover:translate-y-[-5px]">
          <div className="content flex flex-col justify-center items-center">
            <BiLogoMongodb className="text-5xl text-info" />
            <p className="text-sm sm:text-l">MongoDB</p>
          </div>
        </div>

        {/* Card 7 */}
        <div className="card bg-white w-[48%] sm:w-[32%] rounded p-4 flex flex-col justify-center items-center transition-all ease-in-out hover:bg-info hover:translate-y-[-5px]">
          <div className="content flex flex-col justify-center items-center">
            <FaFigma className="text-5xl text-info" />
            <p className="text-sm sm:text-l">Figma</p>
          </div>
        </div>

        {/* Card 8 */}
        <div className="card bg-white w-[48%] sm:w-[32%] rounded p-4 flex flex-col justify-center items-center transition-all ease-in-out hover:bg-info hover:translate-y-[-5px]">
          <div className="content flex flex-col justify-center items-center">
            <SiMysql className="text-5xl text-info" />
            <p className="text-sm sm:text-l">SQL</p>
          </div>
        </div>

        {/* Card 9 */}
        <div className="card bg-white w-[48%] sm:w-[32%] rounded p-4 flex flex-col justify-center items-center transition-all ease-in-out hover:bg-info hover:translate-y-[-5px]">
          <div className="content flex flex-col justify-center items-center">
            <IoLogoGithub className="text-5xl text-info" />
            <p className="text-sm sm:text-l">Git</p>
          </div>
        </div>

        {/* Card 10 */}
        <div className="card bg-white w-[48%] sm:w-[32%] rounded p-4 flex flex-col justify-center items-center transition-all ease-in-out hover:bg-info hover:translate-y-[-5px]">
          <div className="content flex flex-col justify-center items-center">
            <BiLogoTailwindCss className="text-5xl text-info" />
            <p className="text-sm sm:text-l">TailwindCSS</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TechStack;
