"use client"

import Link from "next/link";

const StoryBox = ({ data }: { data: { id: number, title: string, content: string, level: string } }) => {

  return <>
    <div className="story_box border-2 border-gray-400 w-[30%] p-4 flex flex-col gap-4 justify-between bg-white rounded-2xl">
      <div className="level flex p-2">
        <div className="bg-gray-800 text-white py-2 px-3 rounded-3xl">{data.level.toUpperCase()}</div>
      </div>
      <div className="title text-xl">{data.title}</div>
      <div className="flex items-end justify-end px-6 text-sm rounded-2xl text-gray-800">
        <span className="bg-gray-600/15 p-1">
          {data.level == "a1" || data.level == "a2" ? "Einfach" : data.level == "b1" ? "Mittel" : "Schwierig"}
        </span>
      </div>
      <Link href={`/dashboard/lesen/stories/${data.id}`}
        className="btn bg-gray-800 w-[95%] mx-auto py-2 rounded-xl
            my-4 text-white text-center cursor-pointer">
        Jetzt lesen</Link>
    </div>
  </>
}
export default StoryBox;
