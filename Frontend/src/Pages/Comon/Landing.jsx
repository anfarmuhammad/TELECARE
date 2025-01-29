import React from 'react';
import LandingImage from '/src/assets/Common/landing.png';
import { motion } from 'framer-motion';

function Landing() {
    return (
        <div style={{ backgroundImage: `url(${LandingImage})` }}
            className='w-full h-screen  bg-cover bg-center text-white flex flex-col items-center'>

            <div className='w-full h-16 text-3xl flex items-center  font-mono font-bold'>
                <motion.span
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                >Tele</motion.span>
                <motion.span className='text-blue-500'
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >Care</motion.span>
            </div>

            <div className='w-full flex-1 flex flex-col items-center justify-center text-center px-4'>
                <motion.h1 className='text-4xl md:text-5xl font-extrabold leading-tight '
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    Consult a Doctor Online Anytime, Anywhere
                </motion.h1>
                <motion.p className='mt-2 font-bold text-lg md:text-xl'
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Get instant access to certified doctors for online consultation
                </motion.p>
            </div>

            <div className='flex flex-wrap justify-center gap-6 pb-10'>
                <motion.button className='w-[150px] h-[45px] bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full shadow-md transition'
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                >
                    Login
                </motion.button>
                <motion.button className='w-[150px] h-[45px] bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full shadow-md transition'
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Signup
                </motion.button>
            </div>
        </div>
    );
}

export default Landing;

