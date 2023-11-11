"use client";

import React from "react";
import SectionTitle from "../UI/Texts/SectionTitle";
import Skill from "./Skill";
import BaseSection from "../UI/Section/BaseSection";
import { useJsonDataContext } from "@/contexts/JsonProvider";

type IPropSkill = {};

export default function Skills({}: IPropSkill) {
   const {
      currentData: { sectionTitle, skills },
   } = useJsonDataContext();

   return (
      <BaseSection>
         <SectionTitle title={sectionTitle.skills} />

         <div className="grid grid-cols-3 gap-4">
            {skills.map((skill) => (
               <Skill key={`Skills-${skill}`} skill={skill} />
            ))}
         </div>
      </BaseSection>
   );
}
