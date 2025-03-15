import React, { useState } from "react";

const Career = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    certifications: "",
    availability: "",
    message: "",
  });

  const formFields = [
    { name: "fullName", type: "text", placeholder: "Full Name", required: true },
    { name: "email", type: "email", placeholder: "Email Address", required: true },
    { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
    { name: "experience", type: "text", placeholder: "Years of Experience", required: true },
    { name: "certifications", type: "text", placeholder: "Certifications (if any)", required: false },
    { name: "availability", type: "text", placeholder: "Availability (Full-time/Part-time)", required: true },
    { name: "message", type: "textarea", placeholder: "Tell us about yourself", required: false },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-gray-50">
      {/* Left Side - Form */}
      <div className="p-20 w-full lg:w-1/2">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 font-poppins">
          Join Us as a Caretaker
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {formFields.map((field) => (
            field.type === "textarea" ? (
              <textarea
                key={field.name}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                rows="4"
              ></textarea>
            ) : (
              <input
                key={field.name}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                required={field.required}
              />
            )
          ))}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition"
          >
            Submit Application
          </button>
        </form>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:flex w-1/2 justify-center overflow-hidden">
        <img
          src="/career-section.jpg"
          alt="Career Image"
          className="w-auto h-full object-cover max-w-none max-h-screen"
        />
      </div>
    </div>
  );
};

export default Career;
