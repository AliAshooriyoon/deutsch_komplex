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
      <div className="w-full bg-gray-200 lg:flex justify-between h-full">
        <section className="max-lg:hidden lg:w-[20%] lg:left-0 lg:aabsolute">
          <DashboardMenu />
        </section>
        <section className="lg:hidden fixed bottom-0 w-full bg-[#4a4b4e] h-20">
          <DashboardPhone />
        </section>
        <section className="main_page  px-2 py-20  lg:w-[80%]">

          {children}</section>
      </div>

    </>
  )
}
export default DashboardLayout;
