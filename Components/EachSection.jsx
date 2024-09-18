"use client";
import React, { useState, useEffect, useRef } from 'react';
import UnitIndicator from './UnitIndicator';
import Unit from './Unit';

const EachSection = ({ sectionData }) => {
  const [currentUnit, setCurrentUnit] = useState(1); // Default to unit 1
  const unitRefs = useRef([]); // Ref to store unit elements

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.5 // Trigger when 50% of the unit is in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const unitIndex = unitRefs.current.indexOf(entry.target);
          setCurrentUnit(unitIndex + 1); // Index + 1 to match unit number
        }
      });
    }, options);

    unitRefs.current.forEach(unit => observer.observe(unit));

    return () => {
      unitRefs.current.forEach(unit => observer.unobserve(unit));
    };
  }, []);

  const currentUnitData = sectionData.units[currentUnit - 1]; // Get current unit's data, including color

  return (
    <div className="section">
      <div className="UnitIndicator mt-4 px-5 sticky top-10 w-[100%] z-10">
        {/* Pass the color from the current unit data to the UnitIndicator */}
        <UnitIndicator
          section={1}
          unit={currentUnit}
          title={currentUnitData ? currentUnitData.unit : ''}
          color={currentUnitData ? currentUnitData.color : '#58CC02'} // Use color from JSON, fallback to default if not found
        />
      </div>
      <div className="flex flex-col">
        {sectionData.units.map((unitData, index) => (
          <div
            key={index}
            id={`unit${index + 1}`}
            ref={el => unitRefs.current[index] = el} // Assign ref to each unit
            className="unit-section mt-[60px]"
          >
            <Unit unit={index + 1} unitData={unitData} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EachSection;
