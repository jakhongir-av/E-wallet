import "./Main.css";
import React from "react";
import LandingPageHeader from "../../components/LandingPageHeader/LandingPageHeader";
import Statistics from "../../components/Statistics/Statistics";
import History from "../../components/History/History";
import Cards from "../Cards/Card"


function Main() {
  return (
    <div className="back__of_main">
      {/* <SignIn />
      <Monitoring />
      <Modify />
      <Card />
      <AddWallet /> */}
      <LandingPageHeader />
      <History />
      <Cards />
    </div>
  );
}

export default Main;
