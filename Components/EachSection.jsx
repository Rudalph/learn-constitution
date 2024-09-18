import React from 'react';
import UnitIndicator from './UnitIndicator';
import Unit from './Unit';

const EachSection = ({ sectionData }) => {
  return (
    <div className="section">
      <div className="UnitIndicator mt-10 px-5 sticky top-10 w-[100%] z-10">
        <UnitIndicator section={1} unit={1} title={'Pair letters and sounds'} />
      </div>
      <div className="flex flex-col">
        {sectionData.units.map((unitData, index) => (
          <div key={index} id={`unit${index + 1}`} className="mt-[60px]">
            <Unit unit={index + 1} unitData={unitData} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EachSection;
