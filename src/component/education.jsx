import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Education() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="container mx-auto my-10 px-4">
      <h2 className="text-center text-3xl font-bold mb-6 text-info" data-aos="fade-down">Education</h2>
      <div className="bg-white rounded-lg shadow-md p-6" data-aos="fade-up">
        <h3 className="text-xl font-semibold text-info">University of Professional Studies, Accra (UPSA)</h3>
        <p className="text-gray-600 text-sm mb-2">Bachelor of Science in Information Technology Management</p>
        <p className="text-gray-600 text-sm mb-4">Expected Graduation: August 2025</p>
        <p className="text-gray-700">
          I am currently pursuing a Bachelor of Science in Information Technology Management at the University of Professional Studies, Accra (UPSA). My coursework includes a comprehensive study of IT management, software development, and business processes. I am expected to graduate in August 2025.
        </p>
      </div>
    </div>
  );
}