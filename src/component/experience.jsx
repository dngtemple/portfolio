

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Skills from './skills';
import Project from './project';
import Testimonials from './testimonials';
import Education from './education';
import { Element } from 'react-scroll';


import Footer from './footer';
import Contact from './contact';
const experiences = [
  {
    id: 1,
    company: "My Apps Lab",
    jobTitle: "Web Developer Intern",
    startDate: "July 2024",
    endDate: "Present",
    responsibilities: [
      "Developed and maintained web applications using React and Node.js.",
      "Collaborated with cross-functional teams to define, design, and ship new features.",
      "Improved application performance and scalability."
    ],
    description: "I have honed my skills in full-stack development, working on various projects that involve both frontend and backend technologies. This role has significantly improved my problem-solving abilities and my understanding of scalable web applications."
  },
  {
    id: 2,
    company: "IT Consortium",
    jobTitle: "Software Developer Intern",
    startDate: "August 2024",
    endDate: "September 2024",
    responsibilities: [
      "Designed and implemented user-friendly interfaces using HTML, CSS, and JavaScript.",
      "Worked closely with backend developers to integrate APIs.",
      "Ensured cross-browser compatibility and responsiveness."
    ],
    description: "At ITC, I worked closely with a team of developers to create innovative web solutions. This experience has enhanced my teamwork skills and my ability to deliver high-quality code under tight deadlines."
  },
  {
    id: 3,
    company: "Crivre Inc",
    jobTitle: "Frontend Engineer",
    startDate: "March 2024",
    endDate: "July 2024",
    responsibilities: [
      "Designed user interfaces and user experiences for web applications.",
      "Conducted user research and usability testing.",
      "Collaborated with developers to ensure design feasibility."
    ],
    description: " I was responsible for designing and implementing user-friendly interfaces. This role has greatly improved my design skills and my ability to create visually appealing and functional web applications."
  }
];

export default function WorkExperience() {
  

  return (

    <>
    {/* <Education/> */}
    <Skills/>
    <div className="container mx-auto my-10 px-4 flex flex-col md:flex-row">
      <div className="w-full md:w-1/4 sticky top-0 mb-8 md:mb-0">
        <h2 className="text-2xl font-bold mb-4 text-info" data-aos="fade-right">Work Experience</h2>
        <ul className="list-none pl-5">
          {experiences.map((experience) => (
            <li key={experience.id} className="mb-2">
              <a href={`#experience-${experience.id}`} className="text-info hover:underline">
                {experience.company}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full md:w-3/4">
        {experiences.map((experience) => (
          <div key={experience.id} id={`experience-${experience.id}`} className="mb-8 p-6 bg-white rounded-lg shadow-md" data-aos="fade-up">
            <h3 className="text-xl font-semibold text-info">{experience.company}</h3>
            <h4 className="text-lg font-medium text-gray-800">{experience.jobTitle}</h4>
            <p className="text-gray-600 text-sm mb-2">{experience.startDate} - {experience.endDate}</p>
            <p className="text-gray-700 mb-4">{experience.description}</p>
            <h5 className="text-md font-semibold text-gray-800">Responsibilities:</h5>
            <ul className="list-disc pl-5 text-gray-700">
              {experience.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <Element name="projects">
        <Project />
      </Element>
    <Testimonials/>

    <Element name="contact">
        <Contact />
      </Element>
    <Footer/>
    </>
  );
}