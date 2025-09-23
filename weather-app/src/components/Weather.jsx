import React, { useEffect, useState } from "react";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import DailyForecast from "./daily-forecast/DailyForecast";
import HourlyForecast from "./hourly-forecast/HourlyForecast";
import WeatherStats from "./weather-stats/WeatherStats";

export default function WeatherDashboard ({ lat, lon, city }) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (!lat || !lon) return; // no coords yet

    const fetchWeather = async () => {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=6.5244&longitude=3.3792&current_weather=true&hourly=relativehumidity_2m,precipitation,temperature_2m`;
      const res = await fetch(url);
      const data = await res.json();
      setWeatherData(data);};

    fetchWeather();
  }, [lat, lon]);

  if (!weatherData) return <p>Loading weather...</p>;

  return (
    <div className="space-y-6">
      <CurrentWeather data={weatherData} city={city} />
      <DailyForecast data={weatherData.daily} />
      <WeatherStats data={weatherData.current_weather} />
      <HourlyForecast data={weatherData.hourly} />
    </div>
  );
};

