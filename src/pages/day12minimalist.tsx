// Day11.tsx
import React from 'react';
import Image from 'next/image';

const Day12 = () => {
    return (
        <div className='px-8 py-4'>
            <div className='text-center'>
                <p className='text-lg text-gray-800'>Revamped the hero section for the Teleo</p>
            </div>
            <div className='flex justify-center mt-4'>
                <Image
                    src='/teleo.png' 
                    alt='Teleo Hero-section'
                    width={1440} // Adjust width as necessary
                    height={879} // Adjust height as necessary
                    className='rounded-lg'
                />
            </div>
        </div>
    );
};

export default Day12;
