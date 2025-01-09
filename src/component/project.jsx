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
    <div className='flex justify-center relative '
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
      <h4 className='text-center text-white text-2xl'>Projects</h4>
     
<div class="loop cubes">
    <div class="item cubes"></div>
    <div class="item cubes"></div>
    <div class="item cubes"></div>
    <div class="item cubes"></div>
    <div class="item cubes"></div>
    <div class="item cubes"></div>
</div>
      

    </div>
  )
}



  