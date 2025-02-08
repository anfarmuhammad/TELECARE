import React from 'react'
import { motion } from "framer-motion";
import NavBar from '../../componets/Usercomponets/NavBar';
import Footer from '../../componets/Usercomponets/Footer';


function Consult() {
    return (

        <div className="bg-[url('/your-background-image.jpg')] bg-cover bg-blue-700 bg-center min-h-screen ">
            <NavBar />
            <div className="w-full h-16 bg-blue-800 "></div>
            <div className=' w-full h-[665px] flex items-center justify-center '>
                <motion.div
                    className="flex gap-6 bg-white/80 p-6 rounded-xl shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >

                    <motion.div
                        className="text-center p-4 border border-gray-300 rounded-lg bg-white shadow-md"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="text-blue-700 text-lg font-semibold flex items-center justify-center gap-2">
                            <span>💬</span> Chat Consultation
                        </div>
                        <p className="text-gray-600 text-sm mt-2">
                            Start an <span className="text-blue-600 font-medium">Unlimited Chat</span> for 50 or 100 hours with an Expert Physician.
                        </p>
                        <motion.button
                            className="mt-4 px-4 py-2 border border-blue-700 text-blue-700 rounded-lg hover:bg-blue-700 hover:text-white transition"
                            whileHover={{ scale: 1.1 }}
                        >
                            Chat now
                        </motion.button>
                    </motion.div>


                    <motion.div
                        className="text-center p-4 border border-gray-300 rounded-lg bg-white shadow-md"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="text-blue-700 text-lg font-semibold flex items-center justify-center gap-2">
                            <span>📹</span> Video Consultation
                        </div>
                        <p className="text-gray-600 text-sm mt-2">
                            Book a <span className="text-blue-600 font-medium">Private & Secure</span> video consultation with an Expert Physician.
                        </p>
                        <motion.button
                            className="mt-4 px-4 py-2 border border-blue-700 text-blue-700 rounded-lg hover:bg-blue-700 hover:text-white transition"
                            whileHover={{ scale: 1.1 }}
                        >
                            Book Now
                        </motion.button>
                    </motion.div>

                    <motion.div
                        className="text-center p-4 border border-gray-300 rounded-lg bg-white shadow-md"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="text-blue-700 text-lg font-semibold flex items-center justify-center gap-2">
                            <span>📞</span> Phone Consultation
                        </div>
                        <p className="text-gray-600 text-sm mt-2">
                            Book a <span className="text-blue-600 font-medium">One-On-One</span> phone consultation with an Expert Physician.
                        </p>
                        <motion.button
                            className="mt-4 px-4 py-2 border border-blue-700 text-blue-700 rounded-lg hover:bg-blue-700 hover:text-white transition"
                            whileHover={{ scale: 1.1 }}
                        >
                            Start now
                        </motion.button>
                    </motion.div>
                </motion.div>

            </div>
            <Footer/>



        </div>
    )
}

export default Consult