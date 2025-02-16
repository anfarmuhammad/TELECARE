import React from 'react'
import { Route, Routes } from "react-router-dom";
import DoctorSignup from '../Pages/Doctor/DoctorSignup';
import AcademicDetailsForm from '../Pages/Doctor/AcademicDetailsForm';
import DoctorProfileForm from '../Pages/Doctor/DoctorProfileForm';




function Doctor() {
  return (
    <Routes>
      <Route path="/doctorsignup" element={<DoctorSignup/>} />
      <Route path="/academicdetailsform" element={<AcademicDetailsForm/>} />
      <Route path="/doctorprofileform" element={<DoctorProfileForm/>} />
    </Routes>
  )
}

export default Doctor
