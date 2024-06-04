import NavBtn from "./NavBtn";

const SideBar = ({ isDark }: { isDark: boolean }) => {
  const navText = [
    { text: "About Me" },
    { text: "Skill" },
    { text: "Project", length: "3" },
    { text: "Price", length: "3" },
    { text: "Contact" },
  ];
  return (
    <section className=" flex flex-col justify-start items-start min-w-[240px] w-[260px]  h-full relative">
      <div className="pt-[4rem] flex flex-col justify-start items-start gap-3 w-full left-1 min-w-[30vw] sticky top-8 min-h-[100vh] ">
        <div className="flex flex-col justify-start items-start gap-3">
          {navText.map((item, idx) => {
            return item.length ? (
              <NavBtn text={item.text} length={item.length} key={idx} />
            ) : (
              <NavBtn text={item.text} key={idx} />
            );
          })}
        </div>
        <div className="flex flex-col w-full absolute bottom-[100px]">
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
