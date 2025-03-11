import React from "react";

// Example data for the six feature cards.
// Replace the icon with actual image paths or SVG icons as needed.
const features = [
  {
    title: "Quality caregivers",
    description: "Brand’s >95% vetted, background-checked caregivers are providing thousands of hours of care/month.",
    icon: "/placeholder-icon.png", // Replace with real icon
  },
  {
    title: "Affordable care",
    description: "Average cost of care at $33/hour. Care available for as low as $25/hour.",
    icon: "/placeholder-icon.png",
  },
  {
    title: "Care ASAP",
    description: "Depending on your needs, Clara can get a caregiver in place in as little as 24 hours.",
    icon: "/placeholder-icon.png",
  },
  {
    title: "Dedicated support",
    description: "Clara is available 7 days/week to provide coverage in all situations.",
    icon: "/placeholder-icon.png",
  },
  {
    title: "100% legal and insured",
    description: "Clara handles all the paperwork seamlessly with automated payroll and insurance.",
    icon: "/placeholder-icon.png",
  },
  {
    title: "Payment options",
    description: "Clara accepts long-term care insurance as well as Veterans benefits to pay for care.",
    icon: "/placeholder-icon.png",
  },
];

function Features() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        
        {/* Small label above the heading */}
        <p className="text-sm text-center text-gray-500 uppercase tracking-widest mb-2">
          Changing care forever
        </p>
        
        {/* Main heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-heading text-center mb-16">
          A new approach to in-home care that puts you in control
        </h2>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 text-center bg-white"
            >
              {/* Icon */}
              <div className="mb-4 flex justify-center">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-12 h-12 object-contain"
                />
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-semibold text-heading mb-2">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-body text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
