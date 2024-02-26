import { TDataTimeline } from "@/entities";
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
            "w-full md:w-[45%] shadow-lg",
            "max-[768px]:after:hidden",
            "p-4 rounded bg-card w-full relative",
            "after:content-[''] after:w-4 after:h-4 after:rounded-full",
            "after:bg-card after:absolute after:top-[-5px]",
            "after:z-10 hover:after:bg-primary",
            `${
               isEven
                  ? "after:left-timeline-circle-left"
                  : "after:right-timeline-circle-right"
            }`,
            `${index > 0 ? "mt-4" : ""}`
         )}
      >
         <div className="flex flex-col gap-y-1">
            <h2 className="font-semibold text-lg title-responsive">{title}</h2>
            <span className="italic text-xs text-muted-foreground font-400 paragraph-responsive">
               {date}
            </span>
            <p className="text-card-foreground text-justify paragraph-responsive">
               {text}
            </p>
         </div>
      </div>
   );
}
