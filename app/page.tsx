import Intro from "./pages/Intro";
import Project from "./pages/Project";
import { sleep } from "../lib/utill";
import MainButton from "../components/MainButton";
import ThemeToggleButton from "../components/ThemeToggleButton";

function Home() {
  // await sleep(3000);

  return (
    <div className="px-10 pb-10">
      <MainButton>dsdsd</MainButton>
      <ThemeToggleButton />
      <Intro />
      <Project />
    </div>
  );
}
export default Home;
