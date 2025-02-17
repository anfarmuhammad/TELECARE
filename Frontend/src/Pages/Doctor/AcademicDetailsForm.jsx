import { useState } from "react";
import { FaUserMd, FaGraduationCap, FaUser } from "react-icons/fa";
import DoctorNavbar from "../../componets/Doctorcomponets/DoctorNavbar";
import { useNavigate } from "react-router-dom";
import Footer from "../../componets/Usercomponets/Footer";

export function AcademicDetailsForm() {
    const [languages, setLanguages] = useState("English");
    const [specialty, setSpecialty] = useState("");
    const [imcId, setImcId] = useState("");
    
    const doctorprofile = useNavigate()
    const  profileNavigation = () =>{
        
        doctorprofile("/doctorprofileform")
    }
    
    return (
        <div className="w-full h-auto">
            <DoctorNavbar />
            <div className="bg-gray-200 w-full min-h-screen flex flex-col items-center justify-center  ">
                <div className=" p-6 mt-16 bg-white  max-w-[650px] md:h-[650px] shadow-lg rounded-lg">

                    <div className="bg-green-100 text-green-700 p-3  rounded mb-4 text-center">
                        Your email successfully verified.
                    </div>
                    <h2 className="text-xl font-black mb-4">Academic Details</h2>
                    <div className="flex justify-center items-center mb-6">
                        <div className="flex items-center">
                            <FaUserMd className="text-black text-5xl border-2 border-black rounded-full p-1" />
                            <div className="w-16 h-1 bg-gray-300"></div>
                        </div>
                        <div className="flex items-center">
                            <FaGraduationCap className="text-black text-6xl border-2 border-black rounded-full p-1" />
                            <div className="w-16 h-1 bg-gray-300"></div>
                        </div>
                        <div>
                            <FaUser className="text-gray-400 text-5xl border-2 border-gray-400 rounded-full p-1" />
                        </div>
                    </div>

                    <h2 className="text-xl font-bold ">Education Profile</h2>
                    <button className="bg-green-600 text-white px-4 py-2 rounded mb-4">+ Add</button>
                    <p className="text-sm  mb-2">
                        Note: If you have trouble uploading your certificates, please email us at
                        <a href="mailto:telecare@telecare.com" className="text-blue-600"> tecare@telecare.com</a>
                    </p>
                    <div className="mb-4">
                        <label className="block font-bold">Languages</label>
                        <select
                            className="w-full p-2 border rounded mt-1"
                            value={languages}
                            onChange={(e) => setLanguages(e.target.value)}
                        >
                            <option>English</option>
                            <option>Spanish</option>
                            <option>French</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold">Specialties</label>
                        <select
                            className="w-full p-2 border rounded mt-1"
                            value={specialty}
                            onChange={(e) => setSpecialty(e.target.value)}
                        >
                            <option value="">Click to choose your specialties</option>
                            <option>Cardiology</option>
                            <option>Neurology</option>
                            <option>Dermatology</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold">IMC ID</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded mt-1"
                            placeholder="Fill your IMC ID"
                            value={imcId}
                            onChange={(e) => setImcId(e.target.value)}
                        />
                        <p className="text-sm font-bold">If you don’t have one, just enter NIL</p>
                    </div>
                    <div className="w-full  flex items-center justify-center">
                        <button className="w-[250px] bg-green-600  text-white p-2 rounded hover:bg-green-700" onClick={profileNavigation}>
                            Submit & Continue
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default AcademicDetailsForm;