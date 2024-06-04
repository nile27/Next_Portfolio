import NavBtn from "./NavBtn";
import { projectData } from "@/lib/dummyData";

const SideBar = ({ isDark }: { isDark: boolean }) => {
  const navText = [
    { text: "Skill" },
    { text: "Project", length: `${projectData.length}` },
    { text: "Price", length: "3" },
    { text: "Contact" },
  ];
  return (
    <section className=" tablet900:flex-row tablet900:h-[80px] tablet900:w-full flex flex-col justify-start items-start min-w-[240px] w-[260px]  h-full tablet900:top-0 relative  tablet900:bg-DBg">
      <div className="pt-[4rem] tablet900:pt-0  flex flex-col  tablet900:w-full tablet900:min-w-[0px] tablet900:min-h-[auto] justify-start items-start  gap-3 w-full left-1 min-w-[30vw] sticky top-8 min-h-[100vh] tablet900:relative ">
        <div className="flex flex-col justify-start items-start gap-3 tablet900:gap-1 tablet900:flex-row tablet900:pt-0">
          {navText.map((item, idx) => {
            return item.length ? (
              <NavBtn text={item.text} length={item.length} key={idx} />
            ) : (
              <NavBtn text={item.text} key={idx} />
            );
          })}
        </div>
        <div className="flex flex-col w-full absolute bottom-[100px] tablet900:hidden">
          <h2
            className={`${
              isDark ? "text-DText" : "text-LText"
            } text-H font-bold`}
          >
            Contact
          </h2>
          <h2 className={`${isDark ? "text-DText" : "text-LText"} font-bold `}>
            ddj03104@gmail.com
          </h2>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
