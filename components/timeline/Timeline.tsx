"use client";

import React from "react";
import Timeline from "./Timeline";
import { CSectionNames } from "../../entities";
import SectionTitle from "../ui/Section/SectionTitle";
import BaseSection from "../ui/Section/BaseSection";
import { useJsonDataContext } from "@/contexts/JsonProvider";
import { twMerge } from "tailwind-merge";
import BoxTimeline from "./BoxTimeline";

type IPropContainerTimeLine = {};

export default function ContainerTimeLine({}: IPropContainerTimeLine) {
   const {
      currentData: { sectionTitle, timeline },
   } = useJsonDataContext();

   return (
      <BaseSection
         id={CSectionNames.timeline}
         className="px-spacing-page h-auto mb-spacing-section"
      >
         <SectionTitle title={sectionTitle.timeline} />

         <div
            className={twMerge(
               "relative h-auto",
               "after:content-[''] after:absolute after:w-1 ",
               "after:h-full after:bg-card after:top-0 ",
               "after:ml-[-3px] after:left-1/2 max-[768px]:after:hidden"
            )}
         >
            {timeline.map((dataTimeline, index) => {
               return (
                  <BoxTimeline
                     index={index}
                     key={`Timeline-${dataTimeline.text}`}
                     data={dataTimeline}
                  />
               );
            })}
         </div>
      </BaseSection>
   );
}
