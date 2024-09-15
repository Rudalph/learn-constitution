"use client";
import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import Image from 'next/image';

interface UnitProps {
  levels: number;
  unit: number;
  nextTopic: string;
}

const Unit: React.FC<UnitProps> = ({ levels, unit, nextTopic }) => {
  const margins = [
    ['mr-0', 'ml-0'],
    ['mr-[70px]', 'ml-[70px]'],
    ['mr-[140px]', 'ml-[140px]'],
    ['mr-[140px]', 'ml-[140px]'],
    ['mr-[70px]', 'ml-[70px]'],
    ['mr-0', 'ml-0'],
  ];

  const [selectedLevel, setSelectedLevel] = useState<number>(0); // Default to first level selected
  const [activeLevel] = useState<number>(2); // Example: activeLevel 3

  const handleSelectLevel = (index: number) => {
    // Only allow selection of levels within activeLevel range
    if (index <= activeLevel) {
      setSelectedLevel(index);
    }
  };

  return (
    <div className="Unit relative my-5 px-4">
      <div className={`duolingo-gif absolute top-[35%] ${unit%2===0?'left-10':'right-10'}`}>
        <Image src="https://i.pinimg.com/originals/d4/df/75/d4df752e6c38f46adcd9de2de67ab82b.gif" alt="Duolingo GIF" width={180} height={180} />
      </div>
      <div className="levels flex flex-col items-center space-y-2">
        {margins.slice(0, levels).map((margin, index) => (
          <div
            key={index}
            className={`${unit % 2 === 0 ? margin[1] : margin[0]}`}
            onClick={() => handleSelectLevel(index)} // Add click handler for active levels
          >
            <div
              className={`p-[10px] rounded-full border-[10px] ${
                selectedLevel === index ? 'border-[#E5E5E5] border-solid' : 'border-transparent'
              }`}
            >
              {/* Outer circle color based on activeLevel */}
              <div
                className={`ml-[1px] pt-[24px] pb-[26px] px-[27px] rounded-full flex justify-center ${
                  index <= activeLevel ? 'bg-[#46A302]' : 'bg-[#AFAFAF]'
                }`}
              >
                {/* Hidden circle */}
                .
              </div>

              {/* Inner circle with hover effect and color change */}
              <div
                className={`pt-[19px] pb-5 px-[21px] rounded-full text-3xl shadow-2xl -mt-[76px] ${
                  index <= activeLevel
                    ? 'bg-[#58CC02] text-white '
                    : 'bg-[#E5E5E5] text-[#AFAFAF]'
                }`}
              >
                <FaStar />
              </div>
            </div>
          </div>
        ))}
      </div>

        <div className="flex items-center justify-between mt-10">
            <div className="flex-grow border-t-[3px] border-gray-300 rounded-full"></div>
            <div className="px-3 font-bold text-lg text-[#AFAFAF]">
                {nextTopic}
            </div>
            <div className="flex-grow border-t-[3px] border-gray-300 rounded-full"></div>
        </div>

    </div>
  );
};

export default Unit;
