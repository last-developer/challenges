// day1minimalist.tsx
import Image from 'next/image';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { MdOutlineContactSupport } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";

const Day1Minimalist = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col">
      {/* Header */}
      <header className="z-10 flex justify-between items-center p-5 pl-10 pr-10 bg-transparent fixed top-0 left-0 right-0">
        {/* Logo */}
        <p className='text-xl font-bold tracking-[.3rem] text-white'>TESLA</p>

        {/* Navigation for large screens */}
        <nav className="hidden xl:flex flex-1 justify-center items-center">
          <ul className="inline-flex justify-center space-x-6 items-center">
            <li className="cursor-pointer hover:text-gray-300 text-white">Vehicles</li>
            <li className="cursor-pointer hover:text-gray-300 text-white">Energy</li>
            <li className="cursor-pointer hover:text-gray-300 text-white">Charging</li>
            <li className="cursor-pointer hover:text-gray-300 text-white">Discover</li>
            <li className="cursor-pointer hover:text-gray-300 text-white">Shop</li>
          </ul>
        </nav>

        {/* Icons for large screens */}
        <div className="hidden xl:flex items-center space-x-4 text-xl">
          <MdOutlineContactSupport className="cursor-pointer hover:text-gray-300 text-white" />
          <CiGlobe className="cursor-pointer hover:text-gray-300 text-white" />
          <FaRegUserCircle className="cursor-pointer hover:text-gray-300 text-white" />
        </div>

        {/* Menu button for small to medium screens */}
        <button onClick={() => setMenuOpen(!isMenuOpen)} className="xl:hidden text-white focus:outline-none">
          <FaBars size={24} />
        </button>
      </header>

      {/* Mobile Menu - Show/Hide based on Menu State */}
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} flex-col absolute top-16 right-4 z-20 bg-black p-4 rounded-lg`}>
        <ul className="space-y-4">
          <li className="cursor-pointer hover:text-gray-300 text-white">Vehicles</li>
          <li className="cursor-pointer hover:text-gray-300 text-white">Energy</li>
          <li className="cursor-pointer hover:text-gray-300 text-white">Charging</li>
          <li className="cursor-pointer hover:text-gray-300 text-white">Discover</li>
          <li className="cursor-pointer hover:text-gray-300 text-white">Shop</li>
        </ul>
      </div>

      {/* Hero Section */}
      <div className="relative w-full flex-grow">
        {/* Responsive Hero Image */}
        <Image
          src="/tesla3.jpg"
          alt="Tesla Car"
          width={6960}
          height={4640}
          className="object-cover w-screen h-screen"
        />
      </div>
    </div>
  );
};

export default Day1Minimalist;
