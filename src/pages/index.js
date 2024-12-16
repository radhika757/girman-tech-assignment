import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";
import { useState } from "react";

import girman from "../../public/girman.png";
import logo2 from "../../public/logo2.png";
import SearchResults from "@/components/SearchResults";


export default function Home() {
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setIsSearching(false);
      setResults([]);
      return;
    }

    setIsSearching(true);
    setLoading(true);

    try {
      const res = await fetch(`/api/search?search=${query}`);
      const data = await res.json();

      if (data.success) {
        setResults(data.data);
      } else {
        setResults([]);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
      setResults([]);
    } finally {
      setLoading(false);
    }
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

        <SearchBar isSearching={isSearching} handleSearch={handleSearch} />

        {isSearching && (
          <SearchResults results={results} />
        )}
      </div>
    </div>
  );
}
