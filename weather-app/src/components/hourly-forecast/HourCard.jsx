import React from "react";


export default function HourCard ({ time, temp, icon }){
  return (
    <div className="flex flex-row justify-between items-center bg-neutral-600 rounded-xl p-3 shadow w-60">
      <div className="flex flex-row items-center mr-4">
        <img src={icon} alt="weather icon" className="w-8 h-8 mb-1" />
        <p className="text-xs text-white">{time}</p>
      </div>
      <p className="text-sm font-semibold">{temp}°</p>
    </div>
  );
};
