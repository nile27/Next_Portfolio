"use client";
import { useRecoilState } from "recoil";
import { isDarkAtom } from "../state/isDarkAtom";
import MainButton from "../components/MainButton";

const Intro = () => {
  const [isDark, setIsDark] = useRecoilState<string>(isDarkAtom);
  return (
    <section className="flex">
      <aside className="flex min-w-[261px] ">
        <div>{isDark}</div>
      </aside>
    </section>
  );
};

export default Intro;
