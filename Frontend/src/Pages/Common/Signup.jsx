import React, { useState } from "react";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  const doctorsignup = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};

    if (formData.name.trim().length < 3) {
      tempErrors.name = "Name must be at least 3 characters";
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
    }
    if (formData.password !== formData.confirmPassword) {
      tempErrors.confirmPassword = "Passwords do not match";
    }
    if (!/^\d{10}$/.test(formData.mobile)) {
      tempErrors.mobile = "Mobile number must be 10 digits";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate("/home");
    }
  };

  const doctorNavigate = () => {
    doctorsignup("/doctorsignup");
  };

  return (
    <div>
      <div className="w-full min-h-screen bg-gray-200 flex flex-col px-4 ">
        <div className="w-full max-w-3xl flex items-center text-3xl font-mono font-bold py-6">
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
        <div className="flex justify-center items-center flex-col">
          <div className="mb-4 text-center">
            <span className="text-2xl font-bold">Sign Up </span>
            <span>- New User</span>
          </div>
          <div className="w-full pb-16 max-w-2xl bg-white rounded-lg flex flex-wrap justify-center p-6 shadow-lg">
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-6 p-4">
              <input
                className="w-full max-w-[300px] h-[40px] bg-white rounded-md border border-gray-600 outline-none p-4 "
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              
              <input
                className="w-full max-w-[300px] h-[40px] bg-white rounded-md border  outline-none p-4 "
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              
              <input
                className="w-full max-w-[300px] h-[40px] bg-white rounded-md border outline-none p-4 "
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
              
              <input
                className="w-full max-w-[300px] h-[40px] bg-white rounded-md border  outline-none p-4 "
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
              
              <input
                className="w-full max-w-[300px] h-[40px] bg-white rounded-md border  outline-none p-4 e"
                type="tel"
                placeholder="Mobile Number"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
              {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
              
              <button 
                className="w-[200px] h-[40px] bg-blue-500 rounded-md text-white hover:bg-blue-800 transition"
                onClick={handleSubmit}
              >
                SUBMIT
              </button>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center gap-6 mt-6 md:mt-0">
              <div className="p-6 bg-blue-900 z-10 text-white rounded-lg w-full max-w-xs shadow-lg">
                <h3 className="text-lg font-semibold mb-3">Why Register?</h3>
                <ul className="text-sm space-y-2">
                  <li>✅ Consult Doctor Anytime.</li>
                  <li>✅ No Travel. No Waiting Queue.</li>
                  <li>✅ Trusted by millions worldwide.</li>
                </ul>
              </div>
              <div className="bg-blue-900 p-4 rounded-md w-full max-w-xs text-center">
                <p className="mb-2 text-sm text-white">Are You a Doctor?</p>
                <button 
                  className="bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded-md font-medium transition-all"
                  onClick={doctorNavigate}
                >
                  SIGN UP HERE →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
