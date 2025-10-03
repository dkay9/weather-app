import React from "react";
import SunIcon from "../assets/images/icon-sunny.webp";

const CurrentWeather = ({ city, temperature }) => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return (
    <div className="current-weather h-60 w-full rounded-xl p-6 text-white flex flex-col md:flex-row items-center justify-between shadow-lg">
      {/* Left: city/date */}
      <div>
        <h2 className="text-4xl font-bold">{city}</h2>
        <p className="text-sm text-neutral-200">{formattedDate}</p>
      </div>

      {/* Right: icon + temp */}
      <div className="flex items-center gap-4 mt-4 md:mt-0">
        <img src={SunIcon} alt="Weather icon" className="w-28 h-28" />
        <span className="text-7xl font-semibold">{Math.round(temperature)}°</span>
      </div>
    </div>
  );
};

export default CurrentWeather;
