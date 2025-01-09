import React from 'react';

const Testimonials = () => {
    return (
       
            <div className='relative flex'
                style={{
                    background:
                        'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("/back.jpeg")',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                    // height: "100vh",
                    width: "100%",
                    padding: "2px",
                }}
            >

                <div className=' w-[90%] ml-[5%] mt-5 p-1 bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>

                    <h4 className='text-center text-white text-xl mt-10 mb-10'>What People Are Saying About Me</h4>


                    <div className='p-4 bg-transparent flex-wrap flex gap-1'>
                           <div class="card1 sm:w-[49%]">
                            <div class="content1 bg-info">
                                
                                <p class="para">
                                "Working with Clinton was a game-changer for our project.
                                 He ensured our website looked stunning and worked flawlessly
                                  across all devices. His frontend expertise is second to none." - 
                                  <span className='font-light from-neutral-400 text-gray-600'> Andikan,Marketing Lead at Crivre</span>
                                </p>
                            </div>
                            </div>

                            <div class="card1 sm:w-[49%] ">
                            <div class="content1 bg-info">
                               
                                <p class="para">
                                " He was a key player in our development team,
                                 contributing not only with his coding skills but also
                                  with great ideas and collaborative energy. Our web app
                                   would not be what it is without his input."
                                </p>
                            </div>
                            </div>

                           <div class="card1 sm:w-[49%]">
                            <div class="content1">
                                
                                <p class="para">
                                "He developed a custom landing page for our startup,
                                 and the results were outstanding. The performance and
                                  design optimized conversions and left a lasting impression on our clients."
                                </p>
                            </div>
                            </div>


                           <div class="card1 sm:w-[49%]">
                            <div class="content1">
                               
                                <p class="para">
                                "The flow of the website is intuitive, and our users have
                                 given great feedback about the experience." - 
                                 <span className='font-light from-neutral-400 text-gray-600'>Micheal Affum</span>
                                </p>
                            </div>
                            </div>

                           


                    </div>

                    

                </div>
               
           </div>
    );
}

export default Testimonials;