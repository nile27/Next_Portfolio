"use client";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../state/isDarkAtom";

import { CarouselBox } from "@/components/Project/CarouselBox";
import TextBox from "@/components/Project/TextBox";
import { projectData } from "@/lib/dummyData";

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

      {projectData.map((item, idx) => {
        return (
          <article
            className={`flex justify-start items-center p-[30px] bg-DSecondBg w-full h-auto rounded-lg gap-[20px] textBoxHalf:flex-col ${
              isDark ? "bg-DSecondBg" : "bg-LSecondBg"
            }`}
            key={item.header}
          >
            <CarouselBox idx={idx} />
            <TextBox idx={idx} />
          </article>
        );
      })}
    </section>
  );
};

export default Project;
