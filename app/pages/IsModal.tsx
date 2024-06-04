"use client";
import { useEffect } from "react";
import { projectData } from "@/lib/dummyData";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../state/isDarkAtom";
import Image from "next/image";
import { CarouselBox } from "@/components/Project/CarouselBox";

const IsModal = () => {
  const isDark = useRecoilValue(isDarkAtom);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return (
    <div className="fixed z-20 backdrop-blur-md bg-[rgba(255,255,192,0.1)] w-full h-[100vh] inset-0 overflow-y-auto">
      <div
        className={` ${
          isDark ? "bg-DBg" : "bg-LBg"
        } z-30 t-[30%] flex flex-col justify-start items-center gap-2 h-auto overflow-y-auto mt-10 mx-16 p-[30px]`}
      >
        <div className="flex flex-col justify-center items-center gap-[10px]"></div>
        <span className={`${isDark ? "text-DText" : "text-LText"} p-[10px]`}>
          {projectData[0].date}
        </span>
        <h1
          className={`${
            isDark ? "text-DMainPurple" : "text-LMainPurple"
          } text-H font-bold p-[10px]`}
        >
          {projectData[0].header}
        </h1>
        <div className="flex flex-row justify-center gap-2 p-[10px]">
          <div
            className={`${
              isDark
                ? "text-DText border-DMainPurple"
                : "text-LText border-LMainPurple"
            } gap-2 flex flex-col justify-center items-center w-auto h-auto px-[15px] py-[5px] rounded-lg border-[1px] hover:scale-110 duration-150 hover:ring-1 `}
          >
            {"솔로"}
          </div>
          <div
            className={`${
              isDark
                ? "text-DText border-DMainPurple"
                : "text-LText border-LMainPurple"
            } gap-2 flex flex-col justify-center items-center w-auto h-auto px-[15px] py-[5px] rounded-lg border-[1px] hover:scale-110 duration-150 hover:ring-1 `}
          >
            {"사이드 프로젝트"}
          </div>
        </div>
        <div className="flex justify-center w-full h-auto">
          <CarouselBox idx={0} />
        </div>
        <div className="w-full h-[120px] bg-black"></div>
        <div className="w-full h-[120px] bg-black"></div>
      </div>
    </div>
  );
};

export default IsModal;
