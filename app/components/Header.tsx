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
      <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-white/90 backdrop-blur-md
        border-b border-gray-200">
        <div className="mx-auto flex h-full gap-12 items-center justify-between px-5 lg:px-8">

          <Link href="/" className="flex items-center gap-3 lg:gap-4">
            <Image
              src={logo}
              alt="Deutsch komplex"
              className="h-14 w-14 lg:h-16 lg:w-16 rounded-full border-4 border-black object-cover"
            />
            <span className="text-xl lg:text-2xl font-bold text-gray-900">
              Deutsch komplex
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-20 text-lg font-medium text-gray-700">
            <Link href={"/"} className="cursor-pointer hover:text-red-600 transition">
              Haus
            </Link>
            <ScrollLink to="services" smooth duration={600} className="cursor-pointer hover:text-red-600 transition">
              Services
            </ScrollLink>
            <ScrollLink to="price" smooth duration={600} className="cursor-pointer hover:text-red-600 transition">
              Preise
            </ScrollLink>
            <Link
              href="/about"
              // target="_blank"
              // rel="noopener noreferrer"
              className="hover:text-red-600 transition"
            >
              Über uns
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-18">
            {isLoading ? (
              <SkeletonTheme baseColor="#f3f4f6" highlightColor="#ffffff">
                <Skeleton width={140} height={48} borderRadius={32} />
              </SkeletonTheme>
            ) : !session?.user ? (
              <>
                <Link href="/register" className="text-lg font-medium hover:text-red-600 transition">
                  registieren
                </Link>
                <Link
                  href="/login"
                  className="px-8 py-3 rounded-full bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition"
                >
                  Einloggen
                </Link>
              </>
            ) : (
              <Link
                href="/dashboard"
                className="px-8 py-3 rounded-full bg-orange-600 text-white font-bold hover:bg-orange-500 transition"
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
          transform-gpu transition-transform duration-500 ease-out-expo
          ${showMenu ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex flex-col h-full pt-24 pb-10 px-8 overflow-y-auto">
          <nav className="flex flex-col gap-12 pt-4 text-xl font-medium">

            <Link href="/" onClick={closeMenu} className="flex items-center gap-5 hover:text-yellow-400 transition">
              <IoMdHome size={28} /> <span>Haus</span>
            </Link>

            <ScrollLink to="services" smooth duration={600} onClick={closeMenu}
              className="flex items-center gap-5 hover:text-yellow-400 transition cursor-pointer">
              <MdOutlineDesignServices size={28} /> <span>Services</span>
            </ScrollLink>

            <ScrollLink to="price" smooth duration={600} onClick={closeMenu}
              className="flex items-center gap-5 hover:text-yellow-400 transition cursor-pointer">
              <MdPriceChange size={28} /> <span>Preise</span>
            </ScrollLink>

            <Link
              href="/about"
              // target="_blank" rel="noopener noreferrer"
              onClick={closeMenu} className="flex items-center gap-5 hover:text-yellow-400 transition">
              <FcAbout size={28} /> <span>Über uns</span>
            </Link>

            {session?.user ? (
              <Link href="/dashboard" onClick={closeMenu} className="flex items-center gap-5 hover:text-yellow-400 transition">
                <TbLayoutDashboard size={28} /> <span>Dashboard</span>
              </Link>
            ) : (
              <Link href="/login" onClick={closeMenu} className="flex items-center gap-5 hover:text-yellow-400 transition">
                <MdAccountCircle size={28} /> <span>Einloggen</span>
              </Link>
            )}

          </nav>

          {!session?.user && (
            <div className="mt-auto pt-8 border-t border-white/10">
              <Link href="/register" onClick={closeMenu}
                className="block text-center py-3 text-lg font-medium text-yellow-400 hover:text-white transition">
                registieren
              </Link>
            </div>
          )}
        </div>
      </div>

      {showMenu && (
        <>
          <div onClick={closeMenu} className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm" />
          <style jsx global>{`body { overflow: hidden; }`}</style>
        </>
      )}
    </>
  );
};

export default Header;
