"use client";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { isDarkAtom } from "../state/isDarkAtom";

import SvgButton from "@/components/SvgButton";
import Image from "next/image";
import { isTimeAtom } from "../state/isTimeAtom";

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText("ddj03104@gmail.com");
    alert("클립보드에 복사되었습니다.");
  } catch (error) {
    console.error(error);
  }
};

const Introduce = () => {
  const [isDark, setIsDark] = useRecoilState<boolean>(isDarkAtom);
  const [isTime, setIsTime] = useRecoilState<boolean>(isTimeAtom);
  return (
    <section
      className={`${
        isTime ? "flex" : "hidden"
      } justify-center items-center w-full h-full ${
        isDark ? "bg-DBg" : "bg-LBg"
      } animate-mainAppear py-[15px] tablet:flex-col relative `}
    >
      <aside className="flex justify-between items-start flex-col min-w-[240px] h-full p-[1rem] tablet:w-[100%] tablet:justify-between tablet:h-auto ">
        <div className=" w-full flex justify-center items-start gap-[2rem] flex-col tablet:flex-row tablet:justify-center ">
          <div className=" w-full tablet:w-auto">
            <h1
              className={` text-H text-DText mb-3 ${
                isDark ? "text-DText" : "text-LText"
              } tablet:hidden `}
            >
              Contact
            </h1>
            <SvgButton style="email" onClick={copyToClipboard}>
              ddj03104@gmail.com
            </SvgButton>
          </div>
          <div className=" w-full tablet:flex tablet:w-auto">
            <h2
              className={` text-H text-DText mb-3 ${
                isDark ? "text-DText" : "text-LText"
              } tablet:hidden `}
            >
              My Link
            </h2>
            <div className=" flex justify-center items-start flex-col w-full gap-[2rem] tablet:flex-row tablet:justify-center tablet:w-auto ">
              <a
                href="https://github.com/nile27"
                target="_blank"
                className="w-full h-auto"
              >
                <SvgButton style="git" size="SH">
                  Github
                </SvgButton>
              </a>
              <a
                href="https://velog.io/@nile27/posts"
                target="_blank"
                className="w-full h-auto"
              >
                <SvgButton style="velog" size="SH">
                  Blog
                </SvgButton>
              </a>
            </div>
          </div>
        </div>
        <span className="w-full text-center text-sm text-DNav_disable tablet:hidden ">
          최근 업데이트: 2024.06.09
        </span>
      </aside>
      <main className=" w-full h-full flex justify-center items-center gap-[2rem] flex-col relative  ">
        <h1
          className={`${isDark ? "text-DText" : "text-LText"} text-H font-bold`}
        >
          MinGyu’s Portfolio
        </h1>
        <Image
          src="/Img/profile.png"
          alt="profile"
          width={280}
          height={300}
          priority
          style={{ width: 250, height: 300 }}
        />

        <div className="flex flex-col gap-2">
          <h2
            className={`${
              isDark ? "text-DText" : "text-LText"
            } text-H font-bold tablet:text-SH`}
          >
            Front-End Developer
          </h2>
          <span
            className={`${
              isDark ? "text-DText" : "text-LText"
            } text-sm font-bold`}
          >
            도전을 즐기는 개발자 임민규입니다.
          </span>
          <span
            className={`${
              isDark ? "text-DText" : "text-LText"
            } text-sm font-bold`}
          >
            새로운 것들에 대해 항상 도전하고 배우려고 노력합니다
          </span>
        </div>
        <button
          className={` bottom-[5%] tablet:left-[45%] left-[47%] absolute z-[20]  cursor-pointer bg-transparent px-3 py-2 rounded-md ${
            isDark ? "text-white" : "text-LMainPurple"
          }  animate-bounce cursor-default`}
        >
          <svg
            className="w-5 h-5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"></path>
          </svg>
        </button>
      </main>
    </section>
  );
};

export default Introduce;
