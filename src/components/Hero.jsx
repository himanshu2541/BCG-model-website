// src/components/Hero.jsx

import React from "react";
// import HeroImage from "../assets/hero-image.jpg"; 
// Replace with your actual image

function Hero() {
  return (
    <section className="bg-accent py-12 md:py-20">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center">
        
        {/* Text Content */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <h1 className="text-3xl md:text-5xl font-normal font-tertiary text-heading mb-4">
            Quality in-home care for less than $35 per hour
          </h1>
          <p className="text-body mb-8 max-w-lg">
            Nurture uses modern technology to help families find and hire
            their ideal caregiver for an affordable price.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90">
              Find a caregiver
            </button>
            <button className="border border-primary text-primary px-6 py-3 rounded-md font-medium hover:bg-primary/10">
              Apply for a care job
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={'https://framerusercontent.com/images/4gK0HuCpW8x5sfRxHRadQuEiA8.png'}
            alt="Caregiver with elderly person"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
