"use client"
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { useEffect, useState } from 'react';
// import data from '../../../../../anki_vocab.json' assert { type: 'json' };
const LainterBox = () => {
  const [level, setLevel] = useState("a1")
  const [words, setWords] = useState([{ title: "", mean: "" }]);
  const [location, setLocation] = useState({ page: 0, path: "next" });
  const [lengthBack, setLengthBack] = useState(0);
  const [prevLocation, setPrevLocation] = useState<number[]>([]);
  const [count, setCount] = useState({ num: 0, path: "next" });
  const [showAnswer, setShowAnswer] = useState(false)
  const getWords = async () => {
    const res = await fetch("/api/selectWord", {
      method: "POST", body: JSON.stringify({
        level
      })
    })
    const data = await res.json()
    if (!res.ok) {
      return <div className="text-red-500">connection failed!</div>

    } else {
      setWords(data)
      setLocation({ page: 0, path: "next" })
      setPrevLocation([])
      setLengthBack(0)
      setCount(prev => { return { num: 0, path: "next" } })
    }
  }
  useEffect(() => {
    getWords()
  }, [level])
  const nextWord = () => {
    setShowAnswer(false)
    setCount(prev => { return { num: prev.num + 1, path: "next" } })
    setLengthBack(prev => prev > 0 ? prev - 1 : prev)
    setLocation({
      page: lengthBack <= 0 ? Math.floor(Math.random() * words?.length - 1) + 1
        : prevLocation[prevLocation.length - lengthBack], path: `${lengthBack <= 0 ? "next" : "prev"}`
    })
  }

  const previousWord = () => {
    setShowAnswer(false)
    setCount(prev => prev.num > 0 ? { num: prev.num - 1, path: "prev" } : prev)
    setLengthBack(prev => prev < prevLocation.length && count.num > 1 ? prev + 1 : prevLocation.length - 1)
  }
  useEffect(() => {
    setLocation({ page: prevLocation.length > 1 ? prevLocation[prevLocation.length - (lengthBack + 1)] : 0, path: "prev" })
  }, [lengthBack])
  useEffect(() => {
    setPrevLocation(prev => location.path == "next" ? [...prev, location.page] : [...prev])
  }, [location]);
  const showAnswerFunc = () => {
    setShowAnswer(prev => !prev)
  }
  return <>
    <div className=''>
      <div className="py-20">
        <div className="flex items-center gap-4">
          <p className="text-lg lg:text-xl"> Wähle dein Niveau aus! </p>
          <select onChange={(e) => setLevel(e.target.value)} className="max-lg:text-xl lg:text-2xl border-2 px-6 py-2 rounded-xl cursor-pointer">
            <option value={"a1"}>A1</option>
            <option value={"a2"}>A2</option>
            <option value={"b1"}>B1</option>
            <option value={"b2"}>B2</option>
            <option value={"c1"}>C1</option>
          </select>

        </div>
        <div className="lainter_box shadow-2xl shadow-red-500/70 ring-amber-600 ring-2 flex 
          items-center justify-between flex-col lg:w-[60%] 
          max-lg:w-[98%]  mt-24 bg-gray-300 border-2 rounded-3xl lg:h-[40rem] 
          max-lg:h-[30rem] mx-auto">
          <div className="lg:pt-24">
            <p className="lg:text-5xl max-lg:text-3xl text-center pt-12">
              {!showAnswer ? words[location.page].title : words[location.page].mean}
            </p>
            <p className="lg:text-2xl max-lg:text-lg text-center pt-6">In besonderen Haltungen wird es verwendet</p>
          </div>
          <div className='flex items-center justify-around lg:pb-24 max-lg:pb-12 max-lg:gap-4 lg:gap-12 flex-row-reverse'>
            <button type='button' onClick={() => nextWord()}
              className='border-4 rounded-full p-1 flex items-center justify-center'>
              <GrNext className="lg:w-10 lg:h-10 max-lg:w-6 max-lg:h-6" /> </button>
            <div onClick={showAnswerFunc}
              className={`lg:text-2xl from-red-500/70 to-amber-600/70 
                    max-lg:text-lg text-center max-lg:min-w-[12rem] lg:min-w-[18rem]
            ${!showAnswer ? "bg-gradient-to-r" : "bg-gradient-to-l"}
                  lg:px-6 max-lg:px-2 max-lg:py-3 lg:py-4 rounded-3xl cursor-pointer`}> {
                !showAnswer ? <p>Bedeutung sehen </p> : <p>Wort sehen</p>
              } </div>
            <button type='button' onClick={() => previousWord()}
              className=' border-4 rounded-full p-1 flex items-center justify-center'>
              <GrPrevious className="lg:w-10 lg:h-10 max-lg:w-6  max-lg:h-6" /> </button>
          </div>
        </div>
      </div>

    </div>
  </>
}
export default LainterBox;
