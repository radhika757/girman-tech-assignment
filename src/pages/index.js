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
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const debouncedSearchQuery = useDebounce(searchQuery, 1000);

  useEffect(() => {
    const fetchResults = async () => {
      if (!debouncedSearchQuery.trim()) {
        setIsSearching(false);
        setResults([]);
        return;
      }

      setIsSearching(true);
      setLoading(true);

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
        setLoading(false);
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

        <SearchBar isSearching={isSearching} handleSearch={(e) => setSearchQuery(e.target.value)} />

        {isSearching && (
          <SearchResults results={results} />
        )}
      </div>
    </div>
  );
}
