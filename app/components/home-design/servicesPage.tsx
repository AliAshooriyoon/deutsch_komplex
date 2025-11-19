
import { GoBook } from "react-icons/go";
import { VscComment } from "react-icons/vsc";
import { AiFillThunderbolt } from "react-icons/ai";
import { PiBrain } from "react-icons/pi";
import dynamic from "next/dynamic";
const Element = dynamic(() => import('react-scroll').then((mod) => mod.Element), {
  ssr: false,
});
const ServicesPage = () => {
  return <>
    <Element name="services" className="analys bg-white text-center py-12">
      <h3 className="lg:text-4xl max-lg:text-3xl mt-12">Alle
        <span className="text-red-600"> Prüfungsteile</span> abgedeckt</h3>
      <h5 className="lg:text-xl max-lg:text-lg pt-4 mx-auto text-gray-700">
        Bereite dich gezielt auf alle vier Fertigkeiten vor und meistere
        deine <br /> Deutschprüfung mit Selbstvertrauen.
      </h5>
      <div className="items_services pt-12 text-start lg:w-[70%] max-lg:w-[95%] gap-y-10
        mx-auto flex justify-between flex-wrap">
        <div className="lg:w-[30%] lg:h-48 border-2 border-gray-400 p-4
              flex flex-col justify-between rounded-2xl">
          <div className="w-12 h-12 bg-red-400/40 flex justify-center items-center rounded-2xl">
            <GoBook className="text-red-600 w-8 h-8" />
          </div>
          <p className="text-black text-xl">Leseverstehen</p>
          <p className="text-gray-600">Trainiere mit authentischen Texten und prüfungsrelevanten
            Aufgabenformaten für alle Sprachniveaus.</p>
        </div>
        <div className="lg:w-[30%] h-48 border-2 border-gray-400 p-4
              flex flex-col justify-between rounded-2xl">
          <div className="w-12 h-12 bg-gray-500/40 flex justify-center items-center rounded-2xl">
            <VscComment className="text-gray-900 w-8 h-8" />
          </div>
          <p className="text-black text-xl">Mündlicher Ausdruck</p>
          <p className="text-gray-600">Übe Sprechen mit realistischen Prüfungssituationen und erhalte detailliertes Feedback.</p>
        </div>
        <div className="lg:w-[30%] h-48 border-2 border-gray-400 p-4
              flex flex-col justify-between rounded-2xl">
          <div className="w-12 h-12 bg-yellow-400/40 flex justify-center items-center rounded-2xl">
            <AiFillThunderbolt className="text-yellow-600 w-8 h-8" />
          </div>
          <p className="text-black text-xl">Hörverstehen</p>
          <p className="text-gray-600">Verbessere dein Hörverständnis mit gezielten Übungen und originalen Prüfungsformaten.</p>
        </div>
        <div className="lg:w-[30%] h-48 border-2 border-gray-400 p-4
              flex flex-col justify-between rounded-2xl">
          <div className="w-12 h-12 bg-red-400/40 flex justify-center items-center rounded-2xl">
            <PiBrain className="text-red-600 w-8 h-8" />
          </div>
          <p className="text-black text-xl">Schriftlicher Ausdruck</p>
          <p className="text-gray-600">Lerne Essays, Briefe und Berichte zu schreiben – genau wie in der Prüfung.</p>
        </div>
        <div className="lg:w-[30%] h-48 border-2 border-gray-400 p-4
              flex flex-col justify-between rounded-2xl">
          <div className="w-12 h-12 bg-gray-500/40 flex justify-center items-center rounded-2xl">
            <GoBook className="text-gray-900 w-8 h-8" />
          </div>
          <p className="text-black text-xl">Prüfungssimulation</p>
          <p className="text-gray-600">Teste dich unter echten Prüfungsbedingungen und kenne dein Niveau.</p>
        </div>
        <div className="lg:w-[30%] h-48 border-2 border-gray-400 p-4
              flex flex-col justify-between rounded-2xl">
          <div className="w-12 h-12 bg-yellow-400/40 flex justify-center items-center rounded-2xl">
            <GoBook className="text-yellow-700 w-8 h-8" />
          </div>
          <p className="text-black text-xl"> {`Grammatik & Wortschatz`} </p>
          <p className="text-gray-600">Erweitere systematisch deinen Wortschatz und beherrsche die deutsche Grammatik.</p>
        </div>
      </div>
    </Element>
  </>
}
export default ServicesPage;
