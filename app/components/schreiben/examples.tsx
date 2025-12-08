"use client"

import { useEffect, useState } from "react";
import ExampleSchreiben from "./example";

const ExamplesSchreiben = () => {
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
      setIsLoadnig(false)
    } else {
      return <p className="text-red-500 text-center text-4xl">Connecting error!</p>
    }
  }
  useEffect(() => {
    examplesShow()
  }, [])

  return <>
    <div className="flex items-center justify-between flex-wrap gap-12 bg-wahite
      max-lg:px-4 lg:px-8py-12 h-full">
      {!isLoading ? data?.map(i => <ExampleSchreiben key={i.id} item={i} />) : <p className="text-red-500 text-2xl">Loading...</p>}

    </div>
  </>
}
export default ExamplesSchreiben;
