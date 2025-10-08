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
      <div className=''>
        <div className="flex flex-col justify-around gap-16 w-[80%] mx-auto">
          <div className='a1 goethe example_box'>
            {data.map(i =>
              <div key={i.id} className='text-xl p-12 border-2 border-blue-400 rounded-2xl'>
                <p className='text-center text-3xl'>{i.level} {i.exam}</p>
                <span className="situation"></span>
                <p>{i.topic}</p>
                <p>
                  {i.content}
                </p>
              </div>)}
          </div>
        </div>
      </div>
    </>

  )
}
export default Texts;
