import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const Window: (Window & typeof globalThis) | undefined =
  typeof window !== "undefined" ? window : undefined;
let theme = Window && Window.matchMedia("(prefers-color-scheme: dark)").matches;

const sessionStorage = Window && Window.sessionStorage;
//   typeof window !== "undefined" ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
  key: "isDark",
  storage: Window?.sessionStorage,
});
export const isDarkAtom = atom<boolean>({
  key: "isDarkKey",
  default: theme,
  effects_UNSTABLE: [persistAtom],
});
