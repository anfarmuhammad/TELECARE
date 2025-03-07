import React, { useState, useCallback } from "react";
import { Send } from "lucide-react";

const initialMessages = [
  { id: 1, sender: "John Doe", message: "Hello, doctor!" },
  { id: 2, sender: "You", message: "Hi John, how can I help you?" },
  { id: 3, sender: "John Doe", message: "I have a headache since yesterday." },
];

const DoctorMessages = () => {
  const [chatMessages, setChatMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = useCallback(() => {
    if (newMessage.trim()) {
      setChatMessages((prev) => [
        ...prev,
        { id: prev.length + 1, sender: "You", message: newMessage },
      ]);
      setNewMessage("");
    }
  }, [newMessage]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6">Messages</h1>

      <div className="w-full max-w-2xl bg-gray-800 p-4 rounded-lg shadow-lg">
        <div className="h-96 overflow-y-auto p-3 bg-gray-700 rounded-md">
          {chatMessages.map((msg) => (
            <div key={msg.id} className={`mb-2 ${msg.sender === "You" ? "text-right" : "text-left"}`}>
              <p className={`inline-block p-2 rounded-lg ${msg.sender === "You" ? "bg-blue-600" : "bg-gray-600"}`}>
                <strong>{msg.sender}:</strong> {msg.message}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="w-full p-2 bg-gray-900 border border-gray-700 rounded-md text-white"
            aria-label="Type a message"
          />
          <button
            onClick={sendMessage}
            className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-lg flex items-center gap-2"
            aria-label="Send message"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorMessages;
