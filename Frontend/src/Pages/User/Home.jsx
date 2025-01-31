import React from "react";
import DoctorImage from "/src/assets/User/doctorimage.png";
import Image from "/src/assets/User/image 5.png";
import ServiceImage from "/src/assets/User/service.png";
import Slider from "./Slider";
import Banner from "/src/assets/User/banner.png";
import FaqItem from "./FaqItem";
import ForDoctor from "/src/assets/User/fordoctor.png"
import { motion } from "framer-motion";
import NavBar from "../../componets/Usercomponets/NavBar";
import Footer from "../../componets/Usercomponets/Footer";

function Home() {
    return (
        <div className="w-full h-auto">
            <NavBar/>
            
            <div className="w-full h-16 bg-blue-800 "></div>
            <div
                style={{ backgroundImage: `url(${DoctorImage})` }}
                className="w-full h-auto bg-cover   bg-center sm:bg-contain sm:bg-no-repeat md:bg-cover md:bg-center flex flex-col justify-center items-center text-center px-4 sm:px-8 md:px-16 py-10">
                <div className="flex flex-col  md:w-[80%] items-center rounded-lg bg-white/5 backdrop-blur-md px-4 py-2">
                <div className="flex flex-col  items-center ">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-2xl font-extrabold text-white sm:text-xl md:text-3xl px-4 py-2 rounded-lg"
                    >
                        Over 100 million people from
                    </motion.span>

                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                        className="text-3xl font-extrabold text-white sm:text-xl md:text-3xl"
                    >
                        190+ countries trust TeleCare with their Health Decisions
                    </motion.span>
                    <br />
                    <input
                        className="w-full sm:w-[80%] md:w-[600px] h-[40px] bg-white mt-4 px-3 rounded-md"
                        type="search"
                        placeholder="Search"
                    />
                    <span className="mt-5 text-sm font-serif sm:text-base text-white">
                        Discover specialized medical insights from real patient questions
                    </span>
                    <span className="text-sm text-white font-serif sm:text-base">
                        answered by expert physicians.
                    </span>
                    <div className="w-[90%] sm:w-full text-lg md:text-2xl not-italic mt-3">
                        <h1 className="text-center text-white font-bold">
                            From little to life-altering issues, we've got you covered
                        </h1>
                    </div>
                </div> 
                </div>
                <div className="w-[90%] sm:w-full h-[80px] md:h-[250px] mt-5 flex justify-center">
                    <img
                        className="rounded-xl w-full sm:w-[90%] md:w-[80%] object-cover opacity-85"
                        src={Image}
                        alt="Doctor"
                    />
                </div>
                <Slider />
            </div>

            <div style={{ backgroundImage: `url(${ServiceImage})` }} className="w-full min-h-screen bg-blue-950 flex flex-col justify-center items-center px-4 sm:px-8 py-10">
                <div className="text-center">
                    <span className="text-blue-400 text-lg md:text-2xl">
                        Text, Video Call or Phone
                    </span>
                    <span className="text-white text-lg md:text-2xl block">
                        a doctor anytime, anywhere
                    </span>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-10 mt-5 justify-center items-center">
                        
                    </div>
                    <p className="text-white font-light mt-3 text-sm md:text-base">
                        Get your first online doctor consultation
                    </p>
                </div>
                <div className="flex justify-center mt-5 text-base md:text-lg font-extrabold text-white">
                    <p>Doctors and everyone’s the best</p>
                </div>
                <div style={{ backgroundImage: `url(${Banner})` }} className="w-full md:w-[80%] h-[200px] md:h-[300px] rounded-md bg-amber-900 mt-6 flex items-center pl-6 md:pl-10">
                    <p className="text-sm md:text-lg font-extralight text-white">
                        <strong>4.6</strong> <br />
                        Average doctor rating <br />
                        <strong>1 hr</strong> <br />
                        Average turnaround time
                    </p>
                </div>
                <div className="flex flex-col md:flex-row items-center md:justify-between gap-4 md:gap-10 px-4 py-2 text-white">
                    <p className="text-sm md:text-base lg:text-lg text-center md:text-left">
                        TeleCare upholds the highest standards when onboarding physicians. Every physician at TeleCare is highly qualified.
                    </p>
                    <button className="w-full md:w-[150px] h-[40px] bg-blue-500 rounded-full text-white text-sm md:text-base">
                        Choose a Doctor
                    </button>
                </div>
            </div>
            <div className="w-full min-h-screen bg-gray-300 flex flex-col items-center pt-16 px-4 sm:px-8 md:px-16">
                <div className="text-center">
                    <span className="text-[20px] font-semibold">Have doubts? </span>
                    <span className="text-[20px] text-blue-600 font-semibold">FAQs</span>
                </div>
                <div className="flex flex-wrap justify-center gap-3 mt-6">
                    {[
                        "TeleCare",
                        "Content",
                        "Telemedicine",
                        "Online Doctor",
                        "Query",
                        "Chat",
                        "Video/Phone Consultation",
                    ].map((item, index) => (
                        <button
                            key={index}
                            className="bg-white px-4 py-2 rounded-full text-blue-600 text-sm sm:text-base shadow-md hover:bg-blue-100 transition"
                        >
                            {item}
                        </button>
                    ))}
                </div>
                <div className="w-full md:w-[80%] mt-6">
                    <FaqItem />
                </div>
                <div className="w-full md:w-[80%] bg-white mt-16 p-4 sm:p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between">
                    <img className="w-20 h-20 md:w-24 md:h-24" src={ForDoctor} alt="For Doctor" />
                    <div className="text-center md:text-left flex-1 px-4">
                        <h2 className="font-bold text-lg">Are you a doctor?</h2>
                        <p className="text-gray-600 text-sm">
                            Join our medical panel of doctors and be a part of the already big thing in healthcare.
                        </p>
                    </div>
                    <button className="w-40 py-2 bg-blue-500 text-white rounded-full mt-4 md:mt-0 shadow-md hover:bg-blue-600 transition">
                        Join for free
                    </button>
                </div>
            </div>
            <Footer/>
            
            
        </div>
    );
}

export default Home;
