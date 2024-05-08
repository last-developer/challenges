import React from 'react';
import Image from 'next/image';

const Day20 = () => {
    return (
        <div className='px-8 py-4'>
            <h2 className="text-2xl font-bold mb-4">Day 20: Final UI Recommendations</h2>

            <h3 className="text-xl font-semibold mt-4">Intenseye</h3>
            <p>Recommended fixing alignment issues and removing the unnecessary horizontal scroll bar in the hero section for a cleaner presentation.</p>
            <video src="/intenseye.mp4" width="640" height="360" controls />

            <h3 className="text-xl font-semibold mt-4">NanoNets & NFTfi</h3>
            <p>Suggested aligning all section content with the header to create a unified, aesthetically pleasing interface across the webapps.</p>
            <Image src="/day20.png" alt="UI Alignment Suggestions" width={640} height={360} />
        </div>
    );
};

export default Day20;