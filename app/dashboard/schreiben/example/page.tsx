"use server"
import prisma from "@/prisma/client"
import "./exampleStyles.css"
const ExampleSchreiben = async () => {
  let data: Array<Record<string, string | null>> = [
    {
      id: "", level: "", exam: "", topic: "",
      content: ""
    }

  ]
  try {
    data = await prisma.example.findMany({
      where: { type: "schreiben" }
    })
  } catch {
    return <div className="w-full bg-amber-500">
      <p className="text-3xl text-center text-red-700">Connection failed!</p>
      <p className="text-3xl text-center text-red-700 py-6">Refresh page to resolve problem</p>

    </div>
  }

  return <>
    <div className="flex flex-col justify-around max-lg:pb-8 gap-16 lg:w-[80%] max-lg:w-full lg:mx-auto">
      <div className='example_box max-lg:p-3 lg:p-5'>
        {data.map((i) =>
          <div key={i.id} className='text-xl max-lg:p-4 lg:p-12 border-2 border-blue-400 rounded-2xl'>
            <p className='text-center text-3xl'>{i.level} {i.exam}</p>
            <span className="situation">Situation:</span>
            <p>{i.topic}</p>
            <p>
              {i.content}
            </p>
          </div>)}

      </div>
    </div>
  </>
}
export default ExampleSchreiben;
