"use client"
import Link from "next/link";
import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
const ExampleSchreiben = ({ item }:
  { item: { id: number, level: string, exam: string, topic: string, content: string } }) => {
  const [showExam, setShowExam] = useState(false)
  return <>
    <div key={item.id} className="2xl:w-[48%]  bg-white rounded-2xl
        border-gray-600 p-6">
      <div className="title_box flex flex-col gap-2">
        <div className="py-1 px-3 w-12 flex items-center justify-center text-red-600
            bg-red-500/50 rounded-full">{item.level.toUpperCase()}</div>
        <p className="text-xl">{item.topic.length > 35 ? `${item.topic.split("").slice(0, 35).join("")}... ` : item.topic}</p>
        <p className="text-red-600">{item.exam}</p>
      </div>
      <div className="">
        <p className="text-gray-700 pt-6">
          {item.content.length > 200 ? `${item.content.split("").slice(0, 200).join('')}... ` : item.content}
        </p>
        <Link href={`schreiben/examples/${item.id}`}>
          <div className="w-[90%] mx-auto py-2 text-white text-center bg-gradient-to-r
            from-red-500/90 to-amber-500/90 rounded-lg mt-10 mb-1 cursor-pointer">Beispiel ansehen</div>
        </Link>
      </div>
    </div>

  </>
}
export default ExampleSchreiben;
