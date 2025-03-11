import React from "react";

// Example data for caregivers.
// Replace images and text with real data as needed.
const caregivers = [
  {
    name: "Janita Gaines",
    experience: "7 years of caregiving experience",
    expertise: "Expertise in 24/7 in-home care",
    languages: "English, Spanish",
    hourlyRate: "$32.50/hr",
    image: "/avatar.jpg",
  },
  {
    name: "Adriana Anagnette",
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
  {
    name: "Bonnie Kessik",
    experience: "8 years of caregiving experience",
    expertise: "Expert in Dementia & Alzheimer's care",
    languages: "English, French",
    hourlyRate: "$35.00/hr",
    image: "/avatar.jpg",
  },
];

function CaregiverShowcase() {
  return (
    <section className="bg-[#0D0F1A] text-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Small label above the heading */}
        <p className="text-sm uppercase tracking-widest text-center mb-2">
          Caregiver Showcase
        </p>

        {/* Main heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Hire vetted, high-quality caregivers through Brandname
        </h2>

        {/* Supporting text */}
        <p className="text-center max-w-2xl mx-auto mb-8 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro fuga quisquam eius a iure culpa quas doloribus qui nemo nisi. Quod sint, dolorum consecte
        </p>

        {/* Call-to-action button */}
        <div className="text-center mb-10">
          <button className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 cursor-pointer">
            Hire a caregiver
          </button>
        </div>

        {/* Caregiver cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {caregivers.map((caregiver, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-xl p-5 shadow-md flex flex-col items-center"
            >
              <img
                src={caregiver.image}
                alt={caregiver.name}
                className="w-16 h-16 rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-heading mb-1">
                {caregiver.name}
              </h3>
              <p className="text-sm text-body mb-2">{caregiver.experience}</p>
              <p className="text-sm text-body mb-2">{caregiver.expertise}</p>
              <p className="text-sm text-body mb-2">{caregiver.languages}</p>
              <p className="text-sm font-medium">{caregiver.hourlyRate}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaregiverShowcase;
