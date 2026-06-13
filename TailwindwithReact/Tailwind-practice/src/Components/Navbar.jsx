import React from "react";
import { useState } from "react";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" p-4 bg-gray-800 text-white relative sticky top-0 ">
      <div className="flex justify-between items-center ">
        <div className="text-xl font-bold">Logo</div>
      <ul className="hidden md:flex  gap-10">
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Contact</li>
      </ul>
      
      <button  className="md:hidden cursor-pointer" onClick={toggleMenu}>
       {isOpen?"X" : "☰" }
      </button>
      </div>
 
      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col p-4 bg-gray-700 cursor-pointer">
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Contact</li>
        </ul>
      )}
     
    </nav>
  );
}

export default Navbar;

