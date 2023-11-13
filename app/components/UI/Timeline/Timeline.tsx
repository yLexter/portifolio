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
            "after:content-[''] after:absolute after:w-1 after:h-full after:bg-[#24292d] after:top-0",
            "after:ml-[-3px] after:left-1/2",
            "max-[768px]:after:hidden",
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
