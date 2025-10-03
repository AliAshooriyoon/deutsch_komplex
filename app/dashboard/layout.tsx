import "./dashboardStyle.css"
import DashboardMenu from "../components/dashboard/DashboardMenu";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DashboardMenu />
      <section className="main_page absolute right-0 top-0 w-[70%]">

        {children}</section>

    </>
  )
}
export default DashboardLayout;
