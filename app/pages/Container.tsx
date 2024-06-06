"use client";
import React from "react";
import SideBar from "@/components/SideBar";

import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../state/isDarkAtom";
import { isTimeAtom } from "../state/isTimeAtom";
import { isModalAtom } from "../state/isModalAtom";
import DropDownNav from "@/components/DropDownNav";

const Container = ({ children }: any) => {
  const isDark = useRecoilValue(isDarkAtom);
  const isTime = useRecoilValue(isTimeAtom);
  const isModal = useRecoilValue(isModalAtom);

  return (
    <div
      className={`${isTime ? "flex" : "hidden"} ${
        isDark ? "bg-[#16161a]" : "bg-[#e7e7e9]"
      } p-[20px]  flex-row tablet900:flex-col   w-[100vw] h-[auto] min-h-[100vh] relative ${
        isModal && "overflow-y-hidden "
      }`}
    >
      <aside className=" tablet900:sticky tablet900:top-0 tablet900:w-full tablet900:z-50">
        <SideBar isDark={isDark} />
        <DropDownNav />
      </aside>

      <div
        className={`w-full h-full flex flex-col justify-start items-start gap-[3rem] relative `}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
