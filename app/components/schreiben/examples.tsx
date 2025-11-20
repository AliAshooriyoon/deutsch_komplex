"use client"

import { useEffect, useState } from "react";
import Example from "./example";

const Examples = () => {
  const [data, setData] = useState<Array<{ id: number, level: string, exam: string, topic: string, content: string }>>([
    {
      id: 0, level: "", exam: "", topic: "",
      content: ""
    }

  ])
  const examplesShow = async () => {
    const res = await fetch("/api/exampleShow",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ typeOfExam: "schreiben" })
      });
    const data = await res.json();
    if (res.ok) {
      setData(data)
    } else {
      alert("err!")
    }
  }
  useEffect(() => {
    examplesShow()
  }, [])

  return <>
    <div className="flex items-center justify-between flex-wrap gap-12 px-8 h-full">
      {data?.map(i => <Example key={i.id} item={i} />)}

    </div>
  </>
}
export default Examples;
