import Image from "next/image";
import mainPic from "../public/de-home-removebg-preview.png"
import customPic from "../public/removebg.png"
export default function Home() {
  return (
    <>
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
      </div>
    </>
  );
}
