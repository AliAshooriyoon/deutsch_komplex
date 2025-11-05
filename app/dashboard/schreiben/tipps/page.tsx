const TippsPage = () => {
  const tipps = [
    {
      level: "a1", textlang: "ca. 30–40 Wörter",
      tasks: 'einfache E-Mails, Postkarten, kurze Notizen.', tipps: `Immer Begrüßung und Verabschiedung schreiben: „Hallo…“ / „Liebe…“ – „Viele Grüße“.
          3–4 kurze Sätze mit sehr einfachem Wortschatz.
          Häufige Themen: Freizeit, Familie, Essen, Wohnen.
          Beispielstruktur für eine E-Mail:
          Begrüßung
          Grund („Ich schreibe dir…“)
          2–3 Infos (z. B. Einladung, Termin, Uhrzeit)
          Grußformel
` },
    {
      level: "a2", textlang: " ca. 50–80 Wörter.",
      tasks: 'private Briefe, einfache E-Mails, kleine Beschreibungen.', tipps: `Immer Einleitung – Hauptteil – Schluss.
          Wichtige Redemittel: „Zuerst… Dann… Danach… Schließlich…“
          Wörter für persönliche Meinungen: „Ich finde…“, „Meiner Meinung nach…“.
          Zeitangaben benutzen: „Am Montag… um 15 Uhr…“.
          Rechtschreibung zählt! Lieber kurze klare Sätze.
          Themen: Urlaub, Arbeit, Gesundheit, Stadt, Einkaufen.
` },
    {
      level: "b1", textlang: "ca. 100–120 Wörter.",
      tasks: 'Leserbriefe, E-Mails an eine Redaktion, kurze Stellungnahmen.',
      tipps: `Immer Aufgabe genau lesen → alle Punkte abdecken!
          Struktur:
          Einleitung (z. B. Bezug auf die Aufgabe: „Ich habe Ihren Artikel gelesen…“)
          Hauptteil (Meinung + Begründung + Beispiele)
          Schluss (Zusammenfassung / höflicher Abschluss)
          Redemittel für Argumentation:
          „Einerseits… andererseits…“
          „Ich bin der Meinung, dass…“
          „Das finde ich wichtig, weil…“
          Tipp: Mindestens ein Beispiel geben! („Zum Beispiel…“)
          Wichtig: klarer roter Faden, kein Chaos.
` },
    {
      level: "b2", textlang: "ca. 150–180 Wörter.",
      tasks: 'formelle Briefe, Stellungnahmen, kurze Aufsätze, Zusammenfassungen.',
      tipps: `Klare Gliederung mit Absätzen!
          Immer Argumente mit Begründung und Beispielen.
          Redemittel:
          „Im Gegensatz dazu…“
          „Darüber hinaus…“
          „Ein weiterer Aspekt ist…“
          Formeller Stil bei Briefen: „Sehr geehrte Damen und Herren, … Mit freundlichen Grüßen“.
          Zusammenfassung schreiben: nur die Hauptpunkte, keine Details.
          Fehler vermeiden: lieber kurze klare Sätze als zu kompliziert.
          Tipp: Synonyme nutzen → nicht immer „gut“ oder „schlecht“, sondern auch „positiv/negativ“, „vorteilhaft/nachteilig“. ` },
    {
      level: "c1", textlang: " ca. 250 Wörter.",
      tasks: ' Essay, Kommentar, Diskussion, Analyse.', tipps: `Sehr klare Gliederung:
          Einleitung (Thema vorstellen, Fragestellung formulieren)
          Hauptteil (Pro und Contra, verschiedene Perspektiven, Belege)
          Schluss (eigene Stellungnahme, Fazit, ggf. Lösungsvorschlag)
          Redemittel für gehobenes Niveau:
          „Es lässt sich feststellen, dass…
          „Darüber hinaus sollte berücksichtigt werden…“
          „Ein entscheidender Faktor ist…“
          Objektiv und sachlich schreiben, nicht nur persönliche Meinung.
          Quellen / Fakten richtig einbauen: „Laut einer Studie…“
          Auf sprachliche Vielfalt achten: komplexe Sätze, Konnektoren („obwohl, während, sodass…“).
          Sprachregister beachten: in C1 keine Umgangssprache!
` },

  ]
  return <>
    <div className="max-lg:px-2 lg:pr-8 flex flex-col gap-12">

      {tipps.map(i => {
        return <div key={i.level} className='py-4 flex flex-col gap-12 border-2 p-2 rounded-2xl'>
          <h2 className="text-3xl text-center text-cyan-600">Tipps im Niveau {i.level.toUpperCase()}</h2>
          <div className="flex">
            <span className="text-xl text-cyan-600">Textlänge : </span>
            <span className="text-lg"> {i.textlang} </span>
          </div>
          <p className="lg:text-2xl max-lg:text-xl"> <span className="text-cyan-600">Aufgabenarten :</span>
            <span className="lg:text-xl max-lg:text-lg">
              <span>  </span> {i.tasks}  </span> </p>
          <p className='lg:text-2xl max-lg:text-lg'>
            <span className="text-xl text-cyan-600">Tipps : </span>
            <span className="text-lg">{i.tipps}</span>
          </p>
        </div>
      })}
    </div>
  </>
}
export default TippsPage;
