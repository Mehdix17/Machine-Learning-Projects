import AdminSidebar from "../components/admin/AdminSidebar";
import AdminHeader from "../components/admin/AdminHeader";
import AdminStats from "../components/admin/AdminStats";
import AdminUserTable from "../components/admin/AdminUserTable";
import AdminLogs from "../components/admin/AdminLogs";
import AdminSettings from "../components/admin/AdminSettings";
import Navbar from "../components/common/Navbar";

export default function Admin() {
  return (
    <>
      <Navbar />
      <div className="flex h-screen bg-base-200">
        {/* Sidebar */}
        <AdminSidebar />

        {/* Main Content */}
        <div className="flex flex-col flex-1">
          {/* <AdminHeader /> */}

          <div className="p-6 space-y-6 overflow-y-auto">
            <AdminStats />
            <AdminUserTable />
            <AdminLogs />
            <AdminSettings />
          </div>
        </div>
      </div>
    </>
  );
}
