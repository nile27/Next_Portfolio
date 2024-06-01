import Project from "./page/Project";
import { sleep } from "./utill";

async function Home() {
  await sleep(3000);
  return (
    <>
      <Project />
    </>
  );
}
export default Home;
