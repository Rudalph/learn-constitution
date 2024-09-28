// homeButton.tsx
import React from 'react';
import Link from 'next/link';
import { GoHomeFill } from "react-icons/go";


const HomeButton: React.FC = () => {

  return (
    <Link href="/">
        <button className="fixed top-4 left-4  text-[#58CC02] p-3 bg-white rounded-full shadow-md font-bold text-2xl">
            <GoHomeFill />
        </button>
    </Link>
  );
};

export default HomeButton;
