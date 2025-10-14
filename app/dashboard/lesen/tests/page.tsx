'use client'
import { useState } from "react"
const TestsLesen = () => {
  const [answer, setAnswer] = useState('')
  const [level, setLevel] = useState('')
  const createExam = async () => {
    const res = await fetch("/api/createExam", {
      method: "POST",
      body: JSON.stringify({
        message: `Create one german exam for lesen like ÖSD
      in level ${level}. Write not answer the questions. exam should be like official exams `
      })
    })
    const data = await res.json();
    setAnswer(data.reply)
  }


  return <>
    <div className=''>
      <div className='text-2xl flex flex-col items-start gap-12'>
        <p className="text-xl text-center py-12">{answer}</p>
        <p className='text-2xl '>Eine Prüfung auswählen</p>
        <select onChange={(e) => setLevel(e.target.value)}
          className="w-32 border-2 py-2 px-5 rounded-2xl">
          <option value={'a1'}>A1</option>
          <option value={'a2'}>A2</option>
          <option value={'b1'}>B1</option>
          <option value={'b2'}>B2</option>
          <option value={'c1'}>C1</option>
        </select>
        <button onClick={createExam} className="cursor-pointer border-2 p-2 rounded-2xl">Prüfung erstellen</button>
      </div>
    </div>
  </>
}
export default TestsLesen;
