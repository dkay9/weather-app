import React from "react";

export default function CurrentWeatherSkeleton() {
  return (
    <div className="current-weather h-60 w-full rounded-xl p-6 bg-neutral-800 flex flex-col md:flex-row items-center justify-between shadow-lg animate-pulse">
      {/* Left: city/date skeleton */}
      <div className="space-y-3">
        <div className="h-10 bg-transparent rounded w-48"></div>
        <div className="h-4 bg-transparent rounded w-36"></div>
      </div>

      {/* Right: icon + temp skeleton */}
      <div className="flex items-center gap-4 mt-4 md:mt-0">
        <div className="w-28 h-28 bg-transparent rounded-full"></div>
        <div className="h-16 bg-transparent rounded w-24"></div>
      </div>
    </div>
  );
}
