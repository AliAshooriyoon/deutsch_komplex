import Image from "next/image";
import mainPic from "../../../public/team-university-colleagues-are-doing-research-class-project.jpg"
import Link from "next/link";
import { useSession } from "next-auth/react";

const MainPage = () => {
  const user = useSession()

  return <>
    <div className="main bg-[#FFFEF5] lg:py-40 lg:pl-2 max-lg:pb-12 max-lg:pt-12
      max-lg:p-4 flex max-lg:flex-col items-center lg:justify-center lg:flex-row lg:gap-0">
      <div className="main_content max-lg:flex flex-col gap-8 lg:w-[45%]">
        <h2 className="lg:text-6xl max-lg:text-center text-black lg:max-w-[70%] max-lg:text-4xl">
          Bestehe deine <span className="bg-gradient-to-r from-red-700
                to-[#F9B13C] bg-clip-text text-transparent ">Deutschprüfung</span> </h2>
        <h3 className="description leading-9 indent-2 max-lg:text-xl
              lg:text-xl max-lg:py-1 lg:max-w-[80%] my-6 max-lg:my-1 text-gray-600">
          Bereite dich optimal auf Goethe-Zertifikat,
          TestDaF, telc und andere deutsche Sprachprüfungen vor.
          Gezieltes Training für alle Prüfungsteile: Lesen, Hören, Schreiben und Sprechen.
        </h3>
        <div className="btn_box max-lg:text-center flex gap-4 flex-wrap">
          <Link href={user.data?.user.email ? "/dashboard" : "/login"}
            className="cursor-pointer  px-5 py-3 bg-[#D73722] shadow-[#D73722]
              shadow-2xl hover:bg-red-600 text-xl rounded-2xl">
            Kostenlos starten</Link>
          <Link href={user.data?.user.email ? "/dashboard" : "/login"}
            className="cursor-pointer  px-5 py-3 bg-transparent text-black shadow-[#D73722]
              shadow-2xl  text-xl rounded-2xl border-2 hover:bg-zinc-900 hover:text-white hover:border-white">
            Mehr erfahren</Link>
        </div>
        <div className="swapper w-[90%] h-0.5 bg-gray-700 mt-12 lg:mb-5 " />
        <div className="results text-black flex justify-between lg:w-[85%] max-lg:w-[98%] 
          flex-wrap max-lg:gap-6 lg:gap-12 max-lg:p-4">
          <div className="erfolg flex flex-col items-start">
            <span className="lg:text-3xl max-lg:text-xl text-red-600">95%</span>
            <span className="max-lg:text-md lg:text-lg text-gray-600">Erfolgsquote</span>
          </div>
          <div className="erfolg flex flex-col items-start">
            <span className="lg:text-3xl max-lg:text-xl text-yellow-700">A1-C1</span>
            <span className="max-lg:text-md lg:text-lg text-gray-600">Alle Niveaus</span>
          </div>
          <div className="erfolg flex flex-col items-start">
            <span className="lg:text-3xl max-lg:text-xl text-black">4Skills</span>
            <span className="max-lg:text-md lg:text-lg text-gray-600">Komplett</span>
          </div>
        </div>
      </div>
      <Image alt="main picture" draggable={false} className="shadow-2xl shadow-amber-400 w-[40rem] rounded-3xl" src={mainPic} />
    </div>
  </>
}
export default MainPage
