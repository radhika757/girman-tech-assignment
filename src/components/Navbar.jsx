import React, { useState } from "react";
import Image from "next/image";

import girman from "../../public/girman.png";
import logo from "../../public/image.png";
import logo2 from "../../public/logo2.png";
import text from "../../public/text.png";
import search from "../../public/search.png";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("search");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearchFocus = () => {
    setIsSearching(true);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
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

      {/* Content */}
      <div
        className={`flex flex-col items-center gap-20 transition-all duration-300 ${
          isSearching ? "mt-[120px]" : "mt-auto justify-center h-screen"
        }`}
        style={{ height: isSearching ? "auto" : "calc(100vh - 110px)" }}
      >
        {/* Logo */}
        {!isSearching && (
          <div className="flex items-center justify-start gap-10 w-[800px]">
            <Image
              src={logo2}
              alt="Centered Logo"
              className="w-[187px] h-[125px] mb-4"
            />
            <Image src={girman} alt="girman" />
          </div>
        )}

        {/* Search Bar */}
        <div className={`relative w-[800px] ${isSearching ? 'mt-[120px]' : ''}`}>
          <input
            type="text"
            placeholder="Search"
            className="w-full h-[50px] pl-10 pr-4 rounded-lg border border-[#D7D7EA] shadow-md focus:ring-2 focus:ring-[#3063E6] focus:outline-none"
            style={{ boxShadow: "0px 4px 10px 0px #0000000D" }}
            onFocus={handleSearchFocus}
          />

          <Image
            src={search}
            alt="search bar"
            className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          />
        </div>

        {/* Div below search bar */}
        {isSearching && (
          <div className="w-[800px] mt-4 p-4 border rounded-lg bg-gray-100">
            <p className="text-center text-gray-700">
              Search results will appear here...
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
