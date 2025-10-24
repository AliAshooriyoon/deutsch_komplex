"use client"
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { PiExamFill } from "react-icons/pi";
import mainPic from "../public/de-home-removebg-preview.png"
import customPic from "../public/removebg.png"
import Plan from "./components/home-design/plan";
import Footer from "./components/home-design/Footer";
import Header from "./components/Header";
import dynamic from "next/dynamic";
const Element = dynamic(() => import('react-scroll').then((mod) => mod.Element), {
  ssr: false,
});
export default function Home() {
  return (
    <>
      <Header />
      <div className="p-2">
        <div className="main lg:py-16 lg:pl-12 max-lg:p-4 flex max-lg:flex-col 
          items-center justify-between">
          <div className="main_content max-lg:flex flex-col gap-8 ">
            <h2 className="lg:text-6xl lg:max-w-[60%] max-lg:text-center max-lg:text-4xl">Deutsche Fähigkeiten in jedem Bereich einfach verbessern </h2>
            <h3 className="description leading-9 indent-6 max-lg:text-xl lg:text-2xl py-6 lg:max-w-[60%]">
              Möchten Sie Deutsch lernen, aber haben Sie bisher keine besondere Plattform, in der man Deutsch komplex und fähig lernen kann, gefunden?
              Hier könnte Ihr neuer Anfang sein!
            </h3>
            <div className="btn_box max-lg:text-center">
              <button className="cursor-pointer  px-5 py-3 bg-[#D73722] shadow-[#D73722]
              shadow-2xl  text-xl rounded-2xl">Fangen Sie an</button>
            </div>
          </div>
          <Image alt="main picture" className="w-[50rem]" src={mainPic} />
        </div>
        <Element name="services" className="analys p-6 lg:h-44  shadow-2xl
          shadow-[#D73722] w-[96%] mx-auto
          bg-zinc-900 rounded-4xl flex max-lg:flex-col max-lg:gap-16 justify-between">
          <div className='users flex items-center gap-6'>
            <div className='iconBox border-2 p-4 rounded-full bg-red-300 border-red-300'>
              <FaUser className="max-lg:h-6 max-lg:w-6 lg:w-8 lg:h-8 fill-[#D73722]" />
            </div>
            <div className='nums'>
              <p className='lg:text-3xl max-lg:text-2xl font-bold'>Über 200</p>
              <p className='text-xl'>Benutzer</p>
            </div>
          </div>
          <div className='practices flex items-center gap-6'>
            <div className="iconBox border-2 p-4 rounded-full bg-red-300 border-red-300">
              <FaBookOpen className="max-lg:h-6 max-lg:w-6 lg:w-8 lg:h-8 fill-[#D73722]" />  </div>
            <div className='nums'>
              <p className='lg:text-3xl max-lg:text-2xl font-bold'>Über 130</p>
              <p className='text-xl'>Übungen</p>
            </div>
          </div>

          <div className='Modell-Tests flex items-center gap-6'>
            <div className="iconBox border-2 p-4 rounded-full bg-red-300 border-red-300">
              <PiExamFill className="max-lg:h-6 max-lg:w-6 lg:w-8 lg:h-8 fill-[#D73722]" />
            </div>
            <div className='nums'>
              <p className='lg:text-3xl max-lg:text-2xl font-bold'>Über 40</p>
              <p className='text-xl'>Modell-Tests</p>
            </div>
          </div>
        </Element>
        <div className='flex items-center justify-between max-lg:px-4 lg:px-12 py-30 flex-wrap'>
          <Image className="" src={customPic} alt='' />
          <div className='description_customer lg:max-w-[40%]'>
            <h4 className="lg:text-5xl max-lg:text-3xl text-left">Was bieten wir genau an?</h4>
            <p className="lg:text-2xl max-lg:text-xl mt-6 ">Unsere verschiedene Services helfen Ihnen dabei,
              Deutsch besser zu können. Diese Plattform könnte bei allen Kompetenzen,
              die man nicht nur bei einer prüfung, sondern auch im Leben braucht,
              förderlich sein!</p>
            <ul className="list-disc lg:text-2xl max-lg:text-xl max-lg:pl-4 mt-6 leading-9">
              <li>Schreibübungen</li>
              <li>verschiedene Hörübungen </li>
              <li>Großartige Wortschätze</li>
              <li>Viele deutsche Geschichten</li>
            </ul>
          </div>
        </div>
        <Element name="price" className="py-6">
          <h3 className="text-center text-4xl">Preise</h3>
          <div className='plans py-12 lg:px-10 flex max-lg:items-center max-lg:gap-16 max-lg:flex-col 
            justify-between lg:w-[85%] mx-auto'>
            <Plan mode={'free'} />
            <Plan mode={'standard'} />
            <Plan mode={'premium'} />
          </div>
          <p className="text-center text-xl pb-8 pt-2">Ich machte Witze!!  Diese Plattform ist jetzt total kostenlos 🙂 </p>
        </Element>
        <Footer />
      </div>
    </>
  );
}
