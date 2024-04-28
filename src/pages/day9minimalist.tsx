// Day9.tsx
import React from 'react';
import Image from 'next/image';

const Day9 = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-4">
      <h2 className="text-lg font-semibold">Skio - Original Card Container</h2>
      <Image
        src="/skio1.png" // Path to the original card container image
        alt="Skio Original Card Container"
        width={1718} // Adjust based on the original image size
        height={668}
        layout="intrinsic"
      />

      <h2 className="text-lg font-semibold">Skio - New Card Container</h2>
      <Image
        src="/skio2.png" // Path to the new card container image
        alt="Skio New Card Container"
        width={1698} // Adjust based on the new image size
        height={665}
        layout="intrinsic"
      />
    </div>
  );
};

export default Day9;
