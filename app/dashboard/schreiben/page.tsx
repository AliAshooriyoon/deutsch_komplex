"use client"
import { LuPencilLine } from "react-icons/lu";
import { LuFileCheck2 } from "react-icons/lu";
import { FaFileAlt } from "react-icons/fa";
import { MdLightbulbOutline } from "react-icons/md";
import TippsComponent from "@/app/components/schreiben/tipps";
import { useState } from "react";
const Schreiben = () => {
  const [currentPath, setCurrentPath] = useState("tipps")
  return <>
    <div className=''>
      <div className="header__schreiben w-full ">
        <div className="schreiben__logo flex items-center gap-4">
          <div className="bg-red-600  p-4 flex items-center rounded-2xl justify-center">
            <LuPencilLine className="text-white text-4xl" />
          </div>
          <div className="texts__header flex flex-col">
            <p className="text-2xl">Schreiben</p>
            <p className="">Verbessere deinen schriftlichen Ausdruck</p>
          </div>
        </div>
        <div className="menu_box w-[95%] mx-auto h-10 my-8 px-0.5 py-1 flex justify-between
          rounded-2xl bg-gray-300 ">
          <div onClick={() => setCurrentPath("tipps")}
            className={`flex cursor-pointer items-center gap-1 
          ${currentPath == "tipps" ? "bg-white" : "bg-transparent"} rounded-2xl w-[33.3%] justify-center`}>
            <MdLightbulbOutline className="text-xl" />
            <span className="text-sm">Tipps zum Schreiben</span>
          </div>
          <div onClick={() => setCurrentPath("example")}
            className={`flex cursor-pointer items-center gap-1 
          ${currentPath == "example" ? "bg-white" : "bg-transparent"} rounded-2xl w-[33.3%] justify-center`}>
            <FaFileAlt className="text-xl" />
            <span className="text-sm">Beispiele</span>
          </div>
          <div onClick={() => setCurrentPath("test")}
            className={`flex cursor-pointer items-center gap-1
           ${currentPath == "test" ? "bg-white" : "bg-transparent"} rounded-2xl w-[33.3%] justify-center`}>
            <LuFileCheck2 className="text-xl" />
            <span className="text-sm">TestModelle</span>
          </div>
        </div>
      </div>
      <div className="">
        {currentPath == "tipps" && <TippsComponent />
        }
      </div>
    </div>
  </>
}
export default Schreiben;
