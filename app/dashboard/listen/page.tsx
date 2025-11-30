"use client"
import { HiSpeakerWave } from "react-icons/hi2";
import { useState } from "react";
import { GoBook } from "react-icons/go";
import { FaPodcast } from "react-icons/fa";
import PodcastsPage from "@/app/components/listen/listenPodcasts";
import ListenFiles from "@/app/components/listen/listenFiles";
const Listen = () => {
  const [currentPath, setCurrentPath] = useState("listenFiles")
  return <>
    <div>

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
          <div onClick={() => setCurrentPath("listenFiles")}
            className={`flex cursor-pointer items-center gap-1 
          ${currentPath == "listenFiles" ? "bg-white" : "bg-transparent"} rounded-2xl w-[50%] justify-center`}>
            <HiSpeakerWave className="text-xl" />
            <span className="text-sm">Hördateien</span>
          </div>
          <div onClick={() => setCurrentPath("podcasts")}
            className={`flex cursor-pointer items-center gap-1 
          ${currentPath == "podcasts" ? "bg-white" : "bg-transparent"} rounded-2xl w-[50%] justify-center`}>
            <FaPodcast className="text-xl" />
            <span className="text-sm">Podcasts</span>
          </div>

        </div>
      </div>

    </div>
    {currentPath == "podcasts" && <PodcastsPage />}
    {currentPath == "listenFiles" && <ListenFiles />}
  </>
}
export default Listen;
