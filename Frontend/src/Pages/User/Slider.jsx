import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "/src/assets/User/image 5.png"


const specialties = [
  { icon: "👨‍⚕️", label: "Cardiology" },
  { icon: "🧠", label: "Neurology" },
  { icon: "🦠", label: "Infectious Diseases" },
  { icon: "🩺", label: "Endocrinology" },
  { icon: "🦴", label: "Rheumatology" },
  { icon: "🧑‍⚕️", label: "Dermatology" },
  { icon: "🫀", label: "Medical Gastroenterology" },
  { icon: "🫁", label: "Pulmonology" },
  { icon: "⚕️", label: "Nephrology" },
  { icon: "🎗️", label: "Medical Oncology" },
  { icon: "👶", label: "Child Health" },
  { icon: "🩸", label: "Hematology" },
  { icon: "➕", label: "More Specialties" },
  { icon: "🤰", label: "Obstetrics & Gynecology" },
  { icon: "🍬", label: "Diabetology" },
];

const Slider = () => {
  const scrollRef = useRef(null);
  const scrollAmount = 250;

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div   className="relative w-full bg-cover max-w-4xl mx-auto bg-white rounded-xl mt-[-20px] md:mt-[-60px] h-[80px] md:h-[150px] md:p-4  shadow-lg overflow-hidden">
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-white shadow-md rounded-full hover:bg-gray-100"
      >
        <ChevronLeft size={24} />
      </button>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth px-10 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {specialties.map((specialty, index) => (
          <div key={index} className="flex flex-col items-center  min-w-[150px] md:p-4 p-2 text-center">
            <div className="bg-blue-100 w-[35px] h-[35px] md:w-[60px]  md:h-[60px] flex items-center justify-center p-4 rounded-full">
              <span className="md:text-3xl text-2xl">{specialty.icon}</span>
            </div>
            <span className="md:text-[12px] text-sm font-medium">{specialty.label}</span>
          </div>
        ))}
      </div>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-white shadow-md rounded-full hover:bg-gray-100"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default Slider;
