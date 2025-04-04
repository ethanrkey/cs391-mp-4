// get current weather for entered location
// once retrieved, have button to view 7 day forecast for that location in a diff page
'use client';

import SelectLocation from "@/components/SelectLocation";
import CurrentConditions from "@/components/CurrentConditions";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [weather, setWeather] = useState<any>(null);
  const [location, setLocation] = useState("");

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="text-5xl">
        <Link href="/">
          CS391 Mini-Project 4
        </Link>
      </header>
      <main className="flex flex-col gap-[32px] row-start-2 items-center border-3 rounded-lg p-6">
              <SelectLocation
                onFetch={(data, loc) => {
                  setWeather(data);
                  setLocation(loc);
                }}
              />
              {weather && <CurrentConditions data={weather} location={location} />}
      </main>
    </div>
  );
}
