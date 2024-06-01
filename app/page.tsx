"use client";
import Intro from "./pages/Intro";
import Project from "./pages/Project";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./state/isDarkAtom";
import { sleep } from "../lib/utill";
import MainButton from "../components/MainButton";
import ThemeToggleButton from "../components/ThemeToggleButton";

function Home() {
  const isDark = useRecoilValue(isDarkAtom);
  // await sleep(3000);

  return (
    <div
      className={`px-10 pb-10 w-[100%] h-[100%] ${
        isDark ? "bg-[#16161a]" : "bg-[#e7e7e9]"
      }`}
    >
      <ThemeToggleButton />
      <Intro />
      <Project />
    </div>
  );
}
export default Home;
