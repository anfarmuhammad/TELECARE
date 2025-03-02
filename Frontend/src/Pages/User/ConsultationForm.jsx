import React, { useState } from 'react';
import HomeHelth from '/src/assets/User/homehelth.png';
import NavBar from '../../componets/Usercomponets/NavBar';
import Footer from '../../componets/Usercomponets/Footer';
import { useNavigate } from 'react-router-dom';

const ConsultationForm = () => {
    const [isNewUser, setIsNewUser] = useState(true);

    const navigate = useNavigate();
    const bookingNavgate =()=>{
        navigate("/booking")
    }

    return (
        <div className="w-full min-h-screen">
            <NavBar />
            <div className='min-h-screen w-full bg-gray-100 pt-16 p-4'>
                <div className='p-4 md:p-8 w-full'>
                    <h2 className='text-xl md:text-2xl text-orange-600 font-bold text-center mb-4'>
                        Chat With "Dr. Name"
                    </h2>
                    <p className='text-center text-gray-600 mb-8'>
                        A Dr. ----- with you to consult anytime!
                    </p>

                    <div className='mb-8 w-full'>
                        <h3 className='text-md md:text-lg font-semibold text-gray-800 mb-2'>Type Your Health Query</h3>
                        <textarea
                            placeholder='Type your health query with symptoms, current medications, gender, age, height and weight.'
                            className='w-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none'
                        />
                    </div>

                    <div className='mb-8'>
                        <h3 className='text-md md:text-lg font-semibold text-gray-800 mb-2'>Consulting For (Choose a Person)</h3>
                        <div className='flex space-x-4'>
                            <div className='cursor-pointer p-3 md:p-4 rounded-full border-2 border-orange-400 text-center'>
                                Myself
                            </div>
                            <div className='cursor-pointer p-3 md:p-4 rounded-full border-2 border-gray-300 text-center'>
                                Someone else
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className='text-md md:text-lg font-semibold text-gray-800 mb-2'>Login/Signup</h3>
                        <div className='flex border-b mb-4'>
                            <button
                                onClick={() => setIsNewUser(true)}
                                className={`px-4 py-2 ${isNewUser ? 'border-b-2 border-orange-400' : ''}`}>
                                New User
                            </button>
                            <button
                                onClick={() => setIsNewUser(false)}
                                className={`px-4 py-2 ${!isNewUser ? 'border-b-2 border-orange-400' : ''}`}>
                                Existing User
                            </button>
                        </div>

                        <div className='flex flex-col md:flex-row bg-white shadow-lg rounded-2xl p-4 md:p-8 w-full'>
                            {isNewUser ? (
                                <div className='w-full md:w-2/3 p-4 md:p-8'>
                                    <input type='text' placeholder='Enter Your Name' className='w-full mb-4 p-3 border rounded-lg' />
                                    <input type='email' placeholder='Enter your E-mail address' className='w-full mb-4 p-3 border rounded-lg' />
                                    <input type='password' placeholder='Choose a Password' className='w-full mb-4 p-3 border rounded-lg' />
                                    <input type='password' placeholder='Confirm Password' className='w-full mb-4 p-3 border rounded-lg' />
                                    <input type='text' placeholder='Mobile Number' className='w-full mb-4 p-3 border rounded-lg' />
                                    <div className='mb-4'>
                                        <input type='checkbox' className='mr-2' />
                                        <span>I agree to terms of use and privacy policy</span>
                                    </div>
                                </div>
                            ) : (
                                <div className='w-full md:w-2/3 p-4 md:p-8'>
                                    <input type='email' placeholder='Enter your E-mail address' className='w-full mb-4 p-3 border rounded-lg' />
                                    <input type='password' placeholder='Enter your Password' className='w-full mb-4 p-3 border rounded-lg' />
                                </div>
                            )}

                            <div className='flex items-center flex-col font-bold justify-center mt-4 md:mt-0 md:ml-8'>
                                <img className='w-32 md:w-48' src={HomeHelth} alt="" />
                                <p className='text-center'>Your home for health</p>
                            </div>
                        </div>
                    </div>

                    <button className='bg-orange-500 text-white rounded-lg px-6 py-2 mt-4 hover:bg-orange-600 w-full md:w-auto' onClick={bookingNavgate}>
                        SUBMIT & CONTINUE
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ConsultationForm;
