"use client"
import { useState } from "react";
import DashboardMenu from "../components/dashboard/DashboardMenu";
import "./dashboardStyle.css"
const Dashboard = () => {
  const [showWellcome, setShowWellcome] = useState(true)
  return (
    <>
      {showWellcome && <div className="wellcome">
        <h2 className="text-5xl text-center">Willkommen bei uns, Ali!</h2>
        <p className='text-2xl text-center py-12'>Verwende Side-Bar, um Services zu überprüfen</p>
      </div>
      }
      <DashboardMenu />
    </>
  );
};

export default Dashboard;
