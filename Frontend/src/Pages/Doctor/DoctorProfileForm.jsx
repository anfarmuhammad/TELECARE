import React from "react";
import { useForm } from "react-hook-form";
import DoctorNavbar from "../../componets/Doctorcomponets/DoctorNavbar";
import { FaUserMd, FaGraduationCap, FaUser } from "react-icons/fa";
import Footer from "../../componets/Usercomponets/Footer";
import { useNavigate } from "react-router-dom";

const DoctorProfileForm = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            bio: "",
            experience: "",
            patientsConsulted: "",
            weeklyPatients: "",
            awards: "",
            clinicName: "",
            streetAddress: "",
            country: "India",
            state: "Andaman and Nicobar Islands",
            city: "",
            zip: "",
            linkedin: "",
            facebook: "",
            twitter: "",
        },
    });

    const onSubmit = (data) => {
        console.log("Form submitted", data);
        navigate("/doctorhome");
    };

    return (
        <div className="w-full bg-gray-200 min-h-screen flex flex-col gap-10">
            <DoctorNavbar />
            <div className="w-full flex flex-col items-center pt-16 md:pt-20">
                <div className="w-full max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
                    <div className="bg-green-100 text-green-700 p-3 rounded mb-4 text-center">
                        Your email has been successfully verified.
                    </div>

                    <h2 className="text-xl md:text-2xl font-black mb-4 text-center">Professional Profile</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label className="block font-medium">Professional Bio</label>
                            <textarea {...register("bio", { required: "Bio is required" })} className="w-full p-2 border rounded resize-none"></textarea>
                            {errors.bio && <p className="text-red-500 text-sm">{errors.bio.message}</p>}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <input type="number" {...register("experience", { required: "Experience is required" })} placeholder="Years of Experience" className="p-2 border rounded" />
                            <input type="number" {...register("patientsConsulted", { required: "Required" })} placeholder="Patients Consulted" className="p-2 border rounded" />
                            <input type="number" {...register("weeklyPatients", { required: "Required" })} placeholder="Weekly Patients" className="p-2 border rounded" />
                        </div>

                        <div>
                            <label className="block font-medium">Awards/Publications</label>
                            <textarea {...register("awards")} className="w-full p-2 border rounded resize-none"></textarea>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" {...register("clinicName", { required: "Clinic Name is required" })} placeholder="Practice/Clinic Name" className="p-2 border rounded" />
                            <input type="text" {...register("streetAddress", { required: "Address is required" })} placeholder="Street Address" className="p-2 border rounded" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <select {...register("country")} className="p-2 border rounded">
                                <option>India</option>
                            </select>
                            <select {...register("state")} className="p-2 border rounded">
                                <option>Andaman and Nicobar Islands</option>
                            </select>
                            <input type="text" {...register("city", { required: "City is required" })} placeholder="City" className="p-2 border rounded" />
                        </div>

                        <input type="text" {...register("zip", { required: "Zip Code is required" })} placeholder="Zip Code" className="w-full p-2 border rounded" />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <input type="text" {...register("linkedin")} placeholder="LinkedIn Profile" className="p-2 border rounded" />
                            <input type="text" {...register("facebook")} placeholder="Facebook Profile" className="p-2 border rounded" />
                            <input type="text" {...register("twitter")} placeholder="Twitter Profile" className="p-2 border rounded" />
                        </div>

                        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200">
                            Submit & Continue
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DoctorProfileForm;
