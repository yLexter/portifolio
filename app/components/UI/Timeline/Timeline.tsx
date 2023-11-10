import { TDataTimeline } from "@/app/entities";
import React from "react";
import BoxTimeline from "./BoxTimeline";
import { twJoin } from "tailwind-merge";

type IPropTimeline = {
   data: TDataTimeline[];
};

export default function Timeline({ data }: IPropTimeline) {
   return (
      <div
         className={twJoin(
            "relative",
            "after:content-[''] after:absolute after:w-1 after:h-full after:bg-[#24292d] after:top-0",
            "after:ml-[-3px] after:left-1/2"
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
