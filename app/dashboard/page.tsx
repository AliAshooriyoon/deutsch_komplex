
import "./dashboardStyle.css"
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import { FcAbout } from "react-icons/fc";
import { MdReport } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { VscSymbolKeyword } from "react-icons/vsc";
import { FaHeadphones } from "react-icons/fa";
import { FaBookReader, FaPenAlt } from "react-icons/fa";
import Logo from "../../public/de-icon.png";

const Dashboard = () => {
  return (
    <div className="dashboard_menu fixed left-0 top-0 bg-[#4a4b4e] px-4 pl-6 rounded-r-3xl h-screen flex flex-col">
      <div className="logoBox flex items-center gap-3 text-2xl py-4  shrink-0">
        <Image alt="" src={Logo} />
        <p>Deutsch komplex</p>
      </div>

      <div className="items flex-1 min-h-0 flex flex-col gap-8 overflow-y-auto pr-2">
        <div className='wrapper'></div>
        <div className="main_item">
          <p className="showItem flex items-center">
            <FaPenAlt />
            <span>Schreiben</span>
          </p>

        </div>

        <div className="main_item">
          <p className="showItem flex items-center">
            <FaBookReader />
            <span>Lesen</span>
          </p>

        </div>
        <div className="main_item">
          <p className="showItem flex items-center">
            <VscSymbolKeyword />
            <span>Wörter</span>
          </p>

        </div>

        <div className="main_item">
          <p className="showItem flex items-center">
            <FaHeadphones />
            <span> Hören</span>
          </p>

        </div>

        <div className='account'>
          <div className='wrapper' />
          <div className="main_item pt-6">
            <p className="showItem flex items-center">
              <MdAccountCircle className="" />
              <span>Konto</span>
            </p>
          </div>
          <div className="main_item pt-6">
            <p className="showItem flex items-center">
              <IoSettingsSharp className="" />
              <span>Einstellung</span>
            </p>
          </div>
        </div>
        <div className='contact'>
          <div className='wrapper'></div>
          <div className="main_item pt-6">
            <p className="showItem flex items-center">
              <FcAbout className="" />
              <span>Über uns</span>
            </p>
          </div>
          <div className="main_item pt-6">
            <p className="showItem flex items-center">
              <MdEmail />
              <span>E-Mail</span>
            </p>
          </div>
          <div className="main_item pt-6">
            <p className="showItem flex items-center">
              <MdReport />
              <span>Berichten</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
