import "./Header.css";
import React, { useRef } from "react";
import userFrame from "../../assets/Images/user-frame2.png";
import dataFrame from "../../assets/Images/data-frame.png";
import selectOption from "../../assets/Images/select-option.png";
import { Link } from "react-router-dom";
import MainContext from "../../context/mainContext";
import { useContext } from "react";

function LandingPageHeader() {
  const state = useContext(MainContext)

  const menuRef = useRef();
  const rotate = useRef();

  const total = state.accounts.reduce((prev, curr) => {
    return prev + curr.balance;
  }, 0).toLocaleString('en-US').replace(/,g/, " ")


  const toggleMenu = () => {
    menuRef.current.classList.toggle("show");
    rotate.current.classList.toggle("rotate");
  };

  return (
    <header className="header__of_landing">
      <nav className="nav">
        <Link to={'/'}>
          <img className="icons" src={userFrame} alt='icon'/>
        </Link>
        <div className="selector">
          <div id="selectField" onClick={toggleMenu}>
            <p title="All wallets">
              All wallets
            </p>
            <img
              className="rotate"
              src={selectOption}
              ref={rotate}
            />
          </div>

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
        <Link to={'/'}>
          <img className="icons" src={dataFrame} alt-='icon'/>
        </Link>
      </nav>
      {/* Cash */}
      <div className="balance">
        <p>TOTAL BALANCE</p>
        <h2>${total}</h2>
      </div>
    </header>
  );
}

export default LandingPageHeader;
