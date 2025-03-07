import { useState } from "react";
import { FaUserMd, FaGraduationCap, FaUser } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import DoctorNavbar from "../../componets/Doctorcomponets/DoctorNavbar";
import Footer from "../../componets/Usercomponets/Footer";

export function AcademicDetailsForm() {
    const navigate = useNavigate();
    
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            languages: "English",
            specialty: "",
            imcId: ""
        }
    });

    const onSubmit = (data) => {
        console.log("Form Submitted", data);
        navigate("/doctorprofileform");
    };

    return (
        <div className="w-full bg-gray-200 h-auto flex flex-col gap-10">
            <DoctorNavbar />
            <div className="bg-gray-200 w-full min-h-screen flex flex-col items-center justify-center  ">
                <div className=" p-6 mt-24 bg-white  max-w-[650px] md:w-[650px] md:h-auto shadow-lg rounded-lg">
                    <div className="bg-green-100 text-green-700 p-3 rounded mb-4 text-center">
                        Your email successfully verified.
                    </div>
                    <h2 className="text-xl font-black mb-4">Academic Details</h2>
                    <div className="flex md:flex-row justify-center items-center gap-4 md:gap-6 mb-6">
                        <FaUserMd className="text-black text-5xl md:text-7xl border-2 border-black rounded-full p-1" />
                        <div className="w-10 md:w-16 h-0.5 bg-gray-300"></div>
                        <FaGraduationCap className="text-black text-4xl md:text-6xl border-2 border-black rounded-full p-1" />
                        <div className="w-10 md:w-16 h-0.5 bg-gray-300"></div>
                        <FaUser className="text-black text-4xl md:text-6xl border-2 border-black rounded-full p-1" />
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="mb-4">
                            <label className="block font-bold">Languages</label>
                            <select {...register("languages", { required: "Language is required" })} className="w-full p-2 border rounded mt-1">
                                <option>English</option>
                                <option>Spanish</option>
                                <option>French</option>
                            </select>
                            <p className="text-red-500 text-xs">{errors.languages?.message}</p>
                        </div>
                        <div className="mb-4">
                            <label className="block font-bold">Specialties</label>
                            <select {...register("specialty", { required: "Specialty is required" })} className="w-full p-2 border rounded mt-1">
                                <option value="">Click to choose your specialties</option>
                                <option>Cardiology</option>
                                <option>Neurology</option>
                                <option>Dermatology</option>
                            </select>
                            <p className="text-red-500 text-xs">{errors.specialty?.message}</p>
                        </div>
                        <div className="mb-4">
                            <label className="block font-bold">IMC ID</label>
                            <input type="text" {...register("imcId", { required: "IMC ID is required" })} className="w-full p-2 border rounded mt-1" placeholder="Fill your IMC ID" />
                            <p className="text-red-500 text-xs">{errors.imcId?.message}</p>
                            <p className="text-sm font-bold">If you don’t have one, just enter NIL</p>
                        </div>
                        <div className="w-full flex items-center justify-center">
                            <button type="submit" className="w-[250px] bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
                                Submit & Continue
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AcademicDetailsForm;
