"use client";
import { useRecoilState } from "recoil";
import { isDarkAtom } from "../state/isDarkAtom";
import { useEffect, useState } from "react";
import Email from "@/public/Img/email.svg";
import SvgButton from "@/components/SvgButton";

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
        } animate-mainAppear py-[15px] `}
      >
        <aside className="flex justify-between items-start flex-col min-w-[240px] h-full p-[1rem] ">
          <div className=" w-full flex justify-center items-start gap-[2rem] flex-col">
            <div className=" w-full">
              <h1
                className={` text-H text-DText mb-3 ${
                  isDark ? "text-DText" : "text-LText"
                } `}
              >
                Contact
              </h1>
              <SvgButton style="email">ddj03104@gmail.com</SvgButton>
            </div>
            <div className=" w-full">
              <h2
                className={` text-H text-DText mb-3 ${
                  isDark ? "text-DText" : "text-LText"
                } `}
              >
                My Link
              </h2>
              <div className=" flex justify-center items-start flex-col w-full gap-[2rem]">
                <SvgButton style="git" size="SH">
                  Github
                </SvgButton>
                <SvgButton style="velog" size="SH">
                  Blog
                </SvgButton>
              </div>
            </div>
          </div>
          <span className=" text-sm text-DNav_disable  ">
            최근 업데이트: 2024.05.27
          </span>
        </aside>
        <div className=" w-full h-full  ">
          <h1>{"mingyu's portfolio"}</h1>
        </div>
      </section>
    </>
  );
}

export default Intro;
