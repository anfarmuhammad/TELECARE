import React from 'react'
import { Route, Routes } from "react-router-dom";
import DoctorSignup from '../Pages/Doctor/DoctorSignup';
import AcademicDetailsForm from '../Pages/Doctor/AcademicDetailsForm';
import DoctorProfileForm from '../Pages/Doctor/DoctorProfileForm';
import DoctorHome from '../Pages/Doctor/DoctorHome';
import DoctorAppoinments from '../Pages/Doctor/DoctorAppoinments';
import DoctorTodayConsultations from '../Pages/Doctor/DoctorTodayConsultations';
import DoctorMessages from '../Pages/Doctor/DoctorMessages';




function Doctor() {
  return (
    <Routes>
      <Route path="/doctorsignup" element={<DoctorSignup />} />
      <Route path="/academicdetailsform" element={<AcademicDetailsForm />} />
      <Route path="/doctorprofileform" element={<DoctorProfileForm />} />
      <Route path="/doctorhome" element={<DoctorHome />} />
      <Route path="/doctorappoinments" element={<DoctorAppoinments/>}/>
      <Route path="/doctortodayconsulation" element={<DoctorTodayConsultations/>} />
      <Route path="/doctormessages"  element={<DoctorMessages/>}/>

    </Routes>
  )
}

export default Doctor