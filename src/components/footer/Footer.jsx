import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import MaxWidthWrapper from "../MaxWidthWrapper";
import logo from "../../assets/logo2.png";

// Example data arrays
const footerColumns = [
  {
    heading: "Links",
    links: [
      { label: "Home", to: "#home" },
      { label: "Plans", to: "#plans" },
      { label: "Features", to: "#features" },
      { label: "Team", to: "#team" },
    ],
  },
];

// Social icons with Link routes (replace `to` with external URLs if needed)
const socialLinks = [
  { label: "Facebook", to: "/facebook", icon: <FaFacebookF /> },
  { label: "Twitter", to: "/twitter", icon: <FaTwitter /> },
  { label: "LinkedIn", to: "/linkedin", icon: <FaLinkedinIn /> },
];

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <MaxWidthWrapper>
        <div className="container mx-auto px-4 py-8">
          {/* Top Section: Logo, Social Icons, and Link Columns */}
          <div className="flex flex-col md:flex-row md:space-x-8 justify-between">
            {/* Left Column: Logo & Social Icons */}
            <div className="mb-8 ">
              <div className="text-2xl font-bold text-heading ">
                <img src={logo} alt="A beautiful scenery" width="100" height="100" />
              </div>
              <div className="flex space-x-4 pt-2">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    to={social.to}
                    aria-label={social.label}
                    className="text-body hover:text-primary"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Middle Section: Navigation Columns & Contact */}
            <div className="flex flex-wrap gap-4 md:gap-32">
              {footerColumns.map((column, colIndex) => (
                <div key={colIndex}>
                  <h3 className="font-semibold text-heading/90 mb-2">
                    {column.heading}
                  </h3>
                  <ul className="space-y-1">
                    {column.links.map((linkItem, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={linkItem.to}
                          className="hover:text-primary transition-colors text-sm text-heading/70"
                        >
                          {linkItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              {/* Contact Section */}
              <div>
                <h3 className="font-semibold text-heading/90 mb-2">Contact Us</h3>
                <ul className="space-y-1 text-sm text-heading/70">
                  <li>📍 Indian Institute of Technology, Kharagpur, India</li>
                  <li>📞 +91 63717 85118</li>
                  <li>✉️ support@nurturecare.com</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section: Legal Note & Copyright */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-body text-sm">
              Nurture Home Care, Inc. is a referral agency
            </div>
            <div className="text-body text-sm">
              © Nurture 2025 - All Rights Reserved
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}

export default Footer;