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
      <div className="w-[100vw] absolute">
        <div className="w-full bg-gray-200 flex  justify-between h-full">
          <section className="max-lg:hidden lg:relative lg:max-w-[20%] lg:left-0 ">
            <DashboardMenu />
          </section>
          <section className="lg:hidden fixed top-0 mb-12 w-full ">
            <DashboardPhone />
          </section>
          <section className="main_page max-lg:px-2 lg:pr-6 lg:pl-12 max-lg:py-30
          lg:relative right-0 lg:py-20 lg:w-[83.5%] max-lg:w-full">

            {children}</section>
        </div>


      </div>
    </>
  )
}
export default DashboardLayout;
