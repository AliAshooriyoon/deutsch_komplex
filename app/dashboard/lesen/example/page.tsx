"use client"
import { useEffect, useState } from "react";


const Texts = () => {
  const [data, setData] = useState([{ id: "", exam: "", topic: "", content: "", level: "" }])
  const getData = async () => {
    const res = await fetch("/api/showExamples", {
      method: "POST", body: JSON.stringify({ type: "lesen" })
    })
    const dataFiltered = await res.json()
    setData(dataFiltered)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div className='max-lg:px-2 py-8'>
        <div className="flex flex-col justify-around gap-16 lg:w-[80%] mx-auto">
          {data.map(i =>
            <div key={i.id} className='text-xl p-12 border-2 border-blue-400 rounded-2xl'>
              <p className='text-center text-3xl text-[#FEC007] pb-4'>
                {i.level.toUpperCase()} {i.exam}</p>
              <span className="situation"></span>
              <p> <span className=""></span> {i.topic}</p>
              <p>
                <span className=""> </span> <br />   {i.content}
              </p>
            </div>)}
        </div>
      </div>
    </>

  )
}
export default Texts;
