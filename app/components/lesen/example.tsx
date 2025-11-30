import Link from "next/link"

const ExampleLesen = ({ item }: {
  item: {
    id: number, level: string,
    topic: string, content: string
  }
}) => {
  return <>
    <div key={item.id} className="lg:w-[48%]  bg-white rounded-2xl
        border-gray-600 p-6">
      <div className="title_box flex flex-col gap-2">
        <div className="py-1 px-3 w-12 flex items-center justify-center text-white
            bg-gray-900/90 rounded-full">{item.level.toUpperCase()}</div>
        <p className="text-xl">{item.topic.length > 35 ? `${item.topic.split("").slice(0, 35).join("")}... ` :
          item.topic}</p>
      </div>
      <div className="">
        <p className="text-gray-700 pt-6">
          {item.content.length > 200 ? `${item.content.split("").slice(0, 200).join('')}... ` : item.content}
        </p>
        <Link className="w-full h-full" href={`/dashboard/lesen/example/${item.id}`}>
          <div
            className="w-[90%] mx-auto py-2 text-white text-center bg-gradient-to-r
            from-gray-900/95 to-red-500/95 rounded-lg mt-10 mb-1 cursor-pointer">
            Beispiel ansehen
          </div>
        </Link>
      </div>
    </div>
  </>
}
export default ExampleLesen;
