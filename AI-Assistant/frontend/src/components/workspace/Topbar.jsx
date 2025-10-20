import React from "react";

export default function Topbar() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
      <h1 className="text-xl font-semibold text-gray-700">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <span className="text-gray-600">Mehdi</span>
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </header>
  );
}
