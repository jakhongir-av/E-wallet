import React from "react";
import left from "../../assets/Icons/left.png";
import "./Monitoring.css";
import Footer from "../Footer/Footer";

function Monitoring() {
  return (
    <div className="monitoring">
      <div className="container">
        <div className="monitoring_header">
          <a className="monitoring_link" href="/cwevsa">
            <img src={left} alt="Img..."></img>
            Back
          </a>
          <h1 className="monitoring_heading">Visa</h1>
          <button className="btn monitoring_btn">Edit</button>
        </div>
      </div>
      <div className="card">
        <h2 className="card_heading">CASH</h2>
        <div className="card_div">
          <p className="card_description">Available balance</p>
          <h3 className="card_heading_second">$12 487.12</h3>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Monitoring;
