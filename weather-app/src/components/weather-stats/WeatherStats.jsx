// src/components/WeatherStats.jsx
import React from "react";
import StatCard from "./StatCard";

export default function WeatherStats({ feelsLike, humidity, windspeed, precipitation }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
      <StatCard label="Feels Like" value={`${Math.round(feelsLike)}°`} />
      <StatCard label="Humidity" value={`${humidity}%`} />
      <StatCard label="Wind" value={`${Math.round(windspeed)} km/h`} />
      <StatCard label="Precipitation" value={`${Math.round(precipitation)} mm`} />
    </div>
  );
};

