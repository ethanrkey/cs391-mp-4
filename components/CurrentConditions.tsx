'use client';

import Link from "next/link";

export default function CurrentConditions({
  data,
  location,
}: {
  data: any;
  location: string;
}) {
  const conditions = data?.currentConditions;

  return (
    <div className="p-4 border rounded shadow w-full max-w-md">
      <h3 className="text-xl font-semibold mb-2">
        Current Conditions in {location}
      </h3>
      {conditions ? (
        <>
          <p>Temperature: {conditions.temp}°C</p>
          <p>Conditions: {conditions.conditions}</p>
          <p>Humidity: {conditions.humidity}%</p>
          <p>Wind Speed: {conditions.windspeed} km/h</p>
          <Link href={{ pathname: "/forecast", query: { location } }}>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              View 7-Day Forecast
            </button>
          </Link>
        </>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
}
