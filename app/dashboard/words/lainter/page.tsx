"use client"
import { GrNext } from "react-icons/gr";
import { useEffect, useState } from 'react';
import data from '../../../../anki_vocab.json' assert { type: 'json' };
const Lainter = () => {
  const [words, setWords] = useState(data);
  const [location, setLocation] = useState({ page: 0, path: "next" });
  const [lengthBack, setLengthBack] = useState(0);
  const [prevLocation, setPrevLocation] = useState<number[]>([0]);
  const [count, setCount] = useState(0);



  const nextWord = () => {
    setCount(prev => lengthBack == 0 ? prev + 1 : prev)
    setLengthBack(prev => prev > 0 ? prev - 1 : prev)
    setLocation({
      page: lengthBack <= 0 ? Math.floor(Math.random() * words.length - 1) + 1
        : prevLocation[prevLocation.length - lengthBack], path: `${lengthBack <= 0 ? "next" : "prev"}`
    })
    console.log(lengthBack)
  }

  const previousWord = () => {
    setCount(prev => prev - 1)
    setLengthBack(prev => prev < prevLocation.length ? prev + 1 : prevLocation.length - 1)
    console.log(lengthBack < prevLocation.length)
    console.log(lengthBack)
    console.log(words[prevLocation[prevLocation.length - 1]].word)
  }

  useEffect(() => {
    console.log(prevLocation)
    setLocation({ page: prevLocation.length > 1 ? prevLocation[prevLocation.length - (lengthBack + 1)] : 0, path: "prev" })
    console.log(lengthBack)
    console.log("fitst use effect")
  }, [lengthBack])

  useEffect(() => {
    console.log("---------prevLocation--------")
    console.log(prevLocation)
  }, [prevLocation])

  useEffect(() => {
    setPrevLocation(prev => location.path == "next" ? [...prev, location.page] : [...prev])

    console.log(prevLocation)
    console.log(location.path)
    console.log("second use effect")
  }, [location]);

  return <>
    <div className=''>
      <div className="">
        <div className="lainter_box flex items-center justify-between flex-col w-[60%]
          mt-24 bg-sky-700 rounded-3xl h-[40rem] mx-auto">
          <div className="pt-24">
            <p className="text-5xl text-center pt-12">{words[location.page].word}</p>
            <p className="text-2xl text-center pt-6">In besonderen Haltungen wird es verwendet</p>
          </div>
          <div className='flex items-center justify-around pb-24 gap-12 flex-row-reverse'>
            <button type='button' onClick={() => nextWord()} className='border-4 rounded-full p-1 flex items-center justify-center'>
              <GrNext className="w-10 h-10" /> </button>
            <p
              className="text-2xl text-center bg-emerald-700
  px-6 py-4 rounded-3xl cursor-pointer"> Antwort sehen </p>
            <button type='button' onClick={() => previousWord()} className='border-4 rounded-full rotate-180 p-1 flex items-center
      justify-center'> <GrNext className="w-10 h-10" /> </button>
          </div>
        </div>
      </div>

    </div>
  </>
}
export default Lainter;
