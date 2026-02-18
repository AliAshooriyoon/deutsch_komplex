"use client"

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const TestKI = () => {
  const [words, setWords] = useState("")
  const [level, setLevel] = useState("a1")
  const [response, setResponse] = useState<{ reply: string }>()
  const [wordsLength, setWordsLength] = useState(0)
  const [prompt, setPrompt] = useState("")
  const [loading, setLoading] = useState(false)
  const [loadingResp, setLoadingResp] = useState(false)
  const [allQuestions, setQuestions] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState<{ id: string; topic: string; level: string, content: string } | null>()
  const [token, setToken] = useState("")

  const { data: session, status } = useSession();

  useEffect(() => {
    // console.log("SESSION 👉", session);
  }, [session]);

  useEffect(() => {
    const getToken = async () => {
      const res = await fetch("/api/auth/session")
      const data = await res.json()
      if (data?.user?.id) {
        setToken(localStorage.getItem("nextauth.token") || "")
      }
    }
    getToken()
  }, [])

  useEffect(() => {
    if (prompt) sendReq()
  }, [prompt])

  useEffect(() => {
    getExam()
    setCurrentQuestion(null)
  }, [level])

  const getExam = async () => {
    if (session?.user?.role != "USER") return
    setLoading(true)
    const res = await fetch("/api/getExam", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ level })
    })
    if (!res.ok) throw new Error("Fehler beim Laden der Prüfung")
    const data = await res.json()
    setQuestions(data)
    setLoading(false)
  }

  const sendReq = async () => {
    if (!prompt) return
    if (session?.user?.role != "USER") return
    setLoadingResp(true)
    // const res = await fetch("http://localhost:8080/ai/chat", {
    const res = await fetch("/api/ai/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({ message: prompt })
    })
    if (!res.ok) throw new Error("Fehler beim AI Request")
    const data = await res.json()
    setResponse(data)
    setLoadingResp(false)
  }

  const sendRequestToWrite = () => {
    const length = words.split("\n").join(" ").split(" ").length
    setWordsLength(length)
    setPrompt(`Eingaben:
- Prüfungsniveau: ${level}
- Aufgabenstellung (Schreiben):
  ${currentQuestion?.content}
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
`)
  }

  return (
    <div className="">
      <div className="py-12">
        <div className={`text-xl leading-10 max-lg:leading-8 max-lg:px-4 max-lg:text-lg`}>
          {!loading ? currentQuestion?.content : <p className="lg:text-3xl text-red-500">Loading...</p>}
        </div>

        <div className={`py-24 ${session?.user.role == "USER" && "blur-xs"}`} >
          <div className={`flex justify-around flex-row-reverse max-lg:flex-col flex-wrap `}>
            <div className="flex items-center gap-6 text-lg max-lg:flex-col">
              <p className="lg:text-xl">Wähle die Frage aus!</p>
              <select onChange={(e) => {
                const selectedQuestion = allQuestions.find((q: { id: string, topic: string, level: string, content: string }) => q.topic === e.target.value)
                setCurrentQuestion(selectedQuestion || null)
              }} className="lg:px-8 max-lg:px-1 py-2 lg:text-2xl bg-gradient-to-r from-red-500 to-amber-500 rounded-2xl">
                <option value="">--- Wählen Sie eine Frage ---</option>
                {allQuestions.map((i: { id: string, topic: string }) =>
                  <option key={i.id} value={i.topic}>{i.topic.slice(0, 30)}...</option>
                )}
              </select>
            </div>

            <div className="flex max-lg:flex-col items-center gap-6 lg:text-lg">
              <p className="lg:text-xl">Wähle das Niveau</p>
              <select onChange={(e) => setLevel(e.target.value)} className="px-8 py-2 text-2xl bg-gradient-to-r from-red-500 to-amber-500 rounded-2xl">
                <option value="a1">A1</option>
                <option value="a2">A2</option>
                <option value="b1">B1</option>
                <option value="b2">B2</option>
                <option value="c1">C1</option>
              </select>
            </div>
          </div>

          <textarea onChange={(e) => setWords(e.target.value)}
            className="w-full mt-8 border-2 border-gray-800 rounded-xl leading-10 min-h-96 p-4 outline-0"
          />

          <div className="btn-box text-center py-6">
            <button disabled={session?.user?.role == "USER"} onClick={sendRequestToWrite} className="text-xl rounded-2xl bg-gradient-to-r from-red-500 to-amber-500 px-12 py-4">
              Shreibteil überprüfen
            </button>
          </div>
        </div>

        <div>
          <p className="text-xl">
            {!loadingResp ? response?.reply : <span>Wartung auf KI</span>}
          </p>
        </div>
      </div>
    </div>
  )
}

export default TestKI
