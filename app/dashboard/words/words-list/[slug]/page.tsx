import prisma from "@/prisma/client";
import { notFound } from "next/navigation";

const WordsPerLevel = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const data = await prisma.word.findMany({
    where: {
      level: slug.toLowerCase()
    }
  })
  if (!data.length) {
    return notFound()
  }
  return <>
    <div className="text-center text-4xl py-8">Wörter im Niveau {slug.toUpperCase()}</div>
    <div className="flex flex-col w-[90%] mx-auto gap-8">
      {data.map((i) => <div key={i.id} className="border-2 text-xl border-gray-700 p-4 rounded-2xl">
        <div className="flex flex-col gap-8">
          <p> <span className="text-gray-800 text_explain text-lg">Wort:</span>  {i.title}</p>
          <p> <span className="text-gray-800 text_explain text-lg">Bedeutung:</span>  {i.mean}</p>
        </div>
      </div>)}
    </div>
  </>
}
export default WordsPerLevel;
