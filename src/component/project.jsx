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
    <div className='flex justify-center '
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
        {/* <div className="slider-container w-[50%]  h-40 bg-red-400" >
      <Slider {...settings}>
        <div>
          <img className='h-[50%]' src='/back.png' />
        </div>
        <div>
          <img  src='/back.png' />
        </div>
        <div>
          <img  src='/back.png' />
        </div>
        <div>
          <img src='/back.png'/>
        </div>
      </Slider>
    </div> */}
      

    </div>
  )
}



  