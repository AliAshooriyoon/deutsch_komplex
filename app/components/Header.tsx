"use client";
import { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdHome } from "react-icons/io";
import { MdOutlineDesignServices, MdPriceChange, MdAccountCircle } from "react-icons/md";
import { TbLayoutDashboard } from "react-icons/tb";
import { FcAbout } from "react-icons/fc";
import { Link as ScrollLink } from 'react-scroll';
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import logo from "@/public/de-icon.png";

const Header = () => {
  const { data: session, status } = useSession();
  const isLoading = status === "loading";
  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = () => setShowMenu(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-white/80 backdrop-blur-md border-b
        border-gray-300 shadow-sm px-3">
        <div className="flex items-center justify-between h-full px-px-6 lg:px-8">

          <div className="flex items-center gap-3 lg:gap-5">
            <Link href={'/'} className="flex items-center gap-3">
              <Image
                src={logo}
                alt="Deutsch komplex"
                className="h-14 w-14 lg:h-16 lg:w-16 rounded-full border-4 border-black object-cover"
              />
              <span className="text-xl lg:text-2xl font-bold text-gray-900">
                Deutsch komplex
              </span>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-10 bg-gray-400 text-lg font-medium text-gray-700">
            <ScrollLink to="home" smooth={true} duration={500} className="cursor-pointer hover:text-red-600 transition">
              Haus
            </ScrollLink>
            <ScrollLink to="services" smooth={true} duration={500} className="cursor-pointer hover:text-red-600 transition">
              Services
            </ScrollLink>
            <ScrollLink to="price" smooth={true} duration={500} className="cursor-pointer hover:text-red-600 transition">
              Preise
            </ScrollLink>
            <a href="https://aliashouriyoun-beta-ochre.vercel.app/de" target="_blank" rel="noopener noreferrer"
              className="hover:text-red-600 transition">
              Über uns
            </a>
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            {isLoading ? (
              <SkeletonTheme baseColor="#e5e7eb" highlightColor="#f3f4f6">
                <Skeleton width={140} height={44} borderRadius={32} />
              </SkeletonTheme>
            ) : !session?.user ? (
              <>
                <Link href="/register" className="text-lg font-medium hover:text-red-600 transition">
                  registieren
                </Link>
                <Link
                  href="/login"
                  className="px-8 py-3 rounded-full border-4 border-yellow-500 text-yellow-500 font-semibold
                             hover:bg-yellow-500 hover:text-black transition duration-300"
                >
                  Einloggen
                </Link>
              </>
            ) : (
              <Link
                href="/dashboard"
                className="px-8 py-3 rounded-full border-4 border-orange-600 text-orange-600 font-semibold
                           hover:bg-orange-600 hover:text-white transition duration-300"
              >
                Dashboard
              </Link>
            )}
          </div>

          <button
            onClick={() => setShowMenu(!showMenu)}
            className="lg:hidden text-gray-800"
          >
            {showMenu ? <AiOutlineClose size={36} /> : <IoMdMenu size={36} />}
          </button>
        </div>
      </header>

      <div
        className={`
          fixed inset-y-0 left-0 z-40 w-[75%] max-w-[380px] bg-gray-800 text-white shadow-2xl
          transform-gpu
          transition-transform duration-500 ease-out-expo
          ${showMenu ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex flex-col h-full pt-24 pb-8 px-8 overflow-y-auto">
          <nav className="flex flex-col gap-10 text-xl font-medium">

            <Link href={'/'} onClick={closeMenu} className="flex items-center gap-4 hover:text-yellow-400 transition">
              <IoMdHome size={26} />
              <span>Haus</span>
            </Link>

            <ScrollLink
              to="services"
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className="flex items-center gap-4 cursor-pointer hover:text-yellow-400 transition"
            >
              <MdOutlineDesignServices size={26} />
              <span>Services</span>
            </ScrollLink>

            <ScrollLink
              to="price"
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className="flex items-center gap-4 cursor-pointer hover:text-yellow-400 transition"
            >
              <MdPriceChange size={26} />
              <span>Preise</span>
            </ScrollLink>

            <a
              href="https://aliashouriyoun-beta-ochre.vercel.app/de"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex items-center gap-4 hover:text-yellow-400 transition"
            >
              <FcAbout size={26} />
              <span>Über uns</span>
            </a>

            {session?.user ? (
              <Link href="/dashboard" onClick={closeMenu} className="flex items-center gap-4 hover:text-yellow-400 transition">
                <TbLayoutDashboard size={26} />
                <span>Dashboard</span>
              </Link>
            ) : (
              <Link href="/login" onClick={closeMenu} className="flex items-center gap-4 hover:text-yellow-400 transition">
                <MdAccountCircle size={26} />
                <span>Einloggen</span>
              </Link>
            )}
          </nav>

          <div className="mt-auto pt-8 border-t border-white/10">
            {!session?.user && (
              <Link
                href="/register"
                onClick={closeMenu}
                className="block text-center py-3 text-lg font-medium text-yellow-400 hover:text-white transition"
              >
                registieren
              </Link>
            )}
          </div>
        </div>
      </div>

      {showMenu && (
        <>
          <div
            onClick={() => setShowMenu(false)}
            className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm transition-opacity duration-400"
          />
          <style jsx global>{`
            body { overflow: hidden; }
          `}</style>
        </>
      )}
    </>
  );
};

export default Header;
