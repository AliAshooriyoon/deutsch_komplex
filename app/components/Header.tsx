"use client"
import { TbLayoutDashboard } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { MdPriceChange } from "react-icons/md";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import "./headerStyles.css"
import { Link as ScrollLink, Element } from 'react-scroll';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import logo from "@/public/de-icon.png"
import { IoMdMenu } from "react-icons/io";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
const Header = () => {
  const user = useSession()
  const isLoading = user.status == "loading"
  const [showMenu, setShowMenu] = useState(false)
  const hideMenu = () => {
    setShowMenu(false)
  }
  return <>
    <div className="w-full h-20 sticky top-0 z-10 bg-[#4a4b4e] rounded-b-3xl flex items-center justify-between">
      <div className="logo_box max-lg:w-full h-full gap-4 flex justify-between
        items-center  pl-4">
        <Link href={"/"} >
          <Image className="h-[80%] w-17" alt="main_logo" src={logo} />
        </Link>
        <p className="logo_title text-2xl  font-bold max-lg:pr-4 text-[#EDEDED]">Deutsch komplex</p>
        <div className='wrapper lg:hidden mr-4'>
          <div onClick={() => setShowMenu(prev => !prev)}>
            {!showMenu ? <IoMdMenu className="w-10 h-10" /> :
              <AiOutlineClose className="w-10 h-10" />
            }
          </div>
        </div>
        {showMenu && <div className='phone_menu fixed pl-5 pt-6 w-[100vw] 
           bg-[#18181B]'>
          <div className="items_header flex flex-col gap-6 text-[#EDEDED] text-2xl indent-4 justify-around pr-6 ">
            <div className="cursor-pointer flex items-center text-[#EDEDED]" onClick={hideMenu} >
              <IoMdHome className="text-[#EDEDED]" /> <Link href={"/"}>Haus</Link> </div>
            <div className="cursor-pointer" >
              <ScrollLink className="flex items-center" onClick={hideMenu} to="services" smooth={true} duration={500}>
                <MdOutlineDesignServices className="text-[#EDEDED]" />
                <span>Services</span> </ScrollLink> </div>
            <div className="cursor-pointer">
              <ScrollLink className="flex items-center" onClick={hideMenu} to="price" smooth={true} duration={500}>
                <MdPriceChange className="text-[#EDEDED]" />    <span>Preise</span> </ScrollLink></div>
            <div className="cursor-pointer">
              <Link className="flex items-center" onClick={hideMenu} href={'https://aliashouriyoun-beta-ochre.vercel.app/de'}>
                <FcAbout className="text-[#EDEDED]" /> <span>Über uns</span> </Link></div>
            <div className="cursor-pointer">
              {user.status == "unauthenticated" ? <Link className="flex items-center" href={'/login'}>
                <MdAccountCircle className="text-[#EDEDED]" /> <span> Einloggen  </span> </Link>
                : <Link className="flex items-center" href={'/dashboard'}>
                  <TbLayoutDashboard className="text-[#EDEDED]" /> <span> Dashboard  </span> </Link>}
            </div>
          </div>

        </div>}
      </div>
      <div className="items_header text-[#EDEDED] w-[40%] text-xl justify-around pr-6 hidden lg:flex">
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
