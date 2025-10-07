import prisma from "@/prisma/client";
import "./exampleStyles.css"
const ExampleSchreiben = async () => {
  const data = await prisma.example.findMany();

  //   const res = await prisma.example.create({
  //     data: {
  //       level: "c1",
  //       topic: `Sie schreiben einen Artikel für eine Zeitschrift zum Thema „Work-Life-Balance in der modernen Gesellschaft“ (ca. 150–180 Wörter). Beschreiben Sie, warum Work-Life-Balance wichtig ist, welche Probleme es gibt und was man tun könnte, um sie zu verbessern.`,
  //       exam: "TELC",
  //       content: `Work-Life-Balance: Ein Schlüssel zu einem erfüllten Leben
  // In unserer hektischen Gesellschaft ist Work-Life-Balance wichtiger denn je. Viele Menschen arbeiten lange Stunden, um beruflich erfolgreich zu sein, was jedoch oft zu Stress, Burnout und Vernachlässigung des Privatlebens führt. Eine gute Balance zwischen Arbeit und Freizeit fördert nicht nur die Gesundheit, sondern steigert auch die Produktivität und Zufriedenheit.
  // Ein Hauptproblem ist die ständige Erreichbarkeit durch Smartphones und E-Mails, die es schwer macht, abzuschalten. Zudem fehlen in vielen Unternehmen flexible Arbeitsmodelle, die es Angestellten ermöglichen, Beruf und Familie besser zu vereinbaren. Um dies zu verbessern, sollten Arbeitgeber Homeoffice und flexible Arbeitszeiten fördern. Gleichzeitig könnten Schulungen zu Zeitmanagement helfen, Prioritäten richtig zu setzen. Auch auf individueller Ebene ist es wichtig, bewusst Zeit für Hobbys, Sport oder Familie einzuplanen. Nur wenn Gesellschaft und Unternehmen gemeinsam handeln, kann eine gesunde Work-Life-Balance zur Norm werden.`
  //     }
  //   })
  return <>
    <div className="flex flex-col justify-around gap-16 w-[80%] mx-auto">
      <div className='a1 goethe example_box'>
        {data.map(i =>
          <div key={i.id} className='text-xl p-12 border-2 border-blue-400 rounded-2xl'>
            <p className='text-center text-3xl'>{i.level} {i.exam}</p>
            <span className="situation">Situation:</span>
            <p>{i.topic}</p>
            <p>
              {i.content}
            </p>
          </div>)}
        {/*   <div className='text-xl'> */}
        {/*     <p className='text-center text-3xl'>A1 Goethe</p> */}
        {/*     <span className="situation">Situation:</span> */}
        {/*     Du bist im Urlaub in München. */}
        {/*     Schreib eine Postkarte an deinen Freund Jonas. */}
        {/*     Sag: */}
        {/*     Wo du bist */}
        {/*     Wie es dir gefällt */}
        {/*     Was du gemacht hast */}
        {/*   </div> */}
        {/*   <p className='text-2xl pt-12'> */}
        {/*     <p className="text-2xl pb-8 text-[#777]">Beispiel:</p> */}
        {/*     Hallo Jonas, */}
        {/*     ich bin jetzt in München! Die Stadt ist sehr schön und es gibt viele alte Gebäude. Gestern war ich im Deutschen Museum, das war super interessant. Das Wetter ist sonnig und warm. Ich mache viele Fotos und esse oft Brezeln. */}
        {/*     Viele Grüße */}
        {/*     Ali */}
        {/*   </p> */}
        {/* </div> */}
        {/**/}
        {/* <div className='a1 pt-32 example_box'> */}
        {/*   <p className='text-xl'> */}
        {/*     <p className='text-center text-3xl'>A1 ÖSD</p> */}
        {/*     <span className="situation">Situation:</span> */}
        {/*     Du warst bei Familie Huber in Wien zu Besuch. */}
        {/*     Schreib einen Brief und sag: */}
        {/*     dass es schön war, */}
        {/*     was dir gefallen hat, */}
        {/*     wann du wiederkommst. */}
        {/*   </p> */}
        {/*   <p className='text-2xl pt-12'> */}
        {/*     <p className="text-2xl pb-8 text-[#777]">Beispiel:</p> */}
        {/*     Liebe Familie Huber, */}
        {/**/}
        {/*     vielen Dank für die schöne Zeit in Wien. */}
        {/*     Das Essen war sehr lecker und das Zimmer war sehr gemütlich. */}
        {/*     Mir hat der Spaziergang im Park sehr gefallen. Ich komme im Sommer wieder! */}
        {/**/}
        {/*     Viele Grüße */}
        {/*     Ali */}
        {/*   </p> */}
        {/* </div> */}
        {/**/}
        {/* <div className='a1 pt-24 example_box'> */}
        {/*   <p className='text-xl'> */}
        {/**/}
        {/*     <p className='text-center text-3xl'>A1 TELC</p> */}
        {/*     <span className="situation">Situation:</span> */}
        {/*     Du bist im Hotel. Das Zimmer ist laut. */}
        {/*     Schreib eine kurze Nachricht an die Rezeption. */}
        {/*   </p> */}
        {/*   <p className='text-2xl pt-12'> */}
        {/*     <p className="text-2xl pb-8 text-[#777]">Beispiel:</p> */}
        {/*     Guten Tag, */}
        {/*     mein Zimmer ist sehr laut, weil die Straße draußen ist. Können Sie mir bitte ein anderes Zimmer geben? */}
        {/*     Vielen Dank */}
        {/*     Ali */}
        {/*   </p> */}
      </div>
      {/**/}
    </div>
  </>
}
export default ExampleSchreiben;
