"use client"
import "./styles.css"
import MainPage from "./components/home-design/mainPage";
import Plan from "./components/home-design/plan";
import StepsPage from "./components/home-design/stepsPage";
import ServicesPage from "./components/home-design/servicesPage";
import Footer from "./components/home-design/Footer";
import Header from "./components/Header";
import CommentPage from "./components/home-design/commentsPage";
import dynamic from "next/dynamic";
const Element = dynamic(() => import('react-scroll').then((mod) => mod.Element), {
  ssr: false,
});
export default function Home() {
  return (
    <>
      <Header />

      <div className="">
        <MainPage />
        <ServicesPage />
        <StepsPage />
        <CommentPage />
        <Element name="price" className="py-20  bg-[#F9FAFB]">
          <h3 className="text-center max-lg:text-3xl lg:text-4xl py-1">Wähle deinen
            <span className="text-red-600"> Plan</span> </h3>
          <p className="text-center text-gray-600 max-lg:max-w-[90%] max-lg:mx-auto">
            Starte kostenlos oder wähle einen Plan, der zu deinen Lernzielen passt</p>
          <div className='plans py-12 lg:px-10 flex max-lg:items-center 
            max-lg:gap-16 max-lg:flex-col 
            justify-between lg:w-[82%] max-lg:w-[95%] mx-auto'>
            <Plan mode={'free'} />
            <Plan mode={'standard'} />
            <Plan mode={'premium'} />
          </div>
        </Element>
      </div>
      <Footer />
    </>
  );
}
