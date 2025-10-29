"use client"

import { useState } from "react"


const WordsList = () => {
  const [words, setWords] = useState([{ id: "", title: "", mean: "", level: "" }])
  const [loading, setLoading] = useState(false);
  const showWords = async (level: string) => {
    setLoading(true)
    const res = await fetch("/api/selectWord", {
      method: "POST", body: JSON.stringify({
        level
      })
    })
    if (!res.ok) {
      throw new Error("connection failed!")
    } else {
      setLoading(false)
    }
    const data = await res.json()
    setWords(data)
  }

  return <>
    <div className=''>
      <div className="selector pb-8">
        <p className="text-2xl py-8 max-lg:text-center">Wähle dein Niveau aus!</p>
        <div className="max-lg:pl-10">
          <select onChange={(e) => showWords(e.target.value)} className=" border-2 rounded-3xl
          text-2xl p-2 min-w-24 text-center">
            <option value={""} >Auswählen</option>
            <option value={"a1"}>a1</option>
            <option value={"a2"}>a2</option>
            <option value={"b1"}>b1</option>
            <option value={"b2"}>b2</option>
            <option value={"c1"}>c1</option>
          </select>

        </div>
      </div>
      <div className="flex flex-col gap-12 lg:p-12 max-lg:px-4 max-lg:w-full ">
        {!loading ? words[0].id && words.map(w => <div key={w.id}>
          <div className="border-2 rounded-3xl p-4 lg:text-xl flex gap-6 flex-col">
            <p className="">  <span className="text-yellow-500">Niveau :</span>
              <span className="lg:text-2xl max-lg:text-lg"> {w.level} </span>  </p>
            <p className="">  <span className="text-yellow-500">Wort :</span>
              <span className="lg:text-2xl max-lg:text-lg"> {w.title} </span>  </p>
            <p className="">  <span className="text-yellow-500">Bedeutung :</span>
              <span className="lg:text-2xl max-lg:text-lg"> {w.mean} </span>  </p>
          </div>
        </div>) : <div className="text-center text-3xl text-cyan-700">Loading...</div>}
      </div>
    </div>
  </>
}
export default WordsList;
