"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function DarkModeButton() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const initial = resolvedTheme ?? theme ?? "light";
    document.documentElement.classList.remove(initial === "dark" ? "light" : "dark");
    document.documentElement.classList.add(initial);
  }, [resolvedTheme, theme]);

  if (!mounted) {
    return (
      <button
        aria-hidden
        className="showItem flex items-center opacity-0 pointer-events-none"
      >
        <MdOutlineDarkMode className="text-xl" />
        <span className="text-xl max-lg:hidden">Dunkel</span>
      </button>
    );
  }

  const current = resolvedTheme ?? theme ?? "light";

  const toggle = () => {
    const newTheme = current === "dark" ? "light" : "dark";

    setTheme(newTheme);

    document.documentElement.classList.remove(current);
    document.documentElement.classList.add(newTheme);

    console.log('***************************************************');
    console.log('html.class:', document.documentElement.className);
    console.log('localStorage.theme:', localStorage.getItem('theme'));
  };

  return (
    <div
      onClick={toggle}
      aria-pressed={current === "dark"}
      title={current === "dark" ? "Switch to light" : "Switch to dark"}
      className="showItem flex items-center gap-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      {current === "dark" ? (
        <MdOutlineLightMode className="text-xl" />
      ) : (
        <MdOutlineDarkMode className="text-xl" />
      )}
      <span className="text-xl max-lg:hidden">{current === "dark" ? "Hell" : "Dunkel"}</span>
    </div>
  );
}
