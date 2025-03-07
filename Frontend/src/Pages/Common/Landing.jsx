import React from 'react';
import LandingImage from '/src/assets/Common/landingmain.png';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Landing() {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/Login");
    }
    const signupnavigate = useNavigate();
    const signuphandleNavigate = () => {
        signupnavigate("/SignUp");
    }
    return (
        <div style={{ backgroundImage: `url(${LandingImage})` }}
            className='w-full min-h-screen bg-blue-800 bg-cover bg-center text-white flex flex-col items-center'>

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

            <div className='flex  flex-wrap justify-center gap-6 pb-10'>
                <motion.button className='w-[150px] h-[45px] bg-blue-700 hover:bg-blue-600 text-white font-semibold rounded-full shadow-md transition'
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                    onClick={handleNavigate}>
                    Login
                </motion.button>
                <motion.button className='w-[150px] h-[45px] bg-blue-700 hover:bg-blue-600 text-white font-semibold rounded-full shadow-md transition'
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    onClick={signuphandleNavigate}>
                    Signup
                </motion.button>
                <motion.div
                    className="absolute bottom-0 left-0 w-[150px] h-[150px] bg-white opacity-10 rounded-full"
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                ></motion.div>

                <motion.div
                    className="absolute top-10 right-10 w-[100px] h-[100px] bg-white opacity-20 rounded-full"
                    animate={{ y: [0, 30, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                ></motion.div>

                <motion.div
                    className="absolute top-20 left-20 w-[80px] h-[80px] bg-white opacity-15 rounded-full"
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                ></motion.div>

                <motion.div
                    className="absolute bottom-10 right-20 w-[120px] h-[120px] bg-white opacity-10 rounded-full"
                    animate={{ y: [0, 25, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                ></motion.div>


                <motion.div
                    className="absolute top-5 left-1/3 w-[60px] h-[60px] bg-white opacity-10 rounded-full"
                    animate={{ y: [0, 10, 0], x: [0, -10, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                ></motion.div>

                <motion.div
                    className="absolute bottom-5 right-1/4 w-[90px] h-[90px] bg-white opacity-15 rounded-full"
                    animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                ></motion.div>

                <motion.div
                    className="absolute top-1/2 left-10 w-[50px] h-[50px] bg-white opacity-5 rounded-full"
                    animate={{ y: [0, 15, 0], x: [0, -15, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                ></motion.div>

                <motion.div
                    className="absolute bottom-1/2 right-10 w-[70px] h-[70px] bg-white opacity-20 rounded-full"
                    animate={{ y: [0, 25, 0], x: [0, 15, 0] }}
                    transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
                ></motion.div>
            </div>
        </div>
    );
}

export default Landing;

