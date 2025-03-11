import React, { useState } from "react";

// Replace these images with your actual file imports or URLs
import ImageStep1 from "/placeholder-icon.png";
import ImageStep2 from "/avatar.jpg";
import ImageStep3 from "/placeholder-icon.png";

const stepsData = [
  {
    id: 1,
    title: "Find personalized care",
    description: `Choose from our network of 750+ local caregivers 
    with the help of our care experts to find the best 
    care for your loved one's needs.`,
    image: ImageStep1,
  },
  {
    id: 2,
    title: "Interview & hire",
    description: `Phone, virtual, or in-person visits available. 
    Discuss needs, schedules, and get comfortable 
    with the caregiver before hiring.`,
    image: ImageStep2,
  },
  {
    id: 3,
    title: "Receive care",
    description: `Quality care can begin in as little as 24 hours. 
    Enjoy peace of mind knowing your loved one 
    is receiving top-notch support.`,
    image: ImageStep3,
  },
];

function StepsSection() {
  const [activeStep, setActiveStep] = useState(1);

  const currentStep = stepsData.find((step) => step.id === activeStep);

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Label above heading */}
        <p className="text-center text-sm text-gray-500 uppercase tracking-widest mb-2">
          Benefits
        </p>

        {/* Main heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-heading text-center mb-8">
          Getting started is as easy as 1-2-3
        </h2>

        <div className="flex flex-col md:flex-row md:space-x-8 gap-8">
          {/* Left side: Steps */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            {stepsData.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`w-full text-left p-4 mb-4 rounded-md border 
                  ${
                    activeStep === step.id
                      ? "border-primary bg-primary/5"
                      : "border-gray-200 hover:border-primary/50"
                  }
                `}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full font-semibold 
                      ${
                        activeStep === step.id
                          ? "bg-primary text-white"
                          : "bg-gray-100 text-gray-600"
                      }
                    `}
                  >
                    {step.id}
                  </div>
                  <div>
                    <h3
                      className={`text-base font-semibold 
                        ${
                          activeStep === step.id
                            ? "text-primary"
                            : "text-heading"
                        }
                      `}
                    >
                      {step.title}
                    </h3>
                    <p className="text-sm text-body mt-1">
                      {/* Show a short snippet or the entire description if you want */}
                      {step.description.split(".")[0]}.
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right side: Image & full description */}
          <div className="flex flex-col items-center">
            {/* Image */}
            <div className="w-full mb-6 h-96 md:h-96 overflow-clip rounded-md">
              <img
                src={currentStep.image}
                alt={currentStep.title}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Full description */}
            <p className="text-body text-center max-w-xl">
              {currentStep.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StepsSection;
