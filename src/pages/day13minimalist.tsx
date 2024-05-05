import React from 'react';
import Image from 'next/image';

const Day13 = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-black text-white w-full p-8">
        <h1 className="text-4xl font-bold text-center">Retail compliance starts here</h1>
        <p className="text-center mt-4 mb-8">Retail Ready's new hero section focuses on practical solutions for compliance in retail spaces, highlighting the ease and effectiveness of our tools.</p>
        
      </div>
      <Image 
        src="/retailready.png" // Path to the image of the new hero page
        alt="Retail Ready Hero Page"
        width={1229}
        height={768}
        className="object-cover object-center"
      />
    </div>
  );
};

export default Day13;
