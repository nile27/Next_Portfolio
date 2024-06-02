"use client";
import React, { useEffect } from "react";

import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../state/isDarkAtom";

const Container = ({ children }: any) => {
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <div
      className={`px-10 pb-10 w-[100%] h-[100%] ${
        isDark ? "bg-[#16161a]" : "bg-[#e7e7e9]"
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
