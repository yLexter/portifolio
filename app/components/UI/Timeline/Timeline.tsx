import { TDataTimeline } from "@/app/entities";
import React from "react";
import BoxTimeline from "./BoxTimeline";
import { twMerge } from "tailwind-merge";

type IPropTimeline = {
   data: TDataTimeline[];
   className?: string;
};

export default function Timeline({ data, className }: IPropTimeline) {
   return (
      <div
         className={twMerge(
            "relative h-auto",
            "md:after:content-[''] md:after:absolute md:after:w-1 md:after:h-full md:after:bg-[#24292d] md:after:top-0",
            "md:after:ml-[-3px] md:after:left-1/2",
            "after:hidden",
            className
         )}
      >
         {data.map((dataTimeline, index) => {
            return (
               <BoxTimeline
                  index={index}
                  key={`Timeline-${dataTimeline.text}`}
                  data={dataTimeline}
               />
            );
         })}
      </div>
   );
}
