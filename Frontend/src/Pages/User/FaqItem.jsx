import React, { useState } from "react";
import { Plus, Minus } from "lucide-react"; // Install lucide-react if not installed

const faqs = [
  {
    question: "TeleCare Safe?",
    answer: "Yes, all your personal and medical information are safe with us. TeleCare respects Protected Health Information (PHI). We are GDPR and HIPAA compliant.",
  },
  {
    question: "How do I join TeleCare?",
    answer: "You can join TeleCare by signing up on our platform and verifying your details.",
  },
  {
    question: "How do you use TeleCare?",
    answer: "Simply browse our services, choose a doctor, and start a consultation.",
  },
  {
    question: "Are TeleCare doctors qualified?",
    answer: "Yes, all doctors on iCliniq are highly qualified and verified before onboarding.",
  },
];

const FaqItem= () => {
  const [openIndex, setOpenIndex] = useState(null); 

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto  p-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-400 py-4">
         
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <h2 className="text-lg font-medium">{faq.question}</h2>
            {openIndex === index ? <Minus className="text-blue-500" /> : <Plus className="text-blue-500" />}
          </div>
          {openIndex === index && (
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqItem;
