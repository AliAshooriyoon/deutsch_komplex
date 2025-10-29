"use client"
import { GrNext } from "react-icons/gr";
import { useEffect, useState } from 'react';
import data from '../../../../anki_vocab.json' assert { type: 'json' };
const Lainter = () => {
  const [words, setWords] = useState(data);
  const [location, setLocation] = useState({ page: 0, path: "next" });
  const [lengthBack, setLengthBack] = useState(0);
  const [prevLocation, setPrevLocation] = useState<number[]>([]);
  const [count, setCount] = useState({ num: 0, path: "next" });
  const [showAnswer, setShowAnswer] = useState(false)

  const nextWord = () => {
    setShowAnswer(false)
    setCount(prev => { return { num: prev.num + 1, path: "next" } })
    setLengthBack(prev => prev > 0 ? prev - 1 : prev)
    setLocation({
      page: lengthBack <= 0 ? Math.floor(Math.random() * words.length - 1) + 1
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
      <div className="">
        <div className="lainter_box flex items-center justify-between flex-col lg:w-[60%] max-lg:w-[98%]
          mt-24 bg-sky-700 rounded-3xl lg:h-[40rem] max-lg:h-[30rem] mx-auto">
          <div className="lg:pt-24">
            <p className="lg:text-5xl max-lg:text-3xl text-center pt-12">
              {!showAnswer ? words[location.page].word : words[location.page].meaning}
            </p>
            <p className="lg:text-2xl max-lg:text-lg text-center pt-6">In besonderen Haltungen wird es verwendet</p>
          </div>
          <div className='flex items-center justify-around lg:pb-24 max-lg:pb-12 max-lg:gap-4 lg:gap-12 flex-row-reverse'>
            <button type='button' onClick={() => nextWord()} className='border-4 rounded-full p-1 flex items-center justify-center'>
              <GrNext className="lg:w-10 lg:h-10 max-lg:w-8 max-lg:h-8" /> </button>
            <div onClick={showAnswerFunc}
              className={`lg:text-2xl max-lg:text-lg text-center ${!showAnswer ? "bg-emerald-700" : "bg-stone-500"}
                  px-6 py-4 rounded-3xl cursor-pointer`}> {
                !showAnswer ? <p>Bedeutung sehen </p> : <p>Wort sehen</p>
              } </div>
            <button type='button' onClick={() => previousWord()}
              className='border-4 rounded-full rotate-180 p-1 flex items-center
      justify-center'> <GrNext className="lg:w-10 lg:h-10 max-lg:w-8 max-lg:h-8" /> </button>
          </div>
        </div>
      </div>

    </div>
  </>
}
export default Lainter;
