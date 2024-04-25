// Day8.tsx
import React from 'react';
import Image from 'next/image';

const Day8 = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-4">
            <h2 className="text-lg font-semibold">JoinArc - Original Card</h2>
            <Image
                src="/beforejoinarc.png" // Path to the original card image
                alt="JoinArc Original Card"
                width={423}
                height={642}
                layout="intrinsic"
            />

            <h2 className="text-lg font-semibold">JoinArc - Improved Card</h2>
            <Image
                src="/afterjoinarc.png" // Path to the improved card image
                alt="JoinArc Improved Card"
                width={453}
                height={641}
                layout="intrinsic"
            />
        </div>
    );
};

export default Day8;
