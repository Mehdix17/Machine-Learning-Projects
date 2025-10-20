import React from "react";
import { Home, BarChart, Settings } from "lucide-react";

export default function Sidebar() {
  const links = [
    { name: "Home", icon: <Home size={20} />, href: "#" },
    { name: "Analytics", icon: <BarChart size={20} />, href: "#" },
    { name: "Settings", icon: <Settings size={20} />, href: "#" },
  ];

  return (
    <aside className="w-64 bg-white shadow-lg">
      <div className="p-6 text-2xl font-bold text-primary-content-600">
        MyApp
      </div>
      <nav className="mt-6 space-y-2">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-indigo-100 rounded-lg"
          >
            {link.icon}
            <span className="ml-3">{link.name}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}
