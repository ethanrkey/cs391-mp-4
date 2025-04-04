export default function SevenDay({ data }: { data: any }) {
    if (!data) return <p>Loading forecast...</p>;
  
    return (
      <div className="grid gap-4">
        {data?.days?.slice(0, 7).map((day: any, idx: number) => (
          <div key={idx} className="p-4 border rounded bg-[#26344a]">
            <p><strong>Date:</strong> {day.datetime}</p>
            <p>🌡 High: {day.tempmax}°F</p>
            <p>❄ Low: {day.tempmin}°F</p>
            <p>🌤 Conditions: {day.conditions}</p>
          </div>
        ))}
      </div>
    );
  }
  