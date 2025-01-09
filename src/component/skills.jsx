import React from 'react'
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

export default function () {
  return (
    <div className='relative '
      style={{
        background:
          'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("/back.jpeg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "100vh",
        width: "100%",
        padding: "0px",
      }}
    >
      {/* <h4 className='text-center text-white text-2xl'>My Tech Stack</h4> */}

      <div className='z-10 absolute flex flex-wrap gap-2 justify-between mt-[10%] w-[90%] ml-[5%] p-4 bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>

        <div className='card bg-white w-[48%] sm:w-[32%] rounded p-4 flex flex-col justify-center items-center transition-all ease-in-out hover:bg-info hover:translate-y-[-5px]'>
          <div className='content flex flex-col justify-center items-center'>
          <FaHtml5 className='text-5xl' />
          <p className='text-sm sm:text-l'>HTML</p>

          </div>
          
        </div>
        <div className='card bg-white w-[48%] sm:w-[32%] rounded p-4 flex flex-col justify-center items-center transition-all ease-in-out hover:bg-info hover:translate-y-[-5px]'>
          <div className='content flex flex-col justify-center items-center'>
          <FaCss3 className='text-5xl' />
          <p className='text-sm sm:text-l'>CSS</p>

          </div>
          
        </div>
        <div className='card bg-white w-[48%] sm:w-[32%] rounded p-4 flex flex-col justify-center items-center transition-all ease-in-out hover:bg-info hover:translate-y-[-5px]'>
          <div className='content flex flex-col justify-center items-center'>
          <IoLogoJavascript className='text-5xl' />
          <p className='text-sm sm:text-l'>JavaScript</p>

          </div>
          
        </div>
        <div className=' card bg-white w-[48%] sm:w-[32%] rounded p-4 flex flex-col justify-center items-center transition-all ease-in-out hover:bg-info hover:translate-y-[-5px]'>

          <div className='content flex flex-col justify-center items-center'>
          <FaReact className='text-5xl' />
          <p className='text-sm sm:text-l'>React</p>

          </div>
          
        </div>
        <div className='card bg-white w-[48%] sm:w-[32%] rounded p-4 flex flex-col justify-center items-center transition-all ease-in-out hover:bg-info hover:translate-y-[-5px]'>
          <div className='content flex flex-col justify-center items-center'>

          <FaNodeJs className='text-5xl' />
          <p className='text-sm sm:text-l'>Node</p>
          </div>
        </div>
        <div className='card bg-white w-[48%] sm:w-[32%] rounded p-4 flex flex-col justify-center items-center transition-all ease-in-out hover:bg-info hover:translate-y-[-5px]'>
          <div className='content flex flex-col justify-center items-center'>

          <BiLogoMongodb className='text-5xl' />
          <p className='text-sm sm:text-l'>MongoDB</p>
          </div>
        </div>
        <div className='card bg-white w-[48%] sm:w-[32%] rounded p-4 flex flex-col justify-center items-center transition-all ease-in-out hover:bg-info hover:translate-y-[-5px]'>
          <div className='content flex flex-col justify-center items-center'>
          <FaFigma className='text-5xl' />
          <p className='text-sm sm:text-l'>Figma</p>
          </div>
        </div>
        <div className='card bg-white w-[48%] sm:w-[32%] rounded p-4 flex flex-col justify-center items-center transition-all ease-in-out hover:bg-info hover:translate-y-[-5px]'>

          <div className='content flex flex-col justify-center items-center'>
          <SiMysql className='text-5xl' />
          <p className='text-sm sm:text-l'>SQL</p>

          </div>
          
        </div>
        <div className='card bg-white w-[48%] sm:w-[32%] rounded p-4 flex flex-col justify-center items-center transition-all ease-in-out hover:bg-info hover:translate-y-[-5px]'>
          <div className='content flex flex-col justify-center items-center'>
          <IoLogoGithub className='text-5xl' />
          <p className='text-sm sm:text-l'>Git</p>

          </div>
         
        </div>
        <div className= 'card bg-white w-[48%] sm:w-[32%]  md:hidden rounded p-4 flex flex-col justify-center items-center transition-all ease-in-out hover:bg-info hover:translate-y-[-5px]'>
          <div className='content flex flex-col justify-center items-center'>
          <BiLogoTailwindCss className='text-5xl' />
          <span className='text-sm sm:text-l'>TailwindCss</span>

          </div>
          
        </div>

      </div>


    </div>
  )
}
