import React from "react";
import Image from "next/image";

import search from "../../public/search.png";

const SearchBar = ({ isSearching, handleSearch }) => {
  return (
    <div className={`relative w-[800px] ${isSearching ? "mt-[120px]" : ""}`}>
      <input
        type="text"
        placeholder="Search"
        className="w-full h-[50px] pl-10 pr-4 rounded-lg border border-[#D7D7EA] shadow-md focus:ring-2 focus:ring-[#3063E6] focus:outline-none"
        style={{ boxShadow: "0px 4px 10px 0px #0000000D" }}
        onChange={(e) => handleSearch(e)}
      />

      <Image
        src={search}
        alt="search bar"
        className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
      />
    </div>
  );
};

export default SearchBar;
