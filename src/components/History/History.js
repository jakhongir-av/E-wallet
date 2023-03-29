import React from 'react'
import "../History/History.css"
import tel from "../../assets/Icons/phone.png";
import global from "../../assets/Icons/global.png";
import car from "../../assets/Icons/car.png";
import strelka from "../../assets/Icons/transaction.png";
import korzinka from "../../assets/Icons/korzinka.png";
import loop from "../../assets/Icons/loop.png";

function History() {
  return (
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
  )
}

export default History