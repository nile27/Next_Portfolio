"use client";
import { useRecoilState } from "recoil";
import { isDarkAtom } from "../state/isDarkAtom";
import MainButton from "../components/MainButton";

const Intro = () => {
  const [isDark, setIsDark] = useRecoilState<boolean>(isDarkAtom);
  return <div>Intro</div>;
};

export default Intro;
