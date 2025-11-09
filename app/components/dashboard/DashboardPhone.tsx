"use client";
import {
  FaUserAlt,
  FaBookReader,
  FaPenAlt,
  FaHeadphones,
} from "react-icons/fa";
import { VscSymbolKeyword } from "react-icons/vsc";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const DashboardPhone = () => {
  const lists: Record<string, { items: string[], links: string[] }> = {
    schreiben: {
      items: ["Tipps zum Schreiben", "Beispiele zum Schreiben", "Test-modelle"],
      links: [
        "/dashboard/schreiben/tipps",
        "/dashboard/schreiben/example",
        "/dashboard/schreiben/tests",
      ],
    },
    lesen: {
      items: ["Geschichten", "Beispiele zum Lesen", "Test-modelle"],
      links: [
        "/dashboard/lesen/stories",
        "/dashboard/lesen/example",
        "/dashboard/lesen/tests",
      ],
    },
    words: {
      items: ["Lainter", "Wörter zu jedem Niveau"],
      links: ["/dashboard/words/lainter", "/dashboard/words/words-list"],
    },
    listen: {
      items: ["Hördateien",
        "Podcasts auf Deutsch",
        "Test-modelle"],
      links: [
        "/dashboard/listen/listen-files",
        "/dashboard/listen/podcasts",
        "/dashboard/listen/tests",
      ],
    },
  };

  const [showItems, setShowItems] = useState<{
    status: boolean;
    path: keyof typeof lists | "";
  }>({ status: false, path: "" });

  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(e.target as Node)
      ) {
        setShowItems({ status: false, path: "" });
      }
    };

    if (showItems.status) {
      document.addEventListener("mousedown", handleOutside);
    }
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [showItems.status]);

  return (
    <div ref={headerRef} className="relative w-full">

      <div className="header_list flex text-[#EDEDED] items-center h-20 z-20 w-full bg-[#4a4b4e] px-4 justify-between">
        {/* Schreiben */}
        <button
          onClick={() =>
            setShowItems((prev) => ({
              status: !prev.status,
              path: "schreiben",
            }))
          }
          className="flex flex-col items-center justify-center h-full"
        >
          <FaPenAlt className="w-10 h-10 text-white" />
        </button>

        {/* Lesen */}
        <button
          onClick={() =>
            setShowItems((prev) => ({
              status: !prev.status,
              path: "lesen",
            }))
          }
          className="flex flex-col items-center justify-center h-full"
        >
          <FaBookReader className="w-10 h-10 text-white" />
        </button>

        {/* Words */}
        <button
          onClick={() =>
            setShowItems((prev) => ({
              status: !prev.status,
              path: "words",
            }))
          }
          className="flex flex-col items-center justify-center h-full"
        >
          <VscSymbolKeyword className="w-10 h-10 text-white" />
        </button>

        {/* Listen */}
        <button
          onClick={() =>
            setShowItems((prev) => ({
              status: !prev.status,
              path: "listen",
            }))
          }
          className="flex flex-col items-center justify-center h-full"
        >
          <FaHeadphones className="w-10 h-10 text-white" />
        </button>

        {/* Settings */}
        <Link href={"/dashboard/account"} className="flex flex-col items-center justify-center h-full">
          <FaUserAlt className="w-10 h-10 text-white" />
        </Link>
      </div>

      {showItems.status && showItems.path && (
        <div className="absolute bottom-20 left-0 right-0 bg-[#1E201E] w-full
            rounded-t-3xl overflow-hidden shadow-2xl z-50">
          <div className="p-4 space-y-2">
            {lists[showItems.path].items.map((item, idx) => (
              <Link
                key={item}
                href={lists[showItems.path].links[idx]}
                onClick={() => setShowItems({ status: false, path: "" })}
                className="block py-3 px-4 text-lg text-white hover:bg-white/10 rounded transition"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}

      {showItems.status && (
        <div
          className="fixed inset-0 z-40"
          style={{ top: "calc(100vh - 5rem)" }}
          onClick={() => setShowItems({ status: false, path: "" })}
        />
      )}
    </div>
  );
};

export default DashboardPhone;
