"use client";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { MdEmail, MdOutlineDarkMode } from "react-icons/md";
import { BiHomeAlt } from "react-icons/bi";
import { FcAbout } from "react-icons/fc";
import { MdReport, MdAccountCircle } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { VscSymbolKeyword } from "react-icons/vsc";
import { FaHeadphones, FaPenAlt, FaBookReader } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/public/de-icon.png"
import Image from "next/image";
const DashboardPhone = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(["home"]);
  const path = usePathname();

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-300 shadow-sm">
        <div className="flex items-center justify-between gap-4 h-16 px-5">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="text-gray-800"
          >
            {showMenu ? <IoClose size={32} /> : <IoMenu size={32} />}
          </button>

          <h1 className="text-xl flex items-center font-semibold text-gray-900 gap-2">
            <Image src={logo} alt="" className="w-10 h-10 border-2 border-black rounded-full" />
            <span>Deutsch komplex</span> </h1>

          <MdOutlineDarkMode size={28} className="text-gray-700 cursor-pointer" />
        </div>
      </div>

      <div
        className={`
          fixed inset-y-0 left-0 z-40 w-[75%] max-w-[320px] bg-gray-900 shadow-2xl
          transform-gpu               
          transition-transform 
          duration-500              
          ease-out-expo             
          ${showMenu ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex flex-col h-full pt-20 pb-6 overflow-y-auto">
          <nav className="flex-1 px-4 space-y-4">
            {/* Startseite */}
            <Link
              href="/"
              onClick={() => {
                setSelectedMenu(["home"]);
                setShowMenu(false);
              }}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl text-lg font-medium transition-all
                ${path === "/dashboard" || path === "/"
                  ? "bg-gradient-to-r from-red-600 to-amber-500 text-white shadow-lg"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
            >
              <BiHomeAlt size={22} />
              <span>Startseite</span>
            </Link>

            {/* Schreiben */}
            <Link
              href="/dashboard/schreiben"
              onClick={() => { setSelectedMenu(["schreiben"]); setShowMenu(false); }}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl text-lg font-medium transition-all
                ${path.includes("/schreiben") ? "bg-gradient-to-r from-red-600 to-amber-500 text-white shadow-lg" : "text-gray-300 hover:text-white hover:bg-white/10"}`}
            >
              <FaPenAlt size={20} />
              <span>Schreiben</span>
            </Link>

            {/* Lesen */}
            <Link href="/dashboard/lesen" onClick={() => { setSelectedMenu(["lesen"]); setShowMenu(false); }}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl text-lg font-medium transition-all
                ${path.includes("/lesen") ? "bg-gradient-to-r from-red-600 to-amber-500 text-white shadow-lg" : "text-gray-300 hover:text-white hover:bg-white/10"}`}>
              <FaBookReader size={20} />
              <span>Lesen</span>
            </Link>

            {/* Wörter */}
            <Link href="/dashboard/words" onClick={() => { setSelectedMenu(["words"]); setShowMenu(false); }}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl text-lg font-medium transition-all
                ${path.includes("/words") ? "bg-gradient-to-r from-red-600 to-amber-500 text-white shadow-lg" : "text-gray-300 hover:text-white hover:bg-white/10"}`}>
              <VscSymbolKeyword size={22} />
              <span>Wörter</span>
            </Link>

            {/* Hören */}
            <Link href="/dashboard/listen" onClick={() => { setSelectedMenu(["listen"]); setShowMenu(false); }}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl text-lg font-medium transition-all
                ${path.includes("/listen") ? "bg-gradient-to-r from-red-600 to-amber-500 text-white shadow-lg" : "text-gray-300 hover:text-white hover:bg-white/10"}`}>
              <FaHeadphones size={20} />
              <span>Hören</span>
            </Link>

            {/* Konto & Einstellung */}
            <div className="mt-8 mb-4 border-t border-white/10 pt-6">
              <Link href="/dashboard/account" onClick={() => { setSelectedMenu(["account"]); setShowMenu(false); }}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl text-lg font-medium transition-all
                  ${path.includes("/account") ? "bg-gradient-to-r from-red-600 to-amber-500 text-white shadow-lg" : "text-gray-300 hover:text-white hover:bg-white/10"}`}>
                <MdAccountCircle size={22} />
                <span>Konto</span>
              </Link>

              <Link href="#" onClick={() => setShowMenu(false)}
                className="flex items-center gap-4 px-4 py-3 rounded-xl text-lg font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all">
                <IoSettingsSharp size={22} />
                <span>Einstellungen</span>
              </Link>
            </div>

            {/* تماس و درباره ما */}
            <div className="border-t border-white/10 pt-6">
              <a href="https://aliashouriyoun-beta-ochre.vercel.app/de" target="_blank" rel="noopener"
                className="flex items-center gap-4 px-4 py-3 rounded-xl text-lg font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all">
                <FcAbout size={22} />
                <span>Über uns</span>
              </a>

              <a href="mailto:aliashouriyoun@tutamail.com"
                className="flex items-center gap-4 px-4 py-3 rounded-xl text-lg font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all">
                <MdEmail size={22} />
                <span>E-Mail</span>
              </a>

              <a href="mailto:aliashouriyoun@tutamail.com"
                className="flex items-center gap-4 px-4 py-3 rounded-xl text-lg font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all">
                <MdReport size={22} />
                <span>Berichten</span>
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* بک‌دراپ تیره + جلوگیری از اسکرول وقتی منو باز است */}
      {showMenu && (
        <>
          <div
            onClick={() => setShowMenu(false)}
            className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
          />
          <style jsx global>{`
            body { overflow: hidden; }
          `}</style>
        </>
      )}
    </>
  );
};

export default DashboardPhone;
