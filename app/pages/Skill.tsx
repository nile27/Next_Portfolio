"use client";
import React from "react";
import Image from "next/image";

const Skill = () => {
  return (
    <section className="w-full h-full bg-white flex justify-start items-start flex-col gap-[4rem] p-[20px]">
      <h1 className=" text-H text-DMainPurple font-bold">Skill</h1>
      <article className="flex flex-col justify-start items-start p-[20px] bg-DSecondBg w-full h-auto rounded-lg">
        <h2 className=" text-SH text-DText font-bold">Skill</h2>
        <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(50px,1fr))] gap-2">
          <Image
            src="/Img/Skill_front/typescript.svg"
            alt="typescript"
            width={40}
            height={40}
            priority
          />
        </div>
      </article>
    </section>
  );
};

export default Skill;
