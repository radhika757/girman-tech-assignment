import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";
import { useState } from "react";

import girman from "../../public/girman.png";
import logo2 from "../../public/logo2.png";
import SearchResults from "@/components/SearchResults";


export default function Home() {
  const [isSearching, setIsSearching] = useState(false);

  const handleSearchFocus = () => {
    setIsSearching(true);
  };

  return (
    <div>
      <Navbar />

      {/* Content */}
      <div
        className={`flex flex-col items-center ${isSearching ? '' : 'gap-20'} transition-all duration-300 ${isSearching ? "mt-[120px]" : "mt-auto justify-center h-screen"
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
        <SearchBar isSearching={isSearching} handleSearch={handleSearchFocus}/>

        {/* Div below search bar */}
        {isSearching && (
          <SearchResults />
        )}
      </div>
    </div>
  );
}
