"use client";
import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { isDarkAtom } from "../state/isDarkAtom";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utill";

type TMainButton = React.ComponentProps<"button"> & {
  children: string;
  size?: "sm" | "md";
};

const buttonVariants = cva(`p-2 rounded`, {
  variants: {
    size: {
      default: `w-[120px] h-[40px] text-Md rounded-[18px]`,
      sm: `w-[90px] h-[25px] text-Sm rounded-[10px]`,
      md: `w-[120px] h-[40px] text-Md rounded-[18px]`,
    },
    color: {
      default:
        "bg-DMainPurple hover:bg-white hover:text-DMainPurple hover:border-DMainPurple",
      dark: "bg-DMainPurple hover:bg-white hover:text-DMainPurple hover:border-DMainPurple",
      light:
        "bg-LMainPurple hover:bg-white hover:text-LMainPurple hover:border-LMainPurple",
    },
  },
  defaultVariants: {
    size: "default",
    color: `default`,
  },
});

const MainButton = (props: TMainButton) => {
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);
  const color = useRecoilValue(isDarkAtom) as "dark" | "light" | "default";

  const { children, size, ...restBtnProps } = props;
  return (
    <button
      {...restBtnProps}
      onClick={() => {
        let isBool = isDark === "light" ? "dark" : "light";
        setIsDark(isBool);
      }}
      className={cn(
        buttonVariants({ size, color }),
        `cursor-pointer flex justify-center items-center rounded-full text-white tracking-wider shadow-xl hover:border-[1px] hover:scale-105 duration-300 hover:ring-1 font-mono `
      )}
    >
      {children}
    </button>
  );
};

export default MainButton;