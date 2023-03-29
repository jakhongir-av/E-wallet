import React, { useRef } from "react";
import "./Expenses.css";
import income from "../../assets/Images/Income.png";
import spending from "../../assets/Images/Spending.png";
import select from "../../assets/Images/select-option2.png";

function Expenses() {
  const down = useRef();
  const rotate = useRef();

  function expensesList() {
    down.current.classList.toggle("expenses__dropdown");
    rotate.current.classList.toggle("expenses__rotate");
  }

  return (
    <div className="expenses">
      {/* Dropdown and data */}
      <div className="expenses__header">
        <div className="expenses__dropdown" onClick={expensesList}>
          <p>This week</p>
          <img ref={rotate} src={select} alt="Dropdown" className="expenses__rotate" />
        </div>

        {/* Expenses List */}
        <ul className="expenses__list" ref={down}>
          <li className="expenses__list_items list__border_bottom">
            <p>This week</p>
          </li>
          <li className="expenses__list_items list__border_bottom">
            <p>This month</p>
          </li>
          <li className="expenses__list_items list__border_bottom">
            <p>Last week</p>
          </li>
          <li className="expenses__list_items list__border_bottom">
            <p>Last month</p>
          </li>
          <li className="expenses__list_items list__border_bottom">
            <p>Half year</p>
          </li>
          <li className="expenses__list_items">
            <p>Year</p>
          </li>
        </ul>
        <p>07 Jule - 14 Jule</p>
      </div>

      {/* Spendings */}
      <div className="expenses__body">
        <div className="expenses__spending">
          <img src={income} alt="spending" />
          <div className="expenses__body_intro">
            <span>Income</span>
            <p>$487.12</p>
          </div>
        </div>
        <div className="expenses__spending">
          <img src={spending} alt="spending" />
          <div className="expenses__body_intro">
            <span>Spending</span>
            <p>$695.05</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expenses;