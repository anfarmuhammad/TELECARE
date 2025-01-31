import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from '../Pages/Common/Landing'
import Login from '../Pages/Common/Login';
import SignUp from '../Pages/Common/SignUp';
import Home from '../Pages/User/Home';

function CommonPage() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Landing/>} />
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/home" element={<Home/>}/>

                </Routes>
            </Router>

        </div>
    )
}

export default CommonPage;
