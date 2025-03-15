import React from "react";

const sections = [
  {
    title: "🌟 Our Vision",
    content:
      "To become the most reliable and trusted name for in-home elderly and child care, delivering compassionate and professional support tailored to individual needs.",
    image: "/our_vision.png", // Replace with actual image
    alt: "Vision",
  },
  {
    title: "🚀 Our Mission",
    content: (
      <ul className="space-y-2 text-body/80">
        <li>
          ✔{" "}
          <strong className="text-body">Certified & Trained Caregivers</strong>{" "}
          offering top-tier assistance.
        </li>
        <li>
          ✔ <strong className="text-body">24/7 In-Home Care</strong> with
          flexible and adaptable plans.
        </li>
        <li>
          ✔ <strong className="text-body">Personalized Services</strong>{" "}
          catering to cultural, linguistic, and specific needs.
        </li>
      </ul>
    ),
    image: "/our_mission.png", // Replace with actual image
    alt: "Mission",
  },
  {
    title: "🌍 Our Future Endeavor – Empowering the Workforce",
    content: (
      <>
        <p>
          As we grow, we aim to expand our platform, creating a{" "}
          <strong>LinkedIn for odd workers</strong>—a digital hub where
          households can seamlessly book reliable housemaids, cleaners, washers,
          and more.
        </p>
        <p className="mt-4">
          Our goal is to uplift and empower blue-collar workers by connecting
          them with the right opportunities through our app, making home
          services more accessible, organized, and trustworthy.
        </p>
      </>
    ),
    image: "/future_vision.png", // Replace with actual image
    alt: "Future Vision",
  },
];

const Mission = () => {
  return (
    <div className="bg-white py-16 px-6 lg:px-24" id="mission">
      <div className="max-w-[700px] mx-auto">
        <h2 className="text-4xl font-bold text-heading text-center mb-8">
          Our Mission & Vision
        </h2>
        <p className="text-center text-body max-w-3xl mx-auto">
          At <span className="font-semibold">Nurture Lane</span>, we are
          dedicated to redefining in-home care, ensuring comfort, dignity, and
          trust for every family we serve.
        </p>

        <div className="">
          {/* Iterate over sections */}
          {sections.map((section, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-10 mt-12 border-b pb-4 border-b-body/40`}
            >
              <div className="lg:w-1/2 flex-1">
                <h3 className="text-2xl font-bold text-heading mb-4">
                  {section.title}
                </h3>
                <div className="text-body/80 text-sm leading-relaxed">
                  {section.content}
                </div>
              </div>
              <img src={section.image} alt={section.alt} className="w-[20%]" />
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-heading mb-4">
            Join Us on Our Journey
          </h3>
          <p className="text-body/80">
            We’re not just a service; we’re a movement toward a more connected,
            caring, and efficient society. Experience the future of home care
            and household services with{" "}
            <span className="font-semibold">[Your Company Name]</span>.
          </p>
          <p className="text-xl font-bold text-primary mt-4">
            Together, we build a better tomorrow. 🌍
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
