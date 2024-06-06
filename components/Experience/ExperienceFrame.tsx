import React from "react";
import { isDarkAtom } from "@/app/state/isDarkAtom";
import { useRecoilValue } from "recoil";

const ExperienceFrame = () => {
  const isDark = useRecoilValue(isDarkAtom);
  const dummy = {
    date: "2015.03 ~ 2022.08",
    Learn: [
      "JavaScript 기반 프론트엔드 과정 ",
      "HTML5 / CSS3를 이용한 웹 개발",
      "React 프레임워크를 통한 웹 개발",
      "약 200개 정도의 JavaScript 알고리즘 문제 풀이",
    ],
    active: [
      "협업 프로젝트 2회 진행",
      "Main - Project : 맛집 탐색 사이트",
      "Pre - Project : 스택 오버플로우 클론",
    ],
  };
  return (
    <article className="flex flex-row justify-start gap-3 w-full tablet:flex-col  ">
      <div
        className={`min-w-[160px] border-r-[5px] tablet:border-r-0 tablet:border-b-[1px]  ${
          isDark ? "border-DThirdColor" : "border-LThirdColor"
        } `}
      >
        <h2
          className={`text-SH  ${
            isDark ? "text-DThirdColor" : "text-LThirdColor"
          }  font-bold`}
        >
          Experience
        </h2>
      </div>
      <div
        className={`w-full h-auto ${
          isDark ? "bg-DSecondBg " : "bg-LSecondBg border-LText"
        } p-[20px] flex flex-col gap-2 rounded-lg  `}
      >
        <span className={`${isDark ? "text-DText" : "text-LText"}`}>
          {dummy.date}
        </span>
        <div
          className={`bg-transparent flex gap-1 border-b-[1px] w-full pb-2 ${
            isDark ? "text-DText border-DText" : "text-LText border-LText"
          } `}
        >
          {" "}
          <span
            className={`text-SH font-bold ${
              isDark ? "text-DText " : "text-LText"
            } `}
          >
            코드스테이츠 - FrontEnd 과정: (수료)
          </span>
        </div>
        <div className=" flex flex-col w-full h-auto mt-[10px] ">
          <h3
            className={` text-SH font-bold ${
              isDark ? "text-DThirdColor" : "text-LThirdColor"
            }`}
          >
            Learn & Explanation
          </h3>
          <ul className="flex flex-col gap-2 list-disc pl-[15px] pt-2">
            {dummy.Learn.map((item, idx) => {
              return <li key={idx}>{item}</li>;
            })}
          </ul>
        </div>
        <div className=" flex flex-col w-full h-auto mt-[10px] ">
          <h3
            className={` text-SH font-bold ${
              isDark ? "text-DThirdColor" : "text-LThirdColor"
            }`}
          >
            Activity
          </h3>
          <ul className="flex flex-col gap-2 list-disc pl-[15px] pt-2">
            {dummy.active.map((item, idx) => {
              return <li key={idx}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default ExperienceFrame;
