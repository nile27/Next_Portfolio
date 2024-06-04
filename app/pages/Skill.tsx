"use client";

import SkillBox from "@/components/Skill/SkillBox";
import { frontTagArr, BackTagArr, EtcTagArr } from "@/lib/dummyData";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../state/isDarkAtom";

const Skill = () => {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <section className="w-full h-auto bg-transparent flex justify-start items-start flex-col gap-[1rem] p-[20px]">
      <h1
        className={`text-H ${
          isDark ? "text-DMainPurple" : "text-LMainPurple"
        }  font-bold`}
      >
        Skill
      </h1>
      <SkillBox dataArr={frontTagArr} posi={"front"} h2={"Front-End"} />
      <SkillBox dataArr={BackTagArr} posi={"Back"} h2={"Back-End"} />
      <SkillBox dataArr={EtcTagArr} posi={"Etc"} h2={"ETC"} />
    </section>
  );
};

export default Skill;
