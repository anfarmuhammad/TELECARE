import React, { useState } from "react";
import NavBar from "../../componets/Usercomponets/NavBar";

const Feedback = () => {
    const [feedback, setFeedback] = useState("");
    const [complaint, setComplaint] = useState("");

    const handleFeedbackSubmit = () => {
        alert(`Feedback Submitted: ${feedback}`);
        setFeedback("");
    };

    const handleComplaintSubmit = () => {
        alert(`Complaint Submitted: ${complaint}`);
        setComplaint("");
    };

    return (
        <div className='w-full min-h-screen bg-gray-200'>
            <NavBar/>
            <div className="min-h-screen w-full bg-gray-200 flex flex-col items-center justify-center p-6">
                <div className="w-[90%] h-[250px]  bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-white text-xl font-bold mb-2">Feedback</h2>
                    <textarea
                        className="w-full p-3 rounded border border-gray-600 bg-white "
                        placeholder="Type feedback here…"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                    />
                    <button
                        className="w-full mt-3 bg-teal-500 text-white p-3 rounded hover:bg-teal-600"
                        onClick={handleFeedbackSubmit}
                    >
                        SEND FEEDBACK
                    </button>
                </div>
                <div className="w-[90%] h-[250px] bg-white p-6 rounded-lg shadow-lg mt-6">
                    <h2 className="text-white text-xl font-bold mb-2">Complaints</h2>
                    <textarea
                        className="w-full p-3 rounded border border-gray-600  text-black"
                        placeholder="Type complaints here…"
                        value={complaint}
                        onChange={(e) => setComplaint(e.target.value)}
                    />
                    <button
                        className="w-full mt-3 bg-teal-500 text-white p-3 rounded hover:bg-teal-600"
                        onClick={handleComplaintSubmit}
                    >
                        SEND COMPLAINT
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Feedback;
