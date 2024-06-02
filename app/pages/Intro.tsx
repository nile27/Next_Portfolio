"use client";
import { useRecoilState } from "recoil";
import { isDarkAtom } from "../state/isDarkAtom";
import { sleep } from "@/lib/utill";
import { useEffect } from "react";

function Intro() {
  const [isDark, setIsDark] = useRecoilState<boolean>(isDarkAtom);

  useEffect(() => {
    sleep(2000);
  }, []);

  return (
    <section className="flex justify-center items-center w-full h-full animate-trackingInContract">
      <div className="w-full h-full flex justify-center items-center">
        Front-end
      </div>
    </section>
  );
}

export default Intro;
