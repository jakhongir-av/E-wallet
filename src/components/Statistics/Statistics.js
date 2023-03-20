import React from "react";
import DoughNut from "../../charts/DoughNut";
import Expenses from "../Expenses/Expenses";
import "./Statistics.css";

function Statistics() {
  return <div className="statistics">
    <Expenses />
    <DoughNut />
  </div>;
}

export default Statistics;
