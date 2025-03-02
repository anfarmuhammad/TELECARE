import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FaqItem = () => {
  const [activeTab, setActiveTab] = useState('TeleCare');
  const [openQuestion, setOpenQuestion] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setOpenQuestion(null); 
  };

  const handleQuestionToggle = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqData = {
    TeleCare: [
      {
        question: "Is TeleCare Safe?",
        answer: "Yes, TeleCare is safe and secure. We use end-to-end encryption for all communications."
      },
      {
        question: "How do I join TeleCare?",
        answer: "You can join TeleCare by signing up on our website or through our mobile app."
      },
      {
        question: "How do you use TeleCare?",
        answer: "Simply log in, select a service, and connect with a healthcare professional."
      },
      {
        question: "Are TeleCare doctors qualified?",
        answer: "All doctors on TeleCare are certified professionals with verified credentials."
      }
    ],
    Content: [
      {
        question:"How does TeleCare develop its content?",
        answer:"Certified healthcare professionals write the content on medical conditions and drugs, and it undergoes multiple checks to verify its authenticity before being published on the website."
      },
      {
        question:"How reliable and up-to-date is the health information on TeleCare?",
        answer:"Certified healthcare professionals create and curate all health-related content on the TeleCare platform using data from reliable sources. The content is generally revamped every 3 to 6 months to ensure the data remains up-to-date."
      },
      {
        
        question:"Does TeleCare have health videos?",
        answer:"Yes, TeleCare has health videos with helpful information on various topics, helping users better understand health conditions, treatments, and preventive care."

      },
      {
        question:"Can users view examples of real doctor-patient interactions on TeleCare?",
        answer:"Yes, users can typically see real doctor-patient interactions on TeleCare in the Medical Q&A section. To maintain the patient’s privacy, the conversation is anonymized before it is published on the website."

      }

    ],
    Telemedicine: [
      {
        question: "What does telemedicine mean?",
        answer: "Remote medical services, diagnosing and treating patients without consulting them in-person, is called telemedicine. Telemedicine, also called online doctor visits, allows patients to consult doctors from around the world without having to travel anywhere"
      },
      {
        question: "What is telemedicine used for?",
        answer: "While there are innumerable uses of telemedicine they are commonly used for A second opinion.Follow-up visits.Managing patients with chronic illnesses.Post-surgical care.Healthy living and preventive care.Caring for geriatric patients living in ursing homes."
      },
      {
        question: "What equipment do you require for telemedicine?",
        answer: "For consulting a doctor online, you will require A computer, with a microphone, a camera, and an internet connection. Or a smartphone with an internet connection."
      },
      {
        question: "What are the pros or advantages of telemedicine?",
        answer: "Telemedicine:Is cost-efficient.Is faster and convenient.Minimizes the risk of transmission of infectious diseases.Makes follow-up care easier.Offers a wide variety of specialists to consult."
      },
    ],
    "Online Doctor": [
      {
        question: "Can we consult a doctor online?",
        answer: "Yes, you can consult a doctor online. If you post a query, you will receive an answer as soon as possible. In the case of a video or phone consultation, you have to choose a time slot displayed based on the doctor's availability."
      },
      {
        question: "Is it legal to consult patients online?",
        answer: "Yes, it is legal to consult patients online. This is made easy with the help of telemedicine platforms, such as TeleCare."
      },
      {
        question: "How long does one video or phone consultation last?",
        answer: "If you have booked a video or phone consultation, the consultation will last for approximately 20 minutes."
      },
      {
        question: "What should you not tell your doctor?",
        answer: "Avoid sharing your phone number or address for further consultation. In case of any misuse, TeleCare will not be held responsible."
      },
    ],
    Query: [
      {
        question: "How do I consult a doctor now?",
        answer: "Once you login to your TeleCare's account, check for the Ask a Query icon and then post a query with all relevant medical and personal information, including the chief complaint."
      },
      {
        question: "How can I consult a doctor online for free?",
        answer: "You can post the first query on TeleCare for free without any charges. Most of the specialties are free for the first time."
      },
      {
        question: "What happens if you don't get a response from a doctor?",
        answer: "Our doctors are readily accessible at all times. But in case a specific doctor is not available, another doctor will answer your health query."
      },
      {
        question: "What happens if you don't get a response from a doctor?",
        answer: "Our doctors are readily accessible at all times. But in case a specific doctor is not available, another doctor will answer your health query."
      },
    ],
    Chat: [
      {
        question: "Is chat support available 24/7?",
        answer: "Yes, our chat support is available round the clock for your assistance."
      },
      {
        question: "What is TeleCare50hrs and TeleCare100hrs Chat?",
        answer: "With the help of TeleCare’s chat services, you can chat and post unlimited queries to an experienced doctor for a fixed time. You can either choose to chat with the doctor for 50 hours or 100 hours."
      },
      
    ],
    "Video/Phone Consultation": [
      {
        question: "How can I talk to a doctor online?",
        answer: "Once you login to your account, check for the option Consult by Phone and Video Chat. You will be able to speak with a doctor by booking a consultation. Once you book a slot for Phone or Video consultation, you will receive a confirmation email. Apart from this, you will receive an SMS to the registered mobile number 15 minutes before the consultation."
      },
      {
        question: "How can I get medical advice on the phone?",
        answer: "You can speak with our doctors over the phone by booking a phone consultation."
      },
      {
        question: "How long does one video or phone consultation last?",
        answer: "If you have booked a video or phone consultation, the consultation will last for approximately 20 minutes."
      },
      {
        question: "How much do video and phone consultations cost?",
        answer: "Regular phone and video consultations cost $29.99. The 2-hour fast track will be charged at $44.99 and the 4-hour variant at $34.99."
      },
    ]
  };

  return (
    <div className="mx-auto w-full flex items-center flex-col p-4">
      <div className="flex justify-center w-full gap-4 mb-6 flex-wrap">
        {Object.keys(faqData).map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`px-4 py-2 text-sm sm:text-base flex items-center justify-center flex-row shadow-md rounded-full ${activeTab === tab
              ? 'bg-blue-100 text-blue-600'
              : 'bg-white text-gray-800'
              } shadow hover:bg-blue-200`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className=" p-4 w-[75%] ">
        {faqData[activeTab].length > 0 ? (
          <ul>
            {faqData[activeTab].map((item, index) => (
              <li
                key={index}
                className="border-b border-gray-400 py-4 cursor-pointer"
                onClick={() => handleQuestionToggle(index)}
              >
                <div className="flex justify-between items-center">
                  <span>{item.question}</span>
                  {openQuestion === index ? (
                    <Minus className="text-blue-600" />
                  ) : (
                    <Plus className="text-blue-600" />
                  )}
                </div>
                {openQuestion === index && (
                  <p className="text-gray-600 mt-2">{item.answer}</p>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No FAQs for {activeTab} yet.</p>
        )}
      </div>
    </div>
  );
};

export default FaqItem;
