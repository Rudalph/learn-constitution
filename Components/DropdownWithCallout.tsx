"use client";
import React, { useState } from 'react';

const DropdownWithCallout: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleDropdown = (): void => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="dropdown-container">
      {/* The button triggering the dropdown */}
      <button className="trigger-button" onClick={toggleDropdown}>
        <span className="star-icon">⭐</span>
      </button>

      {/* The dropdown with a triangular callout */}
      {isVisible && (
        <div className="dropdown-content">
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
