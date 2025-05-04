import React from 'react';

import {  FaNodeJs, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoDocker, IoLogoGithub, IoLogoJavascript, IoLogoPython, IoLogoFigma, IoLogoCss3 } from "react-icons/io5";
import {  SiMysql, SiExpress } from "react-icons/si";
import { BiLogoMongodb} from "react-icons/bi";

const skills = [
  { name: "React", icon: <FaReact/> },
  { name: "Node.js", icon: <FaNodeJs/> },
  { name: "Express", icon: <SiExpress/> },
  { name: "HTML", icon: <FaHtml5/> },
  { name: "CSS", icon: <IoLogoCss3/> },
  { name: "JavaScript", icon: <IoLogoJavascript/> },
  { name: "MongoDB", icon: <BiLogoMongodb/> },
  { name: "Git", icon: <IoLogoGithub/> },
  { name: "Docker", icon: <IoLogoDocker/>},
  { name: "Python", icon: <IoLogoPython/>},
  { name: "SQL", icon: <SiMysql/>},
  { name: "Figma", icon: <IoLogoFigma/>}
];

export default function Skills() {
  
  return (
    <div className="container mx-auto my-10 ">
      <h2 className="text-center text-2xl font-bold  mb-6 text-info" data-aos="fade-down">My Skills & Tech Stack</h2>
      <p className="text-center text-lg mb-8" data-aos="fade-up">
        I have experience working with a variety of technologies and tools. Here are some of the key skills and technologies I use:
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="rounded-lg shadow-md p-4 flex flex-col items-center" data-aos="zoom-in">
            <div className="text-4xl mb-2 text-info">{skill.icon}</div>
            <h3 className="text-l font-semibold">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}