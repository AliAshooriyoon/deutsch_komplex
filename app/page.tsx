import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { PiExamFill } from "react-icons/pi";
import mainPic from "../public/de-home-removebg-preview.png"
import customPic from "../public/removebg.png"
import Plan from "./components/home-design/plan";
import Footer from "./components/home-design/Footer";
import Header from "./components/Header";
export default function Home() {
  return (
    <>
      <Header />
      <div className="p-2">
        <div className="main py-16 pl-12 flex items-center justify-between">
          <div className="main_content">
            <h2 className="text-6xl max-w-[60%]">Deutsche Fähigkeiten in jedem Bereich einfach verbessern </h2>
            <h3 className="description leading-9 indent-6 text-2xl py-6 max-w-[60%]">
              Möchten Sie Deutsch lernen, aber haben Sie bisher keine besondere Plattform, in der man Deutsch komplex und fähig lernen kann, gefunden?
              Hier könnte Ihr neuer Anfang sein!
            </h3>
            <button className="cursor-pointer px-5 py-3 bg-[#D73722] shadow-[#D73722]
              shadow-2xl  text-xl rounded-2xl">Fangen Sie an</button>
          </div>
          <Image alt="main picture" className="w-[50rem]" src={mainPic} />
        </div>
        <div className="analys p-6 h-44  shadow-2xl shadow-[#D73722] w-[96%] mx-auto
          bg-zinc-900 rounded-4xl flex justify-between">
          <div className='users flex items-center gap-6'>
            <div className='iconBox border-2 p-4 rounded-full bg-red-300 border-red-300'>
              <FaUser className="w-8 h-8 fill-[#D73722]" />
            </div>
            <div className='nums'>
              <p className='text-3xl font-bold'>Über 200</p>
              <p className='text-xl'>Kunden</p>
            </div>
          </div>
          <div className='practices flex items-center gap-6'>
            <div className="iconBox border-2 p-4 rounded-full bg-red-300 border-red-300">
              <FaBookOpen className="w-8 h-8 fill-[#D73722]" />  </div>
            <div className='nums'>
              <p className='text-3xl font-bold'>Über 130</p>
              <p className='text-xl'>Übungen</p>
            </div>
          </div>

          <div className='Modell-Tests flex items-center gap-6'>
            <div className="iconBox border-2 p-4 rounded-full bg-red-300 border-red-300">
              <PiExamFill className="w-8 h-8 fill-[#D73722]" />
            </div>
            <div className='nums'>
              <p className='text-3xl font-bold'>Über 40</p>
              <p className='text-xl'>Modell-Tests</p>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-between px-12 py-30 flex-wrap'>
          <Image className="" src={customPic} alt='' />
          <div className='description_customer max-w-[40%]'>
            <h4 className="text-5xl text-left">Was bieten wir genau an?</h4>
            <p className="text-2xl mt-6 ">Unsere verschiedene Services helfen Ihnen dabei,
              Deutsch besser zu können. Diese Plattform könnte bei allen Kompetenzen,
              die man nicht nur bei einer prüfung, sondern auch im Leben braucht,
              förderlich sein!</p>
            <ul className="list-disc text-2xl mt-6 leading-9">
              <li>Schreibübungen</li>
              <li>verschiedene Hörübungen </li>
              <li>Großartige Wortschätze</li>
              <li>Viele deutsche Geschichten</li>
            </ul>
          </div>
        </div>
        <div className="">
          <h3 className="text-center text-4xl">Preise</h3>
          <div className='plans py-12 px-10 flex justify-between w-[85%] mx-auto'>
            <Plan mode={'free'} />
            <Plan mode={'standard'} />
            <Plan mode={'premium'} />
          </div>
          <p className="text-center text-xl pb-8 pt-2">Ich machte Witze!!  Diese Plattform ist jetzt total konstenkos 🙂 </p>
        </div>
        <Footer />
      </div>
    </>
  );
}
