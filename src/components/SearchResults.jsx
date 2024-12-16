import React from "react";

import profile from "../../public/profile.jpg";
import Image from "next/image";

const SearchResults = ({results}) => {
  return (
    <div className="flex gap-10 w-[800px]">
      <div className="mt-10 flex flex-wrap justify-center gap-[11.5px]">
        {results.map((item, index) => (
          <div
            key={index}
            className="w-[390px] h-[312px] rounded-[18px] p-[28px] bg-[#FFFFFF] shadow-md flex flex-col items-start"
          >
            <div className="flex gap-4 mb-4 flex-col items-start">
              <Image
                src={profile}
                alt={`${item.name}'s profile`}
                className="w-20 h-20 rounded-full object-cover"
              />

              <div className="gap-2">
                <h2 className="text-[37px] font-semibold">
                  {item.first_name} {item.last_name}
                </h2>
                <p className="text-[11.5px] text-[#425763] mt-1">
                  {item.city}
                </p>
              </div>
            </div>

            <hr className="w-full border-t border-gray-300 my-4" />

            <div className="flex justify-between items-center w-full">
              <div>
                <p className="text-sm text-gray-700">{item.contact_number}</p>
                <span className="text-[11.5px] text-[#AFAFAF]">Available on phone</span>
              </div>

              <button className="px-4 py-2 bg-[#18181B] text-white text-sm rounded-lg">
                Fetch Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
