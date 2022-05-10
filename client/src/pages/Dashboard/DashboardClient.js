import React from 'react'
import { Route, Routes } from 'react-router-dom';
import SideBar from './components/Sidebar';
import Publication from './sections/Publication';
import Account from "./sections/Account";
import AddPublicationSection from './sections/AddPublicationSection';

const DashboardClient = () => {
  return (
    <SideBar>
      <Routes>
        <Route path="/" element={<Publication />} />
        <Route path="/add_publication" element={<AddPublicationSection/> } />
        <Route path="/profil" element={<Account />} />
      </Routes>
    </SideBar>
  )
}

export default DashboardClient