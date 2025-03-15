import React from "react";
import Basicsupport from "../../assets/basicsupport.jpg"
import Specialized from "../../assets/specialized.png"
import Medical from "../../assets/medical.png"
// Example data for caregivers.
// Replace images and text with real data as needed.
const caregivers = [
  {
    name: "Basic",
    experience: `Assistance with daily activities such as meal preparation, hygiene, mobility, and companionship.`,
    expertise: "For Elderly individuals who need help with routine tasks but are otherwise independent.",
    hourlyRate: "₹15,000/month",
    image: Basicsupport
  },
  {
    name: "Standard",
    experience: "Care for seniors needing regular health monitoring and basic medical assistance at home.",
    expertise: "For Elderly individuals with mild medical.",
    hourlyRate: "₹21,000/month",
    image: Specialized,
  },
  {
    name: "Specialized",
    experience: "Professional in-home care for seniors with medical needs like dementia, Alzheimer's and post-surgery recovery.",
    expertise: "Specialized support for bedridden elders and those with chronic illnesses.",
    hourlyRate: "₹35,000/month",
    image: Medical,
  },

];

function CaregiverShowcase() {
  return (
    <section className="bg-[#0D0F1A] text-white py-12 md:py-20 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-[1200px]">
        {/* Small label above the heading */}
        <p className="text-sm uppercase tracking-widest text-center mb-2">
          Caregiver Segments
        </p>

        {/* Main heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 mt-8">
          Personalized Care Plan for Every Need!
        </h2>

        {/* Supporting text */}
        <p className="text-center max-w-2xl mx-auto mb-8 leading-relaxed">

        </p>

        {/* Call-to-action button */}
        

        {/* Caregiver cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
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
              <p className="text-sm font-bold">{caregiver.hourlyRate}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#contact-form" className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 cursor-pointer">
            Hire a caregiver
          </a>
        </div>
      </div>
    </section>  
  );
}

export default CaregiverShowcase;
