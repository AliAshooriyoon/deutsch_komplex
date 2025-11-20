const TippsComponent = () => {
  const classes = [`w-[45%] h-[50%] bg-gradient-to-r
          from-red-500/20 to-amber-500/20 p-4 rounded-2xl flex flex-col gap-4 justify-between`,
    `flex items-center gap-2 text-xl`, `w-8 h-8 flex items-center justify-center rounded-lg text-lg
            bg-red-600 text-white`
  ]
  return <>
    <div className="w-full bg-white border-2 border-gray-300 rounded-2xl p-4">
      <p className="header-tipps text-2xl"> Wichtige Schreibtipps</p>
      <div className="w-full h-full p-6 flex justify-around flex-wrap gap-y-12">
        <div className={classes[0]}>
          <div className={classes[1]}>
            <div className={classes[2]}>1</div>
            <p className="">Klare Struktur</p>
          </div>
          <p className="">Gliedere deinen Text in Einleitung, Hauptteil und Schluss.
            Verwende Absätze für verschiedene Gedanken.</p>
        </div>

        <div className={classes[0]}>
          <div className={classes[1]}>
            <div className={classes[2]}>2</div>
            <p className="">Formelle vs. Informelle Sprache</p>
          </div>
          <p className="">{`Beachte den Kontext: Briefe an Freunde sind informell,
          Bewerbungen formal. Verwende "Sie" oder "du" entsprechend.`}</p>
        </div>

        <div className={classes[0]}>
          <div className={classes[1]}>
            <div className={classes[2]}>3</div>
            <p className="">Konnektoren nutzen</p>
          </div>
          <p className="">
            {`Verwende Wörter wie "deshalb", "außerdem", "jedoch" 
              um Sätze zu verbinden und den Text flüssig zu machen.`}</p>
        </div>

        <div className={classes[0]}>
          <div className={classes[1]}>
            <div className={classes[2]}>4</div>
            <p className="">Zeitformen beachten</p>
          </div>
          <p className="">Achte auf die korrekte Verwendung von Präsens,
            Perfekt und Präteritum. Bleibe konsistent.</p>
        </div>

      </div>
    </div>

    <div className="w-full h-64 bg-gray-900 text-white  my-12 rounded-3xl p-6">
      <p className="title__explain text-2xl pb-4">Häufige Fehler vermeiden</p>
      <ul className="list-disc pl-6 leading-9">
        <li className=""> Zu lange Sätze – halte Sätze kurz und präzise </li>
        <li className=""> {`Falsche Anrede – "Sie" groß, "du" klein schreiben`} </li>
        <li className="">  Zu viele Wiederholungen – nutze Synonyme </li>
        <li className="">  Fehlende Absätze – strukturiere deinen Text </li>
      </ul>
    </div>
  </>
}
export default TippsComponent;
