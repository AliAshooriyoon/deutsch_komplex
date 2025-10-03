import Image from "next/image";
import { FcAbout } from "react-icons/fc";
import { FaHeadphones } from "react-icons/fa";
import { FaBookReader, FaPenAlt } from "react-icons/fa";
import Logo from "../../public/de-icon.png";

const Dashboard = () => {
  return (
    <div className="dashboard_menu fixed left-0 top-0 bg-[#4a4b4e] px-4 rounded-r-3xl h-screen flex flex-col">
      <div className="logoBox flex items-center gap-3 text-2xl py-4 pl-4 shrink-0">
        <Image alt="" src={Logo} />
        <p>Deutsch komplex</p>
      </div>

      <div className="items flex-1 min-h-0 flex flex-col gap-12 overflow-y-auto pr-2">
        <div className="main_item pl-1">
          <p className="text-xl flex items-center gap-2">
            <FaPenAlt />
            Schreiben
          </p>
          <ul className="indent-4 text-lg leading-12">
            <li>Texte durch AI korrigieren</li>
            <li>Tipps zum Schreiben</li>
            <li>Beispiele zum Schreiben</li>
            <li>Test-Modelle zum Schreiben</li>
          </ul>
        </div>

        <div className="main_item pl-1">
          <p className="text-xl flex items-center gap-2">
            <FaBookReader />
            Lesen
          </p>
          <ul className="indent-4 text-lg leading-12">
            <li>Test-Modelle zum Lesen</li>
            <li>Verschiedene Texte</li>
            <li>Verschiedene Geschichten</li>
          </ul>
        </div>
        <div className="main_item pl-1">
          <p className="text-xl flex items-center gap-2">
            <FaPenAlt />
            Wörter
          </p>
          <ul className="indent-4 text-lg leading-12">
            <li>Wörter lernen</li>
            <li>Lainter</li>
            <li>Nomen-Verb Verbindung</li>
            <li>Umgangssprachige Wörter</li>
          </ul>
        </div>

        <div className="main_item pl-1">
          <p className="text-xl flex items-center gap-2">
            <FaHeadphones />
            Hören
          </p>
          <ul className="indent-4 text-lg leading-12">
            <li>Test-Modelle zum Hören</li>
            <li>Hördateien</li>
            <li>Podcaste auf Deutsch</li>
          </ul>
        </div>

        <div className="main_item pl-1 pb-10">
          <p className="text-xl flex items-center gap-2">
            <FcAbout />
            Über uns</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
