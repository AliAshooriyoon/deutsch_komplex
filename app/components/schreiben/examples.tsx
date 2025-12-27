"use client"

import { useEffect, useState } from "react";
import ExampleSchreiben from "./example";

const ExamplesSchreiben = () => {
  const [filter, setFilter] = useState("")
  const [showData, setShowData] = useState<Array<{ id: number, level: string, exam: string, topic: string, content: string }>>()
  const [data, setData] = useState<Array<{ id: number, level: string, exam: string, topic: string, content: string }>>([
    {
      id: 0, level: "", exam: "", topic: "",
      content: ""
    }

  ])
  const [isLoading, setIsLoadnig] = useState(false)
  const examplesShow = async () => {
    setIsLoadnig(true)
    const res = await fetch("/api/exampleShow",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ typeOfExam: "schreiben" })
      });
    const data = await res.json();
    if (res.ok) {
      setData(data)
      setShowData(data)
      setIsLoadnig(false)
    } else {
      return <p className="text-red-500 text-center text-4xl">Connecting error!</p>
    }
  }
  useEffect(() => {
    examplesShow()
  }, [])

  useEffect(() => {
    setShowData(prev => filter != "" ? data.filter((i) => i.level == filter) : data)
  }, [filter])

  return <>
    <div className="">
      <div className="flex items-center gap-4 p-8">
        <p className="lg:text-xl pl-4">Wähle das Niveau aus</p>
        <select className="p-4  rounded-2xl lg:text-xl" onChange={(e) => setFilter(e.target.value)}>
          <option value={""}>Alle</option>
          <option value={"a1"}>A1</option>
          <option value={"a2"}>A2</option>
          <option value={"b1"}>B1</option>
          <option value={"b2"}>B2</option>
          <option value={"c1"}>C1</option>
        </select>


      </div>
      <div className="flex items-center justify-between flex-wrap gap-12 bg-wahite
      max-lg:px-4 lg:px-8py-12 h-full">
        {!isLoading ? showData?.map(i => <ExampleSchreiben key={i.id} item={i} />) : <p className="text-red-500 text-2xl">Loading...</p>}
        {/* {!isLoading ? data?.map(i => <ExampleSchreiben key={i.id} item={i} />) : <p className="text-red-500 text-2xl">Loading...</p>} */}

      </div>
    </div>
  </>
}
export default ExamplesSchreiben;
