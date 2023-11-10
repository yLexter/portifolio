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
            "after:bg-[#24292d] after:absolute after:top-[-5px]  after:z-10 hover:after:bg-[#eaa023]",
            `${
               isEven
                  ? "after:left-timeline-circle-left"
                  : "after:right-timeline-circle-right"
            }`,
            `${index > 0 ? "mt-4" : ""}`
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
