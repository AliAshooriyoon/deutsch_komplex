"use client"

import { useEffect, useState } from "react"

const TestsSchreiben = () => {
  const [level, setLevel] = useState('');
  const [a2Exams, setA2Exams] = useState([{ id: "", topic: "", content: "" }])
  const [b1Exams, setB1Exams] = useState([{ id: "", topic: "", content: "" }])
  const [answer, setAnswer] = useState('Nothing')
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

  const createExam = async () => {
    const res = await fetch("/api/createExam", {
      method: "POST",
      body: JSON.stringify({ message: `Create one german exam for Schreiben like ÖSD in level ${level}. Write not answer the exam and write just title of exam, title of question and points of question and nothing else! title of exam should be like official exams ` })
    })
    const data = await res.json();
    console.log("----------Data Answer---------------")
    console.log(data.reply)
    setAnswer(data.reply)
  }

  useEffect(() => {
    examData()

  }, [])


  return (
    <>
      <div className=''>
        <div className='text-2xl flex flex-col items-start gap-12'>
          {answer}
          <p className='text-2xl '>Eine Prüfung auswählen</p>
          <select onChange={(e) => setLevel(e.target.value)} className="w-32 border-2 py-2 px-5 rounded-2xl">
            <option value={'a2'}>A2</option>
            <option value={'b1'}>B1</option>
          </select>
          <button onClick={createExam} className="cursor-pointer border-2 p-2 rounded-2xl">Prüfung erstellen</button>
        </div>

        {/* <div className=" flex flex-col gap-16 my-12"> */}
        {/* <h2 className="text-3xl text-center">Niveau A2</h2> */}
        {/* {a2Exams.map(i => <div key={i.id} className="border-2 p-4 rounded-2xl flex flex-col */}
        {/*   justify-between gap-16 "> */}
        {/**/}
        {/*   <div className=" text-left"> */}
        {/*     <p className="title_schreiben text-2xl py-3">Thema : </p> */}
        {/*     <p className="text-xl">{i.topic}</p> */}
        {/*     </div> */}
        {/*     <div className="text-xl text-left "> */}
        {/*       <p className="py-6 text-2xl">Lösung : </p> */}
        {/*       <p className=""> */}
        {/*         {i.content} */}
        {/*       </p> */}
        {/*     </div> */}
        {/*   </div>)} */}
        {/* </div> */}

        {/* <div className=" flex flex-col gap-16 my-12"> */}
        {/*   <h2 className="text-3xl text-center">Niveau B1</h2> */}
        {/*   {b1Exams.map(i => <div key={i.id} className="border-2 p-4 rounded-2xl flex flex-col */}
        {/*     justify-between gap-16 "> */}
        {/**/}
        {/*     <div className=" text-left"> */}
        {/*       <p className="title_schreiben text-2xl py-3">Thema : </p> */}
        {/*       <p className="text-xl">{i.topic}</p> */}
        {/*     </div> */}
        {/*     <div className="text-xl text-left "> */}
        {/*       <p className="py-6 text-2xl">Lösung : </p> */}
        {/*       <p className=""> */}
        {/*         {i.content} */}
        {/*       </p> */}
        {/*     </div> */}
        {/*   </div>)} */}
        {/* </div> */}
      </div>
    </>)
}
export default TestsSchreiben;
