// import React from 'react'

// export default function
//  () {
//   return (
//     <div style={{
//         background:
//           'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("/back.jpeg")',
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundAttachment: "fixed",
//         minHeight: "100vh",
//         width: "100%",
//         padding: "2px",
//       }}
//     >

//         <div className='p-2 ml-[5%] min-h-full  w-[90%] bg-gray-50 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>

//             <h4 className='text-center text-white text-xl mt-10 mb-10'>Work Experience</h4>

//             <div className='p-2 flex min-h-full flex-wrap gap-2 mt-10'>
//                 <div class="card3 text-sm md:w-[48%] backdrop-blur-sm bg-opacity-20">
//                 <h4 class="card3-title">Software Developer Intern</h4>
//                 <p class="card3-title">My Apps Lab</p>
//                 <p class="card3-body">
//                " 
//                Successfully completed a remote Web Developer Internship,
//                 gaining hands-on experience in the MERN stack. Contributed
//                  to full-stack development projects, led team meetings, and
//                   resolved technical issues, enhancing problem-solving, teamwork,
//                    and communication skills. This experience prepared me
//                     for a successful career in tech.."
//                 </p>
//                 <p class="footer"> <span class="by-name">July 2024 - December 2024 </span> </p>
//                 </div>
            
//                 <div class="card3 text-sm md:w-[48%]">
//                 <h4 class="card3-title">Frontend Developer Intern</h4>
//                 <p class="card3-title">IT Consortium</p>
//                 <p class="card3-body">
//                 Served as a Frontend Developer Intern at IT Consortium,
//                  gaining proficiency in Figma for UI/UX design and learning
//                   Python programming fundamentals. Successfully developed a Timebox project,
//                  demonstrating the ability to apply theoretical knowledge to
//                   practical applications and expand technical expertise.
//                 </p>
//                 <p class="footer"> <span class="by-name">August 2024 - September 2024 </span> </p>
//                 </div>


//             </div>

//         </div>
//     </div>
//   )
// }


import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Skills from './skills';
import Project from './project';

const experiences = [
  {
    id: 1,
    company: "Tech Solutions Inc.",
    jobTitle: "Full-Stack Developer",
    startDate: "January 2020",
    endDate: "Present",
    responsibilities: [
      "Developed and maintained web applications using React and Node.js.",
      "Collaborated with cross-functional teams to define, design, and ship new features.",
      "Improved application performance and scalability."
    ],
    description: "At Tech Solutions Inc., I have honed my skills in full-stack development, working on various projects that involve both frontend and backend technologies. This role has significantly improved my problem-solving abilities and my understanding of scalable web applications."
  },
  {
    id: 2,
    company: "Web Innovators",
    jobTitle: "Frontend Developer",
    startDate: "June 2018",
    endDate: "December 2019",
    responsibilities: [
      "Designed and implemented user-friendly interfaces using HTML, CSS, and JavaScript.",
      "Worked closely with backend developers to integrate APIs.",
      "Ensured cross-browser compatibility and responsiveness."
    ],
    description: "During my time at Web Innovators, I worked closely with a team of developers to create innovative web solutions. This experience has enhanced my teamwork skills and my ability to deliver high-quality code under tight deadlines."
  },
  {
    id: 3,
    company: "Creative Minds",
    jobTitle: "UI/UX Designer",
    startDate: "March 2016",
    endDate: "May 2018",
    responsibilities: [
      "Designed user interfaces and user experiences for web applications.",
      "Conducted user research and usability testing.",
      "Collaborated with developers to ensure design feasibility."
    ],
    description: "At Creative Minds, I was responsible for designing and implementing user-friendly interfaces. This role has greatly improved my design skills and my ability to create visually appealing and functional web applications."
  }
];

export default function WorkExperience() {
  

  return (

    <>
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
    <Project/>
    </>
  );
}