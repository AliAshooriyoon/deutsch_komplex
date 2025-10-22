"use client"

import { useEffect, useState } from "react"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
const TestsSchreiben = () => {
  const [level, setLevel] = useState('');
  const [a2Exams, setA2Exams] = useState([{ id: "", topic: "", content: "" }])
  const [b1Exams, setB1Exams] = useState([{ id: "", topic: "", content: "" }])
  const [answer, setAnswer] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const examData = async () => {
    setIsLoading(true)
    console.log("------------data--------------")
    const req = await fetch("http://localhost:3000/api/exams")
    if (!req.ok) {
      console.log("-----------------Error----------------")
      throw new Error("Connection Error!")

    } else {
      setIsLoading(false)
      const data = await req.json()
      const a2Exams = data.filter((d: Record<string, string | number>) => d.level == "a2")
      const b1Exams = data.filter((d: Record<string, string | number>) => d.level == "b1")
      setA2Exams(a2Exams)
      setB1Exams(b1Exams)
    }

  }

  const createExam = async () => {
    setIsLoading(true)
    const res = await fetch("/api/createExam", {
      method: "POST",
      body: JSON.stringify({
        message: `Du bist ein Prüfungsaufgabengenerator für schriftliche ÖSD-Prüfungen.
            Erzeuge ausschließlich die Prüfungsaufgaben (Schreiben) im exakten Format
            einer echten ÖSD-Prüfung für das angegebene Niveau.

Level: ${level}

Regeln:
1. Erzeuge zwei Aufgaben: "Aufgabe 1" und "Aufgabe 2".
2. Schreibe nur den Aufgaben-Text, keine Erklärungen, keine Lösungen, keine Hinweise.
3. Format und Sprache müssen genau wie im echten ÖSD-Examen sein.
4. Gib realistische Themen (z. B. Arbeit, Umwelt, Technologie, Reisen, Beziehungen).
5. Sprache: Deutsch.
6. Struktur:
   ---
   Aufgabe 1 (XX Minuten)
   [Situationsbeschreibung 4–8 Sätze]
   Schreiben Sie ...
   1) ...
   2) ...
   3) ...
   [Beginn- und Endvorgabe falls nötig, Wortzahl in Klammern]
   ---
   Aufgabe 2 (XX Minuten)
   [Beschreibung 4–10 Sätze]
   Schreiben Sie ...
   1) ...
   2) ...
   3) ...
   [Wortzahlangabe]
   ---
7. Wenn das Level nicht A1, A2, B1, B2 oder C1 ist, gib nichts zurück.
8. Antworte nur mit der Prüfungsaufgabe, keine Meta-Kommentare.

Wort- und Zeitvorgaben:
A1: 20 Min / 25–50 Wörter
A2: 30 Min / 50–80 Wörter
B1: 40 Min / 100–150 Wörter
B2: 45 Min / 180–220 Wörter
C1: 60 Min / 250–350 Wörter`,


        adminMessage: `
        Du bist ein Prüfungsaufgabengenerator für schriftliche ÖSD-Prüfungen. 
        Erzeuge **ausschließlich** die Prüfungsaufgaben (Schreiben) im exakten Format einer ÖSD-Prüfung für das angegebene Niveau. 
        Antworte **nur** mit dem Prüfungsblatt (ohne Einleitung, ohne Erklärungen, ohne Beispiele, ohne Lösungen, keine Meta-Kommentare).
` })
    })
    const data = await res.json();
    setAnswer(data.reply)
    if (data && res.ok) {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    examData()

  }, [])


  return (
    <>
      <div className=''>
        <div className='text-2xl flex flex-col items-start gap-12'>
          <div className="w-full text-center"> {isLoading ? <SkeletonTheme baseColor="#202020" highlightColor="#444"
            width={'calc(100% - 25rem)'} borderRadius={'3rem'} height={'15rem'}>
            <Skeleton /> </SkeletonTheme> :
            <p className="text-xl text-center py-12">{answer}</p>
          } </div>
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
