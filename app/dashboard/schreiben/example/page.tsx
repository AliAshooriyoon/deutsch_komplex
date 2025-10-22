"use server"
import "./exampleStyles.css"
const ExampleSchreiben = async () => {
  // const data = await prisma.example.findMany({ where: { type: "schreiben" } });
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/exampleShow`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ typeOfExam: "schreiben" })
  })
  if (!res.ok) {
    // throw new Error("Connection failed!")
    return <div className="w-full bg-amber-500">
      <p className="text-3xl text-center text-red-700">Connection failed!</p>
      <p className="text-3xl text-center text-red-700 py-6">Refresh page to resolve problem</p>

    </div>
  }
  const data = await res.json();
  console.log(data)

  return <>
    <div className="flex flex-col justify-around gap-16 w-[80%] mx-auto">
      <div className='a1 goethe example_box'>
        {data.map((i: { id: string, level: string, exam: string, topic: string, content: string }) =>
          <div key={i.id} className='text-xl p-12 border-2 border-blue-400 rounded-2xl'>
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
