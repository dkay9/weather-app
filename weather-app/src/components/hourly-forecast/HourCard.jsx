import React from "react";


export default function HourCard ({ time, temp, icon }){
  return (
    <div className="flex flex-col items-center bg-white rounded-xl p-3 shadow w-20">
      <img src={icon} alt="weather icon" className="w-8 h-8 mb-1" />
      <p className="text-xs text-gray-600">{time}</p>
      <p className="text-sm font-semibold">{temp}°</p>
    </div>
  );
};
