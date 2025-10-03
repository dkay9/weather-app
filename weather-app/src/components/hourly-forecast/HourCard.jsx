import React from "react";


export default function HourCard ({ time, temp, icon }){
  let hour = time; // fallback if parsing fails
  try {
    if (time.includes("T")) {
      // already ISO-like
      hour = new Date(time).toLocaleTimeString("en-US", {
        hour: "numeric",
        hour12: true,
      });
    } else {
      // just "13:00" → attach today’s date
      const today = new Date().toISOString().split("T")[0];
      const dateTime = new Date(`${today}T${time}`);
      hour = dateTime.toLocaleTimeString("en-US", {
        hour: "numeric",
        hour12: true,
      });
    }
  } catch {
    console.warn("Invalid time format:", time);
  }
  return (
    <div className="flex flex-row justify-between items-center bg-neutral-800 rounded-xl p-3 shadow w-full">
      <div className="flex flex-row items-center mr-4">
        <img src={icon} alt="weather icon" className="w-8 h-8 mb-1" />
        <p className="text-xs text-white">{hour}</p>
      </div>
      <p className="text-sm font-semibold">{Math.round(temp)}°</p>
    </div>
  );
};
