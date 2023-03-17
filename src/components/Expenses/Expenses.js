import React from "react";
import "./Expenses.css";
import income from "../../assets/Images/Income.png";
import spending from "../../assets/Images/Spending.png";
import select from "../../assets/Images/select-option2.png";

function Expenses() {
  return (
    <div className="expenses">
      <div className="expenses__header">
        <div className="expenses__dropdown">
          <p>This week</p>
          <img src={select} />
        </div>
        <p>07 Jule - 14 Jule</p>
      </div>
      <div className="expenses__body">
        <div className="expenses__spending">
          <img src={income} />
          <div className="expenses__body_intro">
            <span>Income</span>
            <p>$487.12</p>
          </div>
        </div>

        <div className="expenses__spending">
          <img src={spending} />
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
