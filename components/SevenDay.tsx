export default function SevenDay({ data }: { data: any }) {
    if (!data) return <p>Loading forecast...</p>;
  
    return (
      <div className="grid gap-4">
        {data?.days?.slice(0, 7).map((day: any, idx: number) => (
          <div key={idx} className="p-4 border rounded">
            <p><strong>Date:</strong> {day.datetime}</p>
            <p>🌡 High: {day.tempmax}°C</p>
            <p>❄ Low: {day.tempmin}°C</p>
            <p>🌤 Conditions: {day.conditions}</p>
          </div>
        ))}
      </div>
    );
  }
  