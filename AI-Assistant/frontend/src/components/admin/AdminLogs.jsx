export default function AdminLogs() {
  const logs = [
    "User John logged in",
    "Jane updated settings",
    "Server restarted",
  ];

  return (
    <div className="bg-base-100 shadow-md rounded-lg p-4">
      <h3 className="text-lg font-bold mb-4">Recent Activity</h3>
      <ul className="list-disc pl-6">
        {logs.map((log, i) => (
          <li key={i}>{log}</li>
        ))}
      </ul>
    </div>
  );
}
