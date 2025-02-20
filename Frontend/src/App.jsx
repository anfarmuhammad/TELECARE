import { BrowserRouter } from "react-router-dom"
import CommonPage from "./Routes/CommonPage"
import User from "./Routes/User"
import Doctor from "./Routes/Doctor"
import UserProfile from "./Pages/User/UserProfile"
import DoctorHome from "./Pages/Doctor/DoctorHome"




function App() {


  return (
    <>
      
       {/* <DoctorHome/>  */}
      <BrowserRouter>

        <CommonPage />
        <User />
        <Doctor/>

      </BrowserRouter>



    </>
  )
}

export default App
