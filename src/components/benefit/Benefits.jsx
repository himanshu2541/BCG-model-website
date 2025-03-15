import React from "react";
import benefit_image from "../../assets/elderly-person-wheelchair-caregiver.png"; // Ensure the image is stored in the correct path

const Benefits = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-12 min-h-screen">
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-heading text-4xl font-bold leading-tight">
          Trained & Certified Caregivers, Personalized for You
        </h2>
        <p className="text-body text-lg">
          Our caregivers are professionally trained and certified to provide top-quality in-home care.
        </p>
        <ul className="space-y-3 text-body text-sm">
          <li>🔹 24/7 In-Home Care – Our primary service ensures round-the-clock support.</li>
          <li>🔹 Personalized Plans – Clients can tailor their care plans to meet their specific needs.</li>
          <li>🔹 Special Preferences – Choose caregivers based on cultural, linguistic, or other personal preferences.</li>
        </ul>
        {/* <button className="mt-6 px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-secondary transition font-semibold text-lg">
          Get Started
        </button> */}
      </div>
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img src={benefit_image} alt="Caregiver and patient" className="max-w-full h-auto " />
      </div>
    </div>
  );
};

export default Benefits;
