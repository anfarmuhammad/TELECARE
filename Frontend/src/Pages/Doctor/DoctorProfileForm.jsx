import React, { useState } from "react";
import DoctorNavbar from "../../componets/Doctorcomponets/DoctorNavbar";
import { FaUserMd, FaGraduationCap, FaUser } from "react-icons/fa";
import Footer from "../../componets/Usercomponets/Footer";

const DoctorProfileForm = () => {
    const [formData, setFormData] = useState({
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
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted", formData);
    };

    return (
        <div className="w-full bg-gray-200 h-auto flex flex-col gap-10">
            <DoctorNavbar />
            <div className=" w-full min-h-screen flex flex-col items-center pt-20 md:pt-20 justify-center ">
                <div className="max-w-3xl mx-auto p-6 w-[650px]  bg-white shadow-lg rounded-lg">
                    <div className="bg-green-100 text-green-700 p-3 rounded mb-4 text-center">
                        Your email successfully verified.
                    </div>

                    <h2 className="text-xl md:text-2xl font-black mb-4 text-center">Professional Profile</h2>

                    <div className="flex  md:flex-row justify-center items-center gap-4 md:gap-6 mb-6">
                        <div className="flex  md:flex-row items-center gap-2 md:gap-4">
                            <FaUserMd className="text-black text-4xl md:text-6xl border-2 border-black rounded-full p-1" />
                            <div className="w-10 md:w-16 h-0.5 bg-gray-300"></div>
                        </div>

                        <div className="flex flex-row items-center gap-2 md:gap-4">
                            <FaGraduationCap className="text-black text-4xl md:text-6xl border-2 border-black rounded-full p-1" />
                            <div className=" w-10 md:w-16 h-0.5 bg-gray-300"></div>
                        </div>

                        <div>
                            <FaUser className="text-black text-5xl md:text-7xl border-2 border-black rounded-full p-1" />
                        </div>
                    </div>

                    <h2 className="text-2xl font-semibold mb-4">Doctor Profile Form</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block font-medium">Professional Bio</label>
                            <textarea
                                name="bio"
                                value={formData.bio}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            ></textarea>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <input type="number" name="experience" placeholder="Years of Experience" value={formData.experience} onChange={handleChange} className="p-2 border rounded" />
                            <input type="number" name="patientsConsulted" placeholder="Patients Consulted" value={formData.patientsConsulted} onChange={handleChange} className="p-2 border rounded" />
                            <input type="number" name="weeklyPatients" placeholder="Weekly Patients" value={formData.weeklyPatients} onChange={handleChange} className="p-2 border rounded" />
                        </div>

                        <div>
                            <label className="block font-medium">Awards/Publications</label>
                            <textarea
                                name="awards"
                                value={formData.awards}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            ></textarea>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" name="clinicName" placeholder="Practice/Clinic Name" value={formData.clinicName} onChange={handleChange} className="p-2 border rounded" />
                            <input type="text" name="streetAddress" placeholder="Street Address" value={formData.streetAddress} onChange={handleChange} className="p-2 border rounded" />
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <select name="country" value={formData.country} onChange={handleChange} className="p-2 border rounded">
                                <option>India</option>
                            </select>
                            <select name="state" value={formData.state} onChange={handleChange} className="p-2 border rounded">
                                <option>Andaman and Nicobar Islands</option>
                            </select>
                            <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} className="p-2 border rounded" />
                        </div>

                        <input type="text" name="zip" placeholder="Zip Code" value={formData.zip} onChange={handleChange} className="w-full p-2 border rounded" />

                        <div className="grid grid-cols-3 gap-4">
                            <input type="text" name="linkedin" placeholder="LinkedIn Profile" value={formData.linkedin} onChange={handleChange} className="p-2 border rounded" />
                            <input type="text" name="facebook" placeholder="Facebook Profile" value={formData.facebook} onChange={handleChange} className="p-2 border rounded" />
                            <input type="text" name="twitter" placeholder="Twitter Profile" value={formData.twitter} onChange={handleChange} className="p-2 border rounded" />
                        </div>

                        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">Submit & Continue</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>


    );
};

export default DoctorProfileForm;
