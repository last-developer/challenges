// Day11.tsx
import React from 'react';
import Image from 'next/image';

const Day11 = () => {
    return (
        <div className='px-8 py-4'>
            <div className='text-center'>
                <p className='text-lg text-gray-800'>Revamped the hero section for the One Month website, aiming to inspire more users to start their coding journey.</p>
            </div>
            <div className='flex justify-center mt-4'>
                <Image
                    src='/onemonth.png' 
                    alt='Learn to Code in Just One Month by Castig'
                    width={1109} // Adjust width as necessary
                    height={768} // Adjust height as necessary
                    className='rounded-lg'
                />
            </div>
        </div>
    );
};

export default Day11;
