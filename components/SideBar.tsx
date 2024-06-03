import NavBtn from "./NavBtn";

const SideBar = () => {
  const navText = [
    { text: "About Me" },
    { text: "Skill" },
    { text: "Project", length: "3" },
    { text: "Price", length: "3" },
    { text: "Contact" },
  ];
  return (
    <aside className=" flex flex-col justify-start items-start min-w-[30vw] sticky top-10  h-[6000px]">
      <div className="pt-[4rem] flex flex-col justify-start items-start gap-3 w-full left-1 min-w-[30vw] sticky top-10  ">
        {navText.map((item, idx) => {
          return item.length ? (
            <NavBtn text={item.text} length={item.length} key={idx} />
          ) : (
            <NavBtn text={item.text} key={idx} />
          );
        })}
      </div>
    </aside>
  );
};

export default SideBar;
