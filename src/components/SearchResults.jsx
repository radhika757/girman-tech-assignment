import React, { useState } from "react";
import Image from "next/image";

import empty from "../../public/empty.png";
import profile from "../../public/profile.jpg";
import location from "../../public/location.png";
import phone from "../../public/phone.png";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const SearchResults = ({ results, isLoading }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleFetchDetailsClick = (employee) => {
    setSelectedEmployee({
      name: `${employee.first_name} ${employee.last_name}`,
      location: employee.city,
      contact_number: employee.contact_number,
    });
    setIsDialogOpen(true);
  };

  return (
    <div
      className={`flex gap-10 w-[400px] sm:w-[800px] ${
        results.length === 0 ? "justify-center" : ""
      }`}
    >
      <div className="mt-10 flex flex-wrap justify-center gap-[11.5px]">
        {isLoading ? (
          <div className="flex justify-center items-center w-full h-[312px]">
            Loading...
          </div>
        ) : results.length > 0 ? (
          results.map((item, index) => (
            <div
              key={index}
              className="w-[312px] sm:w-[390px] sm:h-[312px] h-[236px] rounded-[18px] sm:p-[28px] p-[18px] bg-[#FFFFFF] shadow-md flex flex-col items-start"
            >
              <div className="flex gap-4 mb-2 sm:mb-4 flex-col items-start">
                <Image
                  src={profile}
                  alt={`${item.name}'s profile`}
                  className="sm:w-20 sm:h-20 w-16 h-16 rounded-full object-cover"
                />

                <div className="gap-2">
                  <h2 className="text-[20px] sm:text-[37px] font-semibold">
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

                <button
                  className="w-[120px] sm:w-[137px] h-11 px-4 py-2 bg-[#18181B] text-white text-sm rounded-lg"
                  onClick={() => handleFetchDetailsClick(item)}
                >
                  Fetch Details
                </button>
              </div>
            </div>
          ))
        ) : (
          <Image src={empty} alt="No Result" />
        )}
      </div>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent
          className="w-[299px] sm:w-[512px] h-[447px] sm:h-[475px] bg-white rounded-lg p-6 shadow-lg flex flex-col justify-between"
          style={{
            boxShadow: `
        0px 4px 6px -2px #0000000D,
        0px 10px 15px -3px #0000001A
      `,
          }}
        >
          <div>
            {/* Header */}
            <DialogHeader className="mb-4 h-14 sm:w-[424px] text-left">
              <DialogTitle className="text-lg">
                Fetch Details
              </DialogTitle>
              <DialogDescription className="text-xs text-gray-500">
                Here are the details of the following employee.
              </DialogDescription>
            </DialogHeader>

            <div>
              <p className="text-sm">
                <span>Name:</span> {selectedEmployee?.name || "N/A"}
              </p>
              <p className="text-sm">
                <span>Location:</span>
                {selectedEmployee?.location || "N/A"}
              </p>
              <p className="text-sm">
                <span>Contact Number:</span>{" "}
                {selectedEmployee?.contact_number || "N/A"}
              </p>
            </div>

            <div className="mt-2">
              <p className="text-sm mb-2">Profile Image:</p>
              <div className="overflow-hidden">
                <Image
                  src={profile}
                  alt="Profile"
                  className="sm:w-[207px] sm:h-[207px] w-[192px] h-[192px]"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              className="px-4 py-2 bg-[#FFFFFF] text-black text-sm rounded-md border border-zinc-200"
              onClick={() => setIsDialogOpen(false)}
            >
              Close
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SearchResults;
