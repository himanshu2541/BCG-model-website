import React from "react";
import { FaClock, FaUserCheck, FaHandsHelping } from "react-icons/fa";
import benefit_image from "../../assets/elderly-person-wheelchair-caregiver.png";

const Benefits = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-12 min-h-screen">
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-heading text-4xl font-bold leading-tight">
          Trained & Certified Caregivers, Personalized for You
        </h2>
        <p className="text-body">
          Our caregivers are professionally trained and certified to provide top-quality in-home care.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center">
            <FaClock className="text-4xl text-blue-500" />
            <h3 className="text-lg font-semibold mt-2">24/7 Care</h3>
          </div>
          <div className="flex flex-col items-center">
            <FaUserCheck className="text-4xl text-green-500" />
            <h3 className="text-lg font-semibold mt-2">Certified Caretakers</h3>
          </div>
          <div className="flex flex-col items-center">
            <FaHandsHelping className="text-4xl text-purple-500" />
            <h3 className="text-lg font-semibold mt-2">Personalized Support</h3>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img src={benefit_image} alt="Caregiver and patient" className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default Benefits;
