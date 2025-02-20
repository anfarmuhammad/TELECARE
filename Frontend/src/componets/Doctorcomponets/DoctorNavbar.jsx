import React, { useState } from 'react';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

function DoctorNavbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <nav className="w-full fixed flex items-center justify-between px-5 shadow-md z-50 h-16 bg-gray-100 ">
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

      <div className="hidden md:flex items-center gap-6 text-sm">
        <button 
          className="bg-blue-600 px-4 py-1 text-white  rounded-full hover:bg-blue-500 transition" 
          onClick={handleLogout}
        >
          LOGOUT
        </button>
        <div className="text-xl cursor-pointer">
          <i className="fa-solid fa-user"></i>
        </div>
      </div>

      <button className="md:hidden text-xl" onClick={() => setIsOpen(!isOpen)}>
        <i className="fa-solid fa-bars"></i>
      </button>

      {isOpen && (
        <div className="absolute top-16 right-5 bg-gray-800 w-40 rounded-lg p-3 flex flex-col gap-3 shadow-lg md:hidden">
          <button 
            className="bg-blue-600 px-4 py-1 rounded-full hover:bg-blue-500 transition text-sm"
            onClick={handleLogout}
          >
            LOGOUT
          </button>
          <div className="text-white text-xl text-center">
            <i className="fa-solid fa-user"></i>
          </div>
        </div>
      )}
    </nav>
  );
}

export default DoctorNavbar;
