import React from 'react';
import NavBar from '../../componets/Usercomponets/NavBar';
import Footer from '../../componets/Usercomponets/Footer';
import AboutImage from '/src/assets/User/about.png';
import Vision from '/src/assets/User/vision.png';
import AboutVideo from '/src/assets/User/Aboutvideo.png'



const specialties = [
    { title: "Physician And Gynecologist", image: "https://greatcitymedical.com/wp-content/uploads/2021/02/can-a-gynecologist-be-your-primary-care-physician.jpg" },
    { title: "Oncology", image: "https://images.pexels.com/photos/7659870/pexels-photo-7659870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { title: "Neurology", image: "http://vasudevhospitals.in/wp-content/uploads/2023/07/neurology.jpg" },
    { title: "Cosmetology", image: "https://kanishqsalonacademy.com/wp-content/uploads/2021/03/advanced_cosmetology.jpg" },
    { title: "Child Healt", image: "https://www.nfcr.org/wp-content/uploads/2020/10/10-ways-to-improve-your-childs-health-for-blog-1024x585.jpg" },
    { title: "Ophthalmology", image: "https://tse3.mm.bing.net/th?id=OIP.1tdnd0xTx3tyo6MwldiPdQAAAA&pid=Api&P=0&h=180" },
    { title: "Phlebotomy", image: "https://img.freepik.com/premium-photo/expertly-executing-blood-draw_194498-29966.jpg?w=360" },
    { title: "Thyroid Specialist", image: "https://img.freepik.com/premium-photo/young-beautiful-woman-suffering-from-pain-throat-touching-inflamed-zone-her-neck_1212-3073.jpg?w=996" },
];
function About() {
    return (
        <div className='w-full min-h-screen bg-gray-200'>
            <NavBar />
            <div className="w-full h-16 bg-blue-800 "></div>
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">About TeleCare</h1>
                    <p className="mt-4 text-lg">
                        TeleCare is an innovative online healthcare platform designed to make quality medical services more accessible to everyone, anytime and anywhere.
                    </p>
                </div>

                <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div style={{ backgroundImage: `url(${AboutImage})` }} className="w-full h-[500px] bg-cover bg-center shadow-lg rounded-lg"></div>

                    <div className="flex flex-col items-center justify-center text-center md:text-left">
                        <h3 className="text-2xl font-semibold">Why Choose TeleCare?</h3>
                        <ul className="mt-4 space-y-4 text-lg">
                            <li>✅ Convenient Access: Book consultations from home.</li>
                            <li>✅ Affordable Care: High-quality healthcare at competitive prices.</li>
                            <li>✅ Confidentiality & Security: Your data is protected.</li>
                            <li>✅ Professional Healthcare Providers: Connect with licensed doctors.</li>
                        </ul>
                    </div>
                </section>

                <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="flex flex-col items-center justify-center text-center md:text-left">
                        <h3 className="text-2xl font-semibold">What We Offer?</h3>
                        <ul className="mt-4 space-y-4 text-lg">
                            <li>📞 Online Doctor Consultations</li>
                            <li>📅 Doctor Search & Booking</li>
                            <li>💊 Prescription Management</li>
                            <li>💳 Secure Payment Integration</li>
                            <li>🌟 Patient & Doctor Feedback</li>
                        </ul>
                    </div>

                    <div style={{ backgroundImage: `url(${AboutVideo})` }} className="w-full h-[500px] bg-cover bg-center shadow-lg rounded-lg"></div>
                </section>

                <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div style={{ backgroundImage: `url(${Vision})` }} className="w-full h-[500px] bg-cover bg-center shadow-lg rounded-lg"></div>

                    <div className="flex flex-col items-center justify-center text-center md:text-left">
                        <h3 className="text-2xl font-semibold">Our Vision</h3>
                        <p className="mt-4 text-lg">
                            We aim to revolutionize healthcare by leveraging technology to provide seamless access to medical consultations, prescriptions, and advice—all from the comfort of home.
                        </p>
                    </div>
                </section>

                <section className="mt-12 text-center">
                    <h2 className="text-3xl font-semibold">Our Team</h2>
                    <p className="mt-4 text-lg">
                        TeleCare is backed by a team of passionate healthcare experts, technology specialists, and customer support professionals committed to improving healthcare delivery through innovation.
                    </p>
                </section>
            </div>

            <div className="p-4 md:p-6">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
                    Our Top Specialties
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
                    {specialties.map((specialty, index) => (
                        <div
                            key={index}
                            className="relative rounded-xl overflow-hidden shadow-lg group bg-white"
                        >
                            <img
                                src={specialty.image}
                                alt={specialty.title}
                                className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="p-4 text-center">
                                <span className="font-semibold text-lg">{specialty.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />

        </div>
    );
};

export default About;
