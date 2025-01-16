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
    <div className="container mx-auto my-10 px-4">
      <h2 className="text-center text-3xl font-bold mb-6 text-info" data-aos="fade-down">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6" data-aos="fade-up">
            <p className="text-gray-700 mb-4">"{testimonial.feedback}"</p>
            <div className="flex items-center mb-2">
              {renderStars(testimonial.rating)}
            </div>
            <h3 className="text-xl font-semibold text-info">{testimonial.name}</h3>
            <p className="text-gray-600 text-sm">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}