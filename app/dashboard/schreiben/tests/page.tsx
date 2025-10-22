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
1. Erstelle **zwei Aufgaben**: „Aufgabe 1“ und „Aufgabe 2“.
2. Schreibe **nur die Aufgabenstellung**, keine Erklärungen, keine Lösungen, keine Beispiele, keine zusätzlichen Hinweise.
3. Die Aufgaben müssen **exakt so formatiert** sein wie im echten ÖSD-Prüfungsheft.
4. Die Themen, Textlänge, Sprache und Anweisungen müssen sich strikt am angegebenen Sprachniveau orientieren:

   ${level == 'a1' && `### Niveau A1:
   - Sehr einfache Themen aus dem Alltag (z. B. Familie, Freizeit, Wohnen, Essen).
   - Kurze, klare Sätze (5–10 Wörter).
   - Keine Nebensätze.
   - Wortzahl: 30–50 Wörter pro Aufgabe.
   - Beispiel: Einladung, kurze Notiz, einfache E-Mail.
` }
${level == "a2" && `### Niveau A2:
   - Alltägliche Themen (z. B. Reisen, Arbeit, Gesundheit, Hobbys).
   - Einfache Hauptsätze, gelegentlich Nebensätze mit „weil“, „dass“.
   - Wortzahl: 50–80 Wörter pro Aufgabe.
   - Beispiel: E-Mail, kurze Beschwerde, persönliche Nachricht.
`}
${level == "b1" && `### Niveau B1:
   - Bekannte gesellschaftliche Themen (z. B. Umwelt, Medien, Bildung, Zusammenleben).
   - Verwendung von Konnektoren wie „obwohl“, „deshalb“, „außerdem“.
   - Wortzahl: 120–180 Wörter pro Aufgabe.
   - Beispiel: Leserbrief, Meinungsäußerung, kurzer Bericht.
` }
    
    ${level == "b2" && `
   ### Niveau B2:
   - Komplexere Themen (z. B. Digitalisierung, Arbeitswelt, soziale Fragen).
   - Verwendung von komplexeren Satzstrukturen und Konnektoren („trotzdem“, „denn“, „sowohl … als auch“, „im Gegensatz zu“).
   - Wortzahl: 200–250 Wörter pro Aufgabe.
   - Beispiel: Kommentar, Bericht, Argumentation.

`}
${level == "c1" && `### Niveau C1:
   - Anspruchsvolle Themen (z. B. gesellschaftliche Veränderungen, Globalisierung, Nachhaltigkeit, technologische Entwicklungen).
   - Hohe sprachliche Komplexität: erweiterte Satzstrukturen, gehobener Wortschatz, präzise Ausdrucksweise.
   - Wortzahl: 250–350 Wörter pro Aufgabe.
   - Beispiel: Kommentar, Analyse, kritische Stellungnahme.
`}
      
5. Struktur:
---
**Aufgabe 1 (30 Minuten)**
[Situationsbeschreibung 3–8 Sätze]
Schreiben Sie …
1) …
2) …
3) …
(Beginn: … / Ende: … / Wortzahl: laut Niveau)
---
**Aufgabe 2 (30 Minuten)**
[Situationsbeschreibung 3–8 Sätze]
Schreiben Sie …
1) …
2) …
3) …
(Wortzahl: laut Niveau)
---

7. Verwende kein Meta-Kommentar oder Einleitung — gib ausschließlich die Prüfungsaufgaben im ÖSD-Stil aus.
8. Jede Aufgabe soll realistisch, prüfungsnah und thematisch typisch für das Niveau sein.`,


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
