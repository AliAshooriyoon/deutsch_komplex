"use client"

import { useState } from "react";

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
      // throw new Error("connection failed!")
      return <div className="text-red-500">connection failed!</div>
    } else {
      setLoading(false)
    }
    const data = await res.json()
    setWords(data)
  }

  return <>
    <div className="">
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
    </div>
  </>
}
export default WordsList;
