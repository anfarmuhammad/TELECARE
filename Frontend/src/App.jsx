import Common from "./Routes/CommonPage"
import About from "./Pages/User/About"
import { BrowserRouter } from "react-router-dom"
import CommonPage from "./Routes/CommonPage"
import User from "./Routes/User"
import DoctorSignup from "./Pages/Doctor/DoctorSignup"
import Appoinments from "./Pages/User/Appoinments"
import Doctor from "./Routes/Doctor"
import AcademicDetailsForm from "./Pages/Doctor/AcademicDetailsForm"
import DoctorProfileForm from "./Pages/Doctor/DoctorProfileForm"



function App() {


  return (
    <>
       {/* <DoctorProfileForm/> */}
      {/* <AcademicDetailsForm/> */}
      <BrowserRouter>

        <CommonPage />
        <User />
        <Doctor/>

      </BrowserRouter>



    </>
  )
}

export default App
