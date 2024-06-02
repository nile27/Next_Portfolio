"use client";
import dynamic from "next/dynamic";

import Project from "./pages/Project";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./state/isDarkAtom";
import Loading from "./loading";

import ThemeToggleButton from "../components/ThemeToggleButton";
import Intro from "./pages/Intro";

const DynamicComponent = dynamic(
  () =>
    import("./pages/Container").then(
      (mod) =>
        new Promise<typeof mod>((resolve) => {
          setTimeout(() => resolve(mod), 2000); // 2초 지연
        })
    ),
  {
    loading: () => <Loading />, // 로딩 중에 표시할 컴포넌트
    ssr: false, // 서버 사이드 렌더링 비활성화 (클라이언트 사이드에서만 로드)
  }
);

function Home() {
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <DynamicComponent>
      <ThemeToggleButton />
      <Intro />
      <Project />
    </DynamicComponent>
  );
}
export default Home;
