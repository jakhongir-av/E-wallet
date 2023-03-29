import React from "react";
import Footer from "../../components/Footer/Footer";
import ModifyData from "../../components/ModifyData/ModifyData";
import "./AddWallet.css";

function AddWallet() {
  return (
    <div className="addWallet__container">
      <div className="addWallet__header">
        <p>Cancel</p>
        <h1>Wallet edit</h1>
        <p>Save</p>
      </div>
      <form className="addWallet__main">
        <ModifyData />
        <div className="addWallet__personal">
            <div className="addWallet__personal_info">
                <span>E-Mail</span>
                <input type='email' placeholder="jakhongir.av@gmail.com"/>
            </div>
            <div className="addWallet__personal_info">
                <span>Password</span>
                <input type='password' />
            </div>
        </div>
        <button type="submit" className="addWallet__submit_btn">ADD WALLET</button>
      </form>
      <Footer />
    </div>
  );
}

export default AddWallet;
