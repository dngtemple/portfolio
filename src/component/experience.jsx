import React from 'react'

export default function
 () {
  return (
    <div style={{
        background:
          'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("/back.jpeg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "100vh",
        width: "100%",
        padding: "2px",
      }}
    >

        <div className='p-2 ml-[5%] mb-5 mt-5 w-[90%] bg-gray-50 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>

            <h4 className='text-center text-white text-xl mt-10 mb-10'>Work Experience</h4>

            <div className='p-2 flex flex-wrap gap-2 mt-10'>
                <div class="card3 text-sm md:w-[48%] backdrop-blur-sm bg-opacity-20">
                <h4 class="card3-title">Software Developer Intern</h4>
                <p class="card3-title">My Apps Lab</p>
                <p class="card3-body">
               " 
               Successfully completed a remote Web Developer Internship,
                gaining hands-on experience in the MERN stack. Contributed
                 to full-stack development projects, led team meetings, and
                  resolved technical issues, enhancing problem-solving, teamwork,
                   and communication skills. This experience prepared me
                    for a successful career in tech.."
                </p>
                <p class="footer"> <span class="by-name">July 2024 - Now </span> </p>
                </div>
            
                <div class="card3 text-sm md:w-[48%]">
                <h4 class="card3-title">Frontend Developer Intern</h4>
                <p class="card3-title">IT Consortium</p>
                <p class="card3-body">
                Served as a Frontend Developer Intern at IT Consortium,
                 gaining proficiency in Figma for UI/UX design and learning
                  Python programming fundamentals. Successfully developed a Timebox project,
                 demonstrating the ability to apply theoretical knowledge to
                  practical applications and expand technical expertise.
                </p>
                <p class="footer"> <span class="by-name">August 2024 - September 2024 </span> </p>
                </div>


            </div>

        </div>
    </div>
  )
}
