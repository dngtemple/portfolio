import { div } from 'framer-motion/client'
import React from 'react'
import { FaInstagramSquare, FaTelegram, FaWhatsappSquare } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

export default function footer() {
  return (
   <div  style={{
    background:
      'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("/back.jpeg")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    // height: "100vh",
    width: "100%",
    padding: "4px",
  }}>

<div className="container flex flex-col justify-center items-center">
              
              <div className="flex justify-between items-center flex-col lg:flex-row w-full lg:grid-cols-3  gap-6 mt-1">
                <a
                  href=""
                  className="logo text-white flex items-center gap-2 font-ClashDisplayMed capitalize text-xl"
                >
                  {/* <img src="image.png" alt="" className="w-[2rem] sm:w-[2rem]" /> */}
                </a>
                <p className="text-white text-sm font-normal font-['Clash Display'] leading-relaxed">
                  Copyright © {new Date().getFullYear()} All Rights Reserved.
                </p>
                <div className="flex items-center gap-3">
                  <a href="https://t.me/dngtemple">
                    <FaTelegram className='text-white text-2xl'/>
                  </a>
                  <a href="https://twitter.com/dngtemple">

                    <FaSquareXTwitter className='text-white text-2xl' />
                  </a>
                  <a href="https://wa.me/233277169914
">
      
                    <FaWhatsappSquare className='text-white text-2xl'/>
                  </a>

                  {/* <a href="https://www.instagram.com/kojo_kwartz?igsh=MWh1a3YxcW9rZGV3bA==">

                    <FaInstagramSquare className='text-white text-2xl'/>
                  </a> */}
                </div>
              </div>
            </div>

   </div>
  )
}
