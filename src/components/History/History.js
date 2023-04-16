import React, { useContext, useEffect, useState } from "react";
import "../History/History.css";
import tel from "../../assets/Icons/phone.png";
import global from "../../assets/Icons/global.png";
import car from "../../assets/Icons/car.png";
import strelka from "../../assets/Icons/transaction.png";
import korzinka from "../../assets/Icons/korzinka.png";
import loop from "../../assets/Icons/loop.png";
import HistoryContext from "../../context/HistoryContext";

function History() {
  const [filter, setFilter] = useState("All");
  let history = useContext(HistoryContext);

  return (
    <div className="history">
      <div className="history_include">
        <button className="history_heading" onClick={() => setFilter("All")}>
          All
        </button>
        <button className="history_heading" onClick={() => setFilter("Income")}>
          Income
        </button>
        <button
          className="history_heading"
          onClick={() => setFilter("Spending")}
        >
          Spending
        </button>
      </div>
      {history.map((day) => (
        <div key={day.id}>
          <div className="history_date">
            <p className="history_description">{day.day + " " + day.month}</p>
          </div>
          <div className="history_monitoring">
            {day.tracks.map((track) => (
              <div className="hisrory_main" key={track.id}>
                <div className="history_icon">
                  <img className="history_img" src={global} alt="Img..."></img>
                  <p className="salary_description salary">{track.info}</p>
                </div>
                <div className="monitoring_date">
                  <span className="history_clock">{track.time}</span>
                  <p
                    className={`history_money ${
                      track.type !== "income" && "money"
                    }`}
                  >{`${track.type === "income" ? "+" : "-"} $${track.qty}`}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="loop">
        <img src={loop} alt="Img..."></img>
      </div>
    </div>
  );
}

export default History;