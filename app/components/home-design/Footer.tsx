import Link from "next/link";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return <>
    <div className='footer w-full h-52 p-4 bg-stone-900 rounded-xl flex justify-between flex-row'>
      <div className="main_footer flex flex-col justify-start gap-8 h-full items-start">

        <p className="text-3xl">Möchten Sie mit uns Kontakt knüpfen? </p>
        <Link className="text-xl" href={'mailto:aliashooriyoon@yahoo.com'}> Geben Sie uns Bescheid! </Link>
      </div>
      <div className="creator_main pr-12 flex flex-col gap-8">
        <p className="text-2xl">
          Diese Webseite ist von Ali Ashooriyoon erstellt!
        </p>
        <p className="flex flex-row gap-4 text-xl items-center justify-center">
          <Link className="flex flex-row gap-2 text-xl items-center justify-center"
            href={'https://github.com/AliAshooriyoon'}>
            <span className=""> <FaGithub /> </span> <span>Meine Github-Seite</span>
          </Link>
        </p>
      </div>
    </div>
  </>
}
export default Footer;
