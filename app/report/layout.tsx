import Header from "../components/Header";

const ReportLayout = ({ children }: { children: React.ReactNode }) => {
  return <>
    <Header />
    {children}
  </>
}
export default ReportLayout;
