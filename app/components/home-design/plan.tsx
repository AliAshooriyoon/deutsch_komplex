import { FiTriangle } from "react-icons/fi";
import { LuGlasses } from "react-icons/lu";
import { FiBox } from "react-icons/fi";
import { FiBookOpen } from "react-icons/fi";
const options: Record<string, Array<string>> = {
  free: ["Übungen zu jedem Niveau", "Großer Wortschatz",
    "veschiede deutsche Geschichten", "Tipps zu jeder Prüfung"],
  standard: ["Alles im Free Plan", "Texte durch AI korrigieren",
    "Spezieller Wortschatz zu jeder Prüfung", "Podcasts auf Deutsch"
  ],
  premium: ["Alles im Standard Plan", "Verschiedene TestModelle",
    "Private Unterrichten bis B2", "Besseres AI-Model"]
}
const Plan = ({ mode }: { mode: string }) => {
  return <>

    <div className="plan flex flex-col justify-between py-8 max-lg:w-[90%]  h-[40rem] lg:w-[25rem] 
      bg-neutral-800 rounded-3xl">

      <div className='title_plan text-center text-3xl font-bold flex flex-col items-center gap-2'>
        {mode == "free" ? <LuGlasses className='fill-green-500 w-10 h-10' />
          : mode == "standard" ? <FiBookOpen className='fill-red-500 w-10 h-10' /> :
            <FiBox className="fill-blue-500 w-10 h-10" />}


        <p> {mode == 'free' ? 'Free Plan' : mode == "standard" ? 'Standard Plan' : 'Premium Plan'} </p>
      </div>
      <div className='options'>
        {options[mode].map((i) => {

          return <div key={i} className='option flex items-center gap-1.5 pl-4 pt-6'>
            <span> <FiTriangle className={` fill-${mode == 'free' ? 'green' : mode == 'standard'
              ? 'red' : 'blue'}-500 w-6 h-6 mb-1.5`} /> </span>
            <p className="text-xl">{i}</p>
          </div>
        })}
      </div>
      <div className='btn_box text-center'>
        <p className='price text-xl py-2 font-bold'>
          {mode == 'free' ? 'Kostenlos' : mode == 'standard' ? '3$ pro Monat' : '5$ pro Monat'}
        </p>
        <button className={`text-2xl py-2 border-4 px-10 cursor-pointer delay-100
        ${mode == 'free' ? 'border-green-500 hover:bg-green-500 hover:border-white' :
            mode == 'standard' ? 'border-red-600 hover:bg-red-600 hover:border-white' : 'border-blue-600 hover:bg-blue-600 hover:border-white'}
        mx-auto rounded-2xl`}>{mode == "free" ? 'anmelden' : 'abonnieren'}</button>

      </div>
    </div>
  </>
}
export default Plan;
