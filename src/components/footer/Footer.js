import React from "react";
import home from "../../assets/Icons/Home.png";
import analitics from "../../assets/Icons/analitics.png";
import add from "../../assets/Icons/add.png";
import wallet from "../../assets/Icons/wallet.png";
import profile from "../../assets/Icons/profile.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_include">
        <a href="#ihedcsi">
          <img alt="img..." src={home}></img>
        </a>
        <p className="footer_description">Dashboard</p>
      </div>
      <div className="footer_include">
        <a href="#ihedcsi">
          <img alt="img..." src={analitics}></img>
        </a>
        <p className="footer_description">Analitycs</p>
      </div>
      <div className="footer_include">
        <a href="#ihedcsi">
          <img alt="img..." src={add}></img>
        </a>
        <p className="footer_description">Add wallet</p>
      </div>
      <div className="footer_include">
        <a href="#ihedcsi">
          <img alt="img..." src={wallet}></img>
        </a>
        <p className="footer_description description">Wallets</p>
      </div>
      <div className="footer_include">
        <a href="#ihedcsi">
          <img alt="img..." src={profile}></img>
        </a>
        <p className="footer_description">My profile</p>
      </div>
    </div>
  );
}

export default Footer;
