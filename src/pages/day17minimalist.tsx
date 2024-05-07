import React from 'react';
import Image from 'next/image';

const Day17 = () => {
    return (
        <div className='px-8 py-4'>
            <h2 className="text-2xl font-bold mb-4">UI Enhancements and Recommendations - Day 17</h2>
            <h3 className="text-xl font-semibold mt-4">NeoDocs</h3>
            <p>Removed fixed height to ensure text is fully visible, enhancing content clarity and accessibility.</p>
            <video src="/neodocs.mp4" width="640" height="360" controls >
            </video>
            <h3 className="text-xl font-semibold mt-4">StackAI</h3>
            <p>Adjusted the bot card height from a fixed 460px to a more responsive 50vh to improve visual integration across different devices.</p>
            <Image src="/stackai.png" alt="StackAI Bot Card Adjustment" width={640} height={360} />

            <h3 className="text-xl font-semibold mt-4">Pienso</h3>
            <p>Suggestion: Consider reducing excessive spacing within your UI to enhance user engagement and content density.</p>
            <Image src="/pienso.png" alt="StackAI Bot Card Adjustment" width={640} height={360} />
        </div>
    );
};

export default Day17;
