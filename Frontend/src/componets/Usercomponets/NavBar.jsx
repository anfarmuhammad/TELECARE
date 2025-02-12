import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex items-center justify-between h-16 px-4 md:px-10">
        {/* Logo Section */}
        <div className="text-3xl font-mono font-bold flex items-center">
          <motion.span
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            Tele
          </motion.span>
          <motion.span
            className="text-blue-500"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Care
          </motion.span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10 font-bold">
          <li className="hover:text-gray-300 cursor-pointer"><Link to="/">HOME</Link></li>
          <li className="hover:text-gray-300 cursor-pointer flex items-center gap-1">
            FIND DOCTORS
          </li>
          <li className="hover:text-gray-300 cursor-pointer">APPOINMENT</li>
          <li className="hover:text-gray-300 cursor-pointer"><Link to="/about">ABOUT</Link></li>
        </ul>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-6 text-white text-sm">
          <button className="bg-blue-600 px-4 py-1 rounded-full hover:bg-blue-500 transition">
            LOGOUT
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="text-white md:hidden text-2xl"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-700 w-full py-4">
          <ul className="flex flex-col items-center gap-4 text-white font-bold">
            <li className="hover:text-gray-300 cursor-pointer">HOME</li>
            <li className="hover:text-gray-300 cursor-pointer flex items-center gap-1">
              MEDICAL ARTICLES <i className="fa-solid fa-caret-down"></i>
            </li>
            <li className="hover:text-gray-300 cursor-pointer">CONSULT A PHYSICIAN</li>
            <li className="hover:text-gray-300 cursor-pointer">ABOUT</li>
          </ul>
          <div className="flex flex-col items-center mt-4 gap-4">
            <input
              className="bg-white h-10 w-[80%] text-black rounded-full px-3 focus:outline-none"
              type="text"
              placeholder="Search for symptoms"
            />
            <button className="hover:text-gray-300">LOGIN</button>
            <button className="bg-blue-600 px-4 py-1 rounded-full hover:bg-blue-500 transition">
              SIGNUP
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
