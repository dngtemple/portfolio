import React from 'react'
import Slider from 'react-slick'



export default function project() {

    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
      }

   

  return (
    <div className='flex  relative '
      style={{
        background:
          'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("/back.jpeg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "100vh",
        width: "100%",
        padding: "0px",
      }}

    >     
<div class="loop cubes">
    <div class="item cubes"></div>
    <div class="item cubes"></div>
    <div class="item cubes"></div>
    <div class="item cubes"></div>
    <div class="item cubes"></div>
    <div class="item cubes"></div>
</div>

   <div className='absolute w-[90%] ml-[5%] mb-10 p-4 bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>

   <h4 className='text-center text-white text-2xl '>Projects</h4>


   </div>
      

    </div>
  )
}



  