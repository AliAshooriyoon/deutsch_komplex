import Link from "next/link";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return <>
    <div className='footer w-full lg:py-12 max-lg:py-6 px-4 bg-stone-900 rounded-xl flex
      justify-between max-lg:flex-col lg:flex-row max-lg:gap-8'>
      <div className="main_footer flex flex-col justify-start 
        lg:gap-8 max-lg:gap-4 h-full items-start">

        <p className="lg:text-3xl">Möchten Sie mit uns Kontakt knüpfen? </p>
        <Link className="lg:text-xl underline" href={'mailto:aliashooriyoon@yahoo.com'}>
          Geben Sie uns Bescheid! </Link>
      </div>
      <div className="creator_main lg:pr-12 max-lg:pr-4">
        <p className="lg:text-2xl lg:flex flex-row gap-2">
          <span>Diese Webseite ist von</span>
          <span className="flex items-center gap-2 text-cyan-600">
            <Link className="flex flex-row gap-2 lg:text-2xl items-center justify-center"
              href={'https://github.com/AliAshooriyoon'}>
              <FaGithub />  Ali Ashooriyoon
            </Link>
          </span>
          erstellt!
        </p>

      </div>
    </div>
  </>
}
export default Footer;
