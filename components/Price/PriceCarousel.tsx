import { Pricearr } from "@/lib/dummyData";
import { isDarkAtom } from "@/app/state/isDarkAtom";
import { useRecoilValue } from "recoil";
import Image from "next/image";
export default function PriceCarousel() {
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <div
      className={`h-auto w-full flex flex-row justify-between items-center relative border-[1px] rounded-lg ${
        isDark ? "border-DMainPurple" : "border-LMainPurple"
      } max-w-[72vw] box-border p-[50px]`}
    >
      <div className="w-full h-auto flex justify-center items-start flex-col box-border">
        <div className="w-full h-auto  max-h-[500px] box-border ">
          <ul className="flex px-[20px] py-[20px] max-h-[500px] h-[auto] box-border flex-nowrap min-h-[350px] w-full justify-start items-center overflow-x-auto whitespace-nowrap scroll">
            {Pricearr.map((item, idx) => (
              <li
                key={idx}
                className=" p-[10px] w-auto h-[400px] rounded-lg bg-transparent mr-[15px] mb-[15px] flex  justify-start items-center flex-col hover:shadow-md"
              >
                <Image
                  src={Pricearr[idx].img}
                  alt="img"
                  width={200}
                  height={200}
                  className="bg-cover"
                />
                <span className={`${isDark ? "text-DText" : "text-LText"}`}>
                  {item.date}
                </span>
                <span className={`${isDark ? "text-DText" : "text-LText"}`}>
                  {item.name}
                </span>
                <span className={`${isDark ? "text-DText" : "text-LText"}`}>
                  {item.mainfrom}
                </span>
                <span className={`${isDark ? "text-DText" : "text-LText"}`}>
                  {item.from || null}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
