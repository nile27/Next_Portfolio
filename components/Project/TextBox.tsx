"use client";
import React from "react";
import { isDarkAtom } from "@/app/state/isDarkAtom";
import { useRecoilValue } from "recoil";
import { projectData } from "@/lib/dummyData";
import MainButton from "../MainButton";

const TextBox = (props: { idx: number }) => {
  const { idx } = props;
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <div className=" w-full flex justify-center items-start flex-col border-l-[1px] textBoxHalf:border-l-[0px] textBoxHalf:pt-4 textBoxHalf:border-t-[1px] border-black pl-8 h-[auto] gap-5">
      <h1
        className={` text-SH ${
          isDark ? "text-DText" : "text-LText"
        } font-bold `}
      >
        {projectData[idx].header}
      </h1>
      <span
        className={` text-sm ${
          isDark ? "text-DText" : "text-LText"
        } font-bold `}
      >
        {projectData[idx].date}
      </span>
      <div className=" flex flex-wrap justify-start items-center gap-2">
        {projectData[idx].skill.map((item, idx) => {
          return (
            <div
              className={`${
                isDark
                  ? "text-DText border-DMainPurple"
                  : "text-LText border-LMainPurple"
              } gap-2 flex flex-col justify-center items-center w-auto h-auto px-[15px] py-[5px] rounded-lg border-[1px] hover:scale-110 duration-150 hover:ring-1 `}
              key={idx}
            >
              {item}
            </div>
          );
        })}
      </div>
      <ul
        className={`h-auto w-full flex flex-col gap-2 pl-6 pt-6 border-t-[2px] ${
          isDark ? "border-white" : "border-black"
        } `}
      >
        {projectData[idx].introText.map((item, idx) => {
          return (
            <li
              className={` ${isDark ? "text-DText" : "text-LText"} list-disc`}
              key={idx}
            >
              {item}
            </li>
          );
        })}
        <div className="w-full flex justify-end items-center pr-[5%] mt-7 mb-3">
          <MainButton size={"md"}>자세히 보기</MainButton>
        </div>
      </ul>
    </div>
  );
};

export default TextBox;
