import React from 'react';
import LoginImage from '/src/assets/Common/sginupimage.png';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/Signup")
    }
    return (
        <div className='w-full min-h-screen bg-gray-200 flex flex-col  px-4'>
            <div className="w-full  max-w-3xl flex  items-center text-3xl font-mono font-bold py-6">
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
            <div className='w-full h-[644.5px] flex flex-col items-center justify-center'>

                <div className='w-full bg-white max-w-md backdrop-blur-md bg-opacity-8 rounded-lg flex flex-col items-center justify-center gap-6 p-6'>
                    <h1 className='mb-6  text-2xl font-bold  text-center'>Login to TeleCare</h1>
                    <input className='w-full max-w-sm rounded-md h-12 bg-white border border-gray-600 outline-none p-4' type="email" placeholder='Email' />
                    <input className='w-full max-w-sm h-12 bg-white rounded-md outline-none border border-gray-600 p-4' type="password" placeholder='Password' />
                    <button className='w-[50%] max-w-sm h-12 bg-green-700 text-white rounded-md'>LOGIN</button>
                    <p className=' cursor-pointer hover:underline' onClick={handleNavigate}>Create your Account →</p>
                </div>
            </div>
        </div>
    );
}

export default Login;
