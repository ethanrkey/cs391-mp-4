'use client';

import { useState } from "react";

export default function SelectLocation({
  onFetch,
}: {
  onFetch: (data: any, location: string) => void;
}) {
  const [location, setLocation] = useState("");

  async function handleClick() {
    if (!location) return;

    try {
      const res = await fetch(`/api/weather?location=${location}&type=current`);
      if (!res.ok) throw new Error("Fetch failed");
      const data = await res.json();
      onFetch(data, location);
    } catch (err) {
      alert("Unable to fetch current weather. Please enter a valid location");
    }    
  }

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">
        View the current weather conditions for:
      </h2>
      <input
        placeholder="Enter a location"
        className="border p-2 rounded mr-2"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Get Weather
      </button>
    </div>
  );
}
