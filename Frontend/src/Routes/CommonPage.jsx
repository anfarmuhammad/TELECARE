import React from 'react'
import { Route, Routes } from "react-router-dom";
import Landing from '../Pages/Common/Landing'
import Login from '../Pages/Common/Login';
import SignUp from '../Pages/Common/Signup';


function CommonPage() {
        return (
                <>

                        <Routes>
                                <Route path="/" element={<Landing />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/signup" element={<SignUp />} />
                        </Routes>



                </>


        )
}

export default CommonPage;
