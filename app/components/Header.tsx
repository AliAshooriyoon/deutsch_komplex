"use client"
import logo from "@/public/de-icon.png"
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return <>
    <div className="w-full h-20 bg-[#4a4b4e] rounded-b-3xl flex items-center justify-between">
      <div className="logo_box h-full gap-4 flex items-center pl-4">
        <Image className="h-[80%] w-17" alt="logo" src={logo} />
        <p className="logo_title text-2xl font-bold">Deutsch komplex</p>
      </div>
      <div className="items_header flex w-[40%] text-xl justify-around pr-6">
        <div className="">Haus</div>
        <div className="">Anfangen</div>
        <div className="">Preise</div>
        <div className="">Über uns</div>
      </div>
      <div className="buttons_box flex gap-8 pr-8 text-xl">
        <button type="button" className="">registieren</button>
        <Link href={'/login'} className="border-4 hover:border-black delay-75 text-yellow-500 hover:text-black hover:bg-yellow-500
          py-2 px-5 rounded-3xl border-yellow-500">
          Einloggen
        </Link>
      </div>
    </div>
  </>
}
export default Header;
