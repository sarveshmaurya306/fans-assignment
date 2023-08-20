import React, { useState } from "react";

const Sidebar = () => {
  const [expandSidebar, setExpandSidebar] = useState("h-24");
  const showSidebar = () => {
    setExpandSidebar((prev) => (prev === "h-screen" ? "h-24" : "h-screen"));
  };

  return (
    <aside
      className={`mt-4 w-[calc(100vw-40px)] flex flex-col justify-between bg-black xl:py-16 px-4 py-8 xl:px-12 rounded-md text-white lg:w-1/5 fixed top-0 lg:static overflow-hidden transition-all duration-500 lg:h-auto ${expandSidebar}`}
    >
      <div>
        <h1 className="hidden lg:block font-bold text-xl lg:text-4xl hover:font-extrabold">
          Board.
        </h1>
        <span
          className="inline-block lg:hidden font-extrabold text-4xl"
          onClick={showSidebar}
        >
            <img src="./assets/hambIcon.svg" alt="hamb" />
        </span>
        <ul className=" mt-14 space-y-10">
          <li className="cursor-pointer flex space-x-2 xl:space-x-5 items-center">
            <img src="./assets/dashboard.png" alt="dashboard" />
            <p className="lg:text-lg hover:font-bold">Dashboard</p>
          </li>
          <li className="cursor-pointer flex space-x-2 xl:space-x-5 items-center">
            <img src="./assets/transaction.png" alt="dashboard" />
            <p className="text-sm lg:text-lg hover:font-bold">Transactions</p>
          </li>
          <li className="cursor-pointer flex space-x-2 xl:space-x-5 items-center">
            <img src="./assets/schedule.png" alt="dashboard" />
            <p className="text-sm lg:text-lg hover:font-bold">Schedules</p>
          </li>
          <li className="cursor-pointer flex space-x-2 xl:space-x-5 items-center">
            <img src="./assets/user.png" alt="dashboard" />
            <p className="text-sm lg:text-lg hover:font-bold">Users</p>
          </li>
          <li className="cursor-pointer flex space-x-2 xl:space-x-5 items-center">
            <img src="./assets/setting.png" alt="dashboard" />
            <p className="text-sm lg:text-lg hover:font-bold">Settings</p>
          </li>
        </ul>
      </div>

      <ul className="text-sm space-y-5">
        <li className="cursor-pointer flex space-x-2 xl:space-x-5">
          <p className="text-sm lg:text-lg hover:font-bold">Help</p>
        </li>
        <li className="cursor-pointer flex space-x-2 xl:space-x-5">
          <button>
            <p className="text-sm lg:text-lg hover:font-bold">Contact Us</p>
          </button>
          <p className="text-sm lg:text-lg hover:font-bold"></p>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;