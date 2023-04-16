import "./Main.css";
import React from "react";
import LandingPageHeader from "../../components/LandingPageHeader/LandingPageHeader";
import Statistics from "../../components/Statistics/Statistics";
import History from "../../components/History/History";
import Cards from "../Cards/Card";
import ShowChart from "../ShowChart/ShowChart";

function Main() {
  return (
    <div className="back__of_main">
      {/* <LandingPageHeader />
      <Statistics />
      <History />
      <Cards /> */}
      <ShowChart /> 
    </div>
  );
}

export default Main;
