import DailyForecastCard from "./DailyForecastCard";
import FogIcon from '../../assets/images/icon-fog.webp';
import RainIcon from '../../assets/images/icon-rain.webp';
import SnowIcon from '../../assets/images/icon-snow.webp';
import SunnyIcon from '../../assets/images/icon-sunny.webp';
import StormIcon from '../../assets/images/icon-storm.webp';
import PartlyOvercastIcon from '../../assets/images/icon-partly-cloudy.webp';
import OvercastIcon from '../../assets/images/icon-overcast.webp';
import DrizzleIcon from '../../assets/images/icon-drizzle.webp';

export default function DailyForecast({ daily }) {
	// If daily is missing or has no time array, render a fallback
	if (!daily || !Array.isArray(daily.time) || daily.time.length === 0) {
		return <p className="text-white">No daily forecast available</p>;
	}

    // weather code to icon mapping
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
    }
    
    return (
        <div className="mt-4 w-full">
            <h3 className="text-white mb-2">Daily forecast</h3>
            <div className="grid grid-cols-3 gap-5 md:flex md:flex-row md:justify-between">
                {daily.time.map((date, idx) => {
                    const max = daily.temperature_2m_max?.[idx] ?? "—";
                    const min = daily.temperature_2m_min?.[idx] ?? "—";
                    const code = daily.weathercode?.[idx]; 
                    const Icon = getWeatherIcon(code);   

                    const weekday = new Date(date).toLocaleDateString("en-US", {
                    weekday: "short", // Mon, Tue, Wed
                    });

                    return (
                    <div 
                        key={date} 
                        className="bg-neutral-800 rounded-lg text-white flex flex-col items-center justify-evenly w-28 h-36"
                    >
                        <div className="text-sm">{weekday}</div>
                        {Icon && (
                        <img 
                            src={Icon} 
                            alt="weather icon" 
                            className="w-10 h-10 my-1" 
                        />
                        )}
                        <div className="text-lg flex gap-6 justify-between">
                            <p>{Math.round(max)}°</p>
                            <p>{Math.round(min)}°</p>
                        </div>
                    </div>
                 );
                })}
            </div>
        </div>
    );
}