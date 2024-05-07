import React from 'react';
import Image from 'next/image';

const Day19 = () => {
    return (
        <div className='px-8 py-4'>
            <h2 className="text-2xl font-bold mb-4">Day 19: UI Changes and Suggestions for Startups</h2>

            <h3 className="text-xl font-semibold mt-4">Cloverleaf</h3>
            <p>Enhanced user interaction by removing the need to retype copied values. Check out the streamlined process:</p>
            <Image src="/cloverleaf.png" alt="image" width={640} height={360} />

            <h3 className="text-xl font-semibold mt-4">RapidCanvas</h3>
            <p>Suggestion: Post-funding UI tweaks needed. Consider reducing header padding, aligning hero text, and adding interactive button effects to enhance the user experience.</p>
            <video src="/rapidcanvas.mp4" width="640" height="360" controls />

            <h3 className="text-xl font-semibold mt-4">Blockus</h3>
            <p>Suggestion: Implementing a fixed header position could greatly improve navigation and user accessibility on your site.</p>
        </div>
    );
};

export default Day19;