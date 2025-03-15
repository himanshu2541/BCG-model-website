import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo2.png";
// Navigation links defined as an array of objects
const navLinks = [
  { title: "Home", to: "/" },
  {
    title: "About",
    to: "/about",
    dropdown: [
      { title: "Our Team", to: "#team", isInPageLink: true },
      { title: "Our Mission", to: "#mission", isInPageLink: true},
    ],
  },
  {
    title: "Services",
    to: "/services",
    dropdown: [
      { title: "Elderly Care", to: "/services/elderly-care" },
      { title: "Homehelp", to: "/services/homehelp" },
      { title: "Child Care", to: "/services/child-care" },
    ],
  },
  { title: "Career", to: "/career" },
];

const Navbar = () => {
  // State to track which dropdown (if any) is open
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null);

  // Close dropdown if clicking outside the navbar
  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Toggle dropdown for the given index
  const toggleDropdown = (index) => {
    setOpenDropdown((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <nav ref={navRef} className="bg-accent font-secondary">
      <div className="container mx-auto pr-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-primary px-6 py-2">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <img src={logo} alt="A beautiful scenery" width="60" height="60" />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          {navLinks.map((link, index) => (
            <li key={index} className="relative">
              {link.dropdown ? (
                <>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDropdown(index);
                    }}
                    className="text-body hover:text-primary transition-colors focus:outline-none cursor-pointer"
                  >
                    {link.title}
                  </button>
                  {openDropdown === index && (
                    <div className="absolute left-0 top-full mt-1 w-48 bg-white border border-gray-200 rounded shadow-md">
                      {link.dropdown.map((sublink, subIndex) =>
                        sublink.isInPageLink ? (
                          <a
                            key={subIndex}
                            href={sublink.to}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                          >{sublink.title}</a>
                        ) : (
                          <Link
                            key={subIndex}
                            to={sublink.to}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                          >
                            {sublink.title}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={link.to}
                  className="text-body hover:text-primary transition-colors"
                  onClick={() => setOpenDropdown(null)}
                >
                  {link.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
