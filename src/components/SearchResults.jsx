import React, { useState } from "react";

import profile from "../../public/profile.jpg";
import Image from "next/image";
// import DialogDetails from "./Dialog";

import dynamic from 'next/dynamic';

const DialogDetails = dynamic(() => import('./Dialog'), {
    ssr: false, // This ensures it's only rendered on the client side
  });

const SearchResults = () => {
    const [showDialog, setShowDialog] = useState(false);

    const handleFetchDetailsClick = () => {
      setShowDialog(true); // Show the dialog
    };
  
    const handleDialogClose = () => {
      setShowDialog(false); // Hide the dialog
    }
  const data = [
    { name: "John Doe", location: "New York, USA", phone: "+1 123-456-7890" },
    { name: "Jane Smith", location: "London, UK", phone: "+44 20 7946 0958" },
    {
      name: "Akira Yamamoto",
      location: "Tokyo, Japan",
      phone: "+81 3-1234-5678",
    },
    {
      name: "Carlos Mendoza",
      location: "Mexico City, Mexico",
      phone: "+52 55 1234 5678",
    },
    {
      name: "Fatima Al-Farsi",
      location: "Dubai, UAE",
      phone: "+971 4 123 4567",
    },
  ];

  return (
    <div className="flex gap-10 w-[800px]">
      <div className="mt-10 flex flex-wrap justify-center gap-[11.5px]">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-[390px] h-[312px] rounded-[18px] p-[28px] bg-[#FFFFFF] shadow-md flex flex-col items-start"
          >
            {/* Left-Aligned Content */}
            <div className="flex gap-4 mb-4 flex-col items-start">
              {/* Profile Picture */}
              <Image
                src={profile}
                alt={`${item.name}'s profile`}
                className="w-20 h-20 rounded-full object-cover"
              />

              {/* Name and Location */}
              <div className="gap-2">
                <h2 className="text-[37px] font-semibold">
                  {item.name}
                </h2>
                <p className="text-[11.5px] text-[#425763] mt-1">
                  {item.location}
                </p>
              </div>
            </div>

            {/* Divider Line */}
            <hr className="w-full border-t border-gray-300 my-4" />

            {/* Phone Number and Button */}
            <div className="flex justify-between items-center w-full">
              <div>
                <p className="text-sm text-gray-700">{item.phone}</p>
                <span className="text-[11.5px] text-[#AFAFAF]">Available on phone</span>
              </div>

              <button className="px-4 py-2 bg-[#18181B] text-white text-sm rounded-lg" onClick={handleFetchDetailsClick}>
                Fetch Details
              </button>
            </div>
          </div>
        ))}
      </div>
      {showDialog && <DialogDetails onClose={handleDialogClose} />}
    </div>
  );
};

export default SearchResults;
