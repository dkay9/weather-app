

export default function DailyForecastCard({ day, icon, maxTemp, minTemp }) {
    const date = new Date(day);
    const dayName = date.toLocaleDateString("en-US", { weekday: "short" });
    return (
        <div className="flex flex-row justify-between items-center w-full">
            <div className="bg-neutral-600 rounded-xl p-3 shadow text-white flex flex-col items-center">
                <h2>{dayName}</h2>
                <img src={icon} alt="Weather Icon" />
                <div>
                    <span className="font-semibold mr-2">{Math.round(maxTemp)}°</span>
                    <span className="text-neutral-300">{Math.round(minTemp)}°</span>
                </div>
            </div>
        </div>
    )
}