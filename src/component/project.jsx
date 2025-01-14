import React from 'react';
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Footer from './footer';

const projects = [
  {
    id: 1,
    image: "/back.jpeg",
    url: "https://example.com/project1",
    github: "https://github.com/user/project1",
    description: "Chat application using React and Node.js.",
    skill:[
      "html",
      "css",
      "react",
      "node",
    ]
  },
  {
    id: 2,
    image: "/pp.jpg",
    url: "https://example.com/project2",
    github: "https://github.com/user/project2",
    description: "This is a short description of project 2."
  },
  {
    id: 3,
    image: "/path/to/image3.jpg",
    url: "https://example.com/project3",
    github: "https://github.com/user/project3",
    description: "This is a short description of project 3."
  },
  {
    id: 4,
    image: "/path/to/image4.jpg",
    url: "https://example.com/project4",
    github: "https://github.com/user/project4",
    description: "This is a short description of project 4."
  },
  {
    id: 5,
    image: "/back.jpeg",
    url: "https://example.com/project5",
    github: "https://github.com/user/project5",
    description: "This is a short description of project 5."
  },
  {
    id: 6,
    image: "/back.png",
    url: "https://example.com/project6",
    github: "https://github.com/user/project6",
    description: "This is a short description of project 6. This is a short description of project 6."
  }
];

export default function Project() {
  return (
    <>
    <div style={{
        background:
          'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url("/back.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        width: "100%",
        padding: "2px",
      }} >
    <div data-aos="zoom-out-up" className="container mx-auto my-5 px-4">
      <h2 className="text-center text-2xl font-bold mb-4">Projects</h2>
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
    <Footer/>
    </>
  );
}