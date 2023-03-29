import React from "react";
import { useState, useContext } from "react";
import logo from "../../assets/Images/logo.png";
import emailFrame from "../../assets/Images/email-frame.png";
import passwordFrame from "../../assets/Images/password-frame.png";
import userFrame from "../../assets/Images/user-frame.png";
import { Link } from "react-router-dom";

import "./signUp.css";
import SignIn from "../SignIn/SignIn";

function SignUp() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  function changeInputVal(event) {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
    console.log(state);
  }

  function signUp(obj) {}

  return (
    <div className="body">
        <div className="header__logo">
          <img src={logo} alt="Logo" />
          <h2>SIGN UP</h2>
        </div>
      <div className="header__logo">
        <img src={logo} alt="Logo" />
        <h2>SING UP</h2>
      </div>
      <main>
        <form className="main__form">
          {/* Inputs */}
          <div className="form__input_wrapper">
            <div className="frame__wrapper">
              <input
                className="email__input"
                type="text"
                placeholder="First name"
                name="firstName"
                onChange={changeInputVal}
                required
              />
              <img className="input__frames" src={userFrame} />
            </div>
            <div className="frame__wrapper">
              <input
                className="email__input"
                type="text"
                placeholder="Last name"
                name="lastName"
                onChange={changeInputVal}
                required
              />
              <img className="input__frames" src={userFrame} />
            </div>
            <div className="frame__wrapper">
              <input
                className="email__input"
                type="email"
                placeholder="E-mail"
                name="email"
                onChange={changeInputVal}
                required
              />
              <img className="input__frames" src={emailFrame} />
            </div>
            <div className="frame__wrapper">
              <input
                className="password__input"
                type="password"
                placeholder="Password"
                name="password"
                onChange={changeInputVal}
                required
              />
              <img className="input__frames" src={passwordFrame} />
              {/* Link */}
              <a href="#">Forgot password?</a>
            </div>
          </div>
          {/* Btns */}
          <div className="form__btn_wrapper">
            <Link className="btn" to='/signIn'>
              SIGN IN
            </Link >
            <button className="submit__btn" type="submit" onClick={signUp}>
              SIGN UP
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default SignUp;
