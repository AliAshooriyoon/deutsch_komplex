"use client"

import { useEffect, useState } from "react"

const TestsSchreiben = () => {
  const [a2Exams, setA2Exams] = useState([{ id: "", topic: "", content: "" }])
  const [b1Exams, setB1Exams] = useState([{ id: "", topic: "", content: "" }])
  const examData = async () => {
    console.log("------------data--------------")
    const req = await fetch("http://localhost:3000/api/exams")
    if (!req.ok) {
      console.log("-----------------Error----------------")
      throw new Error("Connection Error!")

    } else {
      const data = await req.json()
      const a2Exams = data.filter((d: Record<string, string | number>) => d.level == "a2")
      const b1Exams = data.filter((d: Record<string, string | number>) => d.level == "b1")
      setA2Exams(a2Exams)
      setB1Exams(b1Exams)
    }

  }
  useEffect(() => {
    examData()

  }, [])


  return (
    <>
      <div className=''>

        <div className=" flex flex-col gap-16 my-12">
          <h2 className="text-3xl text-center">Niveau A2</h2>
          {a2Exams.map(i => <div key={i.id} className="border-2 p-4 rounded-2xl flex flex-col
            justify-between gap-16 ">

            <div className=" text-left">
              <p className="title_schreiben text-2xl py-3">Thema : </p>
              <p className="text-xl">{i.topic}</p>
            </div>
            <div className="text-xl text-left ">
              <p className="py-6 text-2xl">Lösung : </p>
              <p className="">
                {i.content}
              </p>
            </div>
          </div>)}
        </div>

        <div className=" flex flex-col gap-16 my-12">
          <h2 className="text-3xl text-center">Niveau B1</h2>
          {b1Exams.map(i => <div key={i.id} className="border-2 p-4 rounded-2xl flex flex-col
            justify-between gap-16 ">

            <div className=" text-left">
              <p className="title_schreiben text-2xl py-3">Thema : </p>
              <p className="text-xl">{i.topic}</p>
            </div>
            <div className="text-xl text-left ">
              <p className="py-6 text-2xl">Lösung : </p>
              <p className="">
                {i.content}
              </p>
            </div>
          </div>)}
        </div>
      </div>
    </>)
}
export default TestsSchreiben;
