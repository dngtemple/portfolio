import React from "react";
import { motion } from "framer-motion";

export default function DrawCircleText(){
  return (
    <div className="grid place-content-center bg-white px-4 py-24 text-yellow-50">
      <h1 className="max-w-2xl text-center text-info text-5xl leading-snug">
        Scale your{" "}
        <span className="relative">
          busineess
          <svg
            viewBox="0 0 286 73"
            fill="none"
            className="absolute -left-2 -right-2 -top-2 bottom-0 translate-y-1"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{
                duration: 1.25,
                ease: "easeInOut",
              }}
              d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
              stroke="#FACC15"
              strokeWidth="3"
            />
          </svg>
        </span>{" "}
        with a simple website
      </h1>
      <p className="mt-8 max-w-2xl text-center text-lg text-neutral-600">
        Elevate your brand presence and engage customers effectively by building a fast,
        responsive, and user-friendly website tailored to your business goals. A professionally designed
        web presence not only strengthens credibility but also drives growth through seamless digital experiences.
      </p>
    </div>
  );
};