import React from "react";
import NavBar from "../../componets/Usercomponets/NavBar";
import Footer from "../../componets/Usercomponets/Footer";


function UserProfile() {
    return (
        <div className="w-full bg-gray-200  flex flex-col gap-10 min-h-screen">
              <NavBar/>
            <div className="flex justify-center pt-26 items-center min-h-screen  ">
                <div className="bg-white shadow-lg rounded-lg p-6 sm:p-10 w-full max-w-2xl">


                    <div className=" flex items-center gap-30 mb-4">
                        <div className="w-30 h-30 bg-gray-300 flex items-center justify-center rounded-lg">
                            <span className="text-xl font-bold">Logo</span>
                        </div>
                        <h2 className="text-3xl font-bold">Your Profile</h2>
                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input type="text" placeholder="First Name" className="border p-2 rounded w-full" />
                        <input type="text" placeholder="Last Name" className="border p-2 rounded w-full" />
                        <input type="email" placeholder="Email" className="border p-2 rounded w-full" />
                        <input type="tel" placeholder="Mobile No." className="border p-2 rounded w-full" />

                        <div className="col-span-2 flex justify-center font-semibold">
                            Gender: Male / Female
                        </div>

                        <input type="text" placeholder="Place" className="border p-2 rounded w-full" />
                        <input type="text" placeholder="City" className="border p-2 rounded w-full" />
                        <input type="text" placeholder="District" className="border p-2 rounded w-full" />
                        <input type="text" placeholder="State" className="border p-2 rounded w-full" />
                        <input type="text" placeholder="Nationality" className="border p-2 rounded w-full" />
                        <input type="text" placeholder="Pincode" className="border p-2 rounded w-full" />
                        <input type="password" placeholder="New Password" className="border p-2 rounded w-full" />
                        <input type="password" placeholder="Confirm Password" className="border p-2 rounded w-full" />
                    </div>

                    <div className="flex justify-center mt-6">
                        <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700">
                            Update Profile
                        </button>
                    </div>

                </div>
            </div>
            <Footer/>
        </div>

    );
}

export default UserProfile;

