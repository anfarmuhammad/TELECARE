import React from 'react'
import { Route, Routes } from "react-router-dom";
import About from '../Pages/User/About';
import Home from '../Pages/User/Home';
import Appointments from '../Pages/User/Appoinments';
import FindDoctors from '../Pages/User/FindDoctors';
import UserProfile from '../Pages/User/UserProfile';
import Feedback from '../Pages/User/FeedBack';
import Booking from '../Pages/User/Booking';
import ConsultationForm from '../Pages/User/ConsultationForm';




function User() {
  return (

    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/finddoctors"  element={<FindDoctors/>} />
      <Route path="/userprofile"  element={<UserProfile/>} />
      <Route path="/feedback"   element={<Feedback/>}/>
      <Route path="/consultationform" element={<ConsultationForm/>} />
      <Route path="/booking"   element={<Booking/>} />

    
    </Routes>



  )
}

export default User