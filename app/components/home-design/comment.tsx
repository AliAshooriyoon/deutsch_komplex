
import { FaStar } from "react-icons/fa";

const Comment = ({ data }: { data: { title: string; personName: string; personJob: string; } }) => {
  const nameWrapper = [data.personName.split("")[0],
  data.personName.split(" ")[1].split("")[0]
  ]
  return <>
    <div className="comment flex justify-between flex-col lg:w-[30%]
          h-56 border-2 hover:border-yellow-500 border-gray-400 delay-100 p-4 rounded-2xl">
      <div className="starts flex items-center">
        <FaStar className="text-yellow-500 max-lg:w-5 lg:w-6 lg:h-6 max-lg:h-5" />
        <FaStar className="text-yellow-500 max-lg:w-5 lg:w-6 lg:h-6 max-lg:h-5" />
        <FaStar className="text-yellow-500 max-lg:w-5 lg:w-6 lg:h-6 max-lg:h-5" />
        <FaStar className="text-yellow-500 max-lg:w-5 lg:w-6 lg:h-6 max-lg:h-5" />
        <FaStar className="text-yellow-500 max-lg:w-5 lg:w-6 lg:h-6 max-lg:h-5" />
      </div>
      <p className="text-md text-gray-700">
        {data.title}
      </p>
      <div className="user flex items-center gap-4">
        <div className="person_logo w-10 h-10 rounded-full bg-gradient-to-r
          from-red-600 to-yellow-600 flex items-center
          text-lg justify-center text-white">
          {nameWrapper.join("")}
        </div>
        <div className="person_title flex flex-col justify-between">
          <p className="name text-black text-lg">{data.personName}</p>
          <p className="job text-sm text-gray-600">{data.personJob}</p>
        </div>
      </div>
    </div>
  </>
}
export default Comment
