"use client";
import { useEffect } from "react";
import { projectData } from "@/lib/dummyData";
import { useRecoilValue, useRecoilState } from "recoil";
import { isDarkAtom } from "../state/isDarkAtom";
import { isModalAtom } from "../state/isModalAtom";
import Image from "next/image";
import { CarouselBox } from "@/components/Project/CarouselBox";
import ProjectSkillTag from "@/components/Project/ProjectSkillTag";

import GitSvg from "@/components/SvgComponents/GitSvg";

const IsModal = () => {
  const isDark = useRecoilValue(isDarkAtom);
  const [isModal, setIsModal] = useRecoilState(isModalAtom);
  useEffect(() => {
    if (isModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModal]);
  return (
    <>
      {isModal && (
        <>
          <section className="fixed z-30 backdrop-blur-md bg-[rgba(255,255,192,0.1)] w-full h-[100vh]  inset-0 overflow-y-auto">
            <div className="flex  w-auto flex-row justify-between items-start h-auto relative">
              <article
                className={` ${
                  isDark ? "bg-DBg" : "bg-LBg"
                } z-30 t-[30%] flex flex-col justify-start items-center h-auto overflow-y-auto mt-10 mx-16 p-[60px] gap-2 relative`}
              >
                <div className="flex flex-col justify-center items-center gap-[10px]"></div>
                <span
                  className={`${isDark ? "text-DText" : "text-LText"} p-[10px]`}
                >
                  {projectData[0].date}
                </span>
                <span
                  className={`${
                    isDark ? "text-DMainPurple" : "text-LMainPurple"
                  } text-H font-bold p-[10px]  tablet:text-SH`}
                >
                  {projectData[0].header}
                </span>
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
                <div
                  className={`flex rounded-xl px-[40px] justify-center w-full  max-w-[700px] h-auto border-[5px] border-b-[8px] ${
                    isDark ? " border-DText" : " border-LSecondBg"
                  }`}
                >
                  <CarouselBox idx={0} width={700} height={350} />
                </div>
                <div className="flex justify-center items-center w-[80%] p-6 border-b-[1px] mb-5 ">
                  <p>{projectData[0].modalP}</p>
                </div>
                <div className="flex flex-col pt-6 gap-2 w-full mb-5 ">
                  <span
                    className={`${
                      isDark ? "text-DText" : "text-LText"
                    } text-H font-bold pl-[20px] pb-4 tablet:text-SH`}
                  >
                    사용 기술
                  </span>
                  <div className="flex gap-3 justify-start flex-wrap">
                    {projectData[0].skill.map((item, idx) => {
                      return (
                        <ProjectSkillTag key={idx} isDark={isDark}>
                          {item}
                        </ProjectSkillTag>
                      );
                    })}
                  </div>
                </div>
                <div className="flex flex-col pt-6 gap-2  w-full">
                  <span
                    className={`${
                      isDark ? "text-DText" : "text-LText"
                    } text-H font-bold px-[10px]  tablet:text-SH pl-[20px]`}
                  >
                    작업 기여도
                  </span>
                  <ul
                    className={`h-auto w-full flex flex-col gap-2 pl-6 pt-6 border-t-[2px] ${
                      isDark ? "border-white" : "border-black"
                    } `}
                  >
                    {projectData[0].modalFirstli?.map((item, idx) => {
                      return (
                        <li
                          className={` ${
                            isDark ? "text-DText" : "text-LText"
                          } list-disc`}
                          key={idx}
                        >
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="flex flex-col pt-6 gap-2 w-full  ">
                  <span
                    className={`${
                      isDark ? "text-DText" : "text-LText"
                    } text-H font-bold px-[10px] mb-5 tablet:text-SH pl-[20px]`}
                  >
                    Trouble Shooting
                  </span>
                  <ul
                    className={`h-auto w-full flex flex-col gap-2 pl-6 pt-6 border-t-[2px] ${
                      isDark ? "border-white" : "border-black"
                    } `}
                  >
                    {projectData[0].modalSecondli?.map((item, idx) => {
                      return (
                        <div key={idx}>
                          <li
                            className={` ${
                              isDark ? "text-DText" : "text-LText"
                            } list-disc`}
                            key={idx}
                          >
                            {item.troble}
                          </li>
                          <li
                            className={` ${
                              isDark ? "text-DText" : "text-LText"
                            } list-disc`}
                            key={idx}
                          >
                            {item.fix}
                          </li>
                        </div>
                      );
                    })}
                  </ul>
                </div>
              </article>
            </div>
          </section>
          <aside className="min-w-[60px] z-50 h-full gap-4  fixed  flex flex-col justify-start items-center right-[80px] top-[70px]">
            <button
              onClick={() => setIsModal(!isModal)}
              className="bg-DMainPurple  hover:text-DMainPurple hover:border-DMainPurple cursor-pointer flex justify-center items-center rounded-full w-[40px] h-[40px] text-white tracking-wider shadow-xl hover:border-[1px] hover:scale-105 duration-300 hover:ring-1 font-mono"
            >
              <Image
                src="/Img/close.svg"
                alt="close"
                width={15}
                height={15}
                priority
                style={{ width: 15, height: 15 }}
              />
            </button>

            <GitSvg style={"git"}>Github</GitSvg>
            <GitSvg style={"figma"}>Figma</GitSvg>
            <GitSvg style={"link"}>배포 사이트</GitSvg>
          </aside>
        </>
      )}
    </>
  );
};

export default IsModal;
