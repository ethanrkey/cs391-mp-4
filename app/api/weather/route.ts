import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const location = searchParams.get("location");
  const type = searchParams.get("type") ?? "current";

  if (!location) {
    return NextResponse.json({ error: "Missing location" }, { status: 400 });
  }

  const key = process.env.WEATHER_API_KEY;
  if (!key) {
    console.error("WEATHER_API_KEY is missing");
    return NextResponse.json({ error: "API key not set" }, { status: 500 });
  }

  const base = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";
  let endpoint = `${base}/${encodeURIComponent(location)}`;

  if (type === "current") {
    endpoint += `/today?unitGroup=metric&include=current`;
  } else {
    endpoint += `?unitGroup=metric&include=days`;
  }

  endpoint += `&key=${key}&contentType=json`;

  console.log("🔗 Fetching from:", endpoint);

  try {
    const res = await fetch(endpoint);
    const text = await res.text(); // use text to log raw output

    const data = JSON.parse(text);
    return NextResponse.json(data);
  } catch (err) {
    console.error("Error during fetch:", err);
    return NextResponse.json({ error: "Failed to fetch weather data." }, { status: 500 });
  }
}
