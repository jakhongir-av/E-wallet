import React from 'react'
import logo from "../../assets/Images/logo.png";
import emailFrame from "../../assets/Images/email-frame.png";
import passwordFrame from "../../assets/Images/password-frame.png";
import './signIn.css'

function SignIn() {
  return (
    <div className="body">
        <div className="header__logo">
          <img src={logo} alt="Logo" />
          <h2>SIGN IN</h2>
        </div>
      <main>
        <form className="main__form2">
          {/* Inputs */}
          <div className="form__input_wrapper">
            <div className="frame__wrapper">
              <input
                className="email__input"
                type="text"
                placeholder="E-mail"
                required
              />
              <img className="input__frames" src={emailFrame} />
            </div>
            <div className="frame__wrapper">
              <input
                className="password__input"
                type="text"
                placeholder="Password"
                required
              />
              <img className="input__frames" src={passwordFrame} />
              {/* Link */}
              <a href="#">Forgot password?</a>
            </div>
          </div>
          {/* Btns */}
          <div className="form__btn_wrapper2">
            <button className="btn" type="button">SIGN UP</button>
            <button className="submit__btn" type="submit">SIGN IN</button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default SignIn
