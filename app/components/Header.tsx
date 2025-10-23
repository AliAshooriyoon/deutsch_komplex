"use client"
import { Link as ScrollLink, Element } from 'react-scroll';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import logo from "@/public/de-icon.png"
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  const user = useSession()
  const isLoading = user.status == "loading"
  console.log(user.status)
  return <>
    <div className="w-full h-20 bg-[#4a4b4e] rounded-b-3xl flex items-center justify-between">
      <div className="logo_box max-lg:w-full h-full gap-4 flex justify-between
        items-center  pl-4">
        <Image className="h-[80%] w-17" alt="logo" src={logo} />
        <p className="logo_title text-2xl font-bold max-lg:pr-4">Deutsch komplex</p>
        <div className='wrapper'></div>
      </div>
      <div className="items_header  w-[40%] text-xl justify-around pr-6 hidden lg:flex">
        <div className="cursor-pointer"> Haus </div>
        <div className="cursor-pointer"> <ScrollLink to="services" smooth={true} duration={500} > Services </ScrollLink> </div>
        <div className="cursor-pointer"><ScrollLink to="price" smooth={true} duration={500} > Preise </ScrollLink></div>
        <div className="cursor-pointer">
          <Link href={'https://aliashouriyoun-beta-ochre.vercel.app/de'}>
            Über uns </Link></div>
      </div>
      <div className="buttons_box hidden lg:flex gap-8 pr-8 text-xl  flex-row items-center">
        {isLoading ? <SkeletonTheme baseColor="#202020" highlightColor="#444"
          width={'9rem'} borderRadius={'3rem'} height={'3rem'}> <Skeleton /> </SkeletonTheme>
          : !user.data?.user?.email ?
            <>
              <Link href='/register' type="button" className="">registieren</Link>
              <Link href='/login' className="border-4 hover:border-black delay-75 text-yellow-500 hover:text-black hover:bg-yellow-500
          py-2 px-5 rounded-3xl border-yellow-500">
                Einloggen
              </Link>
            </>
            : <Link href='/dashboard' className="border-4 hover:border-black delay-75 text-[#FF3D00] hover:text-black hover:bg-yellow-500
          py-2 px-5 rounded-3xl border-[#FF3D00]">
              Dashboard
            </Link>}

      </div>
    </div>
  </>
}
export default Header;
