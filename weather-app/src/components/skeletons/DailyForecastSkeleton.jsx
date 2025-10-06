import React from "react";

export default function DailyForecastSkeleton() {
  return (
    <div className="mt-4 w-full">
      <div className="h-5 bg-neutral-700 rounded w-32 mb-2 animate-pulse"></div>
      <div className="grid grid-cols-3 gap-5 md:flex md:flex-row md:flex-wrap md:gap-5 md:justify-between">
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <div 
            key={item}
            className="bg-neutral-800 border border-neutral-700 rounded-lg flex flex-col items-center justify-evenly w-28 h-36 animate-pulse"
          >
            <div className="h-4 bg-neutral-700 rounded w-12"></div>
            <div className="w-10 h-10 bg-neutral-700 rounded-full my-1"></div>
            <div className="flex gap-3">
              <div className="h-5 bg-neutral-700 rounded w-8"></div>
              <div className="h-5 bg-neutral-700 rounded w-8"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
