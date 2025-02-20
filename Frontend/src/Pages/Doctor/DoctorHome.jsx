import { FaCalendarAlt, FaEnvelope } from 'react-icons/fa';
import { MdEventNote } from 'react-icons/md';
import Doctor from "/src/assets/Doctor/doctor.png"
import DoctorNavbar from '../../componets/Doctorcomponets/DoctorNavbar';


const patients = [
    { name: "Haneefa", image: "https://via.placeholder.com/40" },
    { name: "Arjun", image: "https://via.placeholder.com/40" },
    { name: "Mohammed", image: "https://via.placeholder.com/40" },
];


export function DoctorHome() {
    return (
        <div className="min-h-screen bg-gray-200">

            <DoctorNavbar />


            <div className="relative w-full h-[550px] flex flex-col gap-4 items-center justify-center text-white bg-cover bg-center"
                style={{ backgroundImage: `url(${Doctor})` }}>

                <h1 className="text-4xl italic mt-56 font-bold">Welcome Dr. [Name]!</h1>
            </div>


            <div className="w-[75%]  mx-auto mt-6 p-4">
                <div className="space-y-4  w-full">
                    <button className="flex items-center gap-3 bg-white p-4 w-full rounded-lg shadow-md">
                        <FaCalendarAlt className="text-xl" />
                        <span className="font-semibold">Appointments</span>
                    </button>
                    <button className="flex items-center gap-3 bg-white p-4 w-full rounded-lg shadow-md">
                        <MdEventNote className="text-xl" />
                        <span className="font-semibold">Today's Consultations</span>
                    </button>
                    <button className="flex items-center gap-3 bg-white p-4 w-full rounded-lg shadow-md">
                        <FaEnvelope className="text-xl" />
                        <span className="font-semibold">Messages</span>
                    </button>
                </div>
            </div>
            <div className='w-full  flex flex-col items-center justify-center'>
           
                <div className=" p-6   w-[75%] ">
                <p className="mt-4 text-2xl font-bold">Visit patients</p> <br />
                    <div className="space-y-3">
                        {patients.map((patient, index) => (
                            <div
                                key={index}
                                className="flex items-center bg-gray-100 p-3 rounded-lg shadow-sm hover:bg-gray-600 transition"
                            >
                                <img
                                    src={patient.image}
                                    alt={patient.name}
                                    className="w-10 h-10 rounded-full mr-3"
                                />
                                <span className="text-gray-800 font-medium">{patient.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <footer className="text-center p-4 mt-6 text-black font-semibold">
                <p className="text-lg font-bold">TeleCare</p>
                <p>Copyright &copy; 2025, TeleCare - All Rights Reserved</p>
            </footer>
        </div>
    );
}

export default DoctorHome;
