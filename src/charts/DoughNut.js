import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale, // y
  BarController,
  Tooltip,
  Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";

function DoughNut() {
  const data = {
    labels: ["Mon", "Tue", "Wed"],
    datasets: [
      {
        label: "369",
        data: [3, 6, 9],
        backgroundColor: "aqua",
        borderColor: "transparent",
        borderRadius: 10,
        borderWidth: 1
      },
      {
        label: "363",
        data: [3, 6, 9],
        background: 'linear-gradient(180deg, rgba(245, 170, 188, 0.7) 0%, rgba(196, 42, 51, 0.7) 100%)',
        borderColor: "transparent",
        borderRadius: 10,
        borderWidth: 1
      }
    ]
  };

  const options = {
    scales: {
      x: {
        type: 'category',
        labels: ['January', 'February', 'March']
      },
      y: {
        type: 'linear',
        ticks: {
          beginAtZero: true
        }
      }
    }
  };

  return (
    <div>
      <div>

        <Bar data={data} options={options} width={100} height={50} />
      </div>
    </div>
  );
}

// Register the necessary chart.js components
Chart.register(CategoryScale, LinearScale, BarController, BarElement);

export default DoughNut;
