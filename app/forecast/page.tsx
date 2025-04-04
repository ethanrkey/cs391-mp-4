'use client';

export const dynamic = 'force-dynamic';
export const runtime = 'edge';

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import SevenDay from "@/components/SevenDay";
import Link from "next/link";

export default function ForecastPage() {
  const searchParams = useSearchParams();
  const location = searchParams.get("location");
  const [forecast, setForecast] = useState<any>(null);

  useEffect(() => {
    if (!location) return;

    const fetchForecast = async () => {
        try {
            const res = await fetch(`/api/weather?location=${location}&type=forecast`);
            if (!res.ok) throw new Error("Fetch failed");
            const data = await res.json();
            setForecast(data);
          } catch (err) {
            console.error("Forecast fetch failed", err);
          }          
    };

    fetchForecast();
  }, [location]);

  return (
    <div className="p-6">
        <header className="text-5xl text-center pb-6">
        <Link href="/">
          CS391 Mini-Project 4
        </Link>
      </header>
      <h1 className="text-3xl font-bold mb-4">7-Day Forecast for {location}</h1>
      <SevenDay data={forecast} />
    </div>
  );
}
