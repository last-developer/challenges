// day2minimalist.tsx
import Image from 'next/image';
import React from 'react';

const Day2Minimalist = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      {/* Hero Section with Image */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/day2.jpg" 
          alt="Reelables Smart Labels"
          width={6048}
          height={3402}
          className="object-center object-cover w-screen h-screen"
        />
        {/* Overlay to enhance text visibility */}
        <div className="absolute inset-0 bg-black opacity-70" />
      </div>

      {/* Text Content */}
      <div className="z-10 p-4 text-center text-white">
        <h1 className="text-6xl font-bold mb-2">
          5G Smart Labels
        </h1>
        <p className="text-base text-gray-400">
          The future of supply chain data tracking and visibility
        </p>
      </div>
    </div>
  );
};

export default Day2Minimalist;
