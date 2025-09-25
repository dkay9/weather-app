import React from "react";
import HourCard from "./HourCard";

import FogIcon from '../../assets/images/icon-fog.webp';
import RainIcon from '../../assets/images/icon-rain.webp';
import SnowIcon from '../../assets/images/icon-snow.webp';
import SunnyIcon from '../../assets/images/icon-sunny.webp';
import StormIcon from '../../assets/images/icon-storm.webp';
import PartlyOvercastIcon from '../../assets/images/icon-partly-cloudy.webp';
import OvercastIcon from '../../assets/images/icon-overcast.webp';
import DrizzleIcon from '../../assets/images/icon-drizzle.webp';
import UnitDropdown from '../UnitDropdown';

export default function HourForecast({ hourly }) {
  if (!hourly || !hourly.time) return null;

  const hoursToShow = 6;

  // ✅ Weathercode → icon mapping
  const getWeatherIcon = (code) => {
    if (code === 0) return SunnyIcon; // Clear sky
    if (code === 1 || code === 2) return PartlyOvercastIcon; // Mainly clear, partly cloudy
    if (code === 3) return OvercastIcon; // Overcast
    if (code >= 45 && code <= 48) return FogIcon; // Fog
    if (code >= 51 && code <= 55) return DrizzleIcon; // Drizzle
    if (code >= 61 && code <= 67) return RainIcon; // Rain
    if (code >= 71 && code <= 77) return SnowIcon; // Snow
    if (code >= 80 && code <= 82) return RainIcon; // Rain showers
    if (code >= 95 && code <= 99) return StormIcon; // Thunderstorm
    return PartlyOvercastIcon; // fallback
  };

  return (
    <div className="mt-6 px-4 bg-neutral-700 rounded-xl p-4 shadow-md">
      <div className="flex items-center justify-between mb-4 ">
        <h3 className="text-lg font-semibold mb-3">Hourly Forecast</h3>
        <UnitDropdown />
      </div>
      <div className="flex flex-col gap-3">
        {hourly.time.slice(0, hoursToShow).map((time, index) => {
          const temp = hourly.temperature_2m[index];
          const condition = hourly.weathercode ? hourly.weathercode[index] : 0;
          const icon = getWeatherIcon(condition);

          return (
            <HourCard
              key={time}
              time={new Date(time).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
              temp={temp}
              icon={icon}
            />
          );
        })}
      </div>
    </div>
  );
}
