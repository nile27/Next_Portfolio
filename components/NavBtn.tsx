import { isDarkAtom } from "@/app/state/isDarkAtom";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";

type TMainButton = React.ComponentProps<"button"> & {
  length?: string;
  text: string;
};

const NavBtn = (props: TMainButton) => {
  const { length, text, ...restOption } = props;
  const isDark = useRecoilValue(isDarkAtom);
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      {...restOption}
      className={` cursor-pointer tablet900:min-w-[50px] tablet900:max-w-[100px] min-w-[150px] w-full  h-[auto] text-SH origin-[0%_50%] bg-transparent group after:block after:scale-0 after:scale-x-100 after:border-[2px] ${
        isDark ? "after:border-b-white" : "after:border-LMainPurple"
      } after:transition-transform after:duration-[500ms] hover:after:scale-100`}
    >
      <div
        className={`flex w-auto h-auto justify-between tablet900:justify-center items-center tablet900:p-0 p-1`}
      >
        <span
          className={`${
            isDark
              ? "text-[#4a4c53] group-hover:text-white"
              : "text-LNav_disable group-hover:text-LText"
          } group-after:block w-auto tablet900:text-center  group-after:transition-transform group-after:duration-[500ms] tablet900:text-[18px]  group-hover:after:scale-100`}
        >
          {text}
        </span>
        {length ? (
          <div
            className={`${
              isDark
                ? " bg-transparent group-hover:bg-DMainPurple text-[#4a4c53]"
                : "bg-transparent group-hover:bg-DMainPurple text-LSecondBg"
            } min-w-[36px] min-h-[36px] rounded-full text-center  group-after:transition-transform group-after:duration-[250ms] group-hover:text-white group-hover:after:scale-100 tablet900:hidden`}
          >
            {length}
          </div>
        ) : null}
      </div>
    </button>
  );
};

export default NavBtn;
