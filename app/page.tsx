import dynamic from "next/dynamic";
import ThemeToggleButton from "../components/ThemeToggleButton";

import Container from "./pages/Container";
import Introduce from "./pages/Introduce";
import Project from "./pages/Project";
import Loading from "./loading";
import Skill from "./pages/Skill";
import IsModal from "./pages/IsModal";

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
      <IsModal />
      <Container>
        <Skill />
        <Project />
      </Container>
    </>
  );
}
export default Home;
