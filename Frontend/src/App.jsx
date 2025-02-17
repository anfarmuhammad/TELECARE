import { BrowserRouter } from "react-router-dom"
import CommonPage from "./Routes/CommonPage"
import User from "./Routes/User"
import Doctor from "./Routes/Doctor"
import UserProfile from "./Pages/User/UserProfile"




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
