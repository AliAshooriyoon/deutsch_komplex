"use client"
import Image from "next/image";
import { GoBook } from "react-icons/go";
import mainPic from "../public/team-university-colleagues-are-doing-research-class-project.jpg"
import customPic from "../public/removebg.png"
import { VscComment } from "react-icons/vsc";
import { AiFillThunderbolt } from "react-icons/ai";
import { PiBrain } from "react-icons/pi";
import Plan from "./components/home-design/plan";
import Footer from "./components/home-design/Footer";
import Header from "./components/Header";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useSession } from "next-auth/react";
const Element = dynamic(() => import('react-scroll').then((mod) => mod.Element), {
  ssr: false,
});
export default function Home() {
  const user = useSession()
  return (
    <>
      <Header />
      <div className="p-2">
        <div className="main bg-[#FFFEF5] lg:py-16 lg:pl-2 max-lg:p-4 flex max-lg:flex-col 
          items-center lg:justify-center lg:flex-row lg:gap-0">
          <div className="main_content max-lg:flex flex-col gap-8 lg:w-[45%]">
            <h2 className="lg:text-6xl max-lg:text-center text-black lg:max-w-[70%] max-lg:text-4xl">
              Bestehe deine <span className="bg-gradient-to-r from-red-700
                to-[#F9B13C] bg-clip-text text-transparent ">Deutschprüfung</span> </h2>
            <h3 className="description leading-9 indent-2 max-lg:text-xl
              lg:text-xl py-6 lg:max-w-[80%] text-gray-600">
              Bereite dich optimal auf Goethe-Zertifikat,
              TestDaF, telc und andere deutsche Sprachprüfungen vor.
              Gezieltes Training für alle Prüfungsteile: Lesen, Hören, Schreiben und Sprechen.
            </h3>
            <div className="btn_box max-lg:text-center flex gap-4 ">
              <Link href={user.data?.user.email ? "/dashboard" : "/login"}
                className="cursor-pointer  px-5 py-3 bg-[#D73722] shadow-[#D73722]
              shadow-2xl hover:bg-red-600 text-xl rounded-2xl">
                Kostenlos starten</Link>
              <Link href={user.data?.user.email ? "/dashboard" : "/login"}
                className="cursor-pointer  px-5 py-3 bg-transparent text-black shadow-[#D73722]
              shadow-2xl  text-xl rounded-2xl border-2 hover:bg-zinc-900 hover:text-white hover:border-white">
                Mehr erfahren</Link>
            </div>
            <div className="swapper w-[90%] h-0.5 bg-gray-700 mt-12 mb-5 " />
            <div className="results text-black flex justify-between w-[85%]">
              <div className="erfolg flex flex-col items-start">
                <span className="text-3xl text-red-600">95%</span>
                <span className="text-lg text-gray-600">Erfolgsquote</span>
              </div>
              <div className="erfolg flex flex-col items-start">
                <span className="text-3xl text-yellow-700">A1-C1</span>
                <span className="text-lg text-gray-600">Alle Niveaus</span>
              </div>
              <div className="erfolg flex flex-col items-start">
                <span className="text-3xl text-black">4Skills</span>
                <span className="text-lg text-gray-600">Komplett</span>
              </div>
            </div>
          </div>
          <Image alt="main picture" draggable={false} className="w-[40rem] rounded-3xl" src={mainPic} />
        </div>
        <Element name="services" className="analys text-center">
          <h3 className="text-4xl mt-12">Alle
            <span className="text-red-600 "> Prüfungsteile</span> abgedeckt</h3>
          <h5 className="text-xl pt-4 mx-auto text-gray-700">Bereite dich gezielt auf alle vier Fertigkeiten vor und meistere
            deine <br /> Deutschprüfung mit Selbstvertrauen.</h5>
          <div className="items_services pt-12 text-start w-[70%] gap-y-10 mx-auto flex justify-between flex-wrap">
            <div className="w-[30%] h-48 border-2 border-gray-400 p-4
              flex flex-col justify-between rounded-2xl">
              <div className="w-12 h-12 bg-red-400/40 flex justify-center items-center rounded-2xl">
                <GoBook className="text-red-600 w-8 h-8" />
              </div>
              <p className="text-black text-xl">Leseverstehen</p>
              <p className="text-gray-600">Trainiere mit authentischen Texten und prüfungsrelevanten
                Aufgabenformaten für alle Sprachniveaus.</p>
            </div>
            <div className="w-[30%] h-48 border-2 border-gray-400 p-4
              flex flex-col justify-between rounded-2xl">
              <div className="w-12 h-12 bg-gray-500/40 flex justify-center items-center rounded-2xl">
                <VscComment className="text-gray-900 w-8 h-8" />
              </div>
              <p className="text-black text-xl">Mündlicher Ausdruck</p>
              <p className="text-gray-600">Übe Sprechen mit realistischen Prüfungssituationen und erhalte detailliertes Feedback.</p>
            </div>
            <div className="w-[30%] h-48 border-2 border-gray-400 p-4
              flex flex-col justify-between rounded-2xl">
              <div className="w-12 h-12 bg-yellow-400/40 flex justify-center items-center rounded-2xl">
                <AiFillThunderbolt className="text-yellow-600 w-8 h-8" />
              </div>
              <p className="text-black text-xl">Hörverstehen</p>
              <p className="text-gray-600">Verbessere dein Hörverständnis mit gezielten Übungen und originalen Prüfungsformaten.</p>
            </div>
            <div className="w-[30%] h-48 border-2 border-gray-400 p-4
              flex flex-col justify-between rounded-2xl">
              <div className="w-12 h-12 bg-red-400/40 flex justify-center items-center rounded-2xl">
                <PiBrain className="text-red-600 w-8 h-8" />
              </div>
              <p className="text-black text-xl">Schriftlicher Ausdruck</p>
              <p className="text-gray-600">Lerne Essays, Briefe und Berichte zu schreiben – genau wie in der Prüfung.</p>
            </div>
            <div className="w-[30%] h-48 border-2 border-gray-400 p-4
              flex flex-col justify-between rounded-2xl">
              <div className="w-12 h-12 bg-gray-500/40 flex justify-center items-center rounded-2xl">
                <GoBook className="text-gray-900 w-8 h-8" />
              </div>
              <p className="text-black text-xl">Prüfungssimulation</p>
              <p className="text-gray-600">Teste dich unter echten Prüfungsbedingungen und kenne dein Niveau.</p>
            </div>
            <div className="w-[30%] h-48 border-2 border-gray-400 p-4
              flex flex-col justify-between rounded-2xl">
              <div className="w-12 h-12 bg-yellow-400/40 flex justify-center items-center rounded-2xl">
                <GoBook className="text-yellow-700 w-8 h-8" />
              </div>
              <p className="text-black text-xl"> {`Grammatik & Wortschatz`} </p>
              <p className="text-gray-600">Erweitere systematisch deinen Wortschatz und beherrsche die deutsche Grammatik.</p>
            </div>
          </div>
        </Element>
        <div className='flex items-center justify-between max-lg:px-4 lg:px-12 py-30 flex-wrap'>
          <Image className="" src={customPic} alt='services_pictures' />
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
