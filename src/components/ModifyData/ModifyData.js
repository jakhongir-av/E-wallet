import React, { useRef, useState } from "react";
import "./ModifyData.css";
import vector from "../../assets/Images/vector.png";

function ModifyData() {
  const showModifyDropdown = useRef();
  const rotateModifyVector = useRef();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
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
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </label>
      </div>
    </div>
  );
}

export default ModifyData;
