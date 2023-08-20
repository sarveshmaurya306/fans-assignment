import React, { useState } from "react";

const MySchedule = () => {
  const [schedules, setSchedules] = useState(2);
  const Schedules = [
    {
      border: "#9BDD7C",
      note: "Meeting with suppliers from Kuta Bali",
      time: "14.00-15.00",
      location: "at Sunset Road, Kuta, Bali",
    },
    {
      border: "#6972C3",
      note: "Check operation at Giga Factory 1",
      time: "18.00-20.00",
      location: "at Central Jakarta",
    },
    {
      border: "#9BDD7C",
      note: "Meeting with suppliers from Kuta Bali",
      time: "14.00-15.00",
      location: "at Sunset Road, Kuta, Bali",
    },
    {
      border: "#6972C3",
      note: "Check operation at Giga Factory 1",
      time: "18.00-20.00",
      location: "at Central Jakarta",
    },
  ];

  const ScheduleDisplay = () => {
    setSchedules((prev) => (prev === 2 ? 4 : 2));
  };

  return (
    <section className="flex-1 bg-white rounded-2xl py-7 px-10 ">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-lg hover:font-extrabold ">Today’s schedule</h1>
        <div
          className="flex items-center text-[#858585] space-x-2 cursor-pointer hover:font-extrabold"
          onClick={ScheduleDisplay}
        >
          <p className="text-xs">{schedules === 2 ? "See All" : "Show Less"}</p>
          <span className="inline-block font-semibold text-base">&#8250;</span>
        </div>
      </div>
      <div className="mt-6 space-y-3 ">
        {Schedules.slice(0, schedules).map((schedule, index) => (
          <div
            className={`p-3 border-l-4 hover:font-extrabold`}
            style={{ borderColor: schedule.border }}
            key={index}
          >
            <h1 className="text-sm font-bold text-[#666666] hover:font-extrabold">
              {schedule.note}
            </h1>
            <h4 className="text-xs text-[#999999] my-1">{schedule.time}</h4>
            <p className="text-xs text-[#999999] ">{schedule.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MySchedule;
