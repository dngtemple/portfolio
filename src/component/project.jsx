import React from 'react';
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Footer from './footer';
const projects = [
  {
    id: 1,
    image: "/1.png",
    url: "https://chat-app-cfsj.onrender.com",
    github: "https://github.com/dngtemple/chat-app",
    description: "Chat application ",
    skill:[
      "react",
      "node",
      "socket-io",
      "tailwind"
    ]
  },
  {
    id: 2,
    image: "/3.png",
    url: "https://example.com/project2",
    github: "https://github.com/dngtemple/weather-app",
    description: "Location weather app ",
    skill:[
      "react",
      "rest-api",
      "express",
      "html"
    ]
  },
  {
    id: 3,
    image: "/2.png",
    url: "https://kojokwarteng.vercel.app",
    github: "https://github.com/dngtemple/kwart-web",
    description: "Photography website",
    skill:[
      "react",
      "framer-motion",
      "figama",
      "tailwind"
    ]
  }
];

export default function Project() {
  const navigate = useNavigate();

  return (
    <>
    <div style={{
        // background:
        //   'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/back.png")',
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        // backgroundAttachment: "fixed",
        // minHeight: "100vh",
        // width: "100%",
        padding: "2px",
      }} >
    <div data-aos="zoom-out-up" className="container mx-auto my-5 px-4">
    <h2 className="text-center text-3xl font-bold mb-6 text-info" data-aos="fade-down">Projects</h2>
    
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={project.image} alt={`Project ${project.id}`} className="w-full h-48 object-cover" />
            <div className="p-4 flex flex-col">
              <p className="text-gray-600 text-sm mb-4">{project.description}</p>
              <div className="mt-auto gap-1 flex justify-start items-center">
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 flex items-center">
                  <FaExternalLinkAlt className="mr-2" /> 
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-800 flex items-center">
                  <FaGithub className="mr-2" /> 
                </a>

                {
                  project?.skill?.map((skill,ind) => (
                    <button key={ind} className='btn btn-xs'>{skill}</button>
                  ))}

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    {/* <Footer/> */}
    </>
  );
}