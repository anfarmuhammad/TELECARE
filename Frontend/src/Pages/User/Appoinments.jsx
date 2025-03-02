import React from "react";
import NavBar from "../../componets/Usercomponets/NavBar";
import Footer from "../../componets/Usercomponets/Footer";


function Appointments() {
    const appointments = [
        {
            type: "Upcoming",
            doctor: "Dr. Mohamed Name",
            date: "10/02/2025",
            time: "12:30",
            consultingType: "video/voice/chat",
            fee: "₹500",
        },
        {
            type: "History",
            doctor: "Dr. Mohamed Name",
            date: "10/02/2024",
            time: "12:30",
            consultingType: "video/voice/chat",
            fee: "₹500",
        },
    ];
   

    return (
        <div className="w-full min-h-screen">
           <NavBar/>
            
            <div className="pt-16 min-h-screen flex flex-col items-center justify-center bg-gray-200 py-8">
                <h1 className="text-2xl font-black mb-6">Appointments</h1>
                
                {appointments.map((appointment, index) => (
                    <div key={index} className="w-11/12 sm:w-3/4 mb-6">
                        <h2 className="text-lg font-black mb-2">{appointment.type}</h2>
                        
                        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row md:justify-between md:items-center md:h-[200px] space-y-4 md:space-y-0 md:pt-10 font-bold md:px-10">
                            
                            <div className="w-full md:w-2/3">
                                <p className="font-bold">{appointment.doctor}</p>
                                <p className="text-sm sm:text-base">Consulting Type: {appointment.consultingType}</p>
                                <p className="text-sm sm:text-base">Consulting Fee: {appointment.fee}</p>
                            </div>
                            
    
                            <div className="w-full md:w-1/3 text-left md:text-right">
                                <p className="text-sm sm:text-base">📅 Date: {appointment.date}</p>
                                <p className="text-sm sm:text-base">⏰ Time: {appointment.time}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer/>
        </div>
    );
}

export default Appointments;
