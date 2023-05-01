import "./Header.css";
import React, { useContext, useRef } from "react";
import userFrame from "../../assets/Images/user-frame2.png";
import dataFrame from "../../assets/Images/data-frame.png";
import selectOption from "../../assets/Images/select-option.png";
import MainContext from "../../context/mainContext";
import { Link } from "react-router-dom";

function LandingPageHeader() {
  const state = useContext(MainContext);
  const menuRef = useRef();
  const rotate = useRef();

  const total = state.accounts.reduce((prev, curr) => {
    return prev + curr.balance 
  }, 0).toLocaleString('en-US').replace(/, /g, " ")

  const toggleMenu = () => {
    menuRef.current.classList.toggle("show");
    rotate.current.classList.toggle("rotate");
  };

  return (
    <header className="header__of_landing">
      <nav className="nav">
        <Link to="/">
          <img className="icons" src={userFrame} />
        </Link>
        <div className="selector">
          <button id="selectField" onClick={toggleMenu}>
            <p title="All wallets">All wallets</p>
            <img className="rotate" src={selectOption} ref={rotate} />
          </button>

          <ul className="header__list" ref={menuRef}>
            <li className="header__list_items border">
              <p>All wallets</p>
            </li>
            <li className="header__list_items ">
              <p>Cash</p>
            </li>
            <li className="header__list_items ">
              <p>TBC humo</p>
            </li>
            <li className="header__list_items ">
              <p>SQB</p>
            </li>
            <li className="header__list_items border1">
              <p>Home cash</p>
            </li>
            <li className="header__list_items exept__item">
              <p>Add new wallet</p>
            </li>
          </ul>
        </div>
        <a href="#">
          <img className="icons" src={dataFrame} />
        </a>
      </nav>
      {/* Cash */}
      <div className="balance">
        <p>TOTAL BALANCE</p>
        <h2>$ {total}</h2>
      </div>
    </header>
  );
}

export default LandingPageHeader;
