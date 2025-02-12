import React from 'react'
import { Route, Routes } from "react-router-dom";
import About from '../Pages/User/About';
import Home from '../Pages/User/Home';



function User() {
  return (
    <>
      
       <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       </Routes>
    

    </>
  )
}

export default User
