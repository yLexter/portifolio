import { TDataTimeline } from "@/app/entities";
import React from "react";
import { twJoin } from "tailwind-merge";

type IPropBoxTimeline = {
   data: TDataTimeline;
   index: number;
};

export default function BoxTimeline({
   data: { text, title, date },
   index,
}: IPropBoxTimeline) {
   const isEven = index % 2 != 0;

   return (
      <div
         className={twJoin(
            isEven ? "ml-auto" : "mr-auto",
            "p-4 rounded bg-[#24292d] w-[45%] relative",
            "after:content-[''] after:w-4 after:h-4 after:rounded-full",
            "after:bg-[#eaa023] after:absolute after:top-[-5px]  after:z-10",
            `${isEven ? "after:left-[-28px]" : "after:right-[-28px]"}`
         )}
      >
         <div className="">
            <h2 className="font-semibold text-xl text-color-text-main">
               {title}
            </h2>
            <span className="text-xs text-color-text-secondary font-semibold mb-4">
               {date}
            </span>
            <p className="text-color-text-secondary text-sm text-justify">
               {text}
            </p>
         </div>
      </div>
   );
}
