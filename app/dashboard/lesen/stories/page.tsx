"use client"

import { useEffect, useState } from "react";

const Stories = () => {
  const [level, setLevel] = useState('');
  const [stories, setStories] = useState([{ id: "", title: "", content: "" }]);
  const showLevel = async () => {
    const res = await fetch("/api/findStories", {
      method: "POST", body: JSON.stringify({
        level
      })
    })
    const data = await res.json();
    setStories(data);
  }
  useEffect(() => {
    showLevel();
  }, [level])
  return (
    <>
      <div className='flex flex-col items-start gap-6'>
        <p className="text-xl">Wöhlen Sie Niveau der Geschichten aus!</p>
        <div className='stories border-2  p-2 text-2xl rounded-2xl'>
          <select onChange={(e) => setLevel(e.target.value)}>
            <option value={'a1'}>a1</option>
            <option value={'a2'}>a2</option>
            <option value={'b1'}>b1</option>
            <option value={'b2'}>b2</option>
            <option value={'c1'}>c1</option>
          </select>
        </div>
        <div className='flex flex-col justify-between gap-12'>
          {stories.map((i) => <div className="" key={i.id}>
            <p className="text-2xl">{i.title}</p>
            <p className="text-xl">{i.content}</p>
          </div>)}
        </div>
      </div>
    </>

  )
}
export default Stories;
