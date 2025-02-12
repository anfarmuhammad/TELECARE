import Common from "./Routes/CommonPage"
import About from "./Pages/User/About"
import Consult from "./Pages/User/Consult"
import { BrowserRouter } from "react-router-dom"
import CommonPage from "./Routes/CommonPage"
import User from "./Routes/User"


function App() {


  return (
    <>
     
        <BrowserRouter>
      
          <CommonPage/>
          <User/>
          
        </BrowserRouter>



    </>
  )
}

export default App
