import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: "",
    role: "Kwarteng",
    rating: 5,
    feedback: "Yes , he communicates well, delivers on time. And he is easy to work with."
  },
  {
    id: 2,
    name: "",
    role: "Project Manager, Crivre Inc",
    rating: 4.5,
    feedback: `The front page looks great!!
         Thanks for the changes I really love it` 
  },
  {
    id: 3,
    name: "",
    role: "",
    rating: 4,
    feedback: `And I really really appreciate the speed and efforts we've put in so far..
Honestly.`
  }
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <>
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={index} className="text-yellow-500" />
      ))}
      {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar key={index} className="text-yellow-500" />
      ))}
    </>
  );
};

export default function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section class="py-6 text-blue-900 sm:py-16 lg:py-20">
  <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-screen-lg lg:px-8">
      <h2 class="text-3xl mb-10 font-bold text-info text-center">Have a look at what my clients say</h2>
    <div class="flex flex-col lg:flex-row">
      <div class="relative mx-auto mb-10 flex h-96 overflow-hidden rounded-xl bg-info shadow sm:mt-20  lg:h-auto lg:max-w-md lg:pt-20">
      <img class="absolute top-0 h-full w-full object-cover opacity-10" src="/consult.png" alt="" />
        <div class="relative mt-auto w-full">
          <div class="flex flex-col p-6 lg:px-7 lg:py-8">
            <div class="">
              <blockquote class="">
                <p class="text-3xl font-bold text-white sm:text-5xl">"I cannot overstate how much this has helped my business"</p>
              </blockquote>
            </div>

            <div class="mt-10 flex items-center">
              <div class="ml-4 text-white">
                <p class="text-base font-bold">Kojo Kwarteng</p>
                {/* <p class="text-blue-90 mt-0.5 text-sm">Youtube Personality</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="relative mx-auto grid max-w-lg grid-cols-1 gap-y-14 lg:pl-20">
        <div class="flex flex-col bg-white">
          <div class="">
            <blockquote class="">
              <p class="text-lg leading-relaxed text-black">"His input on our app design and frontend  has added tremendous value to our product roadmap."</p>
            </blockquote>
          </div>

          <div class="mt-4 flex items-center">
            {/* <img class="h-11 w-11 flex-shrink-0 rounded-full object-cover" src="/images/y9s3xOJV6rnQPKIrdPYJy.png" alt="" /> */}
            <div class="ml-4">
              <p class="text-base font-bold text-info">Andikan</p>
              <p class="mt-0.5 text-sm text-info">Project manager, Crivre Inc.</p>
            </div>
          </div>
        </div>

        <div class="flex flex-col bg-white">
          <div class="">
            <blockquote class="">
              <p class="text-lg leading-relaxed text-black">"His professionalism, deep knowledge of modern web technologies, and dedication to delivering pixel-perfect solutions truly impressed our entire team."</p>
            </blockquote>
          </div>

          <div class="mt-4 flex items-center">
            <div class="ml-4">
              <p class="text-base font-bold text-info">Elvis Agah</p>
              {/* <p class="text-blue-90 mt-0.5 text-sm">Youtube Personality</p> */}
            </div>
          </div>
        </div>

        <div class="flex flex-col bg-white">
          <div class="">
            <blockquote class="">
              <p class="text-lg leading-relaxed text-black">"Working with Templeton was a game changer for our business. His ability to translate complex technical issues into simple, actionable solutions made our tech consultation sessions highly productive. We saw immediate improvements in performance and client satisfaction."</p>
            </blockquote>
          </div>

          <div class="mt-4 flex items-center">
            {/* <img class="h-11 w-11 flex-shrink-0 rounded-full object-cover" src="/images/fR71TFZIDTv2jhvKsOMhC.png" alt="" /> */}
            <div class="ml-4">
              <p class="text-base font-bold text-info ">Jessica Awuah</p>
              {/* <p class="text-blue-90 mt-0.5 text-sm">Esports Commentator</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


  );
}