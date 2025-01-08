import React from "react"
import {
   MdHome ,
   MdPersonRemove,
   MdContactPage,
   MdPallet

 } from "react-icons/md";




const Navbar = () => {
  return (
   <div className='p-2 flex justify-between h-8 items-center ml-[5%] mt-5 w-[90%] bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>

      <h4 className="text-black">DngTemple</h4>

    <div >
    <ul className="menu menu-xs menu-horizontal menu-dropdown-toggle bg-base-200 rounded-box">
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



  );
};

export default Navbar;

