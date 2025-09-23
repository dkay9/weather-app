// src/components/CurrentWeather/CurrentWeather.jsx
import React from "react";

const CurrentWeather = ({ city, date, temperature, icon }) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-6 text-white flex flex-col md:flex-row items-center justify-between shadow-lg">
      {/* Left section: City + Date */}
      <div>
        <h2 className="text-2xl font-bold">{city}</h2>
        <p className="text-sm text-neutral-200">{date}</p>
      </div>

      {/* Right section: Icon + Temperature */}
      <div className="flex items-center gap-4 mt-4 md:mt-0">
        <img src={icon} alt="Weather icon" className="w-16 h-16" />
        <span className="text-5xl font-semibold">{temperature}°</span>
      </div>
    </div>
  );
};

export default CurrentWeather;
