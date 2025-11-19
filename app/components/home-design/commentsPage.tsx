import Comment from "./comment";

const commentsData = [
  {
    title: `Ich habe mein Goethe-Zertifikat B2 beim ersten Versuch
      bestanden! Die Prüfungssimulationen waren perfekt zur Vorbereitung`,
    personName: "Sarah M.", personJob: "Studentin"
  },
  {
    title: `TestDaF mit 18 Punkten geschafft! Die gezielten Übungen
    für Hörverstehen und schriftlichen Ausdruck waren Gold wert.`,
    personName: "Ahmed K.", personJob: "Ingenieur"
  },
  {
    title: `Telc B2-Pflege bestanden!
      Die prüfungsnahen Aufgaben und das detaillierte Feedback haben mir sehr geholfen`,
    personName: "Elena P.", personJob: "Krankenpflegerin"
  },
]

const CommentPage = () => {
  return <>
    <div className="py-24">
      <div className="text-center">
        <h3 className="title text-4xl text-black">CommentPage </h3>
        <p className="text-gray-600 text-lg mt-3">Tausende haben bereits ihre Deutschprüfung erfolgreich bestanden </p>
      </div>
      <div className="comments_box flex justify-between w-[80%] mx-auto mt-8">
        <Comment data={commentsData[0]} />
        <Comment data={commentsData[1]} />
        <Comment data={commentsData[2]} />
      </div>
    </div>
  </>
}
export default CommentPage;
