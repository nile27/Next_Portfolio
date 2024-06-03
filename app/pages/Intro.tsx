"use client";
import { useRecoilState } from "recoil";
import { isDarkAtom } from "../state/isDarkAtom";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SvgButton from "@/components/SvgButton";
import Image from "next/image";

function Intro() {
  const [isDark, setIsDark] = useRecoilState<boolean>(isDarkAtom);
  const [isTime, setIsTime] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      setIsTime(true);
    }, 3500);
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("ddj03104@gmail.com");
      alert("클립보드에 복사되었습니다.");
    } catch (error) {
      console.error(error);
    }
  };

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
        } animate-mainAppear py-[15px] tablet:flex-col  `}
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
          <span className=" text-sm text-DNav_disable tablet:hidden ">
            최근 업데이트: 2024.05.27
          </span>
        </aside>
        <main className=" w-full h-full flex justify-center items-center gap-[2rem] flex-col   ">
          <h1
            className={`${
              isDark ? "text-DText" : "text-LText"
            } text-H font-bold`}
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
        </main>
      </section>
    </>
  );
}

export default Intro;
