"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
const levelsTopic = ["a1", "a2", "b1", "b2", "c1"]
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
      {!loading ? <div className="flex items-center gap-8 flex-col px-4">
        {levelsTopic.map((i) => <div key={i} className="bg-white border-2 border-gray-500/60
          w-full px-6 flex h-48 mx-auto rounded-2xl p-6">
          <div className=" w-full flex flex-col gap-4">
            <div className="title_levels flex items-center gap-4">

              <div className="w-16 h-12 text-white flex text-xl items-center justify-center 
                bg-gradient-to-r from-red-600/95 rounded-xl to-amber-500/95"> {i.toUpperCase()} </div>
              <p className="text-xl"> {i == "a1" ? "Anfänger" : i == "a2" ? "Grundlegende Kenntnisse" : i == "b1" ? "Fortgeschrittene Anfänger" : i == "b2" ? "Selbstständige Sprachverwendung" : "Fachkundige Sprachkenntnisse"} </p>
            </div>
            <div className="flex justify-between ">
              <p className="text-2xl">{wordsLength[levelsTopic.indexOf(i)]} Wörter</p>
            </div>
          </div>
          <div className="btn_box flex flex-col gap-4 px-12 items-center w-[25%] py-6 text-center">
            <Link href={`words/words-list/${i}`}
              className="py-2 px-4 cursor-pointer rounded-xl text-white text-lg
              bg-gradient-to-r w-full from-red-600 to-amber-500">Jetzt lernen
            </Link>
            <div className="py-2 px-4 cursor-pointer rounded-xl text-white text-sm bg-gradient-to-r w-full
              from-gray-600 to-stone-500">Wortliste ansehen</div>
          </div>

        </div>)}
      </div> : <div className="text-center text-3xl text-red-500">Loading...</div>}
    </div>
  </>
}
export default WordsList;
