import { atom } from "recoil";

let theme =
  typeof window !== "undefined"
    ? window.matchMedia("(prefers-color-scheme: dark)").matches
    : true;

export const isDarkAtom = atom<boolean>({
  key: "isDark",
  default: true,
});
