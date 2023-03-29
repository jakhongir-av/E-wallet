import React from "react";
import SignUp from "../../components/SignUp/SignUp";
import SignIn from "../../components/SignIn/SignIn";
import {Routes, Route} from 'react-router-dom'

function Register() {
  return (
    <div>
        <Routes >
            <Route path="/register/signUp" element={<SignUp />} />
            <Route path="/register/signIn" element={<SignIn />} />
        </Routes>
    </div>
  );
}

export default Register;
