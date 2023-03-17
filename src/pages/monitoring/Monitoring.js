import React from "react";
import bottom from "../../assets/Images/Icons/bottom.png";
import top from "../../assets/Images/Icons/top.png";
import left from "../../assets/Images/Icons/left.png";
import select from "../../assets/Images/Icons/selectBottom.png";
import tel from "../../assets/Images/Icons/telephone.png";
import global from "../../assets/Images/Icons/global.png";
import car from "../../assets/Images/Icons/car.png";
import strelka from "../../assets/Images/Icons/strelka.png";
import korzinka from "../../assets/Images/Icons/korzinka.png";
import loop from "../../assets/Images/Icons/loop.png";
import "./monitoring.css";
import Footer from "../../components/footer/Footer";

function Monitoring() {
  return (
    <div className="monitoring">
      <div className="container">
        <div className="monitoring_header">
          <a className="monitoring_link" href="#">
            <img src={left}></img>
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
            This week<img src={select}></img>
          </h4>
          <p className="chart_description">07 July - 14 July</p>
        </div>
        <div className="main">
          <div className="income_div">
            <div className="income_circle">
              <img src={bottom}></img>
            </div>
            <div className="income_include">
              <p className="income_description">Income</p>
              <h4 className="income_heading">$122.12</h4>
            </div>
          </div>
          <div className="spending_div">
            <div className="spending_circle">
              <img src={top}></img>
            </div>
            <div className="spending_include">
              <p className="spending_description">Spending </p>
              <h4 className="spending_heading">$342.05</h4>
            </div>
          </div>
        </div>
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
              <img src={tel}></img>
              <p className="salary_description">Salary</p>
            </div>
            <div className="monitoring_date">
              <span className="history_clock">02:03 PM</span>
              <p className="history_money">+ $600,50</p>
            </div>
          </div>
          <div className="hisrory_main">
            <div className="history_icon">
              <img src={global}></img>
              <p className="salary_description">Online store payment</p>
            </div>
            <div className="monitoring_date">
              <span className="history_clock">01:50 PM</span>
              <p className="history_money money">- $20,17</p>
            </div>
          </div>
          <div className="hisrory_main">
            <div className="history_icon">
              <img src={korzinka}></img>
              <p className="salary_description">Store payment</p>
            </div>
            <div className="monitoring_date">
              <span className="history_clock">10:42 AM</span>
              <p className="history_money money">- $18,40</p>
            </div>
          </div>
          <div className="hisrory_main">
            <div className="history_icon">
              <img src={car}></img>
              <p className="salary_description">Salary</p>
            </div>
            <div className="monitoring_date">
              <span className="history_clock">10:03 AM</span>
              <p className="history_money">+ $800,50</p>
            </div>
          </div>
          <div className="hisrory_main">
            <div className="history_icon">
              <img src={strelka}></img>
              <p className="salary_description">Transaction</p>
            </div>
            <div className="monitoring_date">
              <span className="history_clock">09:11 AM</span>
              <p className="history_money">+ $2600,50</p>
            </div>
          </div>
          <div className="hisrory_main">
            <div className="history_icon">
              <img src={car}></img>
              <p className="salary_description">Gasoline</p>
            </div>
            <div className="monitoring_date">
              <span className="history_clock">08:33 AM</span>
              <p className="history_money">- $29,15</p>
            </div>
          </div>
          <div className="hisrory_main">
            <div className="history_icon">
              <img src={korzinka}></img>
              <p className="salary_description">Store payment</p>
            </div>
            <div className="monitoring_date">
              <span className="history_clock">08:15 AM</span>
              <p className="history_money">+ $2600,50</p>
            </div>
          </div>
        </div>
        <div className="loop">
          <img src={loop}></img>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Monitoring;
