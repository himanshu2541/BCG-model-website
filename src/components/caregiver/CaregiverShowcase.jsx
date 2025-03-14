import React from "react";
import Basicsupport from "../../assets/basicsupport.jpg"
// Example data for caregivers.
// Replace images and text with real data as needed.
const caregivers = [
  {
    name: "Basic Daily Support",
    experience: `Assistance with daily activities such as meal preparation, hygiene, mobility, and companionship.`,
    expertise: "For Elderly individuals who need help with routine tasks but are otherwise independent.",
    languages: "Hindi, English, Regional Languages",
    hourlyRate: "$32.50/hr",
    image: Basicsupport
  },
  {
    name: "Semi-Medical Care",
    experience: "6 years of caregiving experience",
    expertise: "Expertise in 44-hr/week coverage",
    languages: "English, Spanish",
    hourlyRate: "$29.00/hr",
    image: "/avatar.jpg",
  },
  {
    name: "Amelia Liran",
    experience: "5 years of caregiving experience",
    expertise: "Expert in 8-hr/day shifts",
    languages: "English",
    hourlyRate: "$30.00/hr",
    image: "/avatar.jpg",
  },

];

function CaregiverShowcase() {
  return (
    <section className="bg-[#0D0F1A] text-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Small label above the heading */}
        <p className="text-sm uppercase tracking-widest text-center mb-2">
          Caregiver Segments
        </p>

        {/* Main heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Personalized Care Plan for Every Need!
        </h2>

        {/* Supporting text */}
        <p className="text-center max-w-2xl mx-auto mb-8 leading-relaxed">

        </p>

        {/* Call-to-action button */}
        <div className="text-center mb-10">
          <button className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 cursor-pointer">
            Hire a caregiver
          </button>
        </div>

        {/* Caregiver cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {caregivers.map((caregiver, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-xl p-5 shadow-md flex flex-col items-center"
            >
              <img
                src={caregiver.image}
                alt={caregiver.name}
                className="w-16 h-16 mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-heading mb-1">
                {caregiver.name}
              </h3>
              <p className="text-sm text-center text-body mb-2">{caregiver.experience}</p>
              <p className="text-sm text-center text-body mb-2">{caregiver.expertise}</p>
              <p className="text-sm text-center text-body mb-2">{caregiver.languages}</p>
              <p className="text-sm font-bold">{caregiver.hourlyRate}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaregiverShowcase;
