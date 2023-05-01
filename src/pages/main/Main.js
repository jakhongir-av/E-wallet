import "./main.css";
import React from "react";
import LandingPageHeader from "../../components/LandingPageHeader/LandingPageHeader";
import Statistics from "../../components/Statistics/Statistics";
import Monitoring from "../../components/Monitoring/Monitoring";
import History from '../../components/History/History'

function Main() {
  return (
    <div className="back__of_main">
      <LandingPageHeader />
      <Statistics />
      <History />
    </div>
  );
}

export default Main;
