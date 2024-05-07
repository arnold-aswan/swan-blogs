"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme("light");

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const switchTheme = (theme) => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <div
      onClick={() => switchTheme(theme)}
      className={`${
        theme === "light" ? "bg-black" : "bg-gray-500"
      } rounded-xl flex items-center justify-between p-1 w-[50px] relative`}>
      <Image src="/assets/moon.png" alt="moon" width={16} height={16} />
      <div
        className={`bg-white size-[16px] rounded-full absolute ${
          theme === "light" ? "right-1" : "left-1"
        } `}></div>
      <Image src="/assets/sun.png" alt="sun" width={16} height={16} />
    </div>
  );
};

export default ThemeToggle;
