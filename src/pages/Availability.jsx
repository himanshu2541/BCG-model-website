import React from "react";
import Navbar from "../components/navbar/Navbar";
import {  useNavigate } from "react-router-dom";

const cities = [
  "Bangalore", "Delhi NCR", "Mumbai", "Chennai", "Pune", "Hyderabad",
  "Ahmedabad", "Jaipur", "Vadodara", "Kolkata", "Chandigarh", "Kochi",
  "Lucknow", "Varanasi", "Ranchi", "Prayagraj"
];

const Availability = () => {
  const navigate = useNavigate();

  const handleContactUs = () => {
    navigate("/");
    setTimeout(() => {
      const contactForm = document.getElementById("contact-form");
      if (contactForm) {
        contactForm.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Delay to ensure navigation completes
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col max-w-[1200px] min-h-screen mx-auto p-6 mt-12">
        <h1 className="text-3xl font-bold mb-4">Service Availability</h1>

        <p className="text-lg text-gray-800 italic mb-6 bg-blue-100 p-8 border-l-2 border-l-blue-500">
          If you can't find your location, reach out to us and we'll arrange care wherever you are.
        </p>

        

        <div className="mt-10 w-full bg-blue-100 py-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Major Cities</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6 ">
            {cities.map((city) => (
              <button  key={city} className="text-lg p-2 rounded-lg text-center cursor-pointer" onClick={handleContactUs}>
                {city}
              </button>
            ))}
          </div>
        </div>
        <button className="mt-8 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition w-fit cursor-pointer" onClick={handleContactUs}>
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Availability;
