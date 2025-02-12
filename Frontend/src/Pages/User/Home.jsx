import React from "react";
import { useState, useEffect } from "react";
import Main from "/src/assets/User/main.png"
import Image from "/src/assets/User/image 5.png";
import ServiceImage from "/src/assets/User/service.png";
import Slider from "./Slider";
import Banner from "/src/assets/User/banner.png";
import Phone from "/src/assets/User/phone.png"
import Video from "/src/assets/User/video.png"
import Chat from "/src/assets/User/chat.png"
import Family from "/src/assets/User/family.png"
import FaqItem from "./FaqItem";
import ForDoctor from "/src/assets/User/fordoctor.png"
import { motion } from "framer-motion";
import NavBar from "../../componets/Usercomponets/NavBar";
import Footer from "../../componets/Usercomponets/Footer";


const images = [
    "https://img.freepik.com/premium-photo/creative-collage-telehealth-consultation_23-2149488755.jpg?w=1380",
    "https://img.freepik.com/free-photo/creative-collage-telehealth-consultation_23-2149488761.jpg?t=st=1739366768~exp=1739370368~hmac=418071",
    "https://img.freepik.com/free-photo/creative-collage-telehealth-consultation_23-2149488758.jpg?t=st=1739366852~exp=1739370452~hmac=dac0f0e2a73646c23b9c4ad75b7b456c570a5173a0f85388ee029959e1b2db2f&w=1380",
  ];
  
  const placeholderText = "Search for doctors...";
  
function Home() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); 

        return () => clearInterval(interval);
    }, []);
    const placeholderText = "Search for doctors...";
    const [displayText, setDisplayText] = useState("");
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (charIndex < placeholderText.length) {
                setDisplayText((prev) => prev + placeholderText[charIndex]);
                setCharIndex(charIndex + 1);
            } else {
                setTimeout(() => {
                    setDisplayText("");
                    setCharIndex(0);
                });
            }
        }, 100); 


        return () => clearInterval(interval);
    }, [charIndex]);
    return (
        <div className="w-full h-auto">
            <NavBar />


            <div className="w-full min-h-screen relative pt-16 bg-gray-200 flex flex-col text-center">
      {/* Background Section */}
      <div
        style={{ backgroundImage: `url(${images[index]})` }}
        className="flex flex-col bg-cover bg-center text-white w-full h-[400px] sm:h-[500px] md:h-[570px] items-center justify-center px-4"
      >
        <div className="flex flex-col items-center max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-xl sm:text-2xl md:text-3xl font-extrabold px-4 py-2 rounded-lg"
          >
            TeleCare – Your Trusted Online Doctor
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            className="text-lg sm:text-xl md:text-3xl font-extrabold"
          >
            Consultation Platform for Instant Care & Expert Advice
          </motion.span>
          <br />
          
          {/* Search Input */}
          <input
            className="w-full sm:w-4/5 md:w-[600px] h-10 border border-white text-black font-black mt-4 px-3 focus:outline-none rounded-full"
            type="search"
            placeholder={displayText}
          />

          <span className="mt-5 text-xs sm:text-sm md:text-base font-serif">
            Discover specialized medical insights from real patient questions
          </span>
          <span className="text-xs sm:text-sm md:text-base font-serif">
            answered by expert physicians.
          </span>
          <div className="w-full sm:w-4/5 text-base sm:text-lg md:text-2xl mt-3">
            <h1 className="text-center font-bold">
              From little to life-altering issues, we've got you covered
            </h1>
          </div>
        </div>
      </div>
      
      {/* Slider Component */}
      <Slider />
    </div>
            <div className="w-full min-h-screen flex items-center justify-center flex-col bg-gray-200  px-8 py-12">



                {/* Consultation Options */}
                <div className="mt-12 flex items-center gap-10  justify-center flex-col text-center">
                    <h2 className="text-lg font-semibold mb-6">Get your first online doctor consultation</h2>
                    <div className="flex flex-wrap text-white font-bold  justify-center max-w-full gap-5 md:gap-26 mx-auto">
                        <div style={{ backgroundImage: `url(${Chat})` }} className="bg-gray-800 bg-cover  w-[300px] bg-center flex justify-center  flex-col h-[300px]  rounded-lg text-center">
                            <div className="bg-black/50 flex items-center justify-center flex-col h-full w-full">
                                <button><img src="https://assets.icliniq.com/modern-homepage/Chat-blue-icon.svg" alt="Chat Consultation" className="mx-auto w-[150px] opacity-75" /></button>
                                <p className="mt-2">Chat Consultation</p>
                            </div>
                        </div>
                        <div style={{ backgroundImage: `url(${Phone})` }} className="bg-gray-800 bg-cover bg-center   w-[300px] h-[300px] rounded-lg text-center">
                            <div className="bg-black/50 flex items-center justify-center flex-col h-full w-full">
                                <button><img src="https://assets.icliniq.com/modern-homepage/phone-blue-icon.svg" alt="Phone Consultation" className="mx-auto  w-[150px] opacity-75" /></button>
                                <p className="mt-2">Phone Consultation</p>
                            </div>
                        </div>
                        <div style={{ backgroundImage: `url(${Video})` }} className="bg-gray-800 bg-cover bg-center  w-[300px] h-[300px]  rounded-lg text-center">
                            <div className="bg-black/50 flex items-center justify-center flex-col h-full w-full">
                                <button><img src="https://assets.icliniq.com/modern-homepage/video-blue-icon.svg" alt="Video Consultation" className="mx-auto w-[150px] opacity-75" /></button>
                                <p className="mt-2">Video Consultation</p>
                            </div>
                        </div>
                    </div>
                    <p className="mt-6 ">Text, Video Call or Phone a doctor anytime, anywhere</p>
                </div>
                <div
                    style={{ backgroundImage: `url(${Family})` }}
                    className="w-full md:w-[80%] h-[200px] md:h-[300px] rounded-md bg-cover bg-center bg-amber-900 mt-6 flex flex-col justify-center items-start gap-4 p-4 md:p-10 "
                >
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold leading-relaxed">
                        Over 100 million people from 196+ countries <br />
                        trust TeleCare with their health
                    </p>

                    <div className="w-full max-w-[300px] bg-white p-3 rounded-md shadow-md">
                        <p className="text-xs sm:text-sm md:text-lg font-extralight text-black">
                            Fast, reliable, enthusiastic & empathetic advice
                        </p>
                    </div>
                </div>

            </div>

            <div
                // style={{ backgroundImage: `url(${ServiceImage})` }} 
                className="w-full min-h-screen  flex flex-col justify-center bg-gray-100 items-center px-4 sm:px-8 py-10">
                <div className="text-center">
                    <span className="text-blue-400 text-lg md:text-2xl">
                        Text, Video Call or Phone
                    </span>
                    <span className=" text-lg md:text-2xl block">
                        a doctor anytime, anywhere
                    </span>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-10 mt-5 justify-center items-center">

                    </div>
                    <p className=" font-light mt-3 text-sm md:text-base">
                        Get your first online doctor consultation
                    </p>
                </div>
                <div className="flex justify-center mt-5 text-base md:text-lg font-extrabold text-white">
                    <p>Doctors and everyone’s the best</p>
                </div>
                <div style={{ backgroundImage: `url(${Banner})` }} className="w-full  bg-cover bg-center md:w-[80%] h-[200px] md:h-[300px] rounded-md bg-amber-900 mt-6 flex items-center pl-6 md:pl-10">
                    <p className="text-sm md:text-lg font-extralight text-white">
                        <strong>4.6</strong> <br />
                        Average doctor rating <br />
                        <strong>1 hr</strong> <br />
                        Average turnaround time
                    </p>
                </div>
                <div className="flex flex-col md:flex-row items-center md:justify-between gap-4 md:gap-10 px-4 py-2 ">
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
                <div className="w-full md:w-[80%] bg-white mt-16 mb-12 md:mb-0 p-4 sm:p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between">
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
            <Footer />


        </div>
    );
}

export default Home;
