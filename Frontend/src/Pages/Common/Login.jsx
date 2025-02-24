import React from 'react';
import { motion } from 'framer-motion';
import { data, useNavigate } from 'react-router-dom';
import {useForm}  from  'react-hook-form'


function Login() {

    const form = useForm({
        defaultValues: {
            email:"default@gmail.com",
            password:""

        }
    });
    const {  register, handleSubmit, formState } =form;
    const {errors, isDirty, isValid } =formState;
    const onSubmit = (data) =>{
      console.log("Form submit" , data);
        
    }






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

                <form className='w-full bg-white max-w-md backdrop-blur-md bg-opacity-8 rounded-lg flex flex-col items-center justify-center gap-6 p-6' onSubmit={handleSubmit(onSubmit)} noValidate>
                    <h1 className='mb-6  text-2xl font-bold  text-center'>Login to TeleCare</h1>
                    <input className='w-full max-w-sm rounded-md h-12 bg-white border border-gray-600 outline-none p-4' name="email"  {...register("email",
                        {
                            pattern:{
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "Invalid email address"
                            }
                        }
                    )} />
                    {errors.email?.message && <p className='text-red-600 text-sm'>{errors.email.message}</p>}
                    <input className='w-full max-w-sm h-12 bg-white rounded-md outline-none border border-gray-600 p-4' name="password" type="Password" {...register("password",
                        {
                            required: {
                                value: true,
                                message: ""
                            },
                            minLength: {
                                value: 6,
                                message: "password must be atleast 6 characters long"
                            }
                        }
                    )} />
                    {errors.password?.message && <p className='text-red-600 text-sm'>{errors.password.message}</p>}
                    <button disabled={!isDirty || isValid} className='w-[50%] max-w-sm h-12 bg-green-700 text-white rounded-md'>LOGIN</button>
                    <p className=' cursor-pointer hover:underline' onClick={handleNavigate}>Create your Account →</p>
                </form>
            </div>
        </div>
    );
}

export default Login;
