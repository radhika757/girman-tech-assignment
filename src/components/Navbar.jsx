import React, { useState } from "react";
import Image from "next/image";

import logo from "../../public/image.png";
import text from "../../public/text.png";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("search");
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu toggle

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false); // Close menu on link click
  };

  return (
    <nav className="h-[60px] w-full md:h-[110px] bg-white fixed top-0 left-0 shadow-custom z-50">
      <div className="w-full max-w-[1000px] flex justify-between items-center mx-auto px-5 md:px-10 h-full">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Image src={logo} alt="Logo" className="md:h-16 md:w-16 w-[30px] h-[30px]" />
          <Image src={text} alt="Text Logo" className="md:h-14 md:w-[146px] w-[70px] h-[29px]" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="#"
            onClick={() => handleLinkClick("search")}
            className={`text-[14px] md:text-[16px] font-bold ${
              activeLink === "search" ? "text-[#3063E6] underline underline-offset-4" : ""
            }`}
          >
            SEARCH
          </a>
          <a
            href="https://girmantech.com/"
            onClick={() => handleLinkClick("website")}
            className={`text-[14px] md:text-[16px] font-bold ${
              activeLink === "website" ? "text-[#3063E6] underline underline-offset-4" : ""
            }`}
            target="_blank"
            rel="noopener noreferrer"
          >
            WEBSITE
          </a>
          <a
            href="https://www.linkedin.com/company/girmantech/posts/?feedView=all"
            onClick={() => handleLinkClick("linkedin")}
            className={`text-[14px] md:text-[16px] font-bold ${
              activeLink === "linkedin" ? "text-[#3063E6] underline underline-offset-4" : ""
            }`}
          >
            LINKEDIN
          </a>
          <a
            href="mailto:contact@girmantech.com?subject=Inquiry&body=Hello, I would like to reach out regarding..."
            onClick={() => handleLinkClick("contact")}
            className={`text-[14px] md:text-[16px] font-bold ${
              activeLink === "contact" ? "text-[#3063E6] underline underline-offset-4" : ""
            }`}
          >
            CONTACT
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl focus:outline-none"
          >
            ☰
          </button>

          {/* Mobile Menu Popup */}
          {menuOpen && (
            <div
              className="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] absolute right-0 top-10 w-[90px] h-[166px] bg-white border-[#E3E3E3] rounded-md flex flex-col justify-evenly items-center"
            >
              <a
                href="#"
                onClick={() => handleLinkClick("search")}
                className={`text-[12px] font-bold ${
                  activeLink === "search" ? "text-[#3063E6] underline underline-offset-4" : ""
                }`}
              >
                SEARCH
              </a>
              <a
                href="https://girmantech.com/"
                onClick={() => handleLinkClick("website")}
                className={`text-[12px] font-bold ${
                  activeLink === "website" ? "text-[#3063E6] underline underline-offset-4" : ""
                }`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WEBSITE
              </a>
              <a
                href="https://www.linkedin.com/company/girmantech/posts/?feedView=all"
                onClick={() => handleLinkClick("linkedin")}
                className={`text-[12px] font-bold ${
                  activeLink === "linkedin" ? "text-[#3063E6] underline underline-offset-4" : ""
                }`}
              >
                LINKEDIN
              </a>
              <a
                href="mailto:contact@girmantech.com?subject=Inquiry&body=Hello, I would like to reach out regarding..."
                onClick={() => handleLinkClick("contact")}
                className={`text-[12px] font-bold ${
                  activeLink === "contact" ? "text-[#3063E6] underline underline-offset-4" : ""
                }`}
              >
                CONTACT
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
