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
            isEven ? "md:ml-auto" : "md:mr-auto",
            "md:w-[45%] md:after:hidden",
            "p-4 rounded bg-[#24292d] w-full relative",
            "md:after:content-[''] md:after:w-4 md:after:h-4 md:after:rounded-full",
            "md:after:bg-[#24292d] md:after:absolute md:after:top-[-5px]  md:after:z-10 hover:md:after:bg-[#eaa023]",
            `${
               isEven
                  ? "md:after:left-timeline-circle-left"
                  : "md:after:right-timeline-circle-right"
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
