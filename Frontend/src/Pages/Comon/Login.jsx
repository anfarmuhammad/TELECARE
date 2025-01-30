import React from 'react';
import LoginImage from '/src/assets/Common/sginupimage.png';
import { motion } from 'framer-motion';

function Login() {
    return (
        <div style={{ backgroundImage: `url(${LoginImage})` }} className='w-full h-screen bg-amber-700 flex flex-col items-center justify-center px-4'>
            <div className="w-full max-w-3xl flex text-white items-center text-3xl font-mono font-bold py-6 justify-center">
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
            <div className='w-full flex flex-col items-center justify-center'>
                <h1 className='mb-6 text-2xl font-bold text-white text-center'>Login to TeleCare</h1>
                <div className='w-full max-w-md backdrop-blur-md bg-opacity-8 rounded-lg flex flex-col items-center justify-center gap-6 p-6'>
                    <input className='w-full max-w-sm h-12 bg-white rounded-full outline-none p-4' type="email" placeholder='Email' />
                    <input className='w-full max-w-sm h-12 bg-white rounded-full outline-none p-4' type="password" placeholder='Password' />
                    <button className='w-full max-w-sm h-12 bg-white text-blue-900 rounded-full'>LOGIN</button>
                    <p className='text-white cursor-pointer hover:underline'>Create your Account →</p> 
                </div>
            </div>
        </div>
    );
}

export default Login;
