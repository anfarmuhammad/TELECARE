import { useState } from "react";
import Personal from "/src/assets/Doctor/personal.png";
import DoctorNavbar from "../../componets/Doctorcomponets/DoctorNavbar";
import { useNavigate } from "react-router-dom";

const DoctorSignup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const doctordetailsform = useNavigate();
    const doctorNavigate =()=>{
      doctordetailsform("/academicdetailsform")
    }
    
    return (
        <div className="w-full h-auto">
            <DoctorNavbar />
            <div className="bg-gray-200 w-full min-h-screen flex flex-col items-center justify-center md:pt-16 pt-20 px-4">
                <div className="p-5 rounded-lg bg-white shadow-lg w-full max-w-[650px] h-auto">
                    <h1 className="text-2xl mb-4">Personal Details</h1>
                    <div className="flex items-center gap-2">
                        <img className="w-[80px] h-[80px]" src={Personal} alt="Profile" />
                    </div>
                    <form className="space-y-4">
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <label className="w-full md:w-[150px]">Name:</label>
                            <input type="text" placeholder="Dr." className="w-full focus:outline-none md:w-[350px] p-2 rounded border border-gray-600" />
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <label className="w-full md:w-[150px]">Profile Photo:</label>
                            <input type="file" className="w-full md:w-[350px] focus:outline-none p-2 border border-gray-600" />
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <label className="w-full md:w-[150px]">Gender:</label>
                            <div className="flex space-x-4">
                                <label><input type="radio" name="gender" /> Male</label>
                                <label><input type="radio" name="gender" /> Female</label>
                                <label><input type="radio" name="gender" /> Others</label>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <label className="w-full md:w-[150px]">Date of Birth:</label>
                            <input type="date" className="w-full md:w-[350px] focus:outline-none p-2 border border-gray-600" />
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <label className="w-full md:w-[150px]">Mobile:</label>
                            <div className="flex w-full md:w-[350px] gap-2">
                                <select className="w-[110px] p-2 border border-gray-600">
                                    <option>India (+91)</option>
                                </select>
                                <input type="text" placeholder="99999999" className="w-full focus:outline-none p-2 border border-gray-600" />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <label className="w-full md:w-[150px]">Email:</label>
                            <input type="email" placeholder="example@gmail.com" className="w-full md:w-[350px] focus:outline-none p-2 border border-gray-600" />
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <label className="w-full md:w-[150px]">Password:</label>
                            <div className="relative w-full md:w-[350px]">
                                <input type={showPassword ? "text" : "password"} className="w-full p-2 focus:outline-none border border-gray-600" />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-2 text-sm">Show</button>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <label className="w-full md:w-[150px]">Confirm Password:</label>
                            <div className="relative w-full md:w-[350px]">
                                <input type={showConfirmPassword ? "text" : "password"} className="w-full focus:outline-none p-2 border border-gray-600" />
                                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-2 top-2 text-sm">Show</button>
                            </div>
                        </div>

                        <div className="flex justify-center mt-4" >
                            <button className="w-full max-w-[250px] bg-green-600 hover:bg-green-700 p-2 rounded text-white font-bold" onClick={doctorNavigate}>Submit & Continue</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DoctorSignup;
