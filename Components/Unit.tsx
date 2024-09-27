"use client";
import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import Image from 'next/image';
import DropdownWithCallout from './DropdownWithCallout';

interface UnitProps {
  unit: number;
  unitData: any; // Update type to 'any' if you want flexibility, otherwise define it better.
}

const Unit: React.FC<UnitProps> = ({ unit, unitData }) => {
  const margins = [
    ['mr-0', 'ml-0'],
    ['mr-[70px]', 'ml-[70px]'],
    ['mr-[140px]', 'ml-[140px]'],
    ['mr-[140px]', 'ml-[140px]'],
    ['mr-[70px]', 'ml-[70px]'],
    ['mr-0', 'ml-0'],
  ];

  // Use a state to track which dropdown is currently visible
  const [visibleDropdownIndex, setVisibleDropdownIndex] = useState<number | null>(null);

  const [selectedLevel, setSelectedLevel] = useState<number>(unitData.completed);
  const [activeLevel] = useState<number>(unitData.completed);

  const handleSelectLevel = (index: number) => {
    if (index <= activeLevel) {
      setSelectedLevel(index);
    }
  };

  const toggleDropdown = (index: number): void => {
    // Toggle the dropdown for the selected index
    if (visibleDropdownIndex === index) {
      setVisibleDropdownIndex(null); // Close if the same index is clicked
    } else {
      setVisibleDropdownIndex(index); // Open the dropdown for the selected index
    }
  };

  return (
    <div className="Unit relative my-5 px-4">
      <div className={`duolingo-gif absolute top-[35%] ${unit % 2 === 0 ? 'left-10' : 'right-10'}`}>
        <Image
          src="https://i.pinimg.com/originals/d4/df/75/d4df752e6c38f46adcd9de2de67ab82b.gif"
          alt="Duolingo GIF"
          width={180}
          height={180}
        />
      </div>
      <div className="levels flex flex-col items-center space-y-2">
        {margins.slice(0, unitData.chapters.length).map((margin, index) => (
          <div
            key={index}
            className={`${unit % 2 === 0 ? margin[1] : margin[0]}`}
            onClick={() => handleSelectLevel(index)}
          >
            <div
              className={`p-[10px] rounded-full border-[10px] ${
                selectedLevel === index ? 'border-[#E5E5E5] border-solid' : 'border-transparent'
              }`}
            >
              <div
                className={`ml-[1px] pt-[24px] pb-[26px] px-[27px] rounded-full flex justify-center ${
                  index <= activeLevel ? '' : 'bg-[#AFAFAF]'
                }`}
                style={index <= activeLevel ? { backgroundColor: unitData.darkColor } : {}}
              >
                .
              </div>

              <div
                className={`pt-[19px] pb-5 px-[21px] rounded-full text-3xl shadow-2xl -mt-[76px] ${
                  index <= activeLevel ? 'text-white' : 'bg-[#E5E5E5] text-[#AFAFAF]'
                }`}
                style={index <= activeLevel ? { backgroundColor: unitData.color } : {}}
                onClick={() => toggleDropdown(index)} // Pass index to toggleDropdown
              >
                <FaStar />
              </div>
            </div>
            <DropdownWithCallout isDropDownVisible={visibleDropdownIndex === index} />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-10">
        <div className="flex-grow border-t-[3px] border-gray-300 rounded-full"></div>
        <div className="px-3 font-bold text-lg text-[#AFAFAF]">
          {unitData.unit}
        </div>
        <div className="flex-grow border-t-[3px] border-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default Unit;
