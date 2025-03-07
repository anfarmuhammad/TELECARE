import React, { useState } from "react";
import DoctorNavbar from "../../componets/Doctorcomponets/DoctorNavbar";


const DoctorAppoinments = () => {
    const [filter, setFilter] = useState("upcoming");

    const appointments = [
        { id: 1, patient: "John Doe", date: "2025-03-05", time: "10:00 AM", status: "Upcoming" },
        { id: 2, patient: "Jane Smith", date: "2025-03-04", time: "2:30 PM", status: "Completed" },
        { id: 3, patient: "Mike Johnson", date: "2025-03-06", time: "11:15 AM", status: "Upcoming" },
        { id: 4, patient: "Sarah Brown", date: "2025-03-03", time: "4:00 PM", status: "Cancelled" },
    ];

    const filteredAppointments = appointments.filter((appt) =>
        filter === "all" ? true : appt.status.toLowerCase() === filter
    );

    return (
        <div className="w-full bg-gray-200 h-auto flex flex-col gap-10">
            <DoctorNavbar/>
            <div className="w-full flex items-center  mt-16 min-h-screen bg-gray-200 ">

                <div className="w-full  mx-auto py-10 px-6">
                    <h2 className="text-2xl md:text-3xl font-bold  mb-6">Doctor Appointments</h2>


                    <div className="flex  gap-15 mb-6">
                        {["Upcoming", "Completed", "Cancelled", "All"].map((type) => (
                            <button
                                key={type}
                                onClick={() => setFilter(type.toLowerCase())}
                                className={`px-4 py-2 rounded-md text-sm md:text-base 
                            ${filter === type.toLowerCase() ? "bg-blue-600" : "bg-blue-600"} hover:bg-blue-700`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>


                    <div className="space-y-4">
                        {filteredAppointments.length > 0 ? (
                            filteredAppointments.map((appt) => (
                                <div key={appt.id} className=" bg-white w-[90%] h-[150px] p-4 rounded-lg shadow flex justify-between items-center">
                                    <div>
                                        <h3 className="text-lg md:text-xl font-semibold">{appt.patient}</h3>
                                        <p className="text-gray-400 text-sm">{appt.date} at {appt.time}</p>
                                    </div>
                                    <span
                                        className={`px-3 py-1 rounded-md text-xs font-bold ${appt.status === "Upcoming" ? "bg-blue-500" :
                                                appt.status === "Completed" ? "bg-green-500" :
                                                    "bg-red-500"
                                            }`}
                                    >
                                        {appt.status}
                                    </span>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-400">No appointments found.</p>
                        )}
                    </div>
                </div>

            </div>
        </div>

    );
};

export default DoctorAppoinments;
