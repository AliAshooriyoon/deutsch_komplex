"use client"
import { LuFileCheck2 } from "react-icons/lu";
import { FaFileAlt } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { MdLightbulbOutline } from "react-icons/md";
import { useState } from "react";
import { GoBook } from "react-icons/go";
import Stories from "@/app/components/lesen/stories";

const Lesen = () => {
  const [currentPath, setCurrentPath] = useState("stories")
  return <>
    <div className="header__schreiben w-full ">
      <div className="schreiben__logo flex items-center gap-4">
        <div className="bg-gray-800  p-4 flex items-center rounded-2xl justify-center">
          <GoBook className="text-white text-4xl" />
        </div>
        <div className="texts__header flex flex-col">
          <p className="text-2xl">Lesen</p>
          <p className="">Verbessere dein Leseverstehen</p>
        </div>
      </div>
      <div className="menu_box w-[95%] mx-auto h-10 my-8 px-0.5 py-1 flex justify-between
          rounded-2xl bg-gray-300 ">
        <div onClick={() => setCurrentPath("stories")}
          className={`flex cursor-pointer items-center gap-1 
          ${currentPath == "stories" ? "bg-white" : "bg-transparent"} rounded-2xl w-[33.3%] justify-center`}>
          <FaBook className="text-xl" />
          <span className="text-sm">Geschichten</span>
        </div>
        <div onClick={() => setCurrentPath("example")}
          className={`flex cursor-pointer items-center gap-1 
          ${currentPath == "example" ? "bg-white" : "bg-transparent"} rounded-2xl w-[33.3%] justify-center`}>
          <FaFileAlt className="text-xl" />
          <span className="text-sm">Beispiele</span>
        </div>
        <div onClick={() => setCurrentPath("test")}
          className={`flex cursor-pointer items-center gap-1
           ${currentPath == "test" ? "bg-white" : "bg-transparent"} 
              rounded-2xl w-[33.3%] justify-center`}>
          <div className="inline-block">
            {/* Hidden defs SVG for the gradient definition */}
            <svg className="absolute w-0 h-0 overflow-hidden" aria-hidden="true">
              <defs>
                <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: "#ef4444" }} /> {/* Tailwind red-500 hex */}
                  <stop offset="100%" style={{ stopColor: "#f59e0b" }} /> {/* Tailwind amber-500 hex */}
                </linearGradient>
              </defs>
            </svg>

            {/* The Lucide icon, referencing the gradient */}
            <LuFileCheck2
              size={24} // Equivalent to size-16; adjust as needed
              strokeWidth={2.5} // Ensures visibility; default is 2
              stroke="url(#icon-gradient)" // References the gradient ID
              className="text-transparent" // Optional: prevents default color interference
            />
          </div>            <span className="text-sm font-bold bg-gradient-to-r bg-clip-text text-transparent from-red-500 to-amber-500">TestModelle (KI)</span>
        </div>
      </div>
    </div>
    <div className="">
      {currentPath == "stories" && <Stories />}
    </div>
  </>
}
export default Lesen;
