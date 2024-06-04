"use client";
import React from "react";
import SideBar from "@/components/SideBar";

import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../state/isDarkAtom";
import { isTimeAtom } from "../state/isTimeAtom";

const Container = ({ children }: any) => {
  const isDark = useRecoilValue(isDarkAtom);
  const isTime = useRecoilValue(isTimeAtom);

  return (
    <div
      className={`${isTime ? "flex" : "hidden"} ${
        isDark ? "bg-[#16161a]" : "bg-[#e7e7e9]"
      } p-[20px] flex-row  w-[100vw] h-[auto] min-h-[100vh] relative`}
    >
      <aside>
        <SideBar />
      </aside>
      <div className="w-full h-full">{children}</div>
    </div>
  );
};

export default Container;
