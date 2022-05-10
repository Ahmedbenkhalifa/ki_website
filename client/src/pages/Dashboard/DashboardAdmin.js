import React from "react";
import { Route, Routes } from "react-router-dom";
import SideBar from "./components/Sidebar";
import Account from "./sections/Account";
import Customers from "./sections/Customers";
import Publication from "./sections/Publication";


const DashboardAdmin = () => {
  return (
    <SideBar isAdmin={true} >
      <Routes>
        <Route path="/" element={<Customers />} />
        <Route path="/publication" element={<Publication />} />
        <Route path="/profil" element={<Account />} />
      </Routes>
    </SideBar>
  );
};

export default DashboardAdmin;
