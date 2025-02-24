import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const userlogout = useNavigate();
  const userLogoutNavigate = () =>{
    userlogout("/")
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-100 shadow-md z-50">
      <div className="flex items-center justify-between h-16 px-4 md:px-10">
        
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

        
        <ul className="hidden md:flex items-center gap-10 font-bold">
          <li className="hover:text-gray-300 cursor-pointer"><Link to="/home">HOME</Link></li>
          <li className="hover:text-gray-300 cursor-pointer flex items-center gap-1"><Link to="/finddoctors">FIND DOCTORS</Link></li>
          <li className="hover:text-gray-300 cursor-pointer"><Link to="/appointments">APPOINMENTS</Link></li>
          <li className="hover:text-gray-300 cursor-pointer"><Link to="/about">ABOUT</Link></li>
         
        </ul>

        
        <div className="hidden md:flex items-center gap-6 text-white text-sm">
          <button className="bg-blue-600 px-4 py-1 rounded-full hover:bg-blue-500 transition" onClick={userLogoutNavigate}>
            LOGOUT
          </button>
          <div className="text-black text-xl"><Link to="/userprofile"><i class="fa-solid fa-user"></i></Link></div>
        </div>

        
        <button
          onClick={toggleMenu}
          className="text-black md:hidden text-2xl"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      
      {isMenuOpen && (
        <div className="md:hidden bg-gray-200 w-full py-4">
          
          <ul className="flex flex-col items-center gap-4  font-bold">
            <li className="hover:text-gray-300 cursor-pointer"><Link to="/home">HOME</Link></li>
            <li className="hover:text-gray-300 cursor-pointer flex items-center gap-1"><Link to="/finddoctors">FIND DOCTORS</Link></li>
            <li className="hover:text-gray-300 cursor-pointer"><Link to="/appointments">APPOINMENTS</Link></li>
            <li className="hover:text-gray-300 cursor-pointer"><Link to="/about">ABOUT</Link></li>
          </ul>
          <div className=" flex flex-col items-center gap-6 text-white text-sm">
            <button className="bg-blue-600 px-4 py-1 rounded-full hover:bg-blue-500 transition">
              LOGOUT
            </button>
            <div className="text-black text-xl"><Link to="/userprofile"><i class="fa-solid fa-user"></i></Link></div>
          </div>


        </div>
      )}
    </nav>
  );
}

export default NavBar;
