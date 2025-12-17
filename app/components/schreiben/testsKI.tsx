"use client"

const prompt = `
Eingaben:
- Prüfungsniveau:  
- Aufgabenstellung (Schreiben):
<Hier die originale Aufgabenstellung einfügen>
- Text des Kandidaten:
<Hier den Text des Kandidaten einfügen>

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


import { useEffect, useState } from "react";

const TestKI = () => {
  const [words, setWords] = useState("")
  const [level, setLevel] = useState("a1")
  const [wordsLength, setWordsLength] = useState(0)
  useEffect(() => {
    calcWordsLength()
    console.log(words)
  }, [words])
  const calcWordsLength = () => {
    const length = words.split("\n").join(" ").split(" ").length
    console.log(length)
    setWordsLength(length)
    const newPrompt = prompt.split("")
    newPrompt[29] = level
    console.log(newPrompt.join(""))
  }


  return <>
    <div className="">
      <div className="">
        <div className="py-12">
          <p className="text-xl leading-10 max-lg:leading-8 max-lg:px-4 max-lg:text-lg">
            Die ist ein Beispiel für einen Blindtext, der auf deutsch geschrieben ist. Es gibt noch viele weitere Arten des Hauses, wobei die ersten Menschen heute nicht sind. Zudem sind Beispiele jetzt noch frei, denn man sollte bedenken, der Text macht wenig Sinn. Mit brausender Geschwindigkeit war der Titel des neuen Boots in naher Ferne, weshalb sich der Briefträger einen roten Mantel zur Reinigung brachte. Ein weiterer Punkt wäre es, die verständliche Blindtexte heute noch anzurufen denn der Tisch steht im Gang. Zur damaligen Zeit war es eher üblich, die gebrauchten Handtücher mittels Fensterreiniger auszulüften, um auch die Wanduhr als Beispiel richtig auszurichten.
            Da sitzt er in einer Vorlesung, die sich wundervoll nennt. Diese Spinne ermüdet sich gerade wieder. Deshalb haben keine großen Tabellen Attribute und stehen im Verhältnis kursiv. In dieser Woche lernen die Studierenden relevanter Ereignisse eigentlich nur kompletten Spass. Aber aus Sich der Mitarbeiter ist der Meinung, dass alles was zuzuordnen war Relavanz und Einfachheit ist.
            Es ist heute ziemlich kühles Wetter und die Sonne scheint ein wenig. Dieser Beispieltext dient gerade einen Entwickler weil die Rose blüht und man schreiben soll. Die Parteien glauben doch nicht ernsthaft, dass es das Beispiel als Blindtext ist. Eine weitere Konstante befindet sich am Horizont. Ich muss mir das durchlesen. Was als Beispieltext gelesen wird, kommt auf
          </p>
          <div className="py-24">
            <div className="flex items-center gap-6 text-lg">
              <p>Wähle das Niveau dieser Prüfung aus!</p>
              <select onChange={(e) => setLevel(e.target.value)} className="px-8 py-2 text-2xl bg-gradient-to-r from-red-500 to-amber-500 rounded-2xl">
                <option value={"a1"} >A1</option>
                <option value={"a2"}>A2</option>
                <option value={"b1"}>B1</option>
                <option value={"b2"}>B2</option>
                <option value={"c1"}>C1</option>
              </select>
            </div>
            <p className="py-4 px-6">Länge: {wordsLength} </p>
            <textarea onChange={(e) => setWords(e.target.value)}
              className={`w-full border-2 border-gray-800 rounded-xl leading-10 min-h-96 p-4 outline-0`} />
            <div className="btn-box text-center py-6">
              <button onClick={calcWordsLength} className="text-xl rounded-2xl bg-gradient-to-r from-red-500 to-amber-500 px-12 py-4">
                Shreibteil überprüfen</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}
export default TestKI;
