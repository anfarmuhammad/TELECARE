import { BrowserRouter } from "react-router-dom"
import CommonPage from "./Routes/CommonPage"
import User from "./Routes/User"
import Doctor from "./Routes/Doctor"
import Booking from "./Pages/User/Booking"
import ConsultationForm from "./Pages/User/ConsultationForm"




function App() {


  return (
    <>    
      
      <BrowserRouter>
     
      
        <CommonPage />
        <User />
        <Doctor/>

      </BrowserRouter>



    </>
  )
}

export default App
