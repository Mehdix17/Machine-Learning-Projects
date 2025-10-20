import React from "react";
import WorskpaceLayout from "../components/workspace/WorkspaceLayout";
import StatsCard from "../components/workspace/StatsCard";
import { Users, ShoppingBag, DollarSign } from "lucide-react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

export default function Workspace() {
  return (
    <>
      <Navbar />
      <WorskpaceLayout>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatsCard title="Users" value="1,245" icon={<Users size={28} />} />
          <StatsCard
            title="Orders"
            value="312"
            icon={<ShoppingBag size={28} />}
          />
          <StatsCard
            title="Revenue"
            value="$12,430"
            icon={<DollarSign size={28} />}
          />
        </div>
      </WorskpaceLayout>
      <Footer />
    </>
  );
}
