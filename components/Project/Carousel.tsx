"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import { useState, useEffect } from "react";

import Image from "next/image";
import { projectData } from "@/lib/dummyData";

export function CarouselBox(props: { idx: number }) {
  const { idx } = props;
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }
    console.log(api.scrollSnapList().length);
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      className="relative max-w-[400px] w-[auto] h-[auto] "
    >
      <CarouselContent className="h-full">
        {projectData[idx].imgSrc.map((item, idx) => {
          return (
            <CarouselItem key={idx} className={`w-full h-full relative`}>
              <div className="bg-gradient-to-b from-transparent to-black/60 w-full h-full absolute z-[5]"></div>
              <Image
                src={item}
                alt="img"
                width={300}
                height={0}
                className=" w-full h-[200px] object-fill overflow-hidden"
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <div className=" flex justify-between absolute z-10 w-[100%]  left-0 top-[50%] h-auto">
        <CarouselPrevious />
        <CarouselNext />
      </div>
      <div className="flex justify-center absolute z-10 w-[100%] left-[0%] bottom-[5%] h-auto gap-2">
        {projectData[idx].imgSrc.map((_, idx) => {
          return (
            <div
              key={idx}
              className={`w-[8px] h-[8px] ${
                current !== idx + 1 ? "bg-white" : "bg-purple-500"
              }  rounded-full`}
            ></div>
          );
        })}
      </div>
    </Carousel>
  );
}
