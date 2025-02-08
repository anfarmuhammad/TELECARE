import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function User() {
  return (
    <Router>
      <Routes>
        
        <Route path="/home" element={<Home />} />

      </Routes>
    </Router>
  )
}

export default User
