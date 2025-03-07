import React, { useState } from "react";
import { CalendarCheck, Video, Mic, MessageSquare } from "lucide-react";

const todayAppointments = [
  { id: 1, name: "John Doe", time: "10:00 AM", status: "Pending" },
  { id: 2, name: "Jane Smith", time: "11:30 AM", status: "Completed" },
  { id: 3, name: "Michael Brown", time: "01:00 PM", status: "Pending" },
];

const DoctorTodayConsultations = () => {
  const [chatOpen, setChatOpen] = useState(null);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6">Today's Consultations</h1>
      <div className="w-full max-w-3xl grid gap-4">
        {todayAppointments.map((appointment) => (
          <div key={appointment.id} className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold">{appointment.name}</h2>
              <p className="text-sm text-gray-400 flex items-center gap-2">
                <CalendarCheck className="w-4 h-4 text-green-400" />
                {appointment.time}
              </p>
            </div>
            <div className="flex items-center gap-3">
              {appointment.status === "Pending" && (
                <>
                  <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                    <Video className="w-4 h-4" /> Video Call
                  </button>
                  <button className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                    <Mic className="w-4 h-4" /> Audio Call
                  </button>
                  <button
                    className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                    onClick={() => setChatOpen(chatOpen === appointment.id ? null : appointment.id)}
                  >
                    <MessageSquare className="w-4 h-4" /> Chat
                  </button>
                </>
              )}
              <span
                className={`text-sm px-3 py-1 rounded-full text-white ${
                  appointment.status === "Completed" ? "bg-green-500" : "bg-yellow-500"
                }`}
              >
                {appointment.status}
              </span>
            </div>
          </div>
        ))}
      </div>
      {chatOpen !== null && (
        <div className="fixed bottom-5 right-5 bg-gray-800 p-4 rounded-lg w-80">
          <h2 className="text-lg font-semibold">Chat with {todayAppointments.find(a => a.id === chatOpen)?.name}</h2>
          <div className="h-40 bg-gray-700 p-2 rounded-md overflow-y-auto text-sm text-gray-300">Chat messages...</div>
          <input
            type="text"
            placeholder="Type a message..."
            className="w-full p-2 mt-2 bg-gray-900 border border-gray-700 rounded-md text-white"
          />
        </div>
      )}
    </div>
  );
};

export default DoctorTodayConsultations;
