"use client"
import { useEffect, useState } from "react";
import ExampleLesen from "./example";

const ExamplesLesen = () => {
  const [isLoading, setIsLoading] = useState(false)
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
    if (res.ok) {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    getData()
  }, [])
  return <>
    <div className="flex items-center justify-between flex-wrap gap-12 py-12 max-lg:px-4 lg:px-8 h-full">
      {!isLoading ? data?.map((i) => <ExampleLesen key={i.id} item={i} />) :
        <div className=""> <p className="text-2xl text-red-500">Loading...</p> </div>}

    </div>
  </>
}
export default ExamplesLesen;
