"use client"
import { useEffect, useState } from "react";
import ExampleLesen from "./example";

const ExamplesLesen = () => {
  const [filterLevel, setFilterLevel] = useState("")
  const [filterCenter, setFilterCenter] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showData, setShowData] = useState<Array<{ id: number, level: string, exam: string, topic: string, content: string }>>()
  const [data, setData] = useState<Array<{
    id: number, topic: string,
    content: string, level: string, exam: string
  }>>()
  const getData = async () => {
    setIsLoading(true)
    const res = await fetch("/api/showExamples", {
      method: "POST", body: JSON.stringify({ type: "lesen" })
    })
    const data = await res.json()
    setData(data)
    setShowData(data)
    if (res.ok) {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    setShowData(prev => filterLevel != "" && filterCenter != "" ? data?.filter((i) => (i.level == filterLevel && i.exam == filterCenter)) :
      filterLevel != "" ? data?.filter((i) => i.level == filterLevel) : filterCenter != "" ? data?.filter((i) => i.exam == filterCenter) : data)
  }, [filterLevel, filterCenter])


  return <>
    <div className="">
      <div className="flex justify-between lg:px-8 max-lg:flex-col">
        <div className="flex items-center gap-4 p-4">
          <p className="lg:text-xl pl-2">Wähle das Niveau aus</p>
          <select className="p-4 border-2 rounded-2xl lg:text-xl" onChange={(e) => setFilterLevel(e.target.value)}>
            <option value={""}>Alle</option>
            <option value={"a1"}>A1</option>
            <option value={"a2"}>A2</option>
            <option value={"b1"}>B1</option>
            <option value={"b2"}>B2</option>
            <option value={"c1"}>C1</option>
          </select>


        </div>
        <div className="flex items-center gap-4 p-4">
          <p className="lg:text-xl pl-2">Wähle das Prüfungszentrum aus</p>
          <select className="p-4 border-2 rounded-2xl lg:text-xl" onChange={(e) => setFilterCenter(e.target.value)}>
            <option value={""}>Alle</option>
            <option value={"ÖSD"}>ÖSD</option>
            <option value={"TELC"}>TELC</option>
            <option value={"GOETHE"}>GOETHE</option>
          </select>



        </div>
      </div>
      <div className="flex items-center justify-between flex-wrap gap-12 py-12 max-lg:px-4 lg:px-8 h-full">
        {!isLoading ? showData?.map(i => <ExampleLesen key={i.id} item={i} />) : <p className="text-red-500 text-2xl">Loading...</p>}

      </div>
    </div>
  </>
}
export default ExamplesLesen;
