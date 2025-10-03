"use client"
import "./dashboardStyle.css"
import { useStatus } from "../zustand";
const Dashboard = () => {
  const showWellcome = useStatus(state => state.status)
  return (
    <>
      <div className="dashboard_main">
        <div className="wellcome">
          <h2 className="text-5xl text-center">Willkommen bei uns, Ali!</h2>
          <p className='text-2xl text-center py-12'>Verwende Side-Bar, um Services zu überprüfen</p>
        </div>

      </div>
    </>
  );
};

export default Dashboard;
