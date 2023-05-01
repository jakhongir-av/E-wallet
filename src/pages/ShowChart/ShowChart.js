import select from "../../assets/Icons/toBottom.png";
import React from "react";
import bottom from "../../assets/Icons/bottom.png";
import top from "../../assets/Icons/top.png";
import "./ShowChart.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function ShowChart() {
  return (
    <div className="chart">
      <div className="chart_header">
        <h4 className="chart_heading">
          This week<img src={select} alt="Img..."></img>
        </h4>
        <p className="chart_description">07 July - 14 July</p>
      </div>
      <div className="main">
        <div className="income_div">
          <div className="income_circle">
            <img src={bottom} alt="Img..."></img>
          </div>
          <div className="income_include">
            <p className="income_description">Income</p>
            <h4 className="income_heading">$122.12</h4>
          </div>
        </div>
        <div className="spending_div">
          <div className="spending_circle">
            <img src={top} alt="Img..."></img>
          </div>
          <div className="spending_include">
            <p className="spending_description">Spending </p>
            <h4 className="income_heading">$342.05</h4>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="show_chart">
        <div class="card-header" id="headingOne">
          <h5 class="mb-0">
            <button
              class="btn btn-link"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Collapsible Group Item #1
            </button>
          </h5>
        </div>

        <div
          id="collapseOne"
          class="collapse show"
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
          <div class="card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
            skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
            single-origin coffee nulla assumenda shoreditch et. Nihil anim
            keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
            sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
            occaecat craft beer farm-to-table, raw denim aesthetic synth
            nesciunt you probably haven't heard of them accusamus labore
            sustainable VHS.
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowChart;
