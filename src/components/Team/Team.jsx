import React from "react";
import { FaLinkedin } from "react-icons/fa";

const teamMembers = [
  {
    name: "Aviral Tripathi",
    role: "Co-founder",
    image: "/aviral_tripathi.jpeg",
    linkedin: "https://www.linkedin.com/in/avirall/"
  },
  {
    name: "Prajojeet Pradhan",
    role: "Co-founder",
    image: "/prajojeet.jpeg",
    linkedin: "http://www.linkedin.com/in/prajojeet-pradhan-b93284271"
  },
  {
    name: "Dhruv Anil Rai",
    role: "Co-founder",
    image: "/dhruv.jpeg",
    linkedin: "https://www.linkedin.com/in/dhruv-rai-26328a250/"
  },
];

const Team = () => {
  return (
    <div className="bg-accent py-24 px-6 text-center" id="team">
      <h2 className="text-heading text-3xl font-semibold mb-6 font-secondary">
        Meet Our Team
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white shadow-lg rounded-2xl p-6 w-64 text-center">
            <img
              src={member.image}
              alt={member.name}
              className="rounded-full w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-primary text-xl font-semibold font-secondary">
              {member.name}
            </h3>
            <p className="text-body text-sm font-primary">
              {member.role}
            </p>
            <div className="mt-4 flex items-center justify-center">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                <FaLinkedin className="text-primary w-5 h-5 hover:text-secondary" />
              </a>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Team;
