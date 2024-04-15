import React from 'react'
import photo from "../assets/thri.jpeg"

export default function Side() {

  let skills=[
    {
      name:"html",
      src:"https://cdn-icons-png.flaticon.com/128/5968/5968267.png"
    },
    {
      name:"css",
      src:"https://cdn-icons-png.flaticon.com/128/5968/5968242.png"
    },
    {
      name:"js",
      src:"https://cdn-icons-png.flaticon.com/128/5968/5968292.png"
    },
    {
      name:"react",
      src:"https://cdn-icons-png.flaticon.com/128/919/919851.png"
    },
    {
      name:"mongo",
      src:"https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png"
    },
    {
      name:"node",
      src:"https://cdn-icons-png.flaticon.com/128/15379/15379746.png"
    },
    {
      name:"figma",
      src:"https://cdn-icons-png.flaticon.com/128/5968/5968705.png"
    },
    {
      name:"figma",
      src:"https://cdn-icons-png.flaticon.com/128/5968/5968350.png"
    },
    {
      name:"figma",
      src:"https://cdn.worldvectorlogo.com/logos/next-js.svg"
    },
    
  ];
  return (
    <section className='side_info_section'>
        <div className='side_info'>
        <div className='up_icons'>
        <a style={{color:"white"}} class="text-2xl transition-all duration-300 hover:text-primary" href="https://www.linkedin.com/in/clinton-templeton-a8700a271" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
        <a style={{color:"white"}} class="text-2xl transition-all duration-300 hover:text-primary" href="https://github.com/dngtemple" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
        </div>
         
          <h3 style={{textAlign:"center",fontWeight:"100"}}>About me</h3>

          <p style={{fontSize:"13px",marginTop:"20px",fontWeight:"40",fontFamily:"segoe ui"}}>
          Clinton is a steadfast and detail-oriented software developer,
           driven by a profound dedication to utilizing technology to propel 
           organizational objectives and bolster financial outcomes. 
           He possesses a fervent belief in the merits of test-driven
            development, recognizing its capacity to yield code of superior
             functionality and reliability.Thriving within collaborative 
            frameworks, Clinton is a proponent of fostering effective communication
            channels characterized by empathy, active listening, and mutual
            regard. He demonstrates a remarkable talent for articulating his journey as a web
            developer with transparency and levity. His contributions to
            various Medium publications serve not only to inform but also
          o inspire and uplift fellow developers and programmers, 
          instilling a sense of camaraderie and motivation within the
            community. Through her insightful narratives and thoughtful reflections,
            Clinton stands as a beacon of encouragement, promoting growth and
            excellence within the field of software development.
          </p>


          <h3 style={{textAlign:"center",fontWeight:"100",marginTop:"30px"}}>Skills</h3>



          <div className='skills_section'>

            {
              skills.map(function(a,i){
                return(
                  <div className='skills'>
                    <img className='skill' src={a.src}/>
                  </div>

                )
              })
            }

          </div>

          <h3 style={{textAlign:"center",fontWeight:"100",marginTop:"30px"}}>Work Experience</h3>

          <div className='work_exp'>

           <div className='work_ex'>
              <h4 style={{textAlign:"center"}}>Crivre</h4>

              <p  style={{textAlign:"center",fontSize:"15px"}}>Web Application Developer</p>


              <p style={{fontSize:"12px",padding:"0px",fontFamily:"segoe ui",marginTop:"30px"}}>
              By collaborating with my fellow developers, in Nigeria 
              I contributed to the design, development, and
               implementation of Civre, ensuring its functionality
                and user-friendliness met the needs of the university
                 community. My involvement in this project not only 
                 honed my technical skills but also provided me with
                  valuable experience in teamwork, problem-solving, 
                  and project management within a dynamic and collaborative 
                  environment.
              </p>

            </div>
            

            <div className='work_ex'>
              <h4 style={{textAlign:"center"}}>Greyman Luxury</h4>

              <p  style={{textAlign:"center",fontSize:"15px"}}>Freelancer</p>


              <p style={{fontSize:"12px",padding:"0px",fontFamily:"segoe ui",marginTop:"30px"}}>
              Through meticulous planning and execution, 
              I conceptualized and built custom software tailored 
              to streamline their sales processes and enhance their 
              online presence leading to business growth and efficiency.
               The sales grew about 45%, while efficiency improved about 
               35%, resulting in a more streamlined workflow and increased
                profitability.
              </p>

            </div>

            <div className='work_ex'>
              <h4 style={{textAlign:"center",}}>Sky-Tech Enterprise</h4>

              <p style={{textAlign:"center",fontSize:"15px"}}>Administrative Assistant</p>


              <p style={{fontSize:"12px",padding:"0px",fontFamily:"segoe ui",marginTop:"30px"}}>
              I undertook a diverse range of tasks crucial to the smooth operation of the office environment.
               These responsibilities encompassed various administrative, clerical,
                 duties aimed at supporting the effectiveness of the team.My role involved managing
                  correspondence, both incoming and outgoing, including emails,
                   letters, and phone calls. I maintained and organized files,
                    records, and documentation, ensuring they were easily accessible
                     when needed.
              </p>

            </div>

          

          </div>

          <h3 style={{textAlign:"center",fontWeight:"100",marginTop:"30px"}}>Project</h3>

          {/* <div className='project_section'>
            <div className='projects'>

              <img src={photo}/>

              <div className='git_and_link' >
                <a target='_blank' href='https://github.com/dngtemple/webdev/tree/master/practice/thrillophillia'>
                  <i style={{color:"black",fontSize:"20px"}} class="fa-brands fa-github"></i> 
                </a>
              <i style={{color:"black",fontSize:"20px"}} class="fa-solid fa-arrow-up-right-from-square"></i>

              </div>

            </div>

          </div> */}


        </div>

    </section>
  )
}
