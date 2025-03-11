import React from "react";
// Replace with your actual image import
import WatercolorImage from "../../assets/elderly-person-wheelchair-caregiver.png";
import StatCard from "./StatCard";

function Benefits() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
            All the benefits of an agency, 40% lower cost.
          </h2>
          <p className="text-body mb-8 max-w-md">
            Unlike agencies’ 50% markup, Clara charges a low 15% fee for
            full-service access.
          </p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
            <StatCard value="780" label="Caregivers" />
            <StatCard value="7.7" label="Avg H5 Exp" />
            <StatCard value="$32.33" label="Avg Cost" />
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src={WatercolorImage}
            alt="Elderly person and caregiver in watercolor style"
            className="max-w-full h-auto "
          />
        </div>
      </div>
    </section>
  );
}

export default Benefits;
