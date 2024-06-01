import Intro from "./page/Intro";
import Project from "./page/Project";
import { sleep } from "./lib/utill";
import MainButton from "./components/MainButton";

async function Home() {
  await sleep(3000);
  return (
    <div className="px-10 pb-10">
      <MainButton>dsdsd</MainButton>
      <Intro />
      <Project />
    </div>
  );
}
export default Home;
