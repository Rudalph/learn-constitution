"use client";
import React from 'react';
interface DropdownWithCalloutProps {
  isDropDownVisible: boolean;
}
const DropdownWithCallout: React.FC<DropdownWithCalloutProps> = ({isDropDownVisible}) => {


  return (
    <div className="dropdown-container">
      {/* The dropdown with a triangular callout */}
      {isDropDownVisible && (
        <div className="dropdown-content -mt-20">
          <div className="callout"></div> {/* Triangular Callout */}
          <div className="dropdown-box">
            <h4>Pair letters and sounds</h4>
            <p>Lesson 1 of 4</p>
            <button className="start-btn">START +10 XP</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownWithCallout;
