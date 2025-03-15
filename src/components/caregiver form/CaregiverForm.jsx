import React, { useState } from "react";

const CaregiverForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    experience: "",
    location: "",
    availability: "",
    contact: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    alert("Caregiver application submitted successfully!");
  };

  return (
    <div className="bg-white border-t border-t-body/10">
      <div
        className="flex justify-center items-center px-6 py-12 max-w-[1200px] mx-auto"
        id="contact-form"
      >
        <div className=" p-10  w-full flex gap-4">
          <div>
            <img
              src="/contact-form-image.jpg"
              alt="contact form image"
              className="w-[50rem]"
            />
          </div>
          <div>
            <h2 className="text-heading text-3xl font-semibold mb-6 text-center font-secondary">
              Let's Get In Touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6 text-sm">
              <div className="grid grid-cols-2 gap-4 ">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  onChange={handleChange}
                  required
                />
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                type="text"
                name="experience"
                placeholder="Years of Experience"
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="availability"
                placeholder="Availability (Full-time/Part-time)"
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="contact"
                placeholder="Contact Number"
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                onChange={handleChange}
                required
              />
              <textarea
                name="additionalInfo"
                placeholder="Additional Information"
                className="w-full p-4 border rounded-lg h-24 focus:outline-none focus:ring-2 focus:ring-primary"
                onChange={handleChange}
              ></textarea>
              <button
                type="submit"
                className="w-full bg-primary text-white px-6 py-4 rounded-lg hover:bg-secondary transition font-semibold text-lg"
              >
                Submit Form
              </button>
            </form>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaregiverForm;
