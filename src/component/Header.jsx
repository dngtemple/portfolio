import React from 'react'

export default function Header() {
  return (
    <section className='side_header_section'>

      <div className='side_header'>

        <img className="header_image" src='https://images.pexels.com/photos/4098288/pexels-photo-4098288.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'/>
        
      </div>

      <div className='side_details'>
        <h3>Clinton Templeton</h3>

        <p style={{fontSize:"15px",marginTop:"5px"}}>Full Stack Web Developer</p>


        <div className='side_icons'>
          <a href='https://wa.me/233277169914'>
           <i  style={{color:"green"}} className='fa-brands fa-whatsapp'></i>
          </a>

          <a href="mailto:donnahaytempleton1230@gmail.com">
           <i style={{color:"red"}} className='fa-solid fa-envelope'></i>
          </a>
          <i style={{color:"blue"}} className='fa-brands fa-twitter'></i>
        </div>

      </div>

    </section>
  )
}
