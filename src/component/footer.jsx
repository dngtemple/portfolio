import { div } from 'framer-motion/client'
import React from 'react'
import { FaInstagramSquare, FaTelegram, FaWhatsappSquare, } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

export default function footer() {
  return (
   <div  style={{
    backgroundColor:"black",
    width: "100%",
    padding: "1px",
  }}>

<div className="container flex flex-col justify-center items-center">
              <div className="flex justify-center items-center flex-col lg:flex-row w-full lg:grid-cols-3  gap-6 mt-1">

                <div className="p-2 flex items-center gap-3">
                  <a href="https://t.me/dngtemple">
                    <FaTelegram className='text-info text-xl'/>
                  </a>
                  <a href="https://twitter.com/dngtemple">

                    <FaSquareXTwitter className='text-info text-xl' />
                  </a>
                  <a href="https://wa.me/233277169914">
                    <FaWhatsappSquare className='text-info text-xl'/>
                  </a>
                  <a href="">
                    <FaInstagramSquare className='text-info text-xl'/>
                  </a>

                </div>
              </div>
            </div>

   </div>
  )
}
