"use client";
import React from 'react';

interface DropdownWithCalloutProps {
  isDropDownVisible: boolean;
}

const DropdownWithCallout: React.FC<DropdownWithCalloutProps> = ({ isDropDownVisible }) => {
  return (
    <div className="relative inline-block m-5">
      {/* The dropdown with a triangular callout */}
      
      {isDropDownVisible && (
        <div className="absolute top-12 left-0 z-10 -mt-20">
          <div className="callout"></div>
          <div className="w-0 h-0 border-l-10 border-r-10 border-b-10 border-transparent border-b-green-500 ml-5"></div> {/* Triangular Callout */}
          <div className="bg-green-500 text-white p-3 rounded shadow-lg w-48">
            <h4 className="font-bold">Pair letters and sounds</h4>
            <p>Lesson 1 of 4</p>
            <button className="bg-white text-green-500 p-2 rounded font-bold mt-2 w-full hover:bg-gray-200">
              START +10 XP
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownWithCallout;
