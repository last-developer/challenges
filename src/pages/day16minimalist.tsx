import Image from 'next/image';
import React from 'react';

const Day16 = () => {
    return (
        <div className='px-8 py-4'>
            <h2 className="text-2xl font-bold mb-4">UI Recommendations for Multiple Startups</h2>
            <ul className="list-disc pl-5 mb-4 flex flex-col gap-3">
                <li><strong>Acho:</strong> Implemented a sleeker header by removing fixed height and excessive padding.</li>
                <Image src={'/achoafter.png'} alt='image' width={800} height={800} />
                <li className='mt-8'><strong>DynamoFL:</strong> Recommendation to fix the cookie consent card so that accept and deny actions function properly.</li>
                <Image src={'/dynamo.png'} alt='image' width={800} height={800} />
                <li className='mt-8'><strong>QuickChat:</strong> Suggested enhancing name elements with 'cursor-pointer' and adding direct links to their profiles to improve user interaction.</li>
                <Image src={'/quickchat.png'} alt='image' width={800} height={800} />
            </ul>
        </div>
    );
};

export default Day16;