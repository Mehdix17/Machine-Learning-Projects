import React, { useState } from "react";

export default function AdminUserTable() {
  const [users, setUsers] = useState([
    {
      id: 1,
      first_name: "John",
      last_name: "Doe",
      email: "john@example.com",
      role: "admin",
      date: "2024-01-15",
    },
    {
      id: 2,
      first_name: "Jane",
      last_name: "Smith",
      email: "jane@example.com",
      role: "user",
      date: "2024-03-20",
    },
  ]);

  const [search, setSearch] = useState("");
  const [newUser, setNewUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    role: "user",
  });
  const [showForm, setShowForm] = useState(false);

  const handleAddUser = () => {
    if (!newUser.first_name || !newUser.last_name || !newUser.email) return;
    const user = {
      id: Date.now(),
      ...newUser,
      date: new Date().toISOString().split("T")[0],
    };
    setUsers([...users, user]);
    setNewUser({ first_name: "", last_name: "", email: "", role: "user" });
    setShowForm(false);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  const handleRoleChange = (id, role) => {
    setUsers(users.map((u) => (u.id === id ? { ...u, role } : u)));
  };

  const filteredUsers = users.filter(
    (u) =>
      u.first_name.toLowerCase().includes(search.toLowerCase()) ||
      u.last_name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Actions bar */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "Close" : "Add User"}
          </button>
          {showForm && (
            <div className="flex items-center gap-2 ml-2">
              <input
                type="text"
                placeholder="First Name"
                className="border px-2 py-1 rounded"
                value={newUser.first_name}
                onChange={(e) =>
                  setNewUser({ ...newUser, first_name: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border px-2 py-1 rounded"
                value={newUser.last_name}
                onChange={(e) =>
                  setNewUser({ ...newUser, last_name: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="Email"
                className="border px-2 py-1 rounded"
                value={newUser.email}
                onChange={(e) =>
                  setNewUser({ ...newUser, email: e.target.value })
                }
              />
              <select
                className="border px-2 py-1 rounded w-24"
                value={newUser.role}
                onChange={(e) =>
                  setNewUser({ ...newUser, role: e.target.value })
                }
              >
                <option value="user">user</option>
                <option value="admin">admin</option>
              </select>
              <button
                className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                onClick={handleAddUser}
              >
                Save
              </button>
            </div>
          )}
        </div>

        {/* Searchbar */}
        <input
          type="text"
          placeholder="Search user..."
          className="border px-3 py-2 rounded w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <table className="w-full border border-gray-200 rounded">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">First Name</th>
            <th className="p-2 border">Last Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Role</th>
            <th className="p-2 border">Registration Date</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id} className="text-center">
              <td className="p-2 border">{user.first_name}</td>
              <td className="p-2 border">{user.last_name}</td>
              <td className="p-2 border">{user.email}</td>
              <td className="p-2 border">
                <select
                  className="border px-2 py-1 rounded w-24"
                  value={user.role}
                  onChange={(e) => handleRoleChange(user.id, e.target.value)}
                >
                  <option value="user">user</option>
                  <option value="admin">admin</option>
                </select>
              </td>
              <td className="p-2 border">{user.date}</td>
              <td className="p-2 border">
                <button
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {filteredUsers.length === 0 && (
            <tr>
              <td colSpan="6" className="p-4 text-gray-500">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
