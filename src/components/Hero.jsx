// src/components/Hero.jsx

import React from "react";
// import HeroImage from "../assets/hero-image.jpg"; 
// Replace with your actual image


function Hero() {
  return (
    <section className="bg-accent py-12 md:py-20 min-h-screen flex items-center justify-center"> 
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center">

        {/* Text Content */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <h1 className="text-3xl md:text-5xl font-normal font-tertiary text-heading mb-4">
            Trusted In-Home Care
          </h1>
          <p className="text-body mb-8 max-w-lg">
            Nurture Lane uses modern technology to help families find and hire
            their ideal caregiver for an affordable price.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact-form" className="bg-gray-900 text-white px-6 py-3 font-bold rounded-md hover:bg-gray-7all00">
              Book Your Free Trial
            </a>
            {/* <button className="border border-primary text-primary px-6 py-3 rounded-md font-medium hover:bg-gray-800">
              Apply for a care job
            </button> */}
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end image-wrapper relative">
          <img
            src={"/hero-image.jpg"}
            alt="Caregiver with elderly person"
            className="max-w-full h-auto"
          />
          <div className="bottom-0 left-0 w-full h-1/2 absolute bg-gradient-to-b from-accent/0 to-accent/100 "/>
        </div>
      </div>
    </section>
  );
}

export default Hero;
