'use client'
import { useSession } from "next-auth/react";
import { useState } from "react"
const TestsLesen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [answer, setAnswer] = useState('');
  const [level, setLevel] = useState('');
  const user = useSession();
  console.log(user.data?.user)
  const createExam = async () => {
    setIsLoading(true)
    const res = await fetch("/api/createExam", {
      method: "POST",
      body: JSON.stringify({
        message: `You are an expert in creating German language reading comprehension tests modeled exactly after the official ÖSD (Österreichisches Sprachdiplom Deutsch) Lesen exams. Your task is to generate a complete, original Lesen exam for the specified level {level} (A1, A2, B1, B2, or C1), strictly matching the official ÖSD structure, difficulty, and format for that level. Use only authentic-like, original German texts from topics such as everyday life, work, leisure, society, education, environment, technology, health, or current events, adjusted to the level. The entire exam must be in German only, with no English or any other language translations, explanations, or hints.
Do not include any introductory text, explanations, or additional content beyond the exact exam format. Start directly with the exam title and time in markdown, followed by the parts, texts, questions, and end with the answer key separated by "---". Use markdown for structure (e.g., # for title, ## for Teil, ### for Text subsections if needed). Ensure texts are original and randomized each time. Questions must test appropriate comprehension (global, detailed, selective) at the level, with no tricks beyond the level's difficulty.
Adapt strictly to the following level-specific structures (based on official ÖSD models: total items, task types, text lengths, question formats, and time). Total items must exactly match the specified number—no more, no less.

${level == "a1" && `
  A1: Total 16 items, 3 tasks, time 20 minutes. Basic vocabulary/simple sentences.

Teil 1: Kurze Texte (8 items): 4-6 very short texts (20-50 words each, e.g., signs, notes). Questions: True/False or A/B multiple-choice.
Teil 2: Ein Text (4 items): One short text (50-100 words, e.g., simple ad/email). Questions: A/B/C multiple-choice.
Teil 3: Zuordnung (4 items): Simple matching (e.g., 4 sentences to 4-6 options like pictures/headings, some extras).

`}

${level == "a2" && `
  A2: Total 20 items, 4 tasks, time 25 minutes. Elementary vocabulary/basic communication.

Teil 1: Kurze Texte (6 items): 3-5 short texts (50-100 words, e.g., notices, emails). Questions: True/False or A/B/C.
Teil 2: Ein Text (5 items): One medium text (100-150 words, e.g., short article). Questions: A/B/C multiple-choice.
Teil 3: Längerer Text (5 items): One text (150 words, e.g., info brochure). Questions: A/B/C or simple gap-fill (word bank with extras).
Teil 4: Zuordnung (4 items): Matching (e.g., headings/summaries to paragraphs, 4 items with 6-8 options).
`}

${level == "b1" && `
  B1: Total 30 items, 4 tasks, time 40 minutes. Independent user vocabulary/grammar.

Teil 1: Kurze Texte (10 items): 5-8 short texts (100-150 words total, e.g., ads, emails, signs). Questions: True/False or A/B/C multiple-choice.
Teil 2: Ein Text (5 items): One medium text (150-250 words, e.g., brochure). Questions: A/B/C/D multiple-choice.
Teil 3: Längerer Text (7 items): One longer text (250-350 words, e.g., article). Questions: A/B/C multiple-choice.
Teil 4: Zuordnung (8 items): Matching (e.g., sentences/headings to sections, 8 items with 10-12 options, some extras).

` }

${level == "b2" && `
  B2: Total 25 items, 4 tasks, time 50 minutes. Upper intermediate vocabulary including some idioms/nuanced language; complex texts.

Teil 1: Kurze Texte (6 items): 3 short texts (150-200 words each, e.g., notices, short reports). Questions: A/B/C/D multiple-choice (2 per text).
Teil 2: Ein längerer Text mit Fragen (6 items): One longer text (250-350 words, e.g., opinion piece). Questions: A/B/C/D multiple-choice.
Teil 3: Lückentext (7 items): One text (300-400 words) with gaps; word bank (10-12 words, some extras) for filling (verbs/nouns/adjectives in context).
Teil 4: Zuordnung (6 items): Matching (e.g., 6 summaries/headings to paragraphs/sections of a text (350-450 words), with 8-10 options, some extras).

`}

${level == "c1" && `
  C1: Total 25 items, 4 tasks, time 60 minutes. Advanced vocabulary/complex structures; authentic, nuanced texts.

Teil 1: Kurze Texte (5 items): 2-3 complex short texts (200-300 words each, e.g., excerpts from debates). Questions: A/B/C/D multiple-choice with inferences.
Teil 2: Ein Text mit detaillierten Fragen (7 items): One long text (400-500 words, e.g., academic article). Questions: A/B/C/D multiple-choice, including inferences.
Teil 3: Längerer Text mit Zuordnung (6 items): Matching inferences/summaries to sections (500-600 words text), 6 items with 9 options.
Teil 4: Lückentext oder Umformulierung (7 items): Gap-fill with no bank or rephrasing sentences from a complex text (400-500 words).

`}

Output format:

Start with: # ÖSD Lesen Prüfung – Niveau {level} Zeit: {time} Minuten
Then: ## Teil 1: {Description} followed by texts and numbered questions (e.g., 1. Frage? A) Option B) Option...).
For gap-fill: Provide Wörter: list, then text with numbered blanks (e.g., 11.).
For matching: List Texte (A. Text... B. Text...), then Überschriften/Optionen (1. Heading... ), then assignments (17. Text A: ______ ).
End with: --- # Antwortschlüssel Teil 1: 1. A 2. B ... (list correct answers only, no explanations).

Generate a new exam now for level {level}. `
      })
    })
    const data = await res.json();
    if (!res.ok) {
      throw new Error("Error!")
    }
    setIsLoading(false)
    setAnswer(data.reply)
  }


  return <>
    <div className=''>
      <div className='text-2xl flex flex-col items-start gap-12'>
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
      {isLoading && <div className="text-center text-3xl text-cyan-700 py-4">Loading...</div>}
      <p className="text-xl text-left pl-2 py-12">{!isLoading && answer}</p>
    </div>
  </>
}
export default TestsLesen;
