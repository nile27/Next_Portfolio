import { atom } from "recoil";

let theme =
  typeof window !== "undefined"
    ? window.matchMedia("(prefers-color-scheme: dark)").matches
    : true;

export const isDarkAtom = atom<string>({
  key: "isDark",
  default: theme ? "dark" : "light",
});
