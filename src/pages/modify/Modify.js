import React from "react";
import ModifyData from "../../components/ModifyData/ModifyData";
import ModifyHeader from "../../components/ModifyHeader/ModifyHeader";
import "./Modify.css";

function Modify() {
  return (
    <form className="modify__wrapper">
        <ModifyHeader />
        <div className="modify__main">
            <ModifyData />
        </div>
    </form>
  );
}

export default Modify;
