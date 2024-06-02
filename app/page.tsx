import dynamic from "next/dynamic";

import Project from "./pages/Project";

import Loading from "./loading";

import ThemeToggleButton from "../components/ThemeToggleButton";
import Intro from "./pages/Intro";

const DynamicComponent = dynamic(
  () =>
    import("./pages/Container").then(
      (mod) =>
        new Promise<typeof mod>((resolve) => {
          setTimeout(() => resolve(mod), 2000);
        })
    ),
  {
    loading: () => <Loading />,
    ssr: false,
  }
);

function Home() {
  return (
    <DynamicComponent>
      <ThemeToggleButton />

      <Intro />
      <Project />
    </DynamicComponent>
  );
}
export default Home;
