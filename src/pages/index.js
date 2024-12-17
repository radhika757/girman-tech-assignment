import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";

import { useDebounce } from "@/lib/utils";
import SearchResults from "@/components/SearchResults";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";

import girman from "../../public/girman.png";
import logo2 from "../../public/logo2.png";




export default function Home() {
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const debouncedSearchQuery = useDebounce(searchQuery, 1000);

  useEffect(() => {
    const fetchResults = async () => {
      if (!debouncedSearchQuery.trim()) {
        setIsSearching(false);
        setResults([]);
        return;
      }
      setIsLoading(true);
      setIsSearching(true);

      try {
        const res = await fetch(`/api/search?search=${debouncedSearchQuery}`);
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
        setIsLoading(false);
      }
    };

    fetchResults();
  }, [debouncedSearchQuery]);

  return (
    <div>
      <Head>
        <title>Girman Tech</title>
        <meta name="description" content="Girman Technologies" />
      </Head>

      <Navbar />
      {/* Content */}
      <div
        className={`flex flex-col items-center ${isSearching ? '' : 'gap-24'} transition-all duration-300 ${isSearching ? "md:mt-[100px] mt-7" : "mt-auto sm:justify-center justify-start h-screen"
          }`}
        style={{ height: isSearching ? "auto" : "calc(100vh - 110px)" }}
      >
        {!isSearching && (
          <div className="flex items-center justify-start gap-10 w-[400px] sm:w-[800px]">
            <Image
              src={logo2}
              alt="Centered Logo"
              className="w-[100px] h-[70px] mb-4 sm:w-[187px] sm:h-[125px] sm:block hidden"
            />

            <Image
              src={girman}
              alt="girman"
              className="sm:block hidden"
            />
          </div>

        )}

        <SearchBar isSearching={isSearching} handleSearch={(e) => setSearchQuery(e.target.value)} />

        {isSearching && (
          <SearchResults results={results} isLoading={isLoading} />
        )}
      </div>
    </div>
  );
}
