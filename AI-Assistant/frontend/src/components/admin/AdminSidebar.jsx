// components/AdminSidebar.jsx
import { HomeIcon, UsersIcon, SettingsIcon, BarChart3Icon } from "lucide-react";
import { Link } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-base-200 p-4 flex flex-col gap-2 h-screen">
      <h2 className="text-xl font-bold mb-4">Admin Panel</h2>

      <Link to="/admin/dashboard">
        <button className="btn btn-ghost justify-start w-full">
          <HomeIcon className="w-5 h-5 mr-2" />
          Dashboard
        </button>
      </Link>

      <Link to="/admin/users">
        <button className="btn btn-ghost justify-start w-full">
          <UsersIcon className="w-5 h-5 mr-2" />
          Users
        </button>
      </Link>

      <Link to="/admin/stats">
        <button className="btn btn-ghost justify-start w-full">
          <BarChart3Icon className="w-5 h-5 mr-2" />
          Statistics
        </button>
      </Link>

      <Link to="/admin/settings">
        <button className="btn btn-ghost justify-start w-full">
          <SettingsIcon className="w-5 h-5 mr-2" />
          Settings
        </button>
      </Link>
    </aside>
  );
}
