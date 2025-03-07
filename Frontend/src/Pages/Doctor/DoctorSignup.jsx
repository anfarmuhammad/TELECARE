import { useState } from "react";
import { FaUserMd, FaGraduationCap, FaUser } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import DoctorNavbar from "../../componets/Doctorcomponets/DoctorNavbar";
import Footer from "../../componets/Usercomponets/Footer";

const DoctorSignup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const navigate = useNavigate();
    
    const form = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            mobile: '',
            gender: '',
            dob: '',
            profilePhoto: null
        }
    });

    const { register, handleSubmit, formState } = form;
    const { errors } = formState;

    const onSubmit = (data) => {
        console.log('Form Submitted', data);
        navigate("/academicdetailsform");
    };

    return (
        <div className="w-full bg-gray-200 h-auto flex flex-col gap-10">
            <DoctorNavbar />
            <div className="bg-gray-200 w-full min-h-screen flex flex-col items-center justify-center md:pt-24 px-4">
                <div className="p-5 rounded-lg bg-white shadow-lg w-full max-w-[650px] h-auto">
                    <h1 className="text-2xl mb-4">Personal Details</h1>

                    <div className="flex md:flex-row justify-center items-center gap-4 md:gap-6 mb-6">
                        <FaUserMd className="text-black text-5xl md:text-7xl border-2 border-black rounded-full p-1" />
                        <div className="w-10 md:w-16 h-0.5 bg-gray-300"></div>
                        <FaGraduationCap className="text-black text-4xl md:text-6xl border-2 border-black rounded-full p-1" />
                        <div className="w-10 md:w-16 h-0.5 bg-gray-300"></div>
                        <FaUser className="text-black text-4xl md:text-6xl border-2 border-black rounded-full p-1" />
                    </div>

                    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <label className="w-full md:w-[150px]">Name:</label>
                            <input
                                type="text"
                                {...register("name", { required: "Name is required" })}
                                placeholder="Dr. John Doe"
                                className="w-full md:w-[350px] p-2 rounded border border-gray-600"
                            />
                            <p className="text-red-500 text-xs">{errors.name?.message}</p>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <label className="w-full md:w-[150px]">Email:</label>
                            <input
                                type="email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" }
                                })}
                                placeholder="example@gmail.com"
                                className="w-full md:w-[350px] p-2 rounded border border-gray-600"
                            />
                            <p className="text-red-500 text-xs">{errors.email?.message}</p>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <label className="w-full md:w-[150px]">Password:</label>
                            <div className="relative w-full md:w-[350px]">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: { value: 6, message: "Minimum 6 characters required" }
                                    })}
                                    className="w-full p-2 rounded border border-gray-600"
                                />
                                <button type="button" onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-2 top-2 text-sm">Show</button>
                            </div>
                            <p className="text-red-500 text-xs">{errors.password?.message}</p>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <label className="w-full md:w-[150px]">Confirm Password:</label>
                            <div className="relative w-full md:w-[350px]">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    {...register("confirmPassword", {
                                        required: "Confirm Password is required",
                                        validate: (value) => value === form.watch("password") || "Passwords must match"
                                    })}
                                    className="w-full p-2 rounded border border-gray-600"
                                />
                                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-2 top-2 text-sm">Show</button>
                            </div>
                            <p className="text-red-500 text-xs">{errors.confirmPassword?.message}</p>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <label className="w-full md:w-[150px]">Mobile:</label>
                            <input
                                type="text"
                                {...register("mobile", { required: "Mobile number is required" })}
                                placeholder="9999999999"
                                className="w-full md:w-[350px] p-2 rounded border border-gray-600"
                            />
                            <p className="text-red-500 text-xs">{errors.mobile?.message}</p>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <label className="w-full md:w-[150px]">Gender:</label>
                            <select {...register("gender", { required: "Gender is required" })}
                                className="w-full md:w-[350px] p-2 rounded border border-gray-600">
                                <option value="">Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                            <p className="text-red-500 text-xs">{errors.gender?.message}</p>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <label className="w-full md:w-[150px]">Date of Birth:</label>
                            <input
                                type="date"
                                {...register("dob", { required: "Date of Birth is required" })}
                                className="w-full md:w-[350px] p-2 rounded border border-gray-600"
                            />
                            <p className="text-red-500 text-xs">{errors.dob?.message}</p>
                        </div>

                        <div className="flex justify-center mt-4">
                            <button type="submit"
                                className="w-full max-w-[250px] bg-blue-600 hover:bg-blue-700 p-2 rounded text-white font-bold">
                                
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DoctorSignup;
