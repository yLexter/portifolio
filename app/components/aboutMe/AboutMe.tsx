"use client";

import React from "react";
import Timeline from "../UI/Timeline/Timeline";
import { CSectionNames, TDataTimeline } from "@/app/entities";
import SectionTitle from "../UI/Texts/SectionTitle";
import BaseSection from "../UI/Section/BaseSection";
import { useJsonDataContext } from "@/contexts/JsonProvider";

type IPropAboutMe = {};

export default function AboutMe({}: IPropAboutMe) {
   const {
      currentData: { sectionTitle, about },
   } = useJsonDataContext();

   return (
      <BaseSection id={CSectionNames.aboutMe}>
         <SectionTitle title={sectionTitle.aboutMe} />

         <main className="flex gap-x-16">
            <div className="flex-1">
               <p className="text-lg text-color-text-secondary">
                  {about.aboutMe}
               </p>
            </div>

            <div className="flex-0 md:flex-1 md:hidden"></div>
         </main>
      </BaseSection>
   );
}
