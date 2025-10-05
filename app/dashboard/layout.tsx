import "./dashboardStyle.css"
import DashboardMenu from "../components/dashboard/DashboardMenu";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await auth()
  if (!user?.user?.email) {
    redirect("/")
  }
  return (
    <>
      <DashboardMenu />
      <section className="main_page absolute right-0 top-0 w-[70%]">

        {children}</section>

    </>
  )
}
export default DashboardLayout;
