import { useState } from "react";
import { ChevronDown, Check, Settings } from "lucide-react";

export default function UnitsDropdown() {
  // Dropdown open/close state
  const [open, setOpen] = useState(false);

  // User's current settings
  const [settings, setSettings] = useState({
    system: "metric",        // can be "metric" or "imperial"
    temperature: "Celsius",  // "Celsius" or "Fahrenheit"
    wind: "km/h",            // "km/h" or "mph"
    precipitation: "mm",     // "mm" or "in"
  });

  // Toggle between metric and imperial system
  const toggleSystem = () => {
    setSettings((prev) => ({
      ...prev,
      system: prev.system === "metric" ? "imperial" : "metric",
    }));
  };

  // Update a specific setting (temperature, wind, or precipitation)
  const handleSelect = (type, value) => {
    setSettings((prev) => ({ ...prev, [type]: value }));
  };

  return (
    <div className="relative inline-block text-left">
      {/* Main button that opens/closes the dropdown */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 rounded-md bg-neutral-600 px-3 py-2 text-white hover:bg-neutral-700"
      >
        {/* Settings gear icon */}
        <Settings className="h-4 w-4" />
        <span>Units</span>
        {/* Chevron that rotates when open */}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-56 rounded-lg bg-neutral-700 text-white shadow-lg ring-1 ring-black/20">
          <div className="py-2">
            {/* Switch between Metric <-> Imperial */}
            <button
              onClick={toggleSystem}
              className="block w-full px-4 py-2 text-left hover:bg-neutral-600"
            >
              {settings.system === "metric"
                ? "Switch to Imperial"
                : "Switch to Metric"}
            </button>

            {/* Temperature section */}
            <div className="mt-2 border-t border-neutral-600 pt-2">
              <p className="px-4 text-xs text-gray-400">Temperature</p>
              {["Celsius", "Fahrenheit"].map((unit) => (
                <button
                  key={unit}
                  onClick={() => handleSelect("temperature", unit)}
                  className="flex w-full items-center justify-between px-4 py-2 hover:bg-neutral-600"
                >
                  {/* Show unit with symbol */}
                  {unit} {unit === "Celsius" ? "°C" : "°F"}
                  {/* Show checkmark if selected */}
                  {settings.temperature === unit && (
                    <Check className="h-4 w-4" />
                  )}
                </button>
              ))}
            </div>

            {/* Wind Speed section */}
            <div className="mt-2 border-t border-neutral-600 pt-2">
              <p className="px-4 text-xs text-gray-400">Wind Speed</p>
              {["km/h", "mph"].map((unit) => (
                <button
                  key={unit}
                  onClick={() => handleSelect("wind", unit)}
                  className="flex w-full items-center justify-between px-4 py-2 hover:bg-neutral-600"
                >
                  {unit}
                  {settings.wind === unit && <Check className="h-4 w-4" />}
                </button>
              ))}
            </div>

            {/* Precipitation section */}
            <div className="mt-2 border-t border-neutral-600 pt-2">
              <p className="px-4 text-xs text-gray-400">Precipitation</p>
              {[
                { value: "mm", label: "Millimeters (mm)" },
                { value: "in", label: "Inches (in)" },
              ].map((unit) => (
                <button
                  key={unit.value}
                  onClick={() => handleSelect("precipitation", unit.value)}
                  className="flex w-full items-center justify-between px-4 py-2 hover:bg-neutral-600"
                >
                  {unit.label}
                  {settings.precipitation === unit.value && (
                    <Check className="h-4 w-4" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
