import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Line, Bar, Doughnut, Pie } from "react-chartjs-2";

// Registrasi chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export const Chart = ({ type = "line", data, options }) => {
  const renderChart = () => {
    switch (type) {
      case "bar":
        return <Bar data={data} options={options}/>;
      case "pie":
        return <Pie data={data} options={options} />;
      case "line":
      default:
        return <Line data={data} options={options} />;
    }
  };

  return (
    <div className="w-full">
      {renderChart()}
    </div>
  );
};
