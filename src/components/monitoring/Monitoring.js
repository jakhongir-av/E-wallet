import React from "react";
import bottom from "../../assets/Icons/bottom.png";
import top from "../../assets/Icons/top.png";
import left from "../../assets/Icons/left.png";
import select from "../../assets/Icons/toBottom.png";
import "./monitoring.css";
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
      <div className="chart">
        <div className="chart_header">
          <h4 className="chart_heading">
            This week<img src={select} alt="Img..."></img>
          </h4>
          <p className="chart_description">07 July - 14 July</p>
        </div>
        <div className="main">
          <div className="income_div">
            <div className="income_circle">
              <img src={bottom} alt="Img..."></img>
            </div>
            <div className="income_include">
              <p className="income_description">Income</p>
              <h4 className="income_heading">$122.12</h4>
            </div>
          </div>
          <div className="spending_div">
            <div className="spending_circle">
              <img src={top} alt="Img..."></img>
            </div>
            <div className="spending_include">
              <p className="spending_description">Spending </p>
              <h4 className="income_heading">$342.05</h4>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="show_chart">
          <button className="show_heading" href="#">
            Show chart
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Monitoring;
