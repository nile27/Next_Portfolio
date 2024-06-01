import React from "react";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../state/isDarkAtom";

type TMainButton = React.ComponentProps<"button"> & {
  children: string;
  size?: "small" | "big";
};

const MainButton = (props: TMainButton) => {
  const isDark = useRecoilValue(isDarkAtom);
  const { size, children, ...restBtnProps } = props;
  return (
    <button
      {...restBtnProps}
      className={`${
        size === "small"
          ? "w-[90px] h-[25px] text-Sm rounded-[10px]"
          : "w-[120px] h-[40px] text-Md rounded-[18px]"
      } ${
        isDark
          ? "bg-DMainPurple hover:bg-white hover:text-DMainPurple hover:border-DMainPurple"
          : "bg-LMainPurple hover:bg-white hover:text-LMainPurple hover:border-LMainPurple"
      }  cursor-pointer flex justify-center items-center rounded-full text-white tracking-wider shadow-xl hover:border-[1px] hover:scale-105 duration-300 hover:ring-1 font-mono `}
    >
      {children}
    </button>
  );
};

export default MainButton;
