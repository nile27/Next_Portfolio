import dynamic from "next/dynamic";

import Project from "./pages/Project";

import Loading from "./loading";

import ThemeToggleButton from "../components/ThemeToggleButton";
import Intro from "./pages/Intro";
import Container from "./pages/Container";
import Introduce from "./pages/Introduce";

const DynamicComponent = dynamic(
  () =>
    import("./pages/Intro").then(
      (mod) =>
        new Promise<typeof mod>((resolve) => {
          setTimeout(() => resolve(mod), 3000);
        })
    ),
  {
    loading: () => <Loading />,
    ssr: false,
  }
);

function Home() {
  return (
    <>
      <DynamicComponent />
      <Introduce />
      <ThemeToggleButton />
      <Container>
        <Project />
      </Container>
    </>
  );
}
export default Home;
