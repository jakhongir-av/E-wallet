import React from "react";
import ModifyData from "../../components/ModifyData/ModifyData";
import ModifyHeader from "../../components/ModifyHeader/ModifyHeader";
import Footer from "../../components/Footer/Footer";
import "./Modify.css";

function Modify() {
  return (
    <div>
      <ModifyHeader />
      <form className="modify__wrapper">
        <div className="modify__main">
          <ModifyData />
          <div className="modify__card_checker">
            <span>Name on card</span>
            <input type="text" placeholder="Jakhongir Abdujalilov" />
          </div>
          <button type="submit" className="modify__submit_btn">
            SAVE CHANGES
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default Modify;
