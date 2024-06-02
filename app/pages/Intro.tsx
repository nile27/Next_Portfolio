"use client";
import { useRecoilState } from "recoil";
import { isDarkAtom } from "../state/isDarkAtom";
import { useEffect, useState } from "react";

function Intro() {
  const [isDark, setIsDark] = useRecoilState<boolean>(isDarkAtom);
  const [isTime, setIsTime] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setIsTime(true);
    }, 3500);
  }, []);

  return (
    <>
      <section
        className={`${
          !isTime ? "flex" : "hidden"
        } justify-center items-center w-full h-full ${
          isDark ? "bg-DBg" : "bg-LBg"
        } animate-disappear `}
      >
        <div className=" w-full h-full flex justify-center items-center flex-col ">
          <span
            className={`animate-trackingInContract text-[5vw] ${
              isDark ? "text-DText" : "text-[#7F5AF0]"
            } text-shadow-light  bg-[linear-gradient(to bottom, #ece4d9 0%,#e9dfd1 100%]`}
          >
            Welcome
          </span>
          <span
            className={`animate-appear text-[3vw] font-semibold ${
              isDark ? "text-DText" : "text-LText"
            }`}
          >
            프론트엔드 개발자 임민규입니다.
          </span>
        </div>
      </section>
      <section
        className={`${
          isTime ? "flex" : "hidden"
        } justify-center items-center w-full h-full ${
          isDark ? "bg-DBg" : "bg-LBg"
        } animate-mainAppear `}
      >
        <h1>{"mingyu's portfolio"}</h1>
      </section>
    </>
  );
}

export default Intro;
