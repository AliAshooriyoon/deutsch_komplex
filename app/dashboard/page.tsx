import { auth } from "@/auth";
import "./dashboardStyle.css"
import { redirect } from "next/navigation";
const Dashboard = async () => {
  const user = await auth()
  if (!user?.user?.email) {
    redirect("/")
  }
  return (
    <>
      <div className="dashboard_main">
        <div className="wellcome">
          <h2 className="text-5xl text-center">Willkommen bei uns, {user?.user?.name}!</h2>
          <p className='text-2xl text-center py-12'>Verwende Side-Bar, um Services zu überprüfen</p>
        </div>

      </div>
    </>
  );
};

export default Dashboard;
