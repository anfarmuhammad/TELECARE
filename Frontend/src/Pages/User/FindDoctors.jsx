import React from "react";
import NavBar from "../../componets/Usercomponets/NavBar";
import Footer from "../../componets/Usercomponets/Footer";
import FindDoctor from "/src/assets/User/finddoctor.png"
import { motion } from "framer-motion";
import { User, BookOpen, Star, Globe, MessageCircle, Video, Phone, MessageSquare } from 'lucide-react';
import { useNavigate } from "react-router-dom";


const doctors = [
  {
    name: 'Dr. John Doe',
    qualification: 'MBBS, MD',
    experience: '10 years',
    rating: 4,
    reviews: 120,
    specialties: ['Cardiology', 'General Medicine'],
    languages: ['English', 'Hindi'],
    pricing: {
      query: 200,
      chat: 1000,
      call: 1500
    }
  },
  {
    name: 'Dr. Jane Smith',
    qualification: 'MBBS, MS',
    experience: '8 years',
    rating: 5,
    reviews: 80,
    specialties: ['Neurology', 'Psychiatry'],
    languages: ['English'],
    pricing: {
      query: 300,
      chat: 1500,
      call: 2000
    }
  },
  {
    name: 'Dr. Jane Smith',
    qualification: 'MBBS, MS',
    experience: '8 years',
    rating: 5,
    reviews: 80,
    specialties: ['Neurology', 'Psychiatry'],
    languages: ['English'],
    pricing: {
      query: 300,
      chat: 1500,
      call: 2000
    }
  },
  {
    name: 'Dr. Jane Smith',
    qualification: 'MBBS, MS',
    experience: '8 years',
    rating: 5,
    reviews: 80,
    specialties: ['Neurology', 'Psychiatry'],
    languages: ['English'],
    pricing: {
      query: 300,
      chat: 1500,
      call: 2000
    }
  }
];

function FindDoctors() {

  const navigate = useNavigate()
  const consultNavigate = () => {
    navigate("/consultationform")
  }


  return (
    <div className="w-full bg-gray-200 flex flex-col  min-h-screen">
      <NavBar />
      <div className=" pt-16 min-h-screen flex flex-col">
        <div
          className="w-full h-[200px] flex items-center gap-10 p-1.5 flex-col bg-cover bg-blue-700 bg-center bg-no-repeat relative overflow-hidden"
          style={{ backgroundImage: `url(${FindDoctor})` }}
        >
          <h1 className="font-medium text-3xl text-white z-10">
            CHOOSE A DOCTOR
          </h1>

          <div className="flex w-full h-[300px] flex-col md:flex-row justify-center items-center mt-6 gap-3 z-10">
            <input
              type="text"
              placeholder="Search for Doctors"
              className="w-[50%]  p-3 border border-gray-300 focus:outline-none bg-white "
            />
            <button className="bg-teal-600 text-white px-6 py-2   w-full sm:w-auto hover:bg-teal-700 transition duration-300">
              Search
            </button>
          </div>


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

        <div className="bg-gray-200 text-black p-4">
          <div className="text-black p-6 rounded-lg">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Doctors</h1>
            <p className="text-sm md:text-base text-black mb-4">
              Find one of the best Doctors to get instant medical advice and second opinions for your health problems.
              Ask doctors online and consult them through video, phone, or chat. Get started now!
            </p>

            {doctors.map((doctor, index) => (
              <div
                key={index}
                className="bg-white flex flex-col md:flex-row justify-between rounded-lg p-4 mb-4 shadow-sm text-black"
              >
                <div className="flex flex-col">
                  <h2 className="text-lg font-bold text-blue-700 hover:underline cursor-pointer flex items-center gap-2">
                    <img className="w-[50px] md:w-[60px]" src="https://assets.icliniq.com/v2/assets/gender-icons/male.jpg" alt="" />
                    {doctor.name}
                  </h2>
                  <p className="flex items-center gap-2 text-sm md:text-base">
                    <BookOpen className="w-4 h-4 text-gray-600" />
                    {doctor.qualification}
                  </p>
                  <p className="flex items-center gap-2 text-sm md:text-base">
                    <User className="w-4 h-4 text-gray-600" />
                    Experience: {doctor.experience}
                  </p>
                  <p className="flex items-center gap-2 text-sm md:text-base">
                    <Star className="w-4 h-4 text-yellow-500" />
                    Rating: {'⭐'.repeat(doctor.rating)} ({doctor.reviews} ratings)
                  </p>
                  <div className="flex gap-2 my-2 flex-wrap items-center">
                    <Globe className="w-4 h-4 text-gray-600" />
                    {doctor.specialties.map((specialty, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 text-blue-700 text-xs rounded-full px-2 py-1 border border-blue-300"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                  <p className="flex items-center gap-2 text-sm md:text-base">
                    <Globe className="w-4 h-4 text-gray-600" />
                    Consulting Languages: {doctor.languages.join(', ')}
                  </p>
                </div>

                <div className="flex flex-col gap-2 mt-4 md:mt-0 md:ml-4 w-full md:w-auto">
                  <button
                    className="bg-gray-100 hover:bg-gray-300 p-2 text-black text-sm flex items-center justify-between w-full md:w-48"
                    onClick={consultNavigate}
                  >
                    <MessageCircle className="w-4 h-4 text-blue-600" />
                    Ask a Query Rs.{doctor.pricing.query}
                  </button>
                  <button
                    className="bg-gray-100 hover:bg-gray-300 p-2 text-black text-sm flex items-center justify-between w-full md:w-48"
                    onClick={consultNavigate}
                  >
                    <MessageSquare className="w-4 h-4 text-green-600" />
                    50 hrs Chat Rs.{doctor.pricing.chat}
                  </button>
                  {doctor.pricing.call && (
                    <>
                      <button
                        className="bg-gray-100 hover:bg-gray-300 p-2 text-black text-sm flex items-center justify-between w-full md:w-48"
                        onClick={consultNavigate}
                      >
                        <Video className="w-4 h-4 text-red-600" />
                        Video Call Rs.{doctor.pricing.call}
                      </button>
                      <button
                        className="bg-gray-100 hover:bg-gray-300 p-2 text-black text-sm flex items-center justify-between w-full md:w-48"
                        onClick={consultNavigate}
                      >
                        <Phone className="w-4 h-4 text-purple-600" />
                        Phone Call Rs.{doctor.pricing.call}
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}




export default FindDoctors;
