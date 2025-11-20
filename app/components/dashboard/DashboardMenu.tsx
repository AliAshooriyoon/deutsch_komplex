"use client"
import { MdEmail } from "react-icons/md";
import { BiHomeAlt } from "react-icons/bi";
import Image from "next/image";
import { FcAbout } from "react-icons/fc";
import { MdReport } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { VscSymbolKeyword } from "react-icons/vsc";
import { FaHeadphones } from "react-icons/fa";
import { FaBookReader, FaPenAlt } from "react-icons/fa";
import Link from "next/link";
import Logo from "../../../public/de-icon.png";
import { useState } from "react";
import { usePathname } from "next/navigation";


const DashboardMenu = () => {
  const [selectedMenu, setSelectedMenu] = useState(["home"])
  // const changeStatus = useStatus(state => state.changeStatus)
  const path = usePathname()
  return <>
    <div className="max-lg:hidden dashboard_menua text-white fixed pr-8 left-0 top-0 
      bg-gray-800 px-2 pl-2 h-screen flex flex-col">
      <Link href={'/dashboard'} className="logoBox flex items-center gap-3 text-2xl py-4  shrink-0">
        <Image className="w-16 h-16" alt="dashboard_logo" src={Logo} />
        <p className="text-[#EDEDED]">Deutsch komplex </p>
      </Link>

      <div className="items flex-1 min-h-0 flex flex-col gap-8 overflow-y-auto pr-2">

        <div className='wrapper'></div>
        <div className="main_item pt-6">
          <Link href={'/'} className={`showItem flex 
            ${selectedMenu[0] == "home" && path == "/dashboard" && "bg-gradient-to-r"}
            from-red-500/80 to-amber-500/80 items-center`}
            onClick={() => setSelectedMenu(prev => ["home", prev[1]])}>
            <BiHomeAlt className="text-[#EDEDED] text-2xl" />
            <span className="text-white text-xl">Startseite</span>
          </Link>
        </div>
        <div className="main_item schreiben">
          <Link href={'/dashboard/schreiben'}
            onClick={() => setSelectedMenu(state => ["schreiben", state[1]])}
            className={`showItem flex items-center text-white pl-4 from-red-500/80 to-amber-500/80
            ${selectedMenu[0] == "schreiben" || path == "/dashboard/schreiben" ? "bg-gradient-to-r" : ''}`}>
            <FaPenAlt className="text-[#EDEDED]  text-xl " />
            <span className="text-white text-xl">Schreiben</span>
          </Link>
        </div>

        <div className="main_item">
          <Link href={'/dashboard/lesen'} onClick={() => setSelectedMenu(prev => ["lesen", prev[1]])}
            className={`showItem flex from-red-500/80 to-amber-500/80
          items-center ${selectedMenu[0] == "lesen" || path == "/dashboard/lesen" ? 'bg-gradient-to-r' : ""}`}>
            <FaBookReader className="text-[#EDEDED]  text-xl" />
            <span className="text-xl">Lesen</span>
          </Link>
        </div>
        <div className="main_item">
          <Link href={'/dashboard/words'} onClick={() => setSelectedMenu((prev) => ["words", prev[1]])}
            className={`showItem flex from-red-500/80 to-amber-500/80
            items-center ${selectedMenu[0] == "words" || path == "/dashboard/words" ? 'bg-gradient-to-r' : ''}`}>
            <VscSymbolKeyword className="text-[#EDEDED]  text-xl" />
            <span className="text-xl">Wörter</span>
          </Link>
        </div>

        <div className="main_item text-white">
          <Link href={'/dashboard/listen'}
            onClick={() => setSelectedMenu((prev) => ["listen", prev[1]])}
            className={` ${selectedMenu[0] == "listen" || path == "/dashboard/listen"
              ? 'bg-gradient-to-r' : ""} from-red-500/80 to-amber-500/80
                    showItem flex items-center`}>
            <FaHeadphones className="text-[#EDEDED]  text-xl" />
            <span className="text-xl"> Hören</span>
          </Link>

        </div>

        <div className='account'>
          <div className='wrapper' />
          <div className="main_item pt-6">
            <Link href={'/dashboard/account'}
              onClick={() => setSelectedMenu(prev => ["account", prev[1]])}
              className={` ${selectedMenu[0] == "account" || path == "/dashboard/account" ? 'bg-gradient-to-r' : ""}
                from-red-500/80 to-amber-500/80
                  showItem flex items-center`}>
              <MdAccountCircle className="text-[#EDEDED]  text-xl" />
              <span className="text-white text-xl">Konto</span>
            </Link>
          </div>
          <div className="main_item pt-6">
            {/* <Link href={'/dashboard/setting'} className="showItem flex items-center"> */}
            <Link href={'#'}
              onClick={() => setSelectedMenu(prev => ["setting", prev[1]])}
              className={` ${selectedMenu[0] == "setting" || path == "/dashboard/setting" ? 'bg-gradient-to-r' : ''}
              from-red-500/80 to-amber-500/80 showItem flex items-center`}>

              <IoSettingsSharp className="text-[#EDEDED]  text-xl" />
              <span className="text-white text-xl">Einstellung</span>
            </Link>
          </div>
        </div>
        <div className='contact'>
          <div className='wrapper'></div>
          <div className="main_item pt-6">
            {/* <Link href={'/about'} className="showItem flex items-center"> */}
            <Link href={'https://aliashouriyoun-beta-ochre.vercel.app/de'} className="showItem flex items-center">
              <FcAbout className="text-[#EDEDED]  text-xl" />
              <span className="text-xl">Über uns</span>
            </Link>
          </div>
          <div className="main_item pt-6">
            <Link href={'mailto:aliashouriyoun@tutamail.com'} className="showItem flex items-center">
              <MdEmail className="text-[#EDEDED]  text-xl" />
              <span className="text-xl">E-Mail</span>
            </Link>
          </div>
          <div className="main_item pt-6">
            <Link href={'mailto:aliashouriyoun@tutamail.com'} className="showItem flex items-center">
              <MdReport className="text-[#EDEDED] text-xl" />
              <span className="text-xl">Berichten</span>
            </Link>
          </div>
        </div>
      </div>
    </div>

  </>
}
export default DashboardMenu;
