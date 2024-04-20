// day4minimalist.tsx
import React from 'react';

const Day5Minimalist = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-4">
            <h2 className="text-xl font-bold my-4">Aviator - Overflow Issue Fix</h2>
            <video
                src="/avbefore.mp4" 
                controls
                className="w-full max-w-md rounded-lg"
                title="Aviator Before Fix"
            >
                Your browser does not support the video tag.
            </video>

            <h2 className="text-xl font-bold my-4">Aviator - Post-Fix with Improved Header</h2>
            <video
                src="/avafter.mp4" 
                controls
                className="w-full max-w-md rounded-lg"
                title="Aviator After Fix"
            >
                Your browser does not support the video tag.
            </video>

            <p className="text-center p-4">
                Tackled the overflow bug in Aviator's web app and gave the header a facelift.
                The navigation is now seamless, and the header is optimized for better user experience.
            </p>
        </div>
    );
};

export default Day5Minimalist;
