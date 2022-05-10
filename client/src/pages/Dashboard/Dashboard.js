import React from "react";
import { useSelector } from "react-redux";
import DashboardAdmin from "./DashboardAdmin";
import DashboardClient from "./DashboardClient";

const Dashboard = () => {
  const role = useSelector((state) => state.userReducer.user.role);
  if (role === "ADMIN") {
    return <DashboardAdmin />;
  }
  return <DashboardClient />;
};

export default Dashboard;
