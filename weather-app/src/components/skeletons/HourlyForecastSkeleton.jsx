import React from "react";

export default function HourlyForecastSkeleton() {
  return (
    <div className="mt-6 lg:mt-0 w-full lg:w-[25%] bg-neutral-800 rounded-xl p-4 shadow-md self-stretch box-border">
      <div className="flex items-center justify-between mb-4">
        <div className="h-6 bg-neutral-700 rounded w-32 animate-pulse"></div>
        <div className="h-8 bg-neutral-700 rounded w-20 animate-pulse"></div>
      </div>
      <div className="flex flex-col gap-3">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div 
            key={item}
            className="flex flex-row justify-between items-center bg-neutral-700 border border-neutral-600 rounded-xl p-3 w-full animate-pulse"
          >
            <div className="flex flex-row items-center gap-2">
              <div className="w-8 h-8 bg-neutral-600 rounded-full"></div>
              <div className="h-4 bg-neutral-600 rounded w-12"></div>
            </div>
            <div className="h-5 bg-neutral-600 rounded w-10"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
