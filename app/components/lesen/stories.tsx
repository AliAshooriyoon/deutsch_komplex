
"use client"
import StoryBox from "./storyBox";

import { useEffect, useState } from "react";
const Stories = () => {
  const [stories, setStories] = useState<Array<{ id: number, level: string, title: string, content: string }>>();
  const getData = async () => {
    const res = await fetch("/api/findStories")
    const data = await res.json();
    setStories(data)
  }
  useEffect(() => {
    getData()
  }, [])
  return <>
    <div className="">
      <div className=""></div>
      <div className="p-6 flex flex-wrap justify-between gap-12">
        {stories?.map((d) => <StoryBox key={d.id} data={d} />)}

      </div>

    </div>
  </>
}
export default Stories;
