"use client";

import React from "react";
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

         <div className="flex gap-x-16">
            <div className="w-full md:w-1/2">
               <p className=" text-color-text-secondary paragraph-responsive">
                  {about.aboutMe}
               </p>
            </div>

            <div className="hidden md:w-1/2 md:block">
               <img
                  className="w-11/12 h-11/12"
                  alt="About me"
                  src="./images/about-me.png"
               />
            </div>
         </div>
      </BaseSection>
   );
}
