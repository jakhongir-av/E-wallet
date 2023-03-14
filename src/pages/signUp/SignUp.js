import React from "react";
import "./signUp.css";
import logo from "../../assets/Images/logo.png";
import emailFrame from "../../assets/Images/email-frame.png";
import passwordFrame from "../../assets/Images/password-frame.png";

function SignUp() {
  return (
    <div className="body">
      <header>
        <div className="header__logo">
          <img src={logo} alt="Logo" />
          <h2>SING UP</h2>
        </div>
      </header>
      <main>
        <form className="main__form">
          {/* Inputs */}
          <div className="form__input_wrapper">
            <div className="frame__wrapper">
              <input
                className="email__input"
                type="text"
                placeholder="E-mail"
              />
              <img className="input__frames" src={emailFrame} />
            </div>
            <div className="frame__wrapper">
              <input
                className="password__input"
                type="text"
                placeholder="Password"
              />
              <img className="input__frames" src={passwordFrame} />
            </div>
          </div>
          {/* Link */}
          <div className="form__anchor">
            <a href="#">Forgot password?</a>
          </div>
          {/* Btns */}
        </form>
      </main>
    </div>
  );
}

export default SignUp;
