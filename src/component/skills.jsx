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
    <div
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
       <h4 className='text-center text-white text-2xl'>Tech Stack</h4>


       <div className='flex flex-wrap gap-2 justify-between mt-[10%]  w-[90%] ml-[5%] p-4 bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>

        <div className='bg-white w-[48%] rounded p-4 flex flex-col justify-center items-center' >
            <FaHtml5 className='text-5xl' />
            <p>HTML</p>
            
        </div>
        <div className='bg-white w-[48%] rounded p-4 flex flex-col justify-center items-center' >
            <FaCss3 className='text-5xl' />
            <p>CSS</p>
            
        </div>
        <div className='bg-white w-[48%] rounded p-4 flex flex-col justify-center items-center' >
            <IoLogoJavascript className='text-5xl' />
            <p>JavaScript</p>
            
        </div>
        <div className='bg-white w-[48%] rounded p-4 flex flex-col justify-center items-center' >
            <FaReact className='text-5xl' />
            <p>React</p>
            
        </div>
        <div className='bg-white w-[48%] rounded p-4 flex flex-col justify-center items-center' >
            <FaNodeJs className='text-5xl' />
            <p>Node</p>
            
        </div>
        <div className='bg-white w-[48%] rounded p-4 flex flex-col justify-center items-center' >
            <BiLogoMongodb className='text-5xl' />
            <p>MongoDB</p>
            
        </div>
        <div className='bg-white w-[48%] rounded p-4 flex flex-col justify-center items-center' >
            <FaFigma className='text-5xl' />
            <p>Figma</p>
            
        </div>
        <div className='bg-white w-[48%] rounded p-4 flex flex-col justify-center items-center' >
            <SiMysql className='text-5xl' />
            <p>SQL</p>
            
        </div>
        <div className='bg-white w-[48%] rounded p-4 flex flex-col justify-center items-center' >
            <IoLogoGithub className='text-5xl' />
            <p>Git</p>
            
        </div>
        <div className='bg-white w-[48%] rounded p-4 flex flex-col justify-center items-center' >
            <BiLogoTailwindCss className='text-5xl' />
            <p>TailwindCss</p>
            
        </div>
        {/* <div className='bg-white w-[48%] rounded p-4 flex flex-col justify-center items-center' >
            <BiLogoPython className='text-5xl' />
            <p>Python</p>
            
        </div>
        <div className='bg-white w-[48%] rounded p-4 flex flex-col justify-center items-center' >
            <SiAdobeillustrator className='text-5xl' />
            <p>Illustrator</p>
            
        </div> */}

       </div>
        
    </div>
  )
}
