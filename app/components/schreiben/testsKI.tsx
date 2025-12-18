"use client"




import { useEffect, useState } from "react";

const TestKI = () => {
  const [words, setWords] = useState("")
  const [level, setLevel] = useState("a1")
  const [response, setResponse] = useState("")
  const [wordsLength, setWordsLength] = useState(0)
  const [prompt, setPrompt] = useState("")
  const [loading, setLoading] = useState(false)
  const [allQuestions, setQuestions] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState<{ id: string; topic: string; level: string, content: string }>()

  useEffect(() => {
    getExam()
    console.log(currentQuestion)
  }, [level])

  const getExam = async () => {
    setLoading(true)
    const res = await fetch("/api/getExam", {
      method: "POST", body: JSON.stringify({
        level
      })
    })
    if (!res.ok) {
      throw new Error("err!")
    }
    const data = await res.json()
    setLoading(false)
    setQuestions(data)
  }

  const sendReq = async () => {
    const req = await fetch("/api/createExam", {
      method: "POST", body: JSON.stringify({
        message: prompt
      })
    })
    if (!req.ok) {
      throw new Error("err!")
    }
    const res = await req.json()
    setResponse(res)
  }


  const sendRequestToWrite = () => {
    const length = words.split("\n").join(" ").split(" ").length
    setWordsLength(length)
    setPrompt(`Eingaben:
- Prüfungsniveau: ${level}
- Aufgabenstellung (Schreiben):
<Hier die originale Aufgabenstellung einfügen>
- Text des Kandidaten:
${words}

Aufgabe:
Bewerte den Text streng nach ÖSD-Kriterien für das angegebene Niveau.
Bewertungskriterien:
- Inhalt und Aufgabenbewältigung
- Textaufbau und Kohärenz
- Wortschatz (Niveauangemessenheit)
- Grammatik und Satzbau
- Register und formeller Stil (falls erforderlich)

Ausgabeformat:
1. Gesamtpunktzahl (realistische ÖSD-Bewertung)
2. Kurze Gesamtbewertung (2–3 Sätze)
3. Detaillierte Fehlerliste:
   - Grammatik
   - Wortschatz
   - Satzstellung
   - Register / Stil
4. Korrigierte Version des Textes
5. Kurze Empfehlung, was verbessert werden muss, um die nächste Niveaustufe zu erreichen

Regeln:
- Schreibe ausschließlich auf Deutsch.
- Sei objektiv, sachlich und prüfungsnah.
- Keine pädagogischen Erklärungen.
- Keine Motivationstexte.
- Bewerte nicht milder als in einer echten ÖSD-Prüfung.

`
    )
    sendReq()
  }



  return <>
    <div className="">
      <div className="">
        <div className="py-12">
          <p className="text-xl leading-10 max-lg:leading-8 max-lg:px-4 max-lg:text-lg">
            {!loading ? currentQuestion?.content : <p className="lg:text-3xl text-red-500">Loading...</p>}
          </p>
          <div className="py-24">
            <div className="flex justify-around flex-row-reverse max-lg:flex-col flex-wrap">
              <div className="flex items-center gap-6 text-lg max-lg:flex-col">
                <p className="lg:text-xl">Wähle das Niveau dieser Prüfung aus!</p>
                <select onChange={(e) => setLevel(e.target.value)} className="lg:px-8 max-lg:px-1 py-2 lg:text-2xl bg-gradient-to-r from-red-500 to-amber-500 rounded-2xl">
                  {allQuestions && allQuestions.map((i: { id: string, topic: string, level: string, content: string }) =>
                    <option onClick={() => setCurrentQuestion(i)} key={i.id} value={i.topic} >
                      {`${i.topic.split("").slice(0, 30).join("")}...`}</option>)}
                </select>
              </div>


              <div className="flex max-lg:flex-col items-center gap-6 lg:text-lg">
                <p className="lg:text-xl">Wähle das Niveau dieser Prüfung aus!</p>
                <select onChange={(e) => setLevel(e.target.value)} className="px-8 py-2 text-2xl bg-gradient-to-r from-red-500 to-amber-500 rounded-2xl">
                  <option value={"a1"} >A1</option>
                  <option value={"a2"}>A2</option>
                  <option value={"b1"}>B1</option>
                  <option value={"b2"}>B2</option>
                  <option value={"c1"}>C1</option>
                </select>
              </div>
            </div>
            <p className="py-4 px-6">Länge: {wordsLength} </p>
            <textarea onChange={(e) => setWords(e.target.value)}
              className={`w-full border-2 border-gray-800 rounded-xl leading-10 min-h-96 p-4 outline-0`} />
            <div className="btn-box text-center py-6">
              <button onClick={sendRequestToWrite} className="text-xl rounded-2xl bg-gradient-to-r from-red-500 to-amber-500 px-12 py-4">
                Shreibteil überprüfen</button>
            </div>
          </div>
          <div>
            {response}
          </div>
        </div>
      </div>
    </div>
  </>
}
export default TestKI;
