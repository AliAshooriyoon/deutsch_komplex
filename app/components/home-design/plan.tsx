import { IoCloseCircleSharp } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";
const options: Record<string, Array<string>> = {
  free: ["Zugang zu Grundübungen", "Tägliche Wortschatzübungen",
    "Einstufungstest", "Community-Forum", "Basis-Grammatikübungen",
    "Begrenzte Testmodelle", "Kein Premium-Content"],
  standard: ["Alle kostenlosen Features", "Unbegrenzte Testmodelle",
    "Alle Hördateien & Podcasts", "Erweiterte Schreibübungen",
    "Detailliertes Feedback", "Fortschritts-Tracking", "Alle Geschichten & Texte"
  ],
  premium: ["Alle Standard Features", "Persönlicher Lernplan",
    "Unbegrenzte Sprechübungen", "Live-Korrekturen",
    "Prüfungssimulationen", "Alle Niveaus A1-C2", "Premium Support 24/7", "Zertifikatsgarantie"]
}
const Plan = ({ mode }: { mode: string }) => {
  return <>

    <div className={`plan rounded-3xl w-[32%] border-2 
        ${mode !== "free" ? "bg-gradient-to-r from-red-600/10 to-yellow-600/10" : "bg-gradient-to-t from-gray-500/20 to-white"}
      ${mode == "standard" && 'border-4 hover:shadow-none shadow-2xl scale-y-[1.06] delay-100  shadow-red-600'}
      ${mode !== "standard" ? 'border-gray-400' : 'border-amber-500'}`}>
      <div className={`head_plan p-8 flex flex-col gap-2 ${mode == "standard" && ''}`}>
        <p className="text-3xl">{`${mode.split("")[0].toUpperCase()}${mode.split("").slice(1).join("")}`}
        </p>
        <div className="flex items-center gap-2">
          <p className="price text-5xl">{mode == "free" ? '0€' :
            mode == "standard" ? '7€' : '12€'}</p>
          <span className="text-lg text-gray-600 mt-2">
            {mode == "free" ? 'für immer' :
              'pro Monat'}
          </span>
        </div>
        <p className="explain text-gray-700 text-lg -mt-1.5">
          {mode == "free" ? 'Perfekt zum Ausprobieren' :
            mode == "standard" ? 'Für ernsthaftes Lernen' : 'Maximaler Erfolg'}
        </p>
      </div>
      <div className={`btn_box w-[85%] rounded-xl cursor-pointer text-lg  h-10 flex items-center justify-center
        ${mode !== "free" ? 'bg-gradient-to-r text-white hover:to-yellow-700 hover:from-red-700 from-red-600 to-yellow-600' :
          'border-gray-800 border-2 text-gray-900 hover:bg-gray-900 hover:text-white'} mx-auto`}>
        <span>{mode == "free" ? 'jetzt anfangen' : 'Plan auswählen'}</span>
      </div>
      <div className="p-8">
        <div className="items_plan py-7 flex flex-col gap-4">
          {options[mode].map((i) => <div className="flex items-center text-lg gap-1 justify-start" key={i}>
            <div className="w-10 h-10 flex items-center justify-between">
              {mode == "free" && options[mode].indexOf(i) >= 5 ?
                <IoCloseCircleSharp className="text-gray-600 w-[70%] h-[70%]" /> :
                <FaCircleCheck className={`text-green-500 w-[70%] h-[70%]`} />}
            </div>
            <span
              className={` ${mode == "free" && options[mode].indexOf(i) >= 5 ? 'text-gray-400' : 'text-black'} `}>
              {i}</span>
          </div>)}
        </div>

      </div>
    </div>
  </>
}
export default Plan;
