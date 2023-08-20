import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip } from "chart.js";

Chart.register(ArcElement, Tooltip);

const TopProducts = () => {
  const products = [
    {
      name: "Basic Tees",
      percent: 55,
      bgColor: "#98D89E",
    },
    {
      name: "Custom Short Pants",
      percent: 31,
      bgColor: "#F6DC7D",
    },
    {
      name: "Super Hoodies",
      percent: 14,
      bgColor: "#EE8484",
    },
  ];
  const data = {
    labels: products.map((product) => product.name),
    datasets: [
      {
        data: products.map((product) => product.percent),
        backgroundColor: products.map((product) => product.bgColor),
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };
  return (
    <section className="flex-1 bg-white rounded-2xl py-7 px-3 xl:px-10">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-lg hover:font-extrabold">Top products</h1>
        <div className="flex items-center text-[#858585] space-x-2 cursor-pointer ">
       
          <select name="date" id="dates" className="bg-white focus:outline-none">
            <option value="d1" className="text-xs">May - June 2021</option>
            <option value="d2" className="text-xs">July - August 2021</option>
            <option value="d3" className="text-xs">September - October 2021</option>
            <option value="d4" className="text-xs">November - December 2021</option>
          </select>
         
         

          {/* <span className="inline-block rotate-90 font-semibold text-base">
            &#8250;
          </span> */}
        </div>
      </div>
      <div className="mt-6 flex items-start justify-between ">
        <div className="w-1/2 ">
          <Pie data={data} options={options} />
        </div>
        <div className="space-y-5">
          {products.map((product, index) => (
            <div className="flex items-center space-x-4 hover:font-black" key={index}>
              <div
                className="w-3 h-3 rounded-full "
                style={{ backgroundColor: product.bgColor }}
              ></div>
              <div>
                <p className="text-sm font-bold hover:font-extrabold">{product.name}</p>
                <p className="text-[#858585] text-xs ">{product.percent}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopProducts;
