import React from "react";
import Sidebar from "./Sidebar";
import TotalData from "./TotalData";
import MyGraph from "./MyGraph";
import TopProducts from "./TopProducts";
import MySchedule from "./MySchedule";
import { useNavigate } from "react-router-dom";


const Dash_Board = () => {
  const navigate= useNavigate();
  function signOut() {
    const resp= window.confirm("Do you really want to sign out?");
    if(resp) {
      localStorage.removeItem('isUserLoggedIn')
      localStorage.removeItem('userImg')
      navigate('/')
    }
  }
  return (
    <div className="p-5 xl:p-10 bg-[#F5F5F5] lg:flex space-x-5 xl:space-x-14">
      <Sidebar />
      <section className="flex-grow lg:pt-0 pt-28" style={{maxWidth: "1440px"}}>
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl">Dashboard</h2>
          <div className="flex items-center gap-7">
            <div className="relative md:block hidden">
              <input
                type="text"
                className="bg-white w-44 rounded-lg placeholder:text-[#B0B0B0] placeholder:text-sm px-4 py-1 outline-none text-sm"
                placeholder="Search..."
              />
              <img
                src="./assets/search.png"
                alt="search"
                className="absolute right-3 top-2"
              />
            </div>
            <img src="./assets/bell.png" alt="bell" />
            <img onClick={()=>signOut()} className="w-10 rounded-full cursor-pointer" src={localStorage.getItem('userImg') ? localStorage.getItem('userImg') : "./assets/profile.png"} alt="profile" />
          </div>
        </div>
        <TotalData />
        <MyGraph />
        <div className="my-10 block md:flex items-start space-y-3 md:space-x-6 md:space-y-0">
          <TopProducts />
          <MySchedule />
        </div>
       
        
      </section>
    </div>
  );
};

export default Dash_Board;
