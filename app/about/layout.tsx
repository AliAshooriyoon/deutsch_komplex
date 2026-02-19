import Header from "../components/Header";

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return <>
    <Header />
    <div className="pt-28">{children}</div>
  </>
}
export default AboutLayout;
