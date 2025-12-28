
"use client"
import StoryBox from "./storyBox";

import { useEffect, useState } from "react";
const Stories = () => {
  const [filterLevel, setFilterLevel] = useState("")
  const [showData, setShowData] = useState<Array<{ id: number, level: string, title: string, content: string }>>()
  const [stories, setStories] = useState<Array<{ id: number, level: string, title: string, content: string }>>();
  const [isLoading, setIsLoading] = useState(false)
  const getData = async () => {
    setIsLoading(true)
    const res = await fetch("/api/findStories")
    const data = await res.json();
    setShowData(data)
    setStories(data)
    if (res.ok) {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    setShowData(prev => filterLevel != "" ? stories?.filter((s) => s.level == filterLevel) : stories)
  }, [filterLevel])

  return <>
    <div className="">
      <div className=""></div>
      <div className="flex items-center gap-4 p-8">
        <p className="lg:text-xl pl-4">Wähle das Niveau aus</p>
        <select className="p-4 border-2 rounded-2xl lg:text-xl" onChange={(e) => setFilterLevel(e.target.value)}>
          <option value={""}>Alle</option>
          <option value={"a1"}>A1</option>
          <option value={"a2"}>A2</option>
          <option value={"b1"}>B1</option>
          <option value={"b2"}>B2</option>
          <option value={"c1"}>C1</option>
        </select>
      </div>
      <div className="p-6 flex flex-wrap justify-between max-lg:flex-col gap-12">

        {!isLoading ? showData?.map((d) => <StoryBox key={d.id} data={d} />) :
          <p className="text-red-500 text-center text-2xl"> <span>Loading...</span> </p>}

      </div>

    </div>
  </>
}
export default Stories;
