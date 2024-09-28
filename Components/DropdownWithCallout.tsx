"use client";
import React from 'react';
import Link from 'next/link';

interface DropdownWithCalloutProps {
  isDropDownVisible: boolean;
}

const DropdownWithCallout: React.FC<DropdownWithCalloutProps> = ({ backgroundColor, isDropDownVisible }) => {
  return (
    <div className="relative inline-block m-5">
      {/* The dropdown with a triangular callout */}
      
      {isDropDownVisible && (
        <div className="absolute top-12 left-0 z-10 -mt-20">
          <div
            className="callout"
            style={{
              width: 0,
              height: 0,
              borderLeft: '10px solid transparent',
              borderRight: '10px solid transparent',
              borderBottom: `10px solid ${backgroundColor}`, // Triangular callout
              marginLeft: '20px',
            }}
          ></div>
          <div className=" text-white p-5 rounded-xl w-72" style={{ backgroundColor: backgroundColor }}>
            <h4 className="font-bold text-xl">Pair letters and sounds</h4>
            <p className='text-sm mb-2'>Lesson 1 of 4</p>
            <div className="flex w-full space-x-3">
              <Link href="/Learning">
                <button className={`bg-[${backgroundColor}] text-white px-6 py-[6px] rounded-lg font-bold mt-2 w-full border-2 border-white`}>
                  Learn 
                </button>
              </Link>
              <Link href="/Mcqs">
                <button className={`bg-white  px-6 py-[6px] rounded-lg font-bold mt-2 w-full hover:bg-gray-200 border-2 border-white hover:border-2 hover:border-gray-200`} style={{color: backgroundColor}}>
                  Test
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownWithCallout;
