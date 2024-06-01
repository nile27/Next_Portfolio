"use client";
import { atom } from "recoil";
let theme = window.matchMedia("(prefers-color-scheme: dark)").matches;

export const isDarkAtom = atom({
  key: "isDark",
  default: theme,
});
