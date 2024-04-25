import Link from "next/link";

// day7.tsx
const Day7 = () => {
  return (
    <footer className=" bg-[#3f3f57] text-white py-8">
      <h2 className="px-4 mb-4">Draftwise Router Setup</h2>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        <div>
          <h2 className="font-bold text-lg mb-4">DraftWise</h2>
          {/* Add more links or content here if necessary */}
        </div>
        <div>
          <h3 className="font-semibold mb-2">Why DraftWise?</h3>
          <ul>
            <li className="mb-1">How it Works</li>
            <li className="mb-1">Features</li>
            <li className="mb-1">Case Studies</li>
            {/* Add more links here if needed */}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Resources</h3>
          <ul>
            <li className="mb-1">
              <Link href={'/day7minimalist/blogmini'}>
                Blog
              </Link>
              {/* NOW AFTER USING NEXT LINK ROUTER, NO MORE RELOADS, BETTER UX. */}
            </li>
            <li className="mb-1">FAQ</li>
            <li className="mb-1">Support</li>
            {/* Add more links here if needed */}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul>
            <li className="mb-1">About Us</li>
            <li className="mb-1">News</li>
            <li className="mb-1">Careers</li>
            <li className="mb-1">Contact</li>
            {/* Add more links here if needed */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Day7;
