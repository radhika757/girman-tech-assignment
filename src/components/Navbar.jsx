import React, { useState } from "react";
import Image from "next/image";

import logo from "../../public/image.png";
import text from "../../public/text.png";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="w-full h-[110px] bg-white fixed top-0 left-0 opacity-100 shadow-custom">
      <div className="w-[1000px] flex justify-between items-center mx-auto px-10 h-full gap-60">
        <div className="flex items-center justify-start gap-2">
            <Image src={logo} alt="Logo" className="h-16 w-16" />
            <Image src={text} alt="Text Logo" className="h-14 w-[146px]" />
        </div>

        {/* Navbar links */}
        <div className="flex items-center justify-evenly w-full">
          <a
            href="#"
            onClick={() => handleLinkClick("search")}
            className={`text-[16px] font-bold ${
              activeLink === "search" ? "text-[#3063E6] underline" : ""
            }`}
          >
            SEARCH
          </a>
          <a
            href="https://girmantech.com/"
            onClick={() => handleLinkClick("website")}
            className={`text-[16px] font-bold ${
              activeLink === "website" ? "text-[#3063E6] underline" : ""
            }`}
            target="_blank"
          >
            WEBSITE
          </a>
          <a
            href="https://www.linkedin.com/company/girmantech/posts/?feedView=all"
            onClick={() => handleLinkClick("linkedin")}
            className={`text-[16px] font-bold ${
              activeLink === "linkedin" ? "text-[#3063E6] underline" : ""
            }`}
          >
            LINKEDIN
          </a>
          <a
            href="mailto:contact@girmantech.com?subject=Inquiry&body=Hello, I would like to reach out regarding..."
            onClick={() => handleLinkClick("contact")}
            className={`text-[16px] font-bold ${
              activeLink === "contact" ? "text-[#3063E6] underline" : ""
            }`}
          >
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
