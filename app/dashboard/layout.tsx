import "./dashboardStyle.css"
import DashboardMenu from "../components/dashboard/DashboardMenu";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import DashboardPhone from "../components/dashboard/DashboardPhone";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await auth()
  if (!user?.user?.email) {
    redirect("/")
  }
  return (
    <>
      <section className="max-lg:hidden">
        <DashboardMenu />
      </section>
      <section className="lg:hidden fixed bottom-0 w-full bg-[#4a4b4e] h-20">
        <DashboardPhone />
      </section>
      <section className="main_page px-2 py-20 lg:absolute right-0 top-0 lg:w-[70%]">

        {children}</section>

    </>
  )
}
export default DashboardLayout;
