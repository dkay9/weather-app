// src/components/WeatherDashboard.jsx
import React, { useEffect, useState } from "react";
import CurrentWeather from "./CurrentWeather";
import WeatherStats from "./weather-stats/WeatherStats";
import DailyForecast from "./daily-forecast/DailyForecast";
import HourlyForecast from "./hourly-forecast/HourForecast";

export default function WeatherDashboard({ lat, lon, city }) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (!lat || !lon) return;

    const fetchWeather = async () => {
      try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min&hourly=temperature_2m,relativehumidity_2m,precipitation,weathercode`;
        const res = await fetch(url);
        const data = await res.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    };

    fetchWeather();
  }, [lat, lon]);

  if (!weatherData) return <p className="text-white">Loading weather...</p>;

  // Defensive check for hourly data
  const currentTime = weatherData.current_weather?.time;
  const timeIndex = weatherData.hourly?.time?.indexOf(currentTime) ?? -1;

  const humidity =
    timeIndex !== -1 ? weatherData.hourly.relativehumidity_2m[timeIndex] : "—";
  const precipitation =
    timeIndex !== -1 ? weatherData.hourly.precipitation[timeIndex] : "—";

  return (
    <div className="flex flex-col md:flex-row lg:w-full gap-4 justify-center items-center mt-6">
      <div className="w-3/5">
        <CurrentWeather 
          city={city} 
          temperature={weatherData.current_weather?.temperature} 
        />

        <WeatherStats
          feelsLike={weatherData.current_weather.temperature}
          humidity={humidity}
          windspeed={weatherData.current_weather.windspeed}
          precipitation={precipitation}
        />

        <DailyForecast data={weatherData.daily} />
      </div>

      {/* ✅ Fix: pass correct prop name */}
      <HourlyForecast hourly={weatherData.hourly} />
    </div>
  );
}
