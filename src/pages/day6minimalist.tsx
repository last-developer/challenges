// day6.tsx
import React from 'react';
import Image from 'next/image';

const Day6 = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h2 className="text-lg font-semibold">Getthera Payout Interface - Before</h2>
      <Image
        src="/before.png" // Path to the before image
        alt="Getthera Before"
        width={601}
        height={626}
        layout="intrinsic"
      />

      <h2 className="text-lg font-semibold">Getthera Payout Interface - After</h2>
      <Image
        src="/after.png" // Path to the after image
        alt="Getthera After"
        width={606}
        height={588}
        layout="intrinsic"
      />
    </div>
  );
};

export default Day6;
