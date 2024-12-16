import React from "react";
import Image from "next/image";

import empty from "../../public/empty.png";
import profile from "../../public/profile.jpg";
import location from "../../public/location.png";
import phone from "../../public/phone.png";

const SearchResults = ({ results }) => {
  return (
    <div className={`flex gap-10 w-[800px] ${results.length > 0 ? 'justify-center' : ''}`}>
      <div className="mt-10 flex flex-wrap justify-center gap-[11.5px]">
        {results.length > 0 ? (
          results.map((item, index) => (
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
                  <div className="flex flex-row items-center gap-2">
                    <Image
                      src={location}
                      alt="location"
                      className="w-3 h-3.5"
                    />
                    <p className="text-xs text-[#425763]">{item.city}</p>
                  </div>
                </div>
              </div>

              <hr className="w-full border-t border-gray-300 my-4" />

              <div className="flex justify-between items-center w-full">
                <div>
                  <div className="flex items-center gap-1.5">
                    <Image src={phone} alt="phone" />
                    <p className="text-sm text-gray-700">
                      {item.contact_number}
                    </p>
                  </div>

                  <span className="text-[11.5px] text-[#AFAFAF]">
                    Available on phone
                  </span>
                </div>

                <button className="w-[137px] h-11 px-4 py-2 bg-[#18181B] text-white text-sm rounded-lg">
                  Fetch Details
                </button>
              </div>
            </div>
          ))
        ) : (
          <Image src={empty} alt="No Result" />
        )}
      </div>
    </div>
  );
};

export default SearchResults;
