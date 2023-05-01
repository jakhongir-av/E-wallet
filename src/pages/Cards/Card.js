import React from "react";
import "../Cards/Card.css";
import plus from "../../assets/Icons/plus.svg";
import masterCard from "../../assets/Images/mastercard.png";
import visa from "../../assets/Images/visa.svg";
import bitcoin from "../../assets/Images/bitcoin.svg";
import paypal from "../../assets/Images/paypal.svg";
import cardWallet from "../../assets/Images/cardWallet.svg";
import Footer from "../../components/Footer/Footer"

function Card() {
  return (
    <div className="bg">
      <div className="main_container container">
      <div className="main_card">
        <div className="card_header">
          <h1 className="card_heading">My wallets</h1>
          <button className="card_btn">
            <img src={plus} alt="icon"></img>
          </button>
        </div>
        <div className="cards">
          <img src={masterCard} alt="icon"></img>
          <div className="cards_include">
            <p className="cards_description">**** **** **** 4826 Mastercard</p>
            <span className="card_span">$487.12</span>
          </div>
        </div>
        <div className="cards">
          <img src={visa} alt="icon"></img>
          <div className="cards_include">
            <p className="cards_description">**** **** **** 1147 Visa</p>
            <span className="card_span">$12 487.12</span>
          </div>
        </div>
        <div className="cards">
          <img src={bitcoin} alt="icon"></img>
          <div className="cards_include">
            <p className="cards_description">********4BGhYv2bFBaiKhHjqDEL</p>
            <span className="card_span">BTC 16,0012</span>
          </div>
        </div>
        <div className="cards">
          <img src={paypal} alt="icon"></img>
          <div className="cards_include">
            <p className="cards_description">**** **** **** PayPal</p>
            <span className="card_span">$3440.20</span>
          </div>
        </div>
        <button className="addWallet">
          <img src={cardWallet}></img>
          <span>ADD NEW WALLET</span>
        </button>
      </div>
      <Footer />
    </div>
    </div>
  );
}

export default Card;
