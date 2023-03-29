import React from "react";
import bottom from "../../assets/Icons/bottom.png";
import top from "../../assets/Icons/top.png";
import left from "../../assets/Icons/left.png";
import select from "../../assets/Icons/toBottom.png";
import tel from "../../assets/Icons/phone.png";
import global from "../../assets/Icons/global.png";
import car from "../../assets/Icons/car.png";
import strelka from "../../assets/Icons/transaction.png";
import korzinka from "../../assets/Icons/korzinka.png";
import loop from "../../assets/Icons/loop.png";
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
      <div className="history">
        <div className="history_include">
          <button className="history_heading">All</button>
          <button className="history_heading">Income</button>
          <button className="history_heading">Spending </button>
        </div>
        <div className="history_date">
          <p className="history_description">14 July</p>
          <h4 className="main_heading">+ $125,17</h4>
        </div>
        <div className="history_monitoring">
          <div className="hisrory_main">
            <div className="history_icon">
              <img className="history_img" src={tel} alt="Img..."></img>
              <p className="salary_description salary">Salary</p>
            </div>
            <div className="monitoring_date">
              <span className="history_clock">02:03 PM</span>
              <p className="history_money">+ $600,50</p>
            </div>
          </div>
          <div className="hisrory_main">
            <div className="history_icon">
              <img src={global} alt="Img..."></img>
              <p className="salary_description">Online store payment</p>
            </div>
            <div className="monitoring_date">
              <span className="history_clock">01:50 PM</span>
              <p className="history_money money">- $20,17</p>
            </div>
          </div>
          <div className="hisrory_main">
            <div className="history_icon">
              <img src={korzinka} alt="Img..."></img>
              <p className="salary_description">Store payment</p>
            </div>
            <div className="monitoring_date">
              <span className="history_clock">10:42 AM</span>
              <p className="history_money money">- $18,40</p>
            </div>
          </div>
          <div className="hisrory_main">
            <div className="history_icon">
              <img src={car} alt="Img..."></img>
              <p className="salary_description">Salary</p>
            </div>
            <div className="monitoring_date">
              <span className="history_clock">10:03 AM</span>
              <p className="history_money">+ $800,50</p>
            </div>
          </div>
          <div className="hisrory_main">
            <div className="history_icon">
              <img src={strelka} alt="Img..."></img>
              <p className="salary_description">Transaction</p>
            </div>
            <div className="monitoring_date">
              <span className="history_clock">09:11 AM</span>
              <p className="history_money">+ $2600,50</p>
            </div>
          </div>
          <div className="hisrory_main">
            <div className="history_icon">
              <img src={car} alt="Img..."></img>
              <p className="salary_description">Gasoline</p>
            </div>
            <div className="monitoring_date">
              <span className="history_clock">08:33 AM</span>
              <p className="history_money money">- $29,15</p>
            </div>
          </div>
          <div className="hisrory_main">
            <div className="history_icon">
              <img src={korzinka} alt="Img..."></img>
              <p className="salary_description">Store payment</p>
            </div>
            <div className="monitoring_date">
              <span className="history_clock">08:15 AM</span>
              <p className="history_money">+ $2600,50</p>
            </div>
          </div>
        </div>
        <div className="loop">
          <img src={loop} alt="Img..."></img>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Monitoring;
