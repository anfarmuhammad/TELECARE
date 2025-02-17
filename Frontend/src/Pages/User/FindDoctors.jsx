import React from "react";
import NavBar from "../../componets/Usercomponets/NavBar";
import Footer from "../../componets/Usercomponets/Footer";

const doctors = [
  { id: 1, name: "Dr. ", licensedAt: "", profession: "", location: "", description: "." },
  { id: 2, name: "Dr. ", licensedAt: "", profession: "", location: "", description: "" },
  { id: 3, name: "Dr. ", licensedAt: "", profession: "", location: "", description: "" }
];

function FindDoctors() {
  return (
    <div className="w-full bg-gray-200 flex flex-col gap-16 min-h-screen">
      <NavBar />
      <div className=" pt-16 min-h-screen px-4 sm:px-6 lg:px-8">
    
        <div className="flex flex-col md:flex-row justify-center items-center mt-6 gap-3">
          <input
            type="text"
            placeholder="Search for therapist"
            className="w-full sm:w-2/3 p-3 border border-gray-300 bg-white rounded-lg sm:rounded-l-lg"
          />
          <button className="bg-teal-600 text-white px-6 py-2 rounded-lg sm:rounded-r-lg w-full sm:w-auto">
            Search
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-10 mt-12">
          {doctors.map((doctor) => (
            <div key={doctor.id} className=" md:w-[75%] h-[200px] bg-white  flex flex-col sm:flex-row items-center md:ml-40  p-4 shadow-md rounded-lg">
              <div className="w-20 h-20 bg-gray-300 flex items-center justify-center">
                Photo
              </div>
              <div className="ml-0 sm:ml-6 flex-grow text-center sm:text-left mt-3 sm:mt-0">
                <p><strong>Name:</strong> {doctor.name}</p>
                <p><strong>Licensed at:</strong> {doctor.licensedAt}</p>
                <p><strong>Profession:</strong> {doctor.profession}</p>
                <p><strong>Location:</strong> {doctor.location}</p>
                <p><strong>Description:</strong> {doctor.description}</p>
              </div>
              <button className="bg-teal-600 text-white px-4 py-2 rounded mt-3 sm:mt-0">
                Book Appointment
              </button>
            </div>
          ))}
        </div>

      </div>
      <Footer/>
    </div>
  );
}

export default FindDoctors;
