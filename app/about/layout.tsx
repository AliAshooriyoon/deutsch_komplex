import Header from "../components/Header";

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return <>
    <Header />
    {children}
  </>
}
export default AboutLayout;
