import React from 'react'
import { motion } from "framer-motion";

function DoctorNavbar() {
  return (
    <div className='w-full fixed flex items-center justify-between px-5 shadow-md z-50 h-16 bg-white'>
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
      <div className=''>
        <button>LOGIN</button>/
        <button>SUBMIT</button>
      </div>



    </div>
  )
}

export default DoctorNavbar
