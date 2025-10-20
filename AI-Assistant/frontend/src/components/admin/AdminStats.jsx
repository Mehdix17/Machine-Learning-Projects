export default function AdminStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="stat bg-base-100 shadow-md rounded-lg">
        <div className="stat-title">Users</div>
        <div className="stat-value">1,234</div>
        <div className="stat-desc">↗︎ 5% this week</div>
      </div>

      <div className="stat bg-base-100 shadow-md rounded-lg">
        <div className="stat-title">Requests</div>
        <div className="stat-value">87k</div>
        <div className="stat-desc">↘︎ 2% this week</div>
      </div>

      <div className="stat bg-base-100 shadow-md rounded-lg">
        <div className="stat-title">Uptime</div>
        <div className="stat-value">99.9%</div>
        <div className="stat-desc">Stable</div>
      </div>
    </div>
  );
}
