import React from "react"
import {
   MdHome ,
   MdPersonRemove,
   MdContactPage,
   MdPallet,
   MdWhatsapp,
   MdEmail,
   MdFacebook

 } from "react-icons/md";




const Navbar = () => {
  return (
<div className="flex   gap-10 flex-col"
  style={{
    background: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("/back.jpeg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    height: '100vh',
    width: '100%',
    padding: '5px',
  }}
>
 
  
   <div className='p-2 flex justify-between h-8 items-center ml-[5%] mt-5 w-[90%] bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>

     <img src="/facebook_cover_photo_1.png" className="w-8 h-full"/>

    <div >
    <ul className="menu menu-xs menu-horizontal menu-dropdown-toggle bg-info rounded-box">
  <li>
    <a className="tooltip" data-tip="Home">
      <MdHome className="text-xl"/>
    </a>
  </li>
  <li>
    <a className="tooltip" data-tip="Projects">
      <MdPallet className="text-xl"/>
      
    </a>
  </li>
  <li>
    <a className="tooltip" data-tip="Contact">
      <MdContactPage className="text-xl"/>
    </a>
  </li>
</ul>
    </div>
      
   </div>

   <div className=" gap-4 flex  flex-col-reverse items-center text-sm p-4 text-white sm:flex-row sm:text-l md:text-xl  sm:items-center  sm:gap-8 md:gap-20 w-[90%] ml-[5%] mt-[5%]  sm:p-14 md:p-8 bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
    <div className=" h-full sm:w-10 w-full flex flex-row sm:flex-col gap-1.5 text-2xl items-center justify-center">
      <MdWhatsapp className="text-l text-info"/>
      <MdEmail  className="text-l text-info"/>
      <MdFacebook  className="text-l text-info"/>
      <MdPallet  className="text-l text-info"/>

    </div>

    <div className="bg-transparent p-2 sm:p-8 ">
      <h3 className="text-3xl sm:text-5xl night">Hi! There 👋</h3>
      <p className="text-sm sm:text-l mt-2  font-light">I’m Clinton  Templeton, a passionate 21-year-old full-stack web developer based in Accra, Ghana. With 2+ years of experience, I specialize in crafting dynamic, responsive, and user-friendly web applications. My expertise spans the entire development stack, from designing captivating user interfaces to building robust backend systems.

I thrive on transforming ideas into functional, visually appealing digital solutions. Whether it’s collaborating with teams to bring projects to life or working independently on innovative web applications, I approach every challenge with enthusiasm and dedication.</p>

<button class="btn-sm mt-6 btn btn-info">Get In Touch <MdWhatsapp className="text-sm text-black"/></button>

    </div>

   </div>

   </div>

  );
};

export default Navbar;

