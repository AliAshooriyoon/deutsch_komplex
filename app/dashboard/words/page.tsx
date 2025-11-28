"use client"
import LainterBox from "@/app/components/words/lainterBox";
import { useState } from "react";
import { LuPencilLine } from "react-icons/lu";
import { LuLayers } from "react-icons/lu";
import { LiaBoxSolid } from "react-icons/lia";
import WordsList from "@/app/components/words/wordsList";

const Words = () => {
  const [currentPath, setCurrentPath] = useState("lainter")
  return <>
    <div className="header__schreiben w-full ">
      <div className="schreiben__logo flex items-center gap-4">
        <div className="bg-gradient-to-r from-red-600/90 to-amber-500/90  p-4 flex items-center rounded-2xl justify-center">
          <LuPencilLine className="text-white text-4xl" />
        </div>
        <div className="texts__header flex flex-col">
          <p className="text-2xl">Wörter</p>
          <p className="">Erweitere deinen Wortschatz</p>
        </div>
      </div>
      <div className="menu_box w-[95%] mx-auto h-10 my-8 px-0.5 py-1 flex justify-between
          rounded-2xl bg-gray-300 ">
        <div onClick={() => setCurrentPath("lainter")}
          className={`flex cursor-pointer items-center gap-1 
          ${currentPath == "lainter" ? "bg-white" : "bg-transparent"}
            rounded-2xl w-[50%] justify-center`}>
          <LiaBoxSolid className="text-xl" />
          <span className="text-sm">lainter</span>
        </div>
        <div onClick={() => setCurrentPath("words")}
          className={`flex cursor-pointer items-center gap-1 
          ${currentPath == "words" ? "bg-white" : "bg-transparent"} rounded-2xl w-[50%] justify-center`}>
          <LuLayers className="text-xl" />
          <span className="text-sm">Wörter nach Niveaus</span>
        </div>
      </div>
    </div>
    {currentPath == "lainter" && <LainterBox />}
    {currentPath == "words" && <WordsList />}
  </>
}
export default Words;
