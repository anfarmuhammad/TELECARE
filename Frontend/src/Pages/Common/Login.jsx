import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaEnvelope, FaLock } from 'react-icons/fa';

function Login() {
    const form = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const { register, handleSubmit, formState } = form;
    const { errors } = formState;
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log('Form Submitted', data);
    };

    return (
        <div className='w-full min-h-screen bg-gray-200'>
            <div className="w-full h-[20%]  max-w-3xl flex items-center text-3xl font-mono font-bold py-6">
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
            <div className='w-full h-full flex items-center justify-center mt-30  bg-gradient-to-br '>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className='bg-white shadow-lg rounded-xl p-8 w-full max-w-md'
                >
                    <h2 className='text-3xl font-bold text-center text-gray-800 mb-6'>Welcome to TeleCare</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
                        <div className="relative">
                            <label className="block text-gray-700 font-medium">Email</label>
                            <div className="relative">
                                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="email"
                                    className="w-full p-3 pl-10 mt-1 border border-gray-300 rounded-lg  focus:outline-none"
                                    placeholder="Enter your email"
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                            message: 'Invalid email address',
                                        },
                                    })}
                                />
                            </div>
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                        </div>

                        <div className="relative">
                            <label className="block text-gray-700 font-medium">Password</label>
                            <div className="relative">
                                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="password"
                                    className="w-full p-3 pl-10 mt-1 border border-gray-300 rounded-lg  focus:outline-none"
                                    placeholder="Enter your password"
                                    {...register('password', {
                                        required: 'Password is required',
                                        minLength: {
                                            value: 6,
                                            message: 'Password must be at least 6 characters long',
                                        },
                                    })}
                                />
                            </div>
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                        </div>
                        <button
                            type='submit'
                            className='w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300'
                        >
                            Login
                        </button>
                    </form>
                    <p className='text-center text-gray-600 mt-4'>
                        Don't have an account?
                        <span className='text-blue-600 cursor-pointer hover:underline' onClick={() => navigate('/Signup')}>
                            Sign up
                        </span>
                    </p>
                </motion.div>
            </div>
        </div>
    );
}

export default Login;