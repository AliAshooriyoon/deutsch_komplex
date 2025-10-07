import prisma from "@/prisma/client";

const TestsSchreiben = async () => {
  const data = await prisma.exam.findMany()
  const a2Exams = data.filter(d => d.level == "a2")
  const b1Exams = data.filter(d => d.level == "b1")
  console.log(b1Exams)
  return (
    <>
      <div className=''>

        <div className=" flex flex-col gap-16 my-12">
          <h2 className="text-3xl text-center">Niveau A2</h2>
          {a2Exams.map(i => <div key={i.id} className="border-2 p-4 rounded-2xl flex flex-col
            justify-between gap-16 ">

            <div className=" text-left">
              <p className="title_schreiben text-2xl py-3">Thema : </p>
              <p className="text-xl">{i.topic}</p>
            </div>
            <div className="text-xl text-left ">
              <p className="py-6 text-2xl">Lösung : </p>
              <p className="">
                {i.content}
              </p>
            </div>
          </div>)}
        </div>

        <div className=" flex flex-col gap-16 my-12">
          <h2 className="text-3xl text-center">Niveau B1</h2>
          {b1Exams.map(i => <div key={i.id} className="border-2 p-4 rounded-2xl flex flex-col
            justify-between gap-16 ">

            <div className=" text-left">
              <p className="title_schreiben text-2xl py-3">Thema : </p>
              <p className="text-xl">{i.topic}</p>
            </div>
            <div className="text-xl text-left ">
              <p className="py-6 text-2xl">Lösung : </p>
              <p className="">
                {i.content}
              </p>
            </div>
          </div>)}
        </div>
      </div>
    </>)
}
export default TestsSchreiben;
