import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Skills from './skills';
import Project from './project';
import Testimonials from './testimonials';
import Education from './education';
import { Element } from 'react-scroll';
import Circle from './circle';
import Footer from './footer';
import Contact from './contact';
import { FaBriefcase, FaCheckCircle } from 'react-icons/fa';

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
    skills: ['React', 'Node.js', 'JavaScript', 'MongoDB', 'Git'],
    description: "I have refined my expertise in full-stack development by contributing to a range of projects that integrate both frontend and backend technologies, enhancing my ability to build robust and scalable web applications."
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
    skills: ['HTML', 'CSS', 'JavaScript', 'APIs', 'Figma'],
    description: "At ITC, I collaborated with a team of developers to design and implement innovative web solutions, strengthening my teamwork and problem-solving skills in a fast-paced development environment."
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
    skills: ['UI/UX', 'Figma', 'Tailwind CSS', 'Responsive Design'],
    description: "I was responsible for designing and developing intuitive, user-centric interfaces that enhanced overall user experience and usability, ensuring that the applications were not only functional but also visually appealing"
  }
];

export default function WorkExperience() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Skills />

      <div className="container mx-auto my-20 px-4">
        <h2 className="text-2xl font-bold text-center mb-12 text-info" data-aos="fade-down">
          Work Experience
        </h2>

        <div className="relative border-l-4 border-info pl-6 space-y-12">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              id={`experience-${experience.id}`}
              className="relative group"
              data-aos="fade-up"
            >
              <div className="absolute -left-6 top-1">
                <div className="w-6 h-6 bg-info text-white rounded-full flex items-center justify-center shadow-lg">
                  <FaBriefcase className="text-sm" />
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md border border-white/20">
                <h3 className="text-xl font-bold text-info mb-1">{experience.company}</h3>
                <h4 className="text-lg font-medium text-white mb-1">{experience.jobTitle}</h4>
                <p className="text-gray-300 text-sm mb-3">
                  {experience.startDate} - {experience.endDate}
                </p>
                <p className="text-black mb-4">{experience.description}</p>

                <h5 className="text-md font-semibold text-black mb-2">Responsibilities:</h5>
                <ul className="list-none space-y-2">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-black"
                      data-aos="fade-right"
                      data-aos-delay={idx * 100}
                    >
                      <FaCheckCircle className="text-info mt-1" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>

                {/* Skill Tags */}
                <div className="mt-5 flex flex-wrap gap-2" data-aos="fade-up" data-aos-delay="200">
                  {experience.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-info text-white border border-white/20 px-3 py-1 text-sm rounded-full shadow-sm hover:bg-white/20 transition duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Circle />

      <Element name="projects">
        <Project />
      </Element>

      <Testimonials />

      <Element name="contact">
        <Contact />
      </Element>

      <Footer />
    </>
  );
}
