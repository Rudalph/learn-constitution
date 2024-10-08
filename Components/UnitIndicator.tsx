import React from 'react';
import { FaArrowLeft } from "react-icons/fa6";

interface UnitIndicatorProps {
    section: number | string;
    unit: number | string;
    title: string;
    color: string;
}

const UnitIndicator: React.FC<UnitIndicatorProps> = ({ section, unit, title, color }) => {
  return (
    <div style={{ backgroundColor: color }} className="rounded-xl px-5 py-4 w-[100%]">
      <div className='flex space-x-2 text-white'>
        <div className="back-btn-div flex items-center font-bold">
          <button><FaArrowLeft /></button>
        </div>
        <div className="flex space-x-3 section-number font-extrabold uppercase">
          <div>Section {section},</div>
          <div className="unit-number">Unit {unit}</div>
        </div>
      </div>
      <div className="title mt-3 text-white font-extrabold text-xl">{title}</div>
    </div>
  );
};

export default UnitIndicator;
