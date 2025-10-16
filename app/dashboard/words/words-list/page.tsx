"use client"

import { useState } from "react"


const WordsList = () => {
  const [words, setWords] = useState([{ id: 0, title: "", mean: "", level: "" }])
  const showWords = async (level: string) => {
    console.log(level)
    console.log("-------------level----------------")
    const res = await fetch("/api/selectWord", {
      method: "POST", body: JSON.stringify({
        level
      })
    })
    const data = await res.json()
    console.log(data)
    setWords(data)
  }

  return <>
    <div className=''>
      <div className="selector">
        <p className="text-2xl py-8">Wähle dein Niveau aus!</p>
        <select onChange={(e) => showWords(e.target.value)} className="border-2 rounded-3xl text-2xl p-2 min-w-24 text-center">
          <option value={""} disabled>Auswählen</option>
          <option value={"a1"}>a1</option>
          <option value={"a2"}>a2</option>
          <option value={"b1"}>b1</option>
          <option value={"b2"}>b2</option>
          <option value={"c1"}>c1</option>
        </select>
      </div>
      <div className="flex flex-col gap-12 p-12 ">
        {words.map(w => <div key={w.id}>
          <div className="border-2 rounded-3xl p-4 text-xl flex gap-6 flex-col">
            <p className="">  <span className="text-yellow-500">Niveau :</span>     <span className="text-2xl"> {w.level} </span>  </p>
            <p className="">  <span className="text-yellow-500">Wort :</span>       <span className="text-2xl"> {w.title} </span>  </p>
            <p className="">  <span className="text-yellow-500">Bedeutung :</span>  <span className="text-2xl"> {w.mean} </span>  </p>
          </div>
        </div>)}
      </div>
    </div>
  </>
}
export default WordsList;
