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
            "w-full md:w-[45%]",
            "max-[768px]:after:hidden",
            "p-4 rounded bg-[#24292d] w-full relative",
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
         <div className="flex flex-col gap-y-1">
            <h2 className="font-semibold text-color-text-main title-responsive ">
               {title}
            </h2>
            <span className="italic text-xs text-color-text-secondary font-400 paragraph-responsive">
               {date}
            </span>
            <p className="text-color-text-secondary text-justify paragraph-responsive">
               {text}
            </p>
         </div>
      </div>
   );
}
