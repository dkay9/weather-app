import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";

export default function DaysDropdown() {
  const [open, setOpen] = useState(false);

  // Selected day
  const [selectedDay, setSelectedDay] = useState("Monday");

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const handleSelect = (day) => {
    setSelectedDay(day);
    setOpen(false); // close dropdown after selection
  };

  return (
    <div className="relative inline-block text-left">
      {/* Button that opens/closes dropdown */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 rounded-md bg-neutral-600 px-3 py-2 text-white hover:bg-neutral-700"
      >
        <span>{selectedDay}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-40 rounded-lg bg-neutral-600 text-white shadow-lg ring-1 ring-black/20">
          <div className="py-2">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => handleSelect(day)}
                className={`flex w-full items-center justify-between px-4 py-2 hover:bg-neutral-700 ${
                  selectedDay === day ? "bg-neutral-700" : ""
                }`}
              >
                {day}
                {selectedDay === day && <Check className="h-4 w-4" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
