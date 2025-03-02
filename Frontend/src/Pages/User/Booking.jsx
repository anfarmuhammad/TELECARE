import React, { useState } from 'react';
import NavBar from '../../componets/Usercomponets/NavBar';
import Footer from '../../componets/Usercomponets/Footer';

const days = [
    { day: 'Mon', date: 1 },
    { day: 'Tue', date: 2 },
    { day: 'Wed', date: 3 },
    { day: 'Thu', date: 4 },
    { day: 'Fri', date: 5 },
    { day: 'Sat', date: 6 },
    { day: 'Sun', date: 7 }
];

const times = {
    morning: [
        { time: '8:00 AM', status: 'unavailable' },
        { time: '9:00 AM', status: 'unavailable' },
        { time: '10:00 AM', status: 'unavailable' },
        { time: '11:00 AM', status: 'unavailable' }
    ],
    afternoon: [
        { time: '1:30 PM', status: 'unavailable' },
        { time: '2:30 PM', status: 'unavailable' },
        { time: '3:30 PM', status: 'unavailable' },
        { time: '4:30 PM', status: 'unavailable' }
    ],
    evening: [
        { time: '6:00 PM', status: 'unavailable' },
        { time: '7:00 PM', status: 'unavailable' },
        { time: '8:00 PM', status: 'unavailable' }
    ]
};

const Booking = () => {
    const [selectedDay, setSelectedDay] = useState(1);
    

    const handleDayClick = (date) => setSelectedDay(date);

    return (
        <div className='w-full min-h-screen bg-gray-200'>
            <NavBar/> 
            <div className="p-4 md:p-8 bg-gray-200 font-bold w-full flex mt-16 md:mt-10  justify-center flex-col min-h-screen">
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4 mb-8">
                    {days.map(({ day, date }) => (
                        <button
                            key={date}
                            onClick={() => handleDayClick(date)}
                            className={`p-2 sm:p-4 rounded ${selectedDay === date ? 'bg-blue-500' : 'bg-white'}`}
                        >
                            <div className="text-sm sm:text-base">{day}</div>
                            <div className="text-sm sm:text-base">{date}</div>
                        </button>
                    ))}
                </div>

                {Object.entries(times).map(([period, slots]) => (
                    <div key={period} className="mb-6">
                        <h3 className="text-lg sm:text-xl capitalize mb-2">{period}</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {slots.map(({ time, status }) => (
                                <button className='p-2 rounded text-sm sm:text-base bg-blue-500'>{time}</button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <Footer/>
        </div>

    );
};

export default Booking;

