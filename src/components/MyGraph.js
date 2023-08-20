import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

Chart.register(LineElement, CategoryScale, LinearScale, PointElement);

const MyGraph = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    fetch("./assets/Data.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);
  const data = {
    labels: Data?.map((activity) => activity.label),
    datasets: [
      {
        data: Data?.map((activity) => activity.user),
        backgroundColor: "transparent",
        borderColor: "#9BDD7C",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        tension: 0.4,
      },
      {
        data: Data?.map((activity) => activity.guest),
        backgroundColor: "transparent",
        borderColor: "#E9A0A0",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 500,
        ticks: {
          stepSize: 100,
        },
        grid: {
          borderDash: [10],
        },
      },
    },
  };

  return (
    <div className="w-full bg-white rounded-2xl h-[360px]  py-7 px-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-lg hover:font-extrabold">Activities</h1>
          <div className="text-[#858585] flex items-center space-x-1 md:space-x-3 cursor-pointer">
            <select name="date" id="dates " className="bg-white focus:outline-none">
              <option value="d1" className="text-xs">
                May - June 2021
              </option>
              <option value="d2" className="text-xs">
                July - Aug 2021
              </option>
              <option value="d3" className="text-xs">
                Sept - Oct 2021
              </option>
              <option value="d4" className="text-xs">
                Nov - Dec 2021
              </option>
            </select>
          </div>
        </div>
        <div className="flex items-center space-x-3 md:space-x-8">
          <div className="flex items-center space-x-1 md:space-x-3">
            <div className="rounded-full bg-[#E9A0A0] h-3 w-3"></div>
            <p className="text-sm hover:font-extrabold">Guest</p>
          </div>
          <div className="flex items-center space-x-1 md:space-x-3">
            <div className="rounded-full bg-[#9BDD7C] h-3 w-3"></div>
            <p className="text-sm hover:font-extrabold">User</p>
          </div>
        </div>
      </div>
      <div className="w-full h-52 mt-8">
        <Line data={data} options={options}></Line>
      </div>
    </div>
  );
};

export default MyGraph;
