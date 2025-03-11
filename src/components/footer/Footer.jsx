import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import MaxWidthWrapper from "../MaxWidthWrapper";

// Example data arrays
const footerColumns = [
  {
    heading: "Services",
    links: [
      { label: "How Clara works", to: "/how-clara-works" },
      { label: "How Clara Payroll works", to: "/how-clara-payroll-works" },
      { label: "Clara for Caregivers", to: "/clara-for-caregivers" },
      { label: "Commitment to safety", to: "/commitment-to-safety" },
      { label: "Ask Clara", to: "/ask-clara" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "FAQs", to: "/faqs" },
      { label: "About", to: "/about" },
      { label: "Resources", to: "/resources" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Terms & Conditions", to: "/terms" },
      { label: "Privacy Policy", to: "/privacy" },
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
            <div className="mb-8 md:mb-0">
              <div className="text-2xl font-bold text-heading mb-4">Logo</div>
              <div className="flex space-x-4">
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

            {/* Middle Section: Navigation Columns */}
            <div className="flex flex-wrap gap-8">
              {footerColumns.map((column, colIndex) => (
                <div key={colIndex}>
                  <h3 className="font-semibold text-heading/90 mb-2">
                    {column.heading}
                  </h3>
                  <ul className="space-y-1">
                    {column.links.map((linkItem, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          to={linkItem.to}
                          className="hover:text-primary transition-colors text-sm text-heading/70"
                        >
                          {linkItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section: Legal Note & Copyright */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-body text-sm">
              Brand Home Care, Inc. is a referral agency
            </div>
            <div className="text-body text-sm">
              © Brand 2025 - All Rights Reserved
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}

export default Footer;
