import React, { useRef, useState } from "react";
import "./ModifyData.css";
import vector from "../../assets/Images/vector.png";

function ModifyData() {
  const showModifyDropdown = useRef();
  const rotateModifyVector = useRef();
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  function showModifyDropdownMenu() {
    showModifyDropdown.current.classList.toggle("showModifyDropdown");
    rotateModifyVector.current.classList.toggle("rotateModifyVector");
  }


  
  return (
    <div className="modify__main_wrapper">
      <span>Wallet name</span>
      <div className="main__visa_input">
        <input type="text" placeholder="Visa" />
      </div>
      <span>Wallet type</span>
      <div className="modify__main_dropdown" onClick={showModifyDropdownMenu}>
        <p>Bank card</p>
        <img
          src={vector}
          alt="dropdown"
          ref={rotateModifyVector}
          className="rotateModifyVector"
        />
        <ul className="modify__dropdown_menu" ref={showModifyDropdown}>
          <li className="borderBottomModify">Bank card</li>
          <li className="borderRadiusModify">Cash</li>
        </ul>
      </div>

      {/* Checkbox */}
      <div className="modify__checkbox_container">
        <label className="modify__checkbox_label">
          <input
            type="radio"
            value="option1"
            checked={selectedOption === "option1"}
            onChange={handleOptionChange}
          />
        </label>
        <label className="modify__checkbox_label">
          <input
            type="radio"
            value="option2"
            checked={selectedOption === "option2"}
            onChange={handleOptionChange}
          />
        </label>
        <label className="modify__checkbox_label">
          <input
            type="radio"
            value="option3"
            checked={selectedOption === "option3"}
            onChange={handleOptionChange}
          />
        </label>
      </div>
    </div>
  );
}

export default ModifyData;
