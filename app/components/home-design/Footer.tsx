// import { MdEmail } from "react-icons/md";
import { TbFileCv } from "react-icons/tb";
import Link from "next/link";
import logo from "@/public/de-icon.png"
import Image from "next/image";
const Footer = () => {
  return <>
    <div className='footer text-white w-full lg:py-12 max-lg:py-6 max-lg:px-1
      lg:px-4 bg-gray-800 flex
      justify-between flex-col max-lg:gap-8 gap-6'>

      <div className="items max-lg:w-[90%] lg:w-[75%] mx-auto flex max-lg:flex-col justify-between">
        <div className="title_footer">
          <div className="flex items-center gap-2">
            <Image className="w-12 h-12" alt="" src={logo} />
            <span className="text-2xl text-white">Deutsch Komplex</span>
          </div>
          <p className="max-w-92 py-4 max-lg:text-sm">Deine professionelle Plattform
            für deutsche Prüfungsvorbereitung.</p>
        </div>
        <div className="flex justify-between max-lg:gap-2 max-lg:py-2 flex-col text-gray-400">
          <p className="text-lg pb-2 text-white">Produkt</p>
          <p className="text-sm">Möglichkeiten</p>
          <p className="text-sm">Preise</p>
          <p className="text-sm">FAQ</p>
        </div>
        <div className="flex justify-between max-lg:gap-2 max-lg:py-2 flex-col text-gray-400">
          <p className="text-lg pb-2 text-white">Unternehmen</p>
          <p className="text-sm">Über uns</p>
          <p className="text-sm">Blog</p>
          <p className="text-sm">Karriere</p>
        </div>
        <div className="flex justify-between max-lg:gap-2 max-lg:py-2 flex-col text-gray-400">
          <p className="text-lg pb-2 text-white">Rechtliches</p>
          <p className="text-sm">Datenschutz</p>
          <p className="text-sm">AGB</p>
          <p className="text-sm">Impressum</p>
        </div>
      </div>
      <div className="wrapper h-0.5 bg-gray-600 lg:w-[85%] max-lg:w-[95%] mx-auto my-4 "></div>
      <div className="lg:w-[85%] max-lg:w-[95%] text-gray-300 lg:px-12
        pb-8 mx-auto flex max-lg:flex-col
        max-lg:gap-8 justify-between">
        <span className=" text-gray-300 max-lg:text-sm">© 2025 DeutschKomplex. Alle Rechte vorbehalten.</span>
        <Link className="cursor-pointer text-lg flex items-center gap-2"
          href={'https://aliashouriyoun-beta-ochre.vercel.app/de'}>
          <div className=""> <TbFileCv /> </div>
          Ali Ashouriyoun
        </Link>
      </div>

    </div>
  </>
}
export default Footer;
