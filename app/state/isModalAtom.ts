import { atom } from "recoil";

export const isModalAtom = atom<boolean>({
  key: "isModalAtom",
  default: false,
});
