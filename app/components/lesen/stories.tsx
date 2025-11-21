
"use client"
import StoryBox from "./storyBox";

import { useEffect, useState } from "react";
const Stories = () => {
  const [stories, setStories] = useState<Array<{ id: number, level: string, title: string, content: string }>>();
  const [isLoading, setIsLoading] = useState(false)
  const getData = async () => {
    setIsLoading(true)
    const res = await fetch("/api/findStories")
    const data = await res.json();
    setStories(data)
    if (res.ok) {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    getData()
  }, [])
  return <>
    <div className="">
      <div className=""></div>
      <div className="p-6 flex flex-wrap justify-between gap-12">
        {!isLoading ? stories?.map((d) => <StoryBox key={d.id} data={d} />) :
          <p className="text-red-500 text-center text-2xl"> <span>Loading...</span> </p>}

      </div>

    </div>
  </>
}
export default Stories;
