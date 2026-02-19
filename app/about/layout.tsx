import Header from "../components/Header";

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return <>
    <div className="flex flex-col">
      <Header />
      <div className="mt-20">{children}</div>

    </div>
  </>
}
export default AboutLayout;
