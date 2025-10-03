"use client"
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import { FcAbout } from "react-icons/fc";
import { MdReport } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { TiMediaRecord } from "react-icons/ti";
import { IoSettingsSharp } from "react-icons/io5";
import { VscSymbolKeyword } from "react-icons/vsc";
import { FaHeadphones } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaBookReader, FaPenAlt } from "react-icons/fa";
import Link from "next/link";
import Logo from "../../../public/de-icon.png";
import { useStatus } from "@/app/zustand";
import { useState } from "react";
import { usePathname } from "next/navigation";


const DashboardMenu = () => {
  const [selectedMenu, setSelectedMenu] = useState(["", false])
  const changeStatus = useStatus(state => state.changeStatus)
  const path = usePathname()
  return <>
    <div className="dashboard_menu fixed w-[22rem] left-0 top-0 bg-[#4a4b4e] px-4 pl-6 rounded-r-3xl h-screen flex flex-col">
      <Link href={'/dashboard'} className="logoBox flex items-center gap-3 text-2xl py-4  shrink-0">
        <Image alt="" src={Logo} />
        <p>Deutsch komplex </p>
      </Link>

      <div className="items flex-1 min-h-0 flex flex-col gap-8 overflow-y-auto pr-2">
        <div className='wrapper'></div>
        <div className="main_item schreiben">
          <p onClick={() => setSelectedMenu(state => ["schreiben", !state[1]])} className="showItem flex items-center">
            <FaPenAlt />
            <p>Schreiben</p>
            {selectedMenu[0] == "schreiben" && selectedMenu[1] &&
              <TiArrowSortedDown className="absolute right-10" />}
          </p>
          {selectedMenu[0] == "schreiben" && selectedMenu[1] &&
            <ul className=" flex flex-col text-lg gap-5 indent-4">
              <Link className={`${path == '/dashboard/schreiben/tipps' && 'underline text-[#FFBF08]'}`}
                href={'/dashboard/schreiben/tipps'}>
                Tipps zum Schreiben </Link>
              <Link className={`${path == '/dashboard/schreiben/example' && 'underline text-[#FFBF08]'}`}
                href={'/dashboard/schreiben/example'}>Beispiele zum Schreiben</Link>
              <Link
                className={`${path == '/dashboard/schreiben/tests' && 'underline text-[#FFBF08]'}`}
                href={'/dashboard/schreiben/tests'}>Test-modelle</Link>
            </ul>}
        </div>

        <div className="main_item">
          <p onClick={() => setSelectedMenu(prev => ["lesen", !prev[1]])} className="showItem flex items-center">
            <FaBookReader />
            <span>Lesen</span>
          </p>
          {selectedMenu[0] == "lesen" && selectedMenu[1] &&
            <ul className=" flex flex-col text-lg gap-5 indent-4">
              <Link className={`${path == '/dashboard/lesen/stories' && 'underline text-[#FFBF08]'}`}
                href={'/dashboard/lesen/stories'}>
                Geschichten </Link>
              <Link className={`${path == '/dashboard/lesen/texts' && 'underline text-[#FFBF08]'}`}
                href={'/dashboard/lesen/texts'}>Beispiele zum Schreiben</Link>
              <Link
                className={`${path == '/dashboard/lesen/tests' && 'underline text-[#FFBF08]'}`}
                href={'/dashboard/lesen/tests'}>Test-modelle</Link>
            </ul>}
        </div>
        <div className="main_item">
          <Link href={'/dashboard/worter'} className="showItem flex items-center">
            <VscSymbolKeyword />
            <span>Wörter</span>
          </Link>

        </div>

        <div className="main_item">
          <Link href={'/'} className="showItem flex items-center">
            <FaHeadphones />
            <span> Hören</span>
          </Link>

        </div>

        <div className='account'>
          <div className='wrapper' />
          <div className="main_item pt-6">
            <Link href={'/dashboard/account'} className="showItem flex items-center">
              <MdAccountCircle className="" />
              <span>Konto</span>
            </Link>
          </div>
          <div className="main_item pt-6">
            <Link href={'/dashboard/setting'} className="showItem flex items-center">
              <IoSettingsSharp className="" />
              <span>Einstellung</span>
            </Link>
          </div>
        </div>
        <div className='contact'>
          <div className='wrapper'></div>
          <div className="main_item pt-6">
            <Link href={'/about'} className="showItem flex items-center">
              <FcAbout className="" />
              <span>Über uns</span>
            </Link>
          </div>
          <div className="main_item pt-6">
            <Link href={'/about'} className="showItem flex items-center">
              <MdEmail />
              <span>E-Mail</span>
            </Link>
          </div>
          <div className="main_item pt-6">
            <Link href={'/report'} className="showItem flex items-center">
              <MdReport />
              <span>Berichten</span>
            </Link>
          </div>
        </div>
      </div>
    </div>

  </>
}
export default DashboardMenu;
