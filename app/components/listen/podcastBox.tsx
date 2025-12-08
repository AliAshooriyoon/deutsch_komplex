import logodeutschToGo from "@/public/logo2.png";
import logo2 from "@/public/faviconV2.png";
import logo3 from "@/public/faviconV23.png";
import Image from "next/image";
import Link from "next/link";

const data = {
  toGo: {
    title: "DEUTSCH-TO-GO",
    underTitle: "Deutsch hören und verstehen.",
    description: `Deutsch-to-go ist ein privates Bildungsprojekt von zwei Expertinnen für
        Deutsch als Fremdsprache. Über 800 kurze Hörtexte sind schon online!`,
    link: "https://www.deutsch-to-go.de/",
  },
  radio: {
    title: "Radio.net",
    underTitle: `Der Begriff Radio wird aus dem lateinischen radius abgeleitet 
        und bedeutet Strahl...`,
    description: `Der Begriff Radio bezeichnet jedoch nicht nur den Apparat, über den wir Radio hören...`,
    link: "https://www.radio.de/",
  },
  deutschland: {
    title: "deutschland.fm",
    underTitle: `Deutschland.FM ist eine Gratis-Internetradio-Plattform...`,
    description: `Deutschland.FM ist eine Gratis-Internetradio-Plattform, über die du live zahlreiche deutsche Radiosender streamen kannst — Musik, News und mehr. Ideal, wenn du Deutsch hören willst, egal wo du bist.`,
    link: "https://www.deutschland.fm",

  }
};

type InfoKey = keyof typeof data; //  "toGo" | "radio"

const PodcastBox = ({ info }: { info: InfoKey }) => {
  const imageSrc = info === "toGo" ? logodeutschToGo : info === "deutschland" ? logo3 : logo2;

  return (
    <>
      <div
        className="w-[90%] podcast_item px-2 py-4 flex flex-col justify-between
       bg-white rounded-2xl gap-10 border-2 border-gray-400/70"
      >
        <div className="flex items-center justify-start gap-4">
          <div className="rounded-3xl">
            <Image className="rounded-3xl w-24 h-24" src={imageSrc} alt={data[info].title} />
          </div>

          <div className="flex flex-col">
            <p className="text-xl">{data[info].title}</p>
            <p className="text-gray-800">{data[info].underTitle}</p>
          </div>
        </div>

        <p className="text-sm max-w-[93%] mx-auto text-gray-700">
          {data[info].description}
        </p>

        <Link
          href={data[info].link}
          className="text-center w-[95%] delay-100 mx-auto bg-gray-800 rounded-xl border-2
        cursor-pointer text-white py-2 hover:bg-white hover:text-amber-500"
        >
          Webseite surfen
        </Link>
      </div>
    </>
  );
};

export default PodcastBox;
