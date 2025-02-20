import React from "react";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


function SignUp() {
  const navigate = useNavigate();
  const handleNavigate =()=>{
    navigate("/home")

  }
  const doctorsignup = useNavigate();
  const doctorNavigate =()=>{
    doctorsignup("/doctorsignup")
  }

  return (
    <div>
      <div  
      className="w-full min-h-screen bg-gray-200 flex flex-col  px-4">
        <div className="w-full max-w-3xl flex  items-center text-3xl font-mono font-bold py-6">
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
        <div className="flex  justify-center  items-center  flex-col">
          <div className=" mb-4 text-center">
            <span className="text-2xl font-bold">Sign Up </span>
            <span>- New User</span>
          </div>
          <div className="w-full pb-16  max-w-2xl bg-white backdrop-blur-md bg-opacity-8 rounded-lg flex flex-wrap justify-center p-6 shadow-lg">
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-10 p-4">

              <input
                className="w-full max-w-[300px] h-[40px] bg-white rounded-md  border border-gray-600 outline-none  p-4"
                type="text"
                placeholder="Name"
              />
              <input
                className="w-full max-w-[300px] h-[40px] bg-white rounded-md border border-gray-600 outline-none p-4"
                type="email"
                placeholder="Email"
              />
              <input
                className="w-full max-w-[300px] h-[40px] bg-white rounded-md  border border-gray-600 outline-none p-4"
                type="password"
                placeholder="Password"
              />
              <input
                className="w-full max-w-[300px] h-[40px] bg-white rounded-md  border border-gray-600 outline-none p-4"
                type="password"
                placeholder="Confirm Password"
              />
              <input
                className="w-full max-w-[300px] h-[40px] bg-white rounded-md border border-gray-600 outline-none p-4"
                type="tel"
                placeholder="Mobile Number"
              />
              <button className="w-[200px] h-[40px] bg-green-700 rounded-md text-white hover:bg-green-800 transition"  onClick={handleNavigate}>
                SUBMIT
              </button>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center gap-6 mt-6 md:mt-0">
              <div className="p-6 bg-blue-900 z-10 text-white rounded-lg w-full max-w-xs shadow-lg">
                <h3 className="text-lg font-semibold mb-3">Why Register?</h3>
                <ul className="text-sm space-y-2">
                  <li>✅ Consult Doctor Anytime.</li>
                  <li>✅ No Travel. No Waiting Queue.</li>
                  <li>✅ Trusted by millions worldwide.</li>
                </ul>
              </div>
              <div className=" bg-blue-900 p-4 rounded-md w-full max-w-xs text-center">
                <p className="mb-2 text-sm text-white">Are You a Doctor?</p>
                <button className="bg-green-700 hover:bg-green-800  text-white px-4 py-2 rounded-md font-medium  transition-all" onClick={doctorNavigate}>
                  SIGN UP HERE →
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
      
    </div>

  );
}

export default SignUp;
