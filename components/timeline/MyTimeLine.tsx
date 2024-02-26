"use client";

import React from "react";
import Timeline from "../ui/Timeline/Timeline";
import { CSectionNames, TDataTimeline } from "../../entities";
import SectionTitle from "../ui/Texts/SectionTitle";
import BaseSection from "../ui/Section/BaseSection";
import { useJsonDataContext } from "@/contexts/JsonProvider";

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
         <Timeline data={timeline} />
      </BaseSection>
   );
}
