import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale, // y
  BarController,
  Tooltip,
  Legend
} from "chart.js";
import "./DoughNut.css";

import { Bar } from "react-chartjs-2";

function DoughNut() {
  const data = {
    labels: ["Mon", "Tue", "Wed"],
    datasets: [
      {
        label: "168",
        data: [100, 600, 700],
        backgroundColor: "rgba(97, 138, 50, 0.7)",
        borderColor: "transparent",
        borderRadius: 10,
        borderWidth: 2,
        barThickness: '44',
        
      },
      {
        label: "Income",
        data: [150, 340, 541],
        backgroundColor: "rgba(196, 42, 51, 0.7)",
        borderColor: "transparent",
        borderRadius: 10,
        borderWidth: 2,
        barThickness: '44',
      }
    ]
  };

  const options = {
    scales: {
      x: {
        type: "category",
        labels: ["Cash", "TBC humo", "SQB"],
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: 'Nunito',
            size: 13,
            weight: 600,
          },
          color: '#3D6670'
        }
      },
      y: {
        type: "linear",
        ticks: {
          beginAtZero: true,
          font: {
            family: 'Nunito',
            size: 8,
            weight: 400
          },
          color: '#94AFB6',
        },
      }
    }
  };

  return (
    <div>
      <div>
        <Bar
          className="barChart"
          data={data}
          options={options}
          width={100}
          height={50}
        />
      </div>
    </div>
  );
}

// Register the necessary chart.js components
Chart.register(CategoryScale, LinearScale, BarController, BarElement);

export default DoughNut;
