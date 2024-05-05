import React from 'react';

const Day14 = () => {
    return (
        <div className='px-8 py-4'>
            <h2 className="text-2xl font-bold mb-4">Improvements to OpenMart Webapp</h2>
            <ul className="list-disc pl-5 mb-4">
                <li>Removed fixed height from the hero section, allowing all buttons and content to be fully visible and improving user interface experience.</li>
                <li>Replaced the minus sign with the word 'reduce' in UI elements, mitigating any negative psychological impact associated with the minus symbol.</li>
            </ul>
            <div>
                <h3 className="text-xl font-semibold mb-2">See the Changes in Action:</h3>
                <video src="/openmart.mp4" width="500" height="500" controls />
            </div>
        </div>
    );
};

export default Day14;
