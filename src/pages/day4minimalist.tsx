// day4minimalist.tsx
import Image from 'next/image';
import React from 'react';

const Day4Minimalist = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-lg font-semibold mt-8 mb-4 text-center">Roame - Original Hero Page</h2>
            <div className="w-full">
                <Image
                    src="/roameoriginal.png" // Replace with the path to your original image
                    alt="Roame Original Hero Page"
                    width={1755} // Adjust based on the original image size
                    height={632} // Adjust based on the original image size
                    layout="responsive"
                    className="rounded-lg mb-4"
                />
            </div>

            <h2 className="text-lg font-semibold my-4 text-center">Roame - Improved Minimalist Hero Page</h2>
            <div className="w-full">
                <Image
                    src="/roameimproved.png" // Replace with the path to your improved image
                    alt="Roame Improved Hero Page"
                    width={1732} // Adjust based on the original image size
                    height={722} // Adjust based on the original image size
                    layout="responsive"
                    className="rounded-lg"
                />
            </div>
            <p className="text-center p-4">
                The revamped Roame hero page now showcases a more minimalist aesthetic,
                focusing on clarity and ease of use, while emphasizing key features for an
                intuitive user experience.
            </p>
        </div>
    );
};

export default Day4Minimalist;
