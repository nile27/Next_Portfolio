import { useRecoilValue } from "recoil";
import { isDarkAtom } from "@/app/state/isDarkAtom";
import Image from "next/image";

type TSkillTag = {
  text: string;
  posi: string;
};

const SkillTag = (props: TSkillTag) => {
  const { text, posi } = props;
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <div
      className={` ${
        isDark ? "bg-DBg" : "bg-LBg"
      } gap-2 flex flex-col justify-center items-center w-auto h-full p-[10px] rounded-lg hover:border-[1px] hover:scale-105 duration-150 hover:ring-1 `}
    >
      <Image
        src={`/Img/Skill_${posi}/${text}.svg`}
        alt="typescript"
        width={25}
        height={25}
        priority
      />
      <span
        className={` w-full ${
          isDark ? "text-DText" : "text-LText"
        } text-center whitespace-break-space `}
      >
        {text !== "Styled" ? text : `${text} Components`}
      </span>
    </div>
  );
};

export default SkillTag;
