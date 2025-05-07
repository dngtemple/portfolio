import React from "react";
import { motion } from "framer-motion";
import {
  FaNodeJs,
  FaHtml5,
  FaReact,
} from "react-icons/fa";
import {
  IoLogoDocker,
  IoLogoGithub,
  IoLogoJavascript,
  IoLogoPython,
  IoLogoFigma,
  IoLogoCss3,
} from "react-icons/io5";
import { SiMysql, SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";

const skills = [
  { name: "React", icon: <FaReact className="text-sky-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Express", icon: <SiExpress className="text-gray-800" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <IoLogoCss3 className="text-blue-600" /> },
  { name: "JavaScript", icon: <IoLogoJavascript className="text-yellow-400" /> },
  { name: "MongoDB", icon: <BiLogoMongodb className="text-green-500" /> },
  { name: "Git", icon: <IoLogoGithub className="text-black" /> },
  { name: "Docker", icon: <IoLogoDocker className="text-blue-500" /> },
  { name: "Python", icon: <IoLogoPython className="text-yellow-500" /> },
  { name: "SQL", icon: <SiMysql className="text-blue-700" /> },
  { name: "Figma", icon: <IoLogoFigma className="text-pink-500" /> },
];

export default function Skills() {
  return (
    <section className="container mx-auto px-4 py-16" id="skills">
      <div className="text-center">
        <h2 className="text-2xl text-info font-bold mb-4">My Skills & Tech Stack</h2>
        <p className="max-w-xl mx-auto text-lg text-gray-600">
          I work with a variety of technologies to build modern, scalable web and mobile applications.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center transition-transform duration-300"
          >
            <div className="text-5xl mb-3">{skill.icon}</div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
              {skill.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
