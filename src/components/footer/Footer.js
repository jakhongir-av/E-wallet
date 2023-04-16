import React from "react";
import home from "../../assets/Images/Home.svg";
import analitics from "../../assets/Images/analitic.svg";
import add from "../../assets/Images/add.svg";
import wallet from "../../assets/Images/cardWallet.svg";
import profile from "../../assets/Images/profile.svg";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_include">
        <Link to="/home" className="footer_link active">
          <img alt="img..." src={home} />
        </Link>
        <p className="footer_description active">Dashboard</p>
      </div>
      <div className="footer_include">
        <Link to="/analitics">
          <img alt="img..." src={analitics} />
        </Link>
        <p className="footer_description">Analitycs</p>
      </div>
      <div className="footer_include">
        <Link to="/add-wallet">
          <img alt="img..." src={add} />
        </Link>
        <p className="footer_description">Add wallet</p>
      </div>
      <div className="footer_include">
        <Link to="/wallet">
          <img alt="img..." src={wallet} />
        </Link>
        <p className="footer_description">Wallets</p>
      </div>
      <div className="footer_include">
        <Link to="/profile">
          <img alt="img..." src={profile} />
        </Link>
        <p className="footer_description">My profile</p>
      </div>
    </div>
  );
}

export default Footer;
