import React from "react";

const loading = () => {
  return (
    <div
      className={`bg-DBg m-0 p-0 h-[100%] w-[100%] flex justify-center items-center relative`}
    >
      <div
        className={`bg-DBg m-0 p-0 h-[100vh] w-[100vw] flex justify-center items-center relative`}
      >
        <div className="flex gap-3 text-H text-white relative">
          <span className=" animate-[blur_3s_infinite_0ms]">L</span>
          <span className=" animate-[blur_3s_infinite_200ms]">O</span>
          <span className=" animate-[blur_3s_infinite_400ms]">A</span>
          <span className="animate-[blur_3s_infinite_800ms]">D</span>
          <span className=" animate-[blur_3s_infinite_1200ms]">E</span>
          <span className=" animate-[blur_3s_infinite_1400ms]">R</span>
        </div>
      </div>
    </div>
  );
};

export default loading;
