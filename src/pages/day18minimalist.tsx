import React from 'react';
import Image from 'next/image';

const Day18 = () => {
    return (
        <div className='px-8 py-4'>
            <h2 className="text-2xl font-bold mb-4">Day 18: UI Adjustments and Recommendations</h2>

            <h3 className="text-xl font-semibold mt-4">Cyvl.ai</h3>
            <p>Refined the UI by reducing excessive padding and font size in the header. Also corrected alignment issues between the header and hero content for a cleaner look.</p>
            <video src="cyvl.mp4" width="640" height="360" controls />

            <h3 className="text-xl font-semibold mt-8">BigID & Nozomi Networks</h3>
            <p>Suggestion: Streamline the header by limiting it to 4-5 essential items. Excessive elements can clutter the view and overwhelm users, less is often more in UI design.</p>
            <Image src="/bigid&nozomi.png" alt="Suggested Header Layout" width={640} height={360} />
        </div>
    );
};

export default Day18;