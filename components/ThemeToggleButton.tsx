"use client";
import Image from "next/image";

import { useRecoilState } from "recoil";
import { isDarkAtom } from "@/app/state/isDarkAtom";

import { cva } from "class-variance-authority";
import { cn } from "../lib/utill";

import sun from "../public/Img/sun.png";
import moon from "../public/Img/moon.png";
import upArrow from "../public/Img/upArrow.png";

const buttonVariants = cva(`p-2 rounded`, {
  variants: {
    color: {
      default:
        "bg-DMainPurple  hover:text-DMainPurple hover:border-DMainPurple",
      dark: "bg-DMainPurple  hover:text-DMainPurple hover:border-DMainPurple",
      light: "bg-LMainPurple  hover:text-LMainPurple hover:border-LMainPurple",
    },
  },
  defaultVariants: {
    color: `default`,
  },
});

const ThemeToggleButton = () => {
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);

  const color = isDark ? "dark" : "light";

  const handleScroll = () => {
    if (!window.scrollY) return;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleTheme = () => {
    let systemTheme = !isDark ? "dark" : "light";
    setIsDark(!isDark);
  };
  return (
    <div className=" fixed bottom-9 right-9 tablet:flex-row  flex justify-center items-center gap-2 flex-col z-10">
      <button
        onClick={handleTheme}
        className={cn(
          buttonVariants({ color }),
          `cursor-pointer flex justify-center items-center rounded-full tablet:w-[30px] tablet:h-[30px] w-[50px] h-[50px] text-white tracking-wider shadow-xl hover:border-[1px] hover:scale-105 duration-300 hover:ring-1 `
        )}
      >
        {isDark ? (
          <Image src={sun} alt="light" />
        ) : (
          <Image src={moon} alt="dark" />
        )}
      </button>
      <button
        onClick={handleScroll}
        className={cn(
          buttonVariants({ color }),
          `cursor-pointer flex justify-center items-center rounded-full tablet:w-[30px] tablet:h-[30px] w-[50px] h-[50px] text-white tracking-wider shadow-xl hover:border-[1px] hover:scale-105 duration-300 hover:ring-1 `
        )}
      >
        <Image
          src="/Img/upArrow.png"
          alt="Top"
          width={30}
          height={30}
          priority
        />
      </button>
    </div>
  );
};

export default ThemeToggleButton;
