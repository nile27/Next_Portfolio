import { useRef, useEffect, useState } from "react";
import NavBtn from "./NavBtn";
import { projectData, Pricearr } from "@/lib/dummyData";
import { useRecoilValue } from "recoil";
import { contentRefsState } from "@/app/state/ContentRefs";

const SideBar: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const contentRefs = useRecoilValue<(HTMLElement | null)[]>(contentRefsState);
  const navText = [
    { text: "Skill" },
    { text: "Project", length: `${projectData.length}` },
    { text: "Experience" },
    { text: "Price", length: `${Pricearr.length}` },
  ];
  const [activeSection, setActiveSection] = useState<number | null>(null);

  function scrollFunc(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    text: string
  ): void {
    const event: HTMLElement = e.target as HTMLButtonElement;
    const name: string = text;
    const menu: { [key: string]: number } = {
      Skill: 0,
      Project: 1,
      Experience: 2,
      Price: 3,
    };

    const targetIndex = menu[name];
    if (typeof targetIndex === "number" && contentRefs[targetIndex]) {
      const targetElement = contentRefs[targetIndex];
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }

  return (
    <section
      className={` tablet:hidden tablet900:flex-row  tablet900:h-[80px] tablet900:w-[100vw] flex flex-col justify-start items-start min-w-[240px] w-[200px] h-full tablet900:top-0 relative ${
        isDark ? "tablet900:bg-DBg" : "tablet900:bg-LBg"
      }`}
    >
      <div
        className={`pt-[4rem] tablet900:gap-[0] tablet900:justify-start tablet900:pt-0 flex flex-col tablet900:w-[100vw] tablet900:min-w-[0px] tablet900:min-h-[auto] justify-start items-start gap-3 w-full left-1  sticky top-8 min-h-[100vh] tablet900:relative ${
          isDark ? "bg-DBg" : "bg-LBg"
        }`}
      >
        <div className="flex w-full flex-col justify-start items-start gap-3 tablet900:justify-between tablet900:pr-[40px] tablet900:flex-row tablet900:pt-0 tablet900:gap-[20px]">
          {navText.map((item, idx) => (
            <NavBtn
              text={item.text}
              key={idx}
              length={item.length}
              onClick={(e) => scrollFunc(e, item.text)}
            />
          ))}
        </div>
        <div className="flex flex-col w-full absolute bottom-[100px] tablet900:hidden">
          <h2
            className={`${
              isDark ? "text-DText" : "text-LText"
            } text-H font-bold`}
          >
            Contact
          </h2>
          <h2 className={`${isDark ? "text-DText" : "text-LText"} font-bold`}>
            ddj03104@gmail.com
          </h2>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
