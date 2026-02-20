import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";
import { FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
const About = () => {
  return <>
    <div className='py-52 max-lg:py-24 bg-gradient-to-r from-red-800 from-[0%]  via-red-700 via-[60%]
      to-amber-600 to-[100%] gap-12 flex items-center justify-center flex-col'>
      <h1 className="max-lg:flex max-lg:flex-col gap-4 text-7xl text-center max-lg:text-5xl text-white">
        <span className="">Über</span> <span className="max-lg:text-4xl">Deutsch-Komplex</span>
      </h1>
      <h2 className="text-3xl text-white max-lg:text-xl max-lg:px-4">Wir helfen Menschen weltweit dabei, ihre deutschen Sprachprüfungen erfolgreich zu bestehen</h2>
    </div>
    <div className="w-full bg-gray-800">
      <div className="w-full flex justify-around px-16 h-full py-12 max-lg:flex-col max-lg:gap-12">
        <div className="flex flex-col gap-4 h-full">
          <p className="text-5xl text-amber-500">1000+</p>
          <p className="text-xl text-gray-500">Erfolgreiche Lernende</p>
        </div>
        <div className="flex flex-col gap-4 h-full">
          <p className="text-5xl text-amber-500">95%</p>
          <p className="text-xl text-gray-500">Erfolgsquote</p>
        </div>
        <div className="flex flex-col gap-4 h-full">
          <p className="text-5xl text-amber-500">120+</p>
          <p className="text-xl text-gray-500">Länder weltweit</p>
        </div>
        <div className="flex flex-col gap-4 h-full">
          <p className="text-5xl text-amber-500">24/7</p>
          <p className="text-xl  text-gray-500">Support</p>
        </div>
      </div>
    </div>
    <div className="bg-stone-800 w-full lg:px-28 max-lg:px-4 py-20">
      <h2 className="text-6xl text-center text-white pb-12 max-lg:text-4xl">Unsere Geschichte</h2>
      <p className="text-xl max-lg:text-md text-gray-400 lg:leading-10">
        Deutsch Komplex ist nicht einfach nur eine Lernplattform – es ist das Ergebnis einer persönlichen Reise.
        Als ich selbst begann, Deutsch zu lernen, stand ich vor vielen Herausforderungen. Die meisten Materialien wirkten unübersichtlich,
        kompliziert oder wenig praxisnah. Es gab unzählige Bücher, Apps und Videos,
        aber oft fehlte eine klare Struktur und ein System, das wirklich Schritt für Schritt zum Ziel führt.
        Besonders bei der Prüfungsvorbereitung hatte ich das Gefühl, dass wichtige Details entweder zu oberflächlich
        oder unnötig kompliziert erklärt wurden.
        Genau aus dieser Erfahrung heraus entstand die Idee zu Deutsch Komplex.
        Ich wollte eine Plattform aufbauen, die komplexe Inhalte verständlich erklärt und sich auf das Wesentliche konzentriert.
        Mein Ziel war es, nicht nur Theorie zu vermitteln, sondern echtes Verständnis zu schaffen.
        Lernen sollte nicht chaotisch oder überwältigend sein, sondern klar, strukturiert und effizient.
        Deutsch Komplex richtet sich vor allem an Menschen, die konkrete Ziele haben – sei es eine Sprachprüfung,
        ein Studium oder eine Ausbildung in Deutschland. Deshalb liegt der Fokus auf prüfungsrelevanten Inhalten,
        praxisnahen Beispielen und einer klaren Progression nach Sprachniveaus. Jede Lektion soll dabei helfen,
        Sicherheit aufzubauen und typische Fehler zu vermeiden.
        Ein weiterer wichtiger Bestandteil ist der Einsatz moderner Technologien. Durch intelligente Funktionen und
        interaktive Inhalte wird individuelles Lernen unterstützt. Fehler werden nicht nur korrigiert, sondern erklärt,
        damit man wirklich daraus lernt. Denn nachhaltiger Fortschritt entsteht nur durch Verständnis und Wiederholung.
        Deutsch Komplex steht für Klarheit, Struktur und Motivation. Die Vision dahinter ist einfach:
        Deutschlernen soll kein undurchsichtiger Prozess sein, sondern ein nachvollziehbarer Weg mit messbarem Fortschritt.
        Schritt für Schritt, Level für Level. Denn am Ende geht es nicht nur darum,
        eine Sprache zu lernen – sondern neue Möglichkeiten zu eröffnen.
      </p>
    </div>
    <div className="bg-gray-800 py-14 px-24 w-full">
      <div className="">
        <h2 className="text-5xl text-center">Kontaktiere uns</h2>
        <div className="flex gap-10 w-full justify-center ">
          <div className="h-48 bg-gray-900 px-20 flex flex-col gap-6">
            <div className="bg-red-600 p-2"><MdOutlineEmail className="w-10 h-10" /></div>
            <p className="text-2xl">E-Mail</p>
            <p className="text-md">deutsch-komplex@proton.me</p>
          </div>
          <div className="h-48 bg-gray-900 px-20 flex flex-col gap-6">
            <div className="bg-amber-600 p-2"><FaTelegram className="w-10 h-10" /></div>
            <p className="text-2xl">Telegram</p>
            <p className="text-md">deutsch-komplex@proton.me</p>

          </div>
          <div className="h-48 bg-gray-900 px-20 flex flex-col gap-6">
            <p className="text-2xl">GitHub</p>
            <div className="bg-stone-900 p-2"><FaGithub className="w-10 h-10" /></div>
            <Link href={"github.com/AliAshooriyoon/deutsch_komplex"} className="text-md">Github projekt</Link>
          </div>
        </div>
      </div>

    </div>
  </>
}
export default About;
