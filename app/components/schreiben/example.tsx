"use client"
import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
const ExampleSchreiben = ({ item }:
  { item: { id: number, level: string, exam: string, topic: string, content: string } }) => {
  const [showExam, setShowExam] = useState(false)
  return <>
    <div key={item.id} className="w-[48%]  bg-white rounded-2xl
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
        <div onClick={() => setShowExam(true)} className="w-[90%] mx-auto py-2 text-white text-center bg-gradient-to-r
            from-red-500/90 to-amber-500/90 rounded-lg mt-10 mb-1 cursor-pointer">Beispiel ansehen</div>
      </div>
    </div>
    {showExam && <div className="fixed top-20 right-20 max-w-[85%] min-h-[85%]  bg-gray-200
      border-gray-900 border-4 rounded-3xl">
      <div className="leading-12 px-6 text-lg mt-20">
        <p className="text-xl leading-12 pb-8">
          <span className="text-gray-700">Thema : </span> {item.topic}</p>
        <p className="">{item.content}</p>

      </div>
      <div className="close-btn w-8 h-8 absolute right-10 top-4">
        <IoMdCloseCircle onClick={() => setShowExam(false)}
          className="text-red-600 text-5xl cursor-pointer" /> </div>

      <div className="level-btn rounded-full bg-red-500/40 text-red-600 flex items-center 
        justify-center absolute left-10 top-6">
        <span className="px-3 py-1.5 text-2xl">{item.level.toUpperCase()} {item.exam}</span>
      </div>


    </div>

    }
  </>
}
export default ExampleSchreiben;
