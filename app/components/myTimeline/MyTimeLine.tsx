"use client";

import React from "react";
import Timeline from "../UI/Timeline/Timeline";
import { CSectionNames, TDataTimeline } from "../../entities";
import SectionTitle from "../UI/Texts/SectionTitle";
import BaseSection from "../UI/Section/BaseSection";
import { useJsonDataContext } from "@/contexts/JsonProvider";

type IProp = {};

export default function ({}: IProp) {
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
