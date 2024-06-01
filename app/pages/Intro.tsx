"use client";
import { useRecoilState } from "recoil";
import { isDarkAtom } from "../state/isDarkAtom";

const Intro = () => {
  const [isDark, setIsDark] = useRecoilState<boolean>(isDarkAtom);
  return (
    <section className="flex">
      <aside className="flex min-w-[261px] ">
        <div>{isDark}</div>
      </aside>
    </section>
  );
};

export default Intro;
