import React from "react";

export default function StatCard({ label, value }) {
  return (
    <div className="bg-neutral-800 border border-neutral-700 rounded-md p-4 flex flex-col items-start justify-center text-white shadow-md">
      <span className="text-sm text-neutral-300">{label}</span>
      <span className="text-2xl">{value}</span>
    </div>
  );
};
