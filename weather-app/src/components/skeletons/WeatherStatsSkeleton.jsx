import React from "react";

export default function WeatherStatsSkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
      {[1, 2, 3, 4].map((item) => (
        <div 
          key={item}
          className="bg-neutral-800 border border-neutral-700 rounded-xl p-4 shadow-md animate-pulse"
        >
          <div className="h-4 bg-neutral-700 rounded w-16 mb-3"></div>
          <div className="h-6 bg-neutral-700 rounded w-20"></div>
        </div>
      ))}
    </div>
  );
}
