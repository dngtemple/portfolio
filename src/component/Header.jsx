import React from 'react'
import photo from "../assets/photo.jpg"

export default function Header() {
  return (
    <section className='side_header_section'>

      <div className='side_header'>

        <img className="header_image" src={photo}/>
        
      </div>

      <div className='side_details'>
        <h4>Clinton Templeton</h4>

        <p style={{fontSize:"14px",marginTop:"5px",padding:"0px 20px"}}>Full-Stack Web Developer</p>


        <span style={{fontSize:"13px",marginTop:"25px"}}>Contact Me</span>
        <div className='side_icons'>
          <a href='https://wa.me/233277169914'>
           <i  style={{color:"green"}} className='fa-brands fa-whatsapp'></i>
          </a>

          <a href="mailto:donnahaytempleton1230@gmail.com">
           <i style={{color:"red"}} className='fa-solid fa-envelope'></i>
          </a>

          <a href='https://x.com/dngtemple'>
           <i style={{color:"blue"}} className='fa-brands fa-twitter'></i>
          </a>
        </div>

      </div>

    </section>
  )
}
