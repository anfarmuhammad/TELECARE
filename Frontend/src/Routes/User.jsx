import React from 'react'
import { Route, Routes } from "react-router-dom";
import About from '../Pages/User/About';
import Home from '../Pages/User/Home';
import Appointments from '../Pages/User/Appoinments';



function User() {
  return (


    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/appointments" element={<Appointments />} />
    </Routes>



  )
}

export default User
