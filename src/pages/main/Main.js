import "./main.css";
import React from "react";
import LandingPageHeader from "../../components/LandingPageHeader/LandingPageHeader";
import Statistics from "../../components/Statistics/Statistics";

function Main() {
  return (
    <div className="back__of_main">
      <LandingPageHeader />
      <Statistics />
    </div>
  );
}

export default Main;
