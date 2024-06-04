"use client";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../state/isDarkAtom";

const Project = () => {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <section className="w-full h-auto bg-transparent flex justify-start items-start flex-col gap-[1rem] p-[20px]">
      <h1
        className={`text-H ${
          isDark ? "text-DMainPurple" : "text-LMainPurple"
        }  font-bold`}
      >
        Project
      </h1>
      <article
        className={`flex justify-start items-start p-[20px] bg-DSecondBg w-full h-auto rounded-lg gap-[20px] ${
          isDark ? "bg-DSecondBg" : "bg-LSecondBg"
        }`}
      ></article>
    </section>
  );
};

export default Project;
