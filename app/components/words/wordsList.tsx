"use client"

import { useEffect, useState } from "react";
const levelsTopic = ["a1", "a2", "b1", "b2", "c1", "c2"]
const WordsList = () => {
  const [words, setWords] = useState([{ id: "", title: "", mean: "", level: "" }])
  const [loading, setLoading] = useState(false);
  const [wordsLength, setWordsLength] = useState<Array<number>>([0, 0, 0, 0, 0, 0])
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

  useEffect(() => {
    showWords("")
  }, [])



  useEffect(() => {
    if (!words || words.length === 0) {
      setWordsLength([0, 0, 0, 0, 0, 0]);
      return;
    }

    const counts = [0, 0, 0, 0, 0, 0]; // index 0 → A1, 1 → A2, ...

    words.forEach((w) => {
      switch (w.level) {
        case 'a1':
          counts[0]++;
          break;
        case 'a2':
          counts[1]++;
          break;
        case 'b1':
          counts[2]++;
          break;
        case 'b2':
          counts[3]++;
          break;
        case 'c1':
          counts[4]++;
          break;
        case 'c2':
          counts[5]++;
          break;
        // اگر سطح دیگری بود، می‌توانید default هم بگذارید
        default:
          break;
      }
    });

    setWordsLength(counts);
  }, [words]); return <>
    <div className="">
      {/* <div className="selector pb-8"> */}
      {/*   <p className="text-2xl py-8 max-lg:text-center">Wähle dein Niveau aus!</p> */}
      {/*   <div className="max-lg:pl-10"> */}
      {/*     <select onChange={(e) => showWords(e.target.value)} className=" border-2 rounded-3xl */}
      {/*     text-2xl p-2 min-w-24 text-center"> */}
      {/*       <option value={""} >Auswählen</option> */}
      {/*       <option value={"a1"}>a1</option> */}
      {/*       <option value={"a2"}>a2</option> */}
      {/*       <option value={"b1"}>b1</option> */}
      {/*       <option value={"b2"}>b2</option> */}
      {/*       <option value={"c1"}>c1</option> */}
      {/*     </select> */}
      {/**/}
      {/*   </div> */}
      {/* </div> */}
      {/* {words.map((i) => <div key={i.id} className="">{words.length}</div>)} */}
      <div className="flex items-center gap-8 flex-col">
        {levelsTopic.map((i) => <div key={i} className="w-full px-6">
          <div className="bg-white border-2 border-gray-500/60 w-full 
            h-32 mx-auto rounded-2xl p-2">
            <p className="">{wordsLength[levelsTopic.indexOf(i)]}</p>
          </div>
        </div>)}
      </div>
    </div>
  </>
}
export default WordsList;
