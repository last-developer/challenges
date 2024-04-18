// day3minimalist.tsx
import Image from 'next/image';
import React from 'react';

const Day3Minimalist = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            {/* Light Mode Version */}
            <div className="w-full">
                <p className='text-center mt-4 sm:text-2xl'>Light mode</p>
                <Image
                    src="/evidencelight.png" // Replace with the path to your light mode image
                    alt="Evidence Light Mode"
                    width={1865} // Adjust based on the original image size
                    height={726} // Adjust based on the original image size
                    layout="responsive"
                    className="rounded-lg"
                />
            </div>

            {/* Dark Mode Version */}
            <div className="w-full mt-8">
                <p className='text-center mt-4 sm:text-2xl'>Dark mode</p>
                <Image
                    src="/evidencedark.png" // Replace with the path to your dark mode image
                    alt="Evidence Dark Mode"
                    width={1882} // Adjust based on the original image size
                    height={714} // Adjust based on the original image size
                    layout="responsive"
                    className="rounded-lg"
                />
            </div>
        </div>
    );
};

export default Day3Minimalist;
